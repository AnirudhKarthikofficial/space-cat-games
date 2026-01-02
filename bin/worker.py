#  Copyright (c) Starry Systems and Nijika Softworks.

import os
import re
import git
import time
import datetime
from google import genai
from groq import Groq
from dotenv import load_dotenv

# --- BOOTSTRAP ---
script_dir = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(script_dir, '.env'))

# --- CONFIG ---
LOG_FILE = "maintainer.log"
INTERVAL = 3600

MODEL_POOL = [
    {"name": "Gemini 2.0 Flash Lite", "provider": "google", "id": "gemini-2.0-flash-lite"},
    {"name": "GPT-OSS 120B", "provider": "groq", "id": "openai/gpt-oss-120b"},
    {"name": "Llama 3.3 70B", "provider": "groq", "id": "llama-3.3-70b-versatile"}
]

gemini_client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"), http_options={'api_version': 'v1beta'})
groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def log_action(message):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    msg = f"[{timestamp}] {message}"
    print(msg)
    with open(LOG_FILE, "a") as f: f.write(msg + "\n")

def find_file_path(target_name):
    """Searches subfolders to find the actual path of a filename."""
    for root, dirs, files in os.walk("."):
        if ".git" in root: continue
        if target_name in files:
            return os.path.join(root, target_name).replace("./", "")
    return None

def ask_ai_with_fallback(prompt, reasoning="medium"):
    for model in MODEL_POOL:
        try:
            if model["provider"] == "google":
                res = gemini_client.models.generate_content(model=model["id"], contents=prompt)
                return res.text, model["name"]
            elif model["provider"] == "groq":
                extra = {"reasoning_effort": reasoning} if "gpt-oss" in model["id"] else {}
                res = groq_client.chat.completions.create(
                    model=model["id"], messages=[{"role": "user", "content": prompt}], **extra
                )
                return res.choices[0].message.content, model["name"]
        except Exception as e:
            log_action(f"⏭️ {model['name']} failed. Trying next...")
    return None, None

def brainstorm_and_execute():
    # Sync Repo
    try:
        repo = git.Repo(".")
        repo.git.reset('--hard')
        repo.remotes.origin.pull()
    except Exception as e: log_action(f"Git Error: {e}")

    # 1. Brainstorm
    task, provider = ask_ai_with_fallback("Suggest ONE tiny UI improvement. Be brief.")
    if not task: return False
    log_action(f"💡 TASK ({provider}): {task[:60]}...")

    # 2. Execute with path & creation logic
    exec_prompt = (
        f"ACT AS A SEARCH/REPLACE ENGINE. NO PROSE.\n"
        f"Task: {task}\n"
        f"RULE: To create a NEW file, leave SEARCH empty and put content in REPLACE.\n"
        f"Format:\nFILE: [path/to/file]\nSEARCH:\n[code]\nREPLACE:\n[code]\nEND"
    )
    response, provider = ask_ai_with_fallback(exec_prompt, reasoning="high")

    if response:
        try:
            f_match = re.search(r"FILE:\s*(.*)", response)
            s_match = re.search(r"SEARCH:\n([\s\S]*?)\nREPLACE:", response)
            r_match = re.search(r"REPLACE:\n([\s\S]*?)\nEND", response)

            if all([f_match, s_match, r_match]):
                suggested_path = f_match.group(1).strip()
                s_block = s_match.group(1).strip()
                r_block = r_match.group(1).strip()

                # Logic A: Create New File
                if not s_block:
                    log_action(f"📂 Creating: {suggested_path}")
                    os.makedirs(os.path.dirname(suggested_path) or ".", exist_ok=True)
                    with open(suggested_path, "w") as f: f.write(r_block)
                    actual_path = suggested_path

                # Logic B: Update Existing File
                else:
                    actual_path = find_file_path(suggested_path) or suggested_path
                    if os.path.exists(actual_path):
                        with open(actual_path, "r") as f: content = f.read()
                        if s_block in content:
                            with open(actual_path, "w") as f: f.write(content.replace(s_block, r_block))
                        else:
                            log_action(f"🛡️ Search block not found in {actual_path}")
                            return False
                    else:
                        log_action(f"🛡️ File {suggested_path} not found.")
                        return False

                # Commit & Push
                repo.git.add(A=True)
                repo.index.commit(f"auto({provider}): {task[:50]}")
                repo.remote().push()
                log_action(f"✅ Success: {actual_path} modified.")
                return True
        except Exception as e: log_action(f"🔥 Error: {e}")
    return False

if __name__ == "__main__":
    log_action("🦾 Multi-Model Creator Mode Online.")
    while True:
        try:
            brainstorm_and_execute()
        except KeyboardInterrupt: break
        except Exception as e: log_action(f"CRASH: {e}")
        time.sleep(INTERVAL)
