#!/usr/bin/env python3
"""
Insert AdSense script tag into the <head> of every .html file in the repo.
Backs up modified files under backups/ads_insertion_<timestamp>/...

This script avoids duplicate insertions by checking for the client id presence only.
"""
#  Copyright (c) Starry Systems and Nijika Softworks.

import os
import re
import shutil
import sys
from datetime import datetime

ROOT = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))  # repo root
ADS_SNIPPET = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2104022260564752" crossorigin="anonymous"></script>'
CLIENT_MARKER = 'ca-pub-2104022260564752'

backup_root = os.path.join(ROOT, 'backups', 'ads_insertion_' + datetime.now().strftime('%Y%m%d_%H%M%S'))
modified = []
skipped = []
errors = []

html_file_paths = []
for dirpath, dirnames, filenames in os.walk(ROOT):
    # skip the backups folder we're about to write and dist maybe
    if '/backups/' in dirpath.replace('\\', '/'):
        continue
    for f in filenames:
        if f.lower().endswith('.html'):
            html_file_paths.append(os.path.join(dirpath, f))

if not html_file_paths:
    print('No .html files found.')
    sys.exit(0)

os.makedirs(backup_root, exist_ok=True)

head_open_re = re.compile(r'<head\b[^>]*>', flags=re.IGNORECASE)
head_close_re = re.compile(r'</head>', flags=re.IGNORECASE)
meta_charset_re = re.compile(r'<meta\b[^>]*charset[^>]*>', flags=re.IGNORECASE)
# Only check for the exact client marker to avoid skipping files that have other ads
ads_check_re = re.compile(re.escape(CLIENT_MARKER), flags=re.IGNORECASE)

for path in html_file_paths:
    try:
        with open(path, 'r', encoding='utf-8', errors='replace') as fh:
            txt = fh.read()

        if ads_check_re.search(txt):
            skipped.append(path)
            continue

        m_head = head_open_re.search(txt)
        if m_head:
            # find head close to limit search area
            m_close = head_close_re.search(txt, m_head.end())
            head_close_pos = m_close.start() if m_close else None
            search_end = head_close_pos if head_close_pos is not None else m_head.end() + 2000
            meta_m = meta_charset_re.search(txt, m_head.end(), search_end)
            if meta_m:
                insert_pos = meta_m.end()
            else:
                insert_pos = m_head.end()
            new_txt = txt[:insert_pos] + '\n' + ADS_SNIPPET + '\n' + txt[insert_pos:]
        else:
            # No <head> tag - attempt to inject after <html> or before <body>, or prepend
            m_html = re.search(r'<html\b[^>]*>', txt, flags=re.IGNORECASE)
            if m_html:
                insert_pos = m_html.end()
                new_txt = txt[:insert_pos] + '\n<head>\n' + ADS_SNIPPET + '\n</head>\n' + txt[insert_pos:]
            else:
                m_body = re.search(r'<body\b[^>]*>', txt, flags=re.IGNORECASE)
                if m_body:
                    insert_pos = m_body.start()
                    new_txt = txt[:insert_pos] + '<head>\n' + ADS_SNIPPET + '\n</head>\n' + txt[insert_pos:]
                else:
                    # give up: prepend
                    new_txt = '<head>\n' + ADS_SNIPPET + '\n</head>\n' + txt

        # backup
        rel = os.path.relpath(path, ROOT)
        backup_path = os.path.join(backup_root, rel)
        os.makedirs(os.path.dirname(backup_path), exist_ok=True)
        shutil.copy2(path, backup_path)

        with open(path, 'w', encoding='utf-8') as fh:
            fh.write(new_txt)

        modified.append(path)
    except Exception as e:
        errors.append((path, str(e)))

print('Summary:')
print('  Total HTML files scanned: %d' % len(html_file_paths))
print('  Modified: %d' % len(modified))
print('  Skipped (already had script): %d' % len(skipped))
print('  Errors: %d' % len(errors))
if modified:
    print('\nModified files (backups stored in %s):' % backup_root)
    for p in modified[:200]:
        print('  ' + p)
if skipped:
    print('\nSkipped files:')
    for p in skipped[:50]:
        print('  ' + p)
if errors:
    print('\nErrors:')
    for p, err in errors:
        print('  %s: %s' % (p, err))

# Exit with non-zero if errors
if errors:
    sys.exit(2)
else:
    sys.exit(0)

