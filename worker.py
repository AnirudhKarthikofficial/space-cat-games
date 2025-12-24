import subprocess
import json
import os
import time
from pathlib import Path

MODEL = "tinyllama"
SLEEP_SECONDS = 1
MAX_LINES = 100
EXTS = {".js", ".ts", ".jsx", ".tsx", ".html", ".css", ".json"}

def run(cmd):
    return subprocess.check_output(cmd, shell=True, text=True)

def clean_repo():
    return run("git status --porcelain").strip() == ""

def get_files():
    files = run("git ls-files").splitlines()
    return [f for f in files if Path(f).suffix in EXTS]

def ask_ollama(prompt):
    p = subprocess.Popen(
        ["ollama", "run", MODEL],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
        text=True,
    )
    out, _ = p.communicate(prompt, timeout=90)
    return out

def apply_patch(patch):
    p = subprocess.Popen(
        ["git", "apply"],
        stdin=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
        text=True,
    )
    p.communicate(patch)

print("AI maintainer (Python, memory-safe) running")

while True:
    print("\n=== Cycle start ===")

    if not clean_repo():
        print("Repo dirty, skipping.")
        time.sleep(SLEEP_SECONDS)
        continue

    run("git fetch origin")
    run("git checkout -B main origin/main")

    for file in get_files():
        try:
            text = "\n".join(Path(file).read_text().splitlines()[:MAX_LINES])
        except Exception:
            continue

        prompt = f"""
You are a senior developer.

Fix bugs and improve code quality.
Do NOT add features.
Do NOT change APIs.
Do NOT reformat unrelated code.
Output ONLY a unified git diff.

File: {file}

{text}
"""

        print(f"Processing {file}")
        try:
            patch = ask_ollama(prompt)
        except Exception:
            print("Ollama timeout, skipping file.")
            continue

        if "diff --git" not in patch:
            continue

        try:
            apply_patch(patch)
        except Exception:
            continue

    if run("git diff --stat").strip():
        run('git commit -am "chore: automated code improvements"')
        run("git push -u origin ai-maintenance")
        print("Changes committed and pushed.")
    else:
        print("No changes.")

    time.sleep(SLEEP_SECONDS)
