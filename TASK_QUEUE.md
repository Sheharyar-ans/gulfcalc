# GulfCalc (gulfcalc.tech) — Master Task Queue & Implementation Backlog

This document maintains strict persistent state across execution turns. Tasks must be executed sequentially and checked off (`[x]`) upon rigorous validation.

---

## Phase 0: Persistent Memory, Planning & Repository Initialization
- [x] Analyze active Antigravity skills, capabilities, and execution environment.
- [x] Initialize `PLAN.md` with full GCC legal formulas, schema taxonomy, and directory design.
- [x] Initialize `ARCHITECTURE.md` with system design tokens, layout specifications, and data flow.
- [x] Initialize `TASK_QUEUE.md` with complete granular checkable tasks.
- [ ] Commit and push Phase 0 markdown files (`PLAN.md`, `ARCHITECTURE.md`, `TASK_QUEUE.md`) to GitHub repository `Sheharyar-ans/gulfcalc` on `main`.

---

## Phase 1: Shared Design System & Core Calculation Engine
- [ ] Create `/assets/css/main.css`:
  - [ ] Implement complete Fintech design token variables (Slate neutrals, Emerald/Indigo accents, elevation shadows).
  - [ ] Implement responsive utility grid system and mobile-first reset.
  - [ ] Implement dual-input slider styling (`input[type="range"]` + numeric input synchronization).
  - [ ] Implement calculation result cards, metric callouts, and badge styling.
  - [ ] Implement accessible accordion styles for FAQ sections.
  - [ ] Implement `@media print` executive summary formatting.
- [ ] Create `/assets/js/core-calculator.js`:
  - [ ] Number formatting helpers (KWD 3 decimals, BHD 3 decimals, OMR 3 decimals, AED/SAR/QAR 2 decimals).
  - [ ] Dual slider-input two-way sync helper with debounced reactivity.
  - [ ] Clipboard copy utility with visual feedback state.
  - [ ] Clean printable PDF trigger handler.
- [ ] Create `/assets/js/navigation.js`:
  - [ ] Mobile responsive navigation drawer toggle.
  - [ ] FAQ accordion toggle with accessible ARIA state management.

---

## Phase 2: Implementation of 8 GCC Regional Calculation Utilities

### 1. Kuwait Indemnity Calculator (`/tools/kuwait-indemnity-calculator.html`)
- [ ] Legal anchor: Kuwait Labour Law No. 6/2010, Articles 51 & 55.
- [ ] Daily wage calculation strictly using `Monthly Remuneration / 26`.
- [ ] Accruals: 15 days/yr for first 5 years; 30 days/yr thereafter (capped at 1.5 years' salary).
- [ ] Resignation tiers: 0% (<3 yrs), 50% (3-5 yrs), 66.67% (5-10 yrs), 100% (10+ yrs).
- [ ] Dual input controls (salary slider + input, years slider + input, termination reason toggle).
- [ ] 800–1,200 words of statutory guidance, formula diagram SVG, benchmark table, 2 practical scenarios, and FAQ accordion.
- [ ] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

### 2. Oman Gratuity Calculator (`/tools/oman-gratuity-calculator.html`)
- [ ] Legal anchor: Oman Royal Decree 53/2023 (new Labour Law) and transitional RD 35/2003 rules.
- [ ] Standard rule: Flat 30 days (1 full month's basic salary) per year of service.
- [ ] Dual-mode engine toggle: Post-July 2023 tenure vs Pre-July 2023 legacy transition.
- [ ] Dual input controls, instant reactive calculation, copy & print actions.
- [ ] 800–1,200 words of statutory content, formula diagram SVG, benchmark table, 2 real-world scenarios, and FAQ accordion.
- [ ] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

### 3. Qatar Gratuity Calculator (`/tools/qatar-gratuity-calculator.html`)
- [ ] Legal anchor: Qatar Labour Law No. 14/2004 & Ministry of Labour Guidelines.
- [ ] Formula: Minimum 21 calendar days per year based on last drawn basic wage (Daily = Basic / 30).
- [ ] Exact pro-rata calculation for partial months and days.
- [ ] Dual input controls, live breakdown card, copy/print actions.
- [ ] 800–1,200 words of legal content, formula diagram SVG, benchmark table, 2 scenarios, and FAQ accordion.
- [ ] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

### 4. Bahrain EOSI & VAT Calculator (`/tools/bahrain-eosi-calculator.html`)
- [ ] Legal anchor: Bahrain Law No. 36/2012 & 2024 SIO expat accrual rules.
- [ ] Formula: 15 days/yr for years 1-3; 30 days/yr for year 4 onwards.
- [ ] Dual utility toggle: Bahrain 10% VAT calculation module.
- [ ] Dual input controls, live breakdown card, copy/print actions.
- [ ] 800–1,200 words of statutory content, formula diagram SVG, benchmark table, 2 scenarios, and FAQ accordion.
- [ ] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

### 5. Saudi End of Service Calculator (`/tools/saudi-end-of-service-calculator.html`)
- [ ] Legal anchor: Saudi Labour Law Articles 84, 85, 87.
- [ ] Wage basis: Actual Wage (Basic + Fixed Housing Allowance + Fixed Transportation Allowance).
- [ ] Accrual: Half month/yr for first 5 years; full month/yr thereafter.
- [ ] Resignation tiers: 0% (<2 yrs), 1/3 (2-5 yrs), 2/3 (5-10 yrs), 100% (10+ yrs) with Article 87 statutory exceptions.
- [ ] Dual input controls, allowance breakdown, live card, copy/print actions.
- [ ] 800–1,200 words of statutory analysis, formula diagram SVG, benchmark table, 2 scenarios, and FAQ accordion.
- [ ] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

### 6. UAE Gratuity Calculator (`/tools/uae-gratuity-calculator.html`)
- [ ] Legal anchor: UAE Federal Decree-Law No. 33/2021.
- [ ] Formula: 21 calendar days/yr for years 1-5; 30 days/yr for each subsequent year (capped at 2 years' salary).
- [ ] Unified treatment: Identical entitlement for resignation and termination.
- [ ] Dual input controls, live breakdown card, copy/print actions.
- [ ] 800–1,200 words of statutory content, formula diagram SVG, benchmark table, 2 scenarios, and FAQ accordion.
- [ ] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

### 7. UAE Corporate Tax Calculator (`/tools/uae-corporate-tax-calculator.html`)
- [ ] Legal anchor: UAE Federal Decree-Law No. 47/2022 & Ministerial Decision No. 73/2023.
- [ ] Formula: 0% on net taxable profit up to AED 375,000; 9% on excess over AED 375,000.
- [ ] Small Business Relief (SBR) toggle for businesses with gross revenue <= AED 3M.
- [ ] Dual input controls, effective tax rate computation, copy/print actions.
- [ ] 800–1,200 words of corporate tax analysis, formula diagram SVG, benchmark table, 2 scenarios, and FAQ accordion.
- [ ] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

### 8. GCC Remittance True Cost Calculator (`/tools/gcc-remittance-fee-calculator.html`)
- [ ] Multi-corridor support: AED, SAR, QAR, KWD, OMR, BHD to INR, PKR, PHP, BDT, EGP.
- [ ] Formula: Mid-market interbank rate vs exchange house spreads + upfront transfer fees = True Remittance Drag (%).
- [ ] Interactive corridor switcher, live hidden fee revealer, copy/print actions.
- [ ] 800–1,200 words of expat remittance analysis, diagram SVG, corridor benchmark table, and FAQ accordion.
- [ ] Complete JSON-LD schema (`WebApplication`, `FAQPage`, `BreadcrumbList`).

---

## Phase 3: Unified Homepage & Discovery Engine
- [ ] Create `/index.html`:
  - [ ] Hero section with direct country selector & quick search.
  - [ ] 6 Interactive Country Cards with inline bespoke SVG flags and quick calculation preview.
  - [ ] Unified GCC Comparative Gratuity Matrix (Comparing UAE, KSA, Kuwait, Qatar, Oman, Bahrain laws side-by-side).
  - [ ] Institutional credibility proof points (Zero tracking, 100% client-side privacy, legal citations).
  - [ ] Complete `Organization` and `WebSite` JSON-LD schema.

---

## Phase 4: Institutional Trust & Legal Compliance Suite
- [ ] Create `/about-us.html`: Detailed statement of computational accuracy, methodology, GCC legal review processes, and site mission (500+ words).
- [ ] Create `/contact-us.html`: Responsive inquiry form with real contact email disclosure.
- [ ] Create `/privacy-policy.html`: GDPR, CCPA, and GCC data privacy laws compliance; cookie and ad policies.
- [ ] Create `/terms-of-service.html`: Terms of use, non-reliance, scraping prohibitions, and IP terms.
- [ ] Create `/disclaimer.html`: Formal financial and legal disclaimer.

---

## Phase 5: Machine-Readable SEO & Generative AI Optimization
- [ ] Generate `/llms.txt`: Comprehensive markdown manifest covering full directory hierarchy, legal formulas, and canonical routes.
- [ ] Generate `/sitemap.xml`: Complete valid XML sitemap with all 14 routes and `<lastmod>` timestamps.
- [ ] Generate `/robots.txt`: Production crawl directives with sitemap pointer.

---

## Phase 6: Code Validation, Performance & Quality Gate
- [ ] Validate HTML syntax and ensure zero broken links across all routes.
- [ ] Validate responsive design at 320px, 768px, 1024px, 1440px.
- [ ] Confirm zero runtime console errors and zero external asset dependencies.
- [ ] Verify print styles (`@media print`) on calculation tools.

---

## Phase 7: Git Commit, Push & Deployment Verification
- [ ] Commit all code systematically with clean, semantic commit messages.
- [ ] Push all commits to `origin/main` on GitHub (`Sheharyar-ans/gulfcalc`).
- [ ] Verify repository tree, Cloudflare Pages build readiness, and provide comprehensive final delivery report.
