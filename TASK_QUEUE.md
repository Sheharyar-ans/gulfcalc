# GulfCalc (gulfcalc.tech) — Master Task Queue & Implementation Backlog

This document maintains strict persistent state across execution turns. Tasks must be executed sequentially and checked off (`[x]`) upon rigorous validation.

---

## Phase 0: Persistent Memory, Planning & Repository Initialization
- [x] Analyze active Antigravity skills, capabilities, and execution environment.
- [x] Initialize `PLAN.md` with full GCC legal formulas, schema taxonomy, and directory design.
- [x] Initialize `ARCHITECTURE.md` with system design tokens, layout specifications, and data flow.
- [x] Initialize `TASK_QUEUE.md` with complete granular checkable tasks.
- [x] Commit and push Phase 0 markdown files (`PLAN.md`, `ARCHITECTURE.md`, `TASK_QUEUE.md`) to GitHub repository `Sheharyar-ans/gulfcalc` on `main`.

---

## Phase 1: Shared Design System & Core Calculation Engine
- [x] Create `/assets/css/main.css`:
  - [x] Implement complete Fintech design token variables (Slate neutrals, Emerald/Indigo accents, elevation shadows).
  - [x] Implement responsive utility grid system and mobile-first reset.
  - [x] Implement dual-input slider styling (`input[type="range"]` + numeric input synchronization).
  - [x] Implement calculation result cards, metric callouts, and badge styling.
  - [x] Implement accessible accordion styles for FAQ sections.
  - [x] Implement `@media print` executive summary formatting.
- [x] Create `/assets/js/core-calculator.js`:
  - [x] Number formatting helpers (KWD 3 decimals, BHD 3 decimals, OMR 3 decimals, AED/SAR/QAR 2 decimals).
  - [x] Dual slider-input two-way sync helper with debounced reactivity.
  - [x] Clipboard copy utility with visual feedback state.
  - [x] Clean printable PDF trigger handler.
- [x] Create `/assets/js/navigation.js`:
  - [x] Mobile responsive navigation drawer toggle.
  - [x] FAQ accordion toggle with accessible ARIA state management.

---

## Phase 2: Implementation of 8 GCC Regional Calculation Utilities

### 1. Kuwait Indemnity Calculator (`/tools/kuwait-indemnity-calculator.html`)
- [x] Legal anchor: Kuwait Labour Law No. 6/2010, Articles 51 & 55.
- [x] Daily wage calculation strictly using `Monthly Remuneration / 26`.
- [x] Accruals: 15 days/yr for first 5 years; 30 days/yr thereafter (capped at 1.5 years' salary).
- [x] Resignation tiers: 0% (<3 yrs), 50% (3-5 yrs), 66.67% (5-10 yrs), 100% (10+ yrs).
- [x] Dual input controls (salary slider + input, years slider + input, termination reason toggle).
- [x] 800–1,200 words of statutory guidance, formula diagram SVG, benchmark table, 2 practical scenarios, and FAQ accordion.
- [x] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

### 2. Oman Gratuity Calculator (`/tools/oman-gratuity-calculator.html`)
- [x] Legal anchor: Oman Royal Decree 53/2023 (new Labour Law) and transitional RD 35/2003 rules.
- [x] Standard rule: Flat 30 days (1 full month's basic salary) per year of service.
- [x] Dual-mode engine toggle: Post-July 2023 tenure vs Pre-July 2023 legacy transition.
- [x] Dual input controls, instant reactive calculation, copy & print actions.
- [x] 800–1,200 words of statutory content, formula diagram SVG, benchmark table, 2 real-world scenarios, and FAQ accordion.
- [x] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

### 3. Qatar Gratuity Calculator (`/tools/qatar-gratuity-calculator.html`)
- [x] Legal anchor: Qatar Labour Law No. 14/2004 & Ministry of Labour Guidelines.
- [x] Formula: Minimum 21 calendar days per year based on last drawn basic wage (Daily = Basic / 30).
- [x] Exact pro-rata calculation for partial months and days.
- [x] Dual input controls, live breakdown card, copy/print actions.
- [x] 800–1,200 words of legal content, formula diagram SVG, benchmark table, 2 scenarios, and FAQ accordion.
- [x] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

### 4. Bahrain EOSI & VAT Calculator (`/tools/bahrain-eosi-calculator.html`)
- [x] Legal anchor: Bahrain Law No. 36/2012 & 2024 SIO expat accrual rules.
- [x] Formula: 15 days/yr for years 1-3; 30 days/yr for year 4 onwards.
- [x] Dual utility toggle: Bahrain 10% VAT calculation module.
- [x] Dual input controls, live breakdown card, copy/print actions.
- [x] 800–1,200 words of statutory content, formula diagram SVG, benchmark table, 2 scenarios, and FAQ accordion.
- [x] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

### 5. Saudi End of Service Calculator (`/tools/saudi-end-of-service-calculator.html`)
- [x] Legal anchor: Saudi Labour Law Articles 84, 85, 87.
- [x] Wage basis: Actual Wage (Basic + Fixed Housing Allowance + Fixed Transportation Allowance).
- [x] Accrual: Half month/yr for first 5 years; full month/yr thereafter.
- [x] Resignation tiers: 0% (<2 yrs), 1/3 (2-5 yrs), 2/3 (5-10 yrs), 100% (10+ yrs) with Article 87 statutory exceptions.
- [x] Dual input controls, allowance breakdown, live card, copy/print actions.
- [x] 800–1,200 words of statutory analysis, formula diagram SVG, benchmark table, 2 scenarios, and FAQ accordion.
- [x] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

### 6. UAE Gratuity Calculator (`/tools/uae-gratuity-calculator.html`)
- [x] Legal anchor: UAE Federal Decree-Law No. 33/2021.
- [x] Formula: 21 calendar days/yr for years 1-5; 30 days/yr for each subsequent year (capped at 2 years' salary).
- [x] Unified treatment: Identical entitlement for resignation and termination.
- [x] Dual input controls, live breakdown card, copy/print actions.
- [x] 800–1,200 words of statutory content, formula diagram SVG, benchmark table, 2 scenarios, and FAQ accordion.
- [x] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

### 7. UAE Corporate Tax Calculator (`/tools/uae-corporate-tax-calculator.html`)
- [x] Legal anchor: UAE Federal Decree-Law No. 47/2022 & Ministerial Decision No. 73/2023.
- [x] Formula: 0% on net taxable profit up to AED 375,000; 9% on excess over AED 375,000.
- [x] Small Business Relief (SBR) toggle for businesses with gross revenue <= AED 3M.
- [x] Dual input controls, effective tax rate computation, copy/print actions.
- [x] 800–1,200 words of corporate tax analysis, formula diagram SVG, benchmark table, 2 scenarios, and FAQ accordion.
- [x] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

### 8. GCC Remittance True Cost Calculator (`/tools/gcc-remittance-fee-calculator.html`)
- [x] Multi-corridor support: AED, SAR, QAR, KWD, OMR, BHD to INR, PKR, PHP, BDT, EGP.
- [x] Formula: Mid-market interbank rate vs exchange house spreads + upfront transfer fees = True Remittance Drag (%).
- [x] Interactive corridor switcher, live hidden fee revealer, copy/print actions.
- [x] 800–1,200 words of expat remittance analysis, diagram SVG, corridor benchmark table, and FAQ accordion.
- [x] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

---

## Phase 3: Unified Homepage & Discovery Engine
- [x] Create `/index.html`:
  - [x] Hero section with direct country selector & quick search.
  - [x] 6 Interactive Country Cards with inline bespoke SVG flags and quick calculation preview.
  - [x] Unified GCC Comparative Gratuity Matrix (Comparing UAE, KSA, Kuwait, Qatar, Oman, Bahrain laws side-by-side).
  - [x] Institutional credibility proof points (Zero tracking, 100% client-side privacy, legal citations).
  - [x] Complete `Organization` and `WebSite` JSON-LD schema.

---

## Phase 4: Institutional Trust & Legal Compliance Suite
- [x] Create `/about-us.html`: Detailed statement of computational accuracy, methodology, GCC legal review processes, and site mission (500+ words).
- [x] Create `/contact-us.html`: Responsive inquiry form with real contact email disclosure.
- [x] Create `/privacy-policy.html`: GDPR, CCPA, and GCC data privacy laws compliance; cookie and ad policies.
- [x] Create `/terms-of-service.html`: Terms of use, non-reliance, scraping prohibitions, and IP terms.
- [x] Create `/disclaimer.html`: Formal financial and legal disclaimer.

---

## Phase 5: Machine-Readable SEO & Generative AI Optimization
- [x] Generate `/llms.txt`: Comprehensive markdown manifest covering full directory hierarchy, legal formulas, and canonical routes.
- [x] Generate `/sitemap.xml`: Complete valid XML sitemap with all 14 routes and `<lastmod>` timestamps.
- [x] Generate `/robots.txt`: Production crawl directives with sitemap pointer.

---

## Phase 6: Code Validation, Performance & Quality Gate
- [x] Validate HTML syntax and ensure zero broken links across all routes.
- [x] Validate responsive design at 320px, 768px, 1024px, 1440px.
- [x] Confirm zero runtime console errors and zero external asset dependencies.
- [x] Verify print styles (`@media print`) on calculation tools.

---

## Phase 7: Git Commit, Push & Deployment Verification
- [x] Commit all code systematically with clean, semantic commit messages.
- [x] Push all commits to `origin/main` on GitHub (`Sheharyar-ans/gulfcalc`).
- [x] Verify repository tree, Cloudflare Pages build readiness, and provide comprehensive final delivery report.
