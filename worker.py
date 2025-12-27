import os
import re
import git
import time
import datetime
import random
from google import genai
from groq import Groq
from dotenv import load_dotenv

# --- BOOTSTRAP ---
script_dir = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(script_dir, '.env'))

# --- CONFIG ---
FILES_TO_WATCH = ["index.html", "games.html", "style.css"]
LOG_FILE = "maintainer.log"
INTERVAL = 3600

# THE MODEL LIST: Priorities based on your confirmed access
MODEL_POOL = [
    {"name": "GPT-OSS 120B", "provider": "groq", "id": "openai/gpt-oss-120b"},
    {"name": "Llama 3.3 70B", "provider": "groq", "id": "llama-3.3-70b-versatile"},
    {"name": "Whisper", "provider": "groq", "id": "whisper-large-v3"},
]

gemini_client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"), http_options={'api_version': 'v1beta'})
groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def log_action(message):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    msg = f"[{timestamp}] {message}"
    print(msg)
    with open(LOG_FILE, "a") as f: f.write(msg + "\n")

def ask_ai_with_fallback(prompt, reasoning="medium"):
    """Cycles through the entire list of models if one fails."""
    # We copy the pool so we can shuffle it or modify it locally
    current_pool = MODEL_POOL.copy()

    for model in current_pool:
        try:
            if model["provider"] == "google":
                res = gemini_client.models.generate_content(model=model["id"], contents=prompt)
                return res.text, model["name"]

            elif model["provider"] == "groq":
                # Only gpt-oss uses the reasoning_effort parameter
                extra = {"reasoning_effort": reasoning} if "gpt-oss" in model["id"] else {}
                res = groq_client.chat.completions.create(
                    model=model["id"],
                    messages=[{"role": "user", "content": prompt}],
                    **extra
                )
                return res.choices[0].message.content, model["name"]

        except Exception as e:
            err_msg = str(e).splitlines()[0] # Get just the first line of the error
            log_action(f"⏭️ Skipping {model['name']} -> {err_msg[:60]}...")
            continue

    return None, None

def brainstorm_and_execute():
    try:
        repo = git.Repo(".")
        repo.git.reset('--hard')
        repo.remotes.origin.pull()
    except Exception as e: log_action(f"⚠️ Git Error: {e}")

    # 1. Idea Stage
    task_prompt = "Suggest ONE tiny UI improvement for a gaming site. Be brief. Always generate a HTML, JS or CSS file based on your edits, and never TSX, JSX, etc."
    task, provider = ask_ai_with_fallback(task_prompt)

    if not task:
        log_action("❌ CRITICAL: All models in the list failed (Quotas hit).")
        return False

    log_action(f"💡 TASK ({provider}): {task[:60]}...")

    # 2. Execution Stage
    exec_prompt = f"ACT ONLY AS A SEARCH/REPLACE GENERATOR.\nTask: {task}\nFormat:\nFILE: [filename]\nSEARCH:\n[exact code]\nREPLACE:\n[new code]\nEND"
    response, provider = ask_ai_with_fallback(exec_prompt, reasoning="high")

    if response:
        try:
            f_match = re.search(r"FILE:\s*(.*)", response)
            s_match = re.search(r"SEARCH:\n([\s\S]*?)\nREPLACE:", response)
            r_match = re.search(r"REPLACE:\n([\s\S]*?)\nEND", response)

            if all([f_match, s_match, r_match]):
                fname = f_match.group(1).strip()
                s_block = s_match.group(1).strip()
                r_block = r_match.group(1).strip()

                with open(fname, "r") as f: content = f.read()
                if s_block in content:
                    with open(fname, "w") as f: f.write(content.replace(s_block, r_block))
                    log_action(f"✅ Applied change via {provider}.")
                    repo = git.Repo(".")
                    repo.git.add(A=True)
                    repo.index.commit(f"auto({provider}): {task[:50]}")
                    repo.remote().push()
                    return True
        except Exception as e:
            log_action(f"🛡️ Apply failed: {e}")

    return False

if __name__ == "__main__":
    log_action("🦾 Ultra-Resilient AI Maintainer Active.")
    while True:
        try:
            success = brainstorm_and_execute()
        except Exception as e:
            log_action(f"🔥 Script Crash Prevented: {e}")

        log_action(f"💤 Sleeping for {INTERVAL/60}m...")
        time.sleep(INTERVAL)
