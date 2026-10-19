# GulfCalc (gulfcalc.tech): Master Task Queue & Implementation Backlog

This document maintains strict persistent state across execution turns. Tasks must be executed sequentially and checked off (`[x]`) upon rigorous validation.

---

## Phase 0: Skill Discovery & Memory State Re-Initialization
- [x] Analyze active Antigravity skills and tools (semantic analysis, code generation, file tree discovery, git/GitHub integration).
- [x] Log navigation discrepancies: broken `#statutory` link on homepage, absent `/labour-laws/` central directory, missing `/blog/` hub and articles, mock contact form submission.
- [x] Re-initialize `PLAN.md`, `ARCHITECTURE.md`, and `TASK_QUEUE.md` with full specifications for the 10-article blog directory, cybersecurity headers, and interactive homepage overhaul.

---

## Phase 1: Routing Repair & GCC Labour Laws Comparative Directory
- [x] Create `/labour-laws/index.html` (>1,500 words of authoritative legal commentary):
  - [x] UAE: Federal Decree-Law No. 33/2021
  - [x] Saudi Arabia: Royal Decree No. M/51 (Articles 84, 85, 87)
  - [x] Kuwait: Law No. 6/2010 (Article 55 - 26 working days)
  - [x] Qatar: Law No. 14/2004 (Article 54)
  - [x] Oman: Royal Decree No. 53/2023 (Article 61 - 30 days flat)
  - [x] Bahrain: Law No. 36/2012 (Article 116 & 2024 SIO Fund Accruals)
  - [x] Comparative analysis matrix, worker rights overview, statutory notice period benchmarks.
  - [x] Contextual deep links to all 6 national calculators.
- [x] Update navigation headers and footers across all HTML pages to permanently link to `/labour-laws/index.html` and `/blog/index.html`.

---

## Phase 2: Working Contact Form Integration (Zero-Backend)
- [x] Refactor `/contact-us.html`:
  - [x] Point form action to `https://api.web3forms.com/submit` via POST.
  - [x] Instate `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">`.
  - [x] Add hidden anti-spam honeypot `<input type="checkbox" name="botcheck" class="hidden" style="display: none;">`.
  - [x] Implement client-side JavaScript validation (business email regex, category selector, message length).
  - [x] Implement asynchronous fetch submission with modern in-place toast notification ("Message delivered successfully").

---

## Phase 3: Cybersecurity Hardening & Headers Configuration
- [x] Create `_headers` configuration file at repository root with strict Cloudflare Pages directives:
  - [x] `X-Frame-Options: DENY`
  - [x] `X-Content-Type-Options: nosniff`
  - [x] `Referrer-Policy: strict-origin-when-cross-origin`
  - [x] `Permissions-Policy` restrictions
  - [x] `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
  - [x] `Content-Security-Policy` with authorized scripts, fonts, and connect endpoints
- [x] Update `robots.txt` with clear crawl permissions for Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot, and disallow malicious scrapers.
- [x] Verify all external links have `rel="noopener noreferrer"`.

---

## Phase 4: Homepage Makeover & Interactive Portal Design
- [x] Refactor `/index.html`:
  - [x] Modernized Hero Section with pan-GCC statutory precision positioning.
  - [x] Interactive Nation Selector Tabs (UAE, KSA, Kuwait, Qatar, Oman, Bahrain) with dynamic client-side filtering.
  - [x] Quick-Calc Spotlight: compact multi-currency preview calculator embedded directly in the hero.
  - [x] Featured Insights Section: dynamic grid showcasing latest GCC legal blog posts with reading time, author, category tags.
  - [x] GCC Metric Comparison Ticker: table comparing Corporate Tax, VAT, standard work weeks, and maximum gratuity caps across all 6 member states.
  - [x] Valid `Organization`, `WebSite`, and `SiteNavigationElement` JSON-LD schemas.

---

## Phase 5: 10 High-Intent GCC Legal & Financial Blog Articles
- [x] Create `/blog/index.html` hub with search filtering, category tags, and clean card UI.
- [x] Author and deploy 10 comprehensive, humanized blog post files (1,200 to 1,500+ words each, NO em-dashes, full JSON-LD schemas):
  - [x] `/blog/uae-gratuity-calculation-limited-contract-2026.html`
  - [x] `/blog/saudi-labor-law-article-84-85-resignation-rules.html`
  - [x] `/blog/kuwait-labor-law-article-55-26-days-calculation.html`
  - [x] `/blog/oman-new-labor-law-royal-decree-53-2023-gratuity.html`
  - [x] `/blog/uae-corporate-tax-small-business-relief-guide.html`
  - [x] `/blog/qatar-end-of-service-benefits-overtime-wages.html`
  - [x] `/blog/bahrain-sio-expat-end-of-service-reform.html`
  - [x] `/blog/gcc-vat-reverse-charge-mechanism-cross-border-services.html`
  - [x] `/blog/dubai-golden-visa-real-estate-salary-thresholds.html`
  - [x] `/blog/dews-vs-traditional-cash-gratuity-uae-workplace-savings.html`

---

## Phase 6: Editorial Quality & Humanization Audit
- [x] Enforce complete ban on em-dashes across all newly written articles and pages.
- [x] Enforce complete ban on formulaic AI filler phrases.
- [x] Verify standard LaTeX mathematical formulas and precise legal citations.
- [x] Verify click-worthy Meta Titles (<60 chars) and Meta Descriptions (140-155 chars).

---

## Phase 7: Sitemap, LLMs.txt & Git Deployment
- [x] Regenerate `sitemap.xml` to include all 26 production routes.
- [x] Update `/llms.txt` with full index of all tools, legal directories, and blog posts.
- [x] Commit and push all changes cleanly to GitHub `main` branch.
