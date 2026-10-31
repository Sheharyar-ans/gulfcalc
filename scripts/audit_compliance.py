# -*- coding: utf-8 -*-
"""
GulfCalc Official Automated Compliance & Quality Assurance Linter
Validates all HTML files in repository against AGENTS.md requirements.
"""

import os, re, json, sys
from bs4 import BeautifulSoup, Comment

BANNED_WORDS = [
    'delve', 'delving',
    'tapestry',
    "in today's fast-paced world", "in today's digital landscape",
    'furthermore',
    'testament to', 'a beacon of',
    'pivotal',
    'vital', 'crucial',
    'robust',
    'seamless', 'seamlessly',
    'plethora', 'myriad',
    'game-changer',
    'foster', 'fostering',
    'holistic',
    'leverage', 'leveraging',
    'empower', 'empowering'
]

def audit_all():
    workspace_files = []
    for root, dirs, filenames in os.walk('.'):
        if any(p in root for p in ['.git', '.kilo', 'node_modules', 'scratch', '.gemini']):
            continue
        for f in filenames:
            if f.endswith('.html'):
                workspace_files.append(os.path.normpath(os.path.join(root, f)))

    workspace_files = sorted(workspace_files)
    issues_found = {}

    for fpath in workspace_files:
        with open(fpath, 'r', encoding='utf-8') as f:
            html_content = f.read()

        file_issues = []
        soup = BeautifulSoup(html_content, 'html.parser')

        # 1. Meta, alts, and body text extraction
        audit_strings = []
        title_tag = soup.find('title')
        if title_tag and title_tag.string:
            audit_strings.append(('title', title_tag.string.strip()))

        for m in soup.find_all('meta'):
            name = m.get('name') or m.get('property') or ''
            content = m.get('content') or ''
            if name in ['description', 'og:title', 'og:description', 'twitter:title', 'twitter:description']:
                audit_strings.append((f'meta[{name}]', content.strip()))

        for img in soup.find_all('img'):
            alt = img.get('alt')
            if alt:
                audit_strings.append(('img[alt]', alt.strip()))

        body = soup.find('body')
        if body:
            for elem in body(['script', 'style', 'svg']):
                elem.decompose()
            for comment in body.find_all(string=lambda text: isinstance(text, Comment)):
                comment.extract()
            body_text = body.get_text(separator=' ', strip=True)
            audit_strings.append(('body_text', body_text))

        # Check em-dashes
        for source, text in audit_strings:
            dashes = re.findall(r'[—–]|(?:(?<=\s)--(?=\s))|(?:(?<=\w)--(?:[a-zA-Z]))', text)
            if dashes:
                file_issues.append(f"Em-dash/double-hyphen in {source}: {dashes}")

            # Check banned words
            for w in BANNED_WORDS:
                pattern = r'\b' + re.escape(w) + r'\b'
                if re.search(pattern, text, re.IGNORECASE):
                    file_issues.append(f"Banned AI word '{w}' in {source}")

        # Check H1 count
        h1s = soup.find_all('h1')
        if len(h1s) != 1:
            file_issues.append(f"H1 count is {len(h1s)} (must be exactly 1)")

        # Check 45-word capsule
        capsule = soup.find(class_='direct-answer-callout')
        if capsule:
            c_words = len(capsule.get_text(strip=True).split())
            if c_words < 40 or c_words > 48:
                file_issues.append(f"Capsule word count is {c_words} (must be 40-48 words)")

        # Check heading sequence
        headings = soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
        cur_level = 0
        for h in headings:
            lvl = int(h.name[1])
            if cur_level > 0 and lvl > cur_level + 1:
                file_issues.append(f"Skipped heading level: H{cur_level}->H{lvl} ('{h.get_text(strip=True)[:25]}')")
            cur_level = lvl

        # Check JSON-LD
        for idx, block in enumerate(soup.find_all('script', type='application/ld+json')):
            try:
                json.loads(block.string or '')
            except Exception as e:
                file_issues.append(f"Invalid JSON-LD block {idx+1}: {e}")

        if file_issues:
            issues_found[fpath] = file_issues

    return len(workspace_files), issues_found

if __name__ == '__main__':
    total, issues = audit_all()
    if not issues:
        print(f"SUCCESS: All {total} HTML files are 100% compliant with AGENTS.md rules.")
        sys.exit(0)
    else:
        print(f"FAILED: {len(issues)} of {total} files have compliance violations:")
        for fp, errs in issues.items():
            print(f"  {fp}:")
            for e in errs:
                print(f"    - {e}")
        sys.exit(1)
