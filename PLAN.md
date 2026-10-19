# GulfCalc (gulfcalc.tech) — Master Systems Engineering & Implementation Plan

**Domain:** `gulfcalc.tech`  
**Platform Classification:** Tier-1 Institutional Financial & Labour Law Utility Platform  
**Target Jurisdictions:** 6 Gulf Cooperation Council (GCC) Member States: United Arab Emirates (UAE), Kingdom of Saudi Arabia (KSA), State of Kuwait, State of Qatar, Sultanate of Oman, and Kingdom of Bahrain.  
**Audience:** Expatriate Workers, Executive Management, In-House Legal Counsel, Payroll Directors, and HR Practitioners.  
**Architecture:** Zero-Runtime-Dependency, Ultra-Fast Static Web Property (HTML5, Vanilla JavaScript, Vanilla Modern Fintech CSS & Tailwind utility standards).

---

## 1. Executive Summary & Antigravity Skills Matrix

To ensure absolute adherence to institutional standards, eliminate context drift, and guarantee mathematical precision across all 6 jurisdictions, the engineering lifecycle leverages the following Antigravity skills and capabilities:

| Skill / Capability | Application within GulfCalc Platform |
| :--- | :--- |
| **`design-system`** | Enforces a bespoke European Fintech aesthetic: slate-toned typography, 1px geometric borders (`#e2e8f0` / `#1e293b`), emerald/indigo accents, and tactile interactive surfaces. |
| **`frontend-design`** | Eliminates generic "AI template" tropes. Architects asymmetric data cards, high-contrast metric readouts, and ergonomic input controls. |
| **`responsive-design`** | Implements strict mobile-first viewport adaptation (from 320px small screens to 4K displays) with touch targets $\ge 48\text{px}$ and zero horizontal overflow. |
| **`accessibility`** | Conforms strictly to WCAG 2.1 AA/AAA: semantic landmark tags (`<main>`, `<nav>`, `<article>`), ARIA live regions (`aria-live="polite"` for calculation updates), and high contrast ratios ($\ge 4.5:1$). |
| **`technical-seo`** | Injects hardcoded schema graphs (`WebApplication`, `FAQPage`, `BreadcrumbList`, `Organization`), Open Graph/Twitter Cards, and canonical tags. |
| **`seo-content`** | Formulates 800–1,200 words of statutory analysis per tool, featuring 50-word direct answers engineered for Google AI Overviews, Perplexity, and Claude. |
| **`web-performance`** | Targets perfect 100/100 Core Web Vitals (LCP < 0.8s, CLS = 0, INP < 50ms) by omitting heavy JavaScript frameworks and asset bloat. |
| **`web-security`** | Ensures complete client-side data privacy (no PII leaves the browser) and strict Content Security Policy (CSP) compatibility. |
| **`browser-testing` & `visual-qa`** | Validates dual-input synchronization (sliders + inputs), copy-to-clipboard APIs, responsive layouts, and print CSS formatting. |

---

## 2. Directory & Route Hierarchy

```
gulfcalc-web/
├── index.html                               # Institutional GCC Portal & Unified Calculator Hub
├── about-us.html                            # Institutional Methodology, Accuracy Statement & Mission
├── contact-us.html                          # Corporate Inquiries & Feedback Mechanism
├── privacy-policy.html                      # GDPR, CCPA, and GCC Data Privacy Compliance
├── terms-of-service.html                    # Legal Terms of Use, Non-Reliance & IP Protections
├── disclaimer.html                          # Statutory Financial & Legal Advice Disclaimer
├── sitemap.xml                              # XML Sitemap conforming to Google Search Console specs
├── robots.txt                               # Search Engine Crawl Directives & Sitemap Pointer
├── llms.txt                                 # LLM Engine Knowledge Manifest (llms.txt standard)
├── PLAN.md                                  # Persistent Master Architecture & Engineering Roadmap
├── ARCHITECTURE.md                          # Comprehensive Technical Specification & Tokens
├── TASK_QUEUE.md                            # Granular Checkable Backlog
├── assets/
│   ├── css/
│   │   └── main.css                         # Shared Fintech Design System, Resets & Print Styles
│   └── js/
│       ├── core-calculator.js               # Universal Mathematical Kernels & Formatting Helpers
│       └── navigation.js                    # Mobile Drawer, Theme Helpers, and Accessible Accordions
└── tools/
    ├── kuwait-indemnity-calculator.html     # Kuwait Labour Law No. 6/2010 (Article 55 / 26 Working Days)
    ├── oman-gratuity-calculator.html        # Oman Royal Decree 53/2023 (New 30-Day Rule vs RD 35/2003)
    ├── qatar-gratuity-calculator.html       # Qatar Labour Law No. 14/2004 & Ministry Guidelines
    ├── bahrain-eosi-calculator.html         # Bahrain Law No. 36/2012 & 2024 SIO Accrual Rules (+ 10% VAT)
    ├── saudi-end-of-service-calculator.html # Saudi Labour Law Articles 84, 85, 87 (Actual Wage Basis)
    ├── uae-gratuity-calculator.html         # UAE Federal Decree-Law No. 33/2021 (Unified Resignation/Termination)
    ├── uae-corporate-tax-calculator.html    # UAE Corporate Tax Decree-Law No. 47/2022 (9% > AED 375k + SBR)
    └── gcc-remittance-fee-calculator.html   # GCC Interbank vs Exchange Spread True Cost Engine
```

---

## 3. Statutory Mathematical Formulas & Legal Grounding

### 3.1 Kuwait End of Service Indemnity
* **Legal Anchor:** Kuwait Private Sector Labour Law No. 6 of 2010, Articles 51 & 55; Ministry of Social Affairs and Labour directives.
* **Daily Wage Divisor:** Mandatory **26 working days** (Article 55: *"The worker's daily wage shall be calculated by dividing his monthly remuneration by 26"*). Using 30 calendar days is unlawful.
* **Accrual Rates:**
  * First 5 years: 15 days of remuneration per year $\left(\frac{\text{Monthly Remuneration}}{26} \times 15 \times \text{Years}\right)$.
  * Beyond 5 years: 30 days of remuneration per year $\left(\frac{\text{Monthly Remuneration}}{26} \times 30 \times \text{Years}\right)$.
* **Statutory Maximum Cap:** Total benefit cannot exceed **1.5 years' remuneration** ($18 \times \text{Monthly Remuneration}$).
* **Resignation Scale (Indefinite Contract):**
  * Less than 3 years of service: $0\%$ entitlement.
  * 3 years to less than 5 years: $50\%$ entitlement.
  * 5 years to less than 10 years: $66.67\%$ ($2/3$) entitlement.
  * 10+ years of service: $100\%$ full entitlement.
* **Termination / Contract Expiry:** $100\%$ entitlement across all service durations.

### 3.2 Oman End of Service Gratuity
* **Legal Anchor:** Oman Labour Law issued under **Royal Decree No. 53/2023** (effective July 31, 2023), replacing the repealed Royal Decree No. 35/2003.
* **Current Formula (Post-July 2023):** Flat **30 days (1 full month's basic salary)** for every completed year of service, plus pro-rata fractions for partial months.
* **Dual-Mode Engine (Historical Transition):**
  * *Option A (Pure RD 53/2023):* 30 days/yr across entire tenure.
  * *Option B (Transitional RD 35/2003 + RD 53/2023):* For tenures spanning pre-July 2023, 15 days per year for the first 3 years and 30 days per year thereafter for pre-decree periods, transitioning seamlessly to the statutory baseline.
* **Salary Basis:** Last drawn Basic Salary.

### 3.3 Qatar End of Service Gratuity
* **Legal Anchor:** Qatar Labour Law No. 14 of 2004 (Article 54) & Ministry of Labour Ministerial Guidelines.
* **Eligibility Threshold:** Minimum 1 continuous year of service.
* **Accrual Rate:** Statutory minimum of **21 calendar days' basic wage** for each completed year of service (or higher if contractually stipulated).
* **Daily Wage Formula:** $\text{Daily Wage} = \frac{\text{Monthly Basic Salary}}{30}$.
* **Pro-rata Accrual:** $\text{Total Gratuity} = \text{Daily Wage} \times 21 \times \left(\text{Years} + \frac{\text{Months}}{12} + \frac{\text{Days}}{365}\right)$.
* **Resignation vs Termination:** Qatar Labour Law mandates full gratuity regardless of resignation or termination once 1 year is completed (unless dismissed under Article 61 gross misconduct).

### 3.4 Bahrain End of Service Indemnity (EOSI) & VAT Engine
* **Legal Anchor:** Bahrain Labour Law for the Private Sector (Law No. 36 of 2012, Article 116) and 2024 Social Insurance Organisation (SIO) expat accrual regulations.
* **Accrual Rates:**
  * First 3 years: 15 days' wage per year of service $\left(\frac{\text{Monthly Wage}}{30} \times 15 \times \text{Years}_{1-3}\right)$.
  * 4th year onwards: 30 days' wage (1 month) per year $\left(\frac{\text{Monthly Wage}}{30} \times 30 \times \text{Years}_{4+}\right)$.
* **Dual Utility (VAT Estimation):** Built-in toggle for Bahrain 10% standard VAT invoice and tax assessment.

### 3.5 Saudi Arabia End of Service Award (EOSA)
* **Legal Anchor:** Saudi Labour Law (Royal Decree No. M/51), Articles 84, 85, 86, and 87.
* **Wage Basis:** **Actual Wage** (Article 2 defines wage as Basic Salary + Fixed Housing Allowance + Fixed Transportation Allowance + other recurring contractual allowances).
* **Accrual Scale (Article 84):**
  * First 5 years: Half-month salary per year $\left(\frac{\text{Actual Wage}}{2} \times \text{Years}_{1-5}\right)$.
  * Subsequent years: One full month salary per year $\left(\text{Actual Wage} \times \text{Years}_{6+}\right)$.
* **Resignation Scale (Article 85 - Indefinite Contract):**
  * Less than 2 years: $0\%$ entitlement.
  * 2 to 5 years: $\frac{1}{3}$ ($33.33\%$) of full award.
  * 5 to 10 years: $\frac{2}{3}$ ($66.67\%$) of full award.
  * 10+ years: $100\%$ full award.
* **Statutory Exceptions (Article 87):** Full award payable upon female employee resignation within 6 months of marriage or 3 months of childbirth, force majeure, or employer default under Article 81.

### 3.6 UAE End of Service Gratuity
* **Legal Anchor:** UAE Federal Decree-Law No. 33 of 2021 on the Regulation of Labour Relations (Article 51).
* **Eligibility:** Completion of at least 1 year of continuous service.
* **Accrual Scale:**
  * Years 1 through 5: 21 calendar days' basic wage per year $\left(\frac{\text{Basic Salary}}{30} \times 21 \times \text{Years}_{1-5}\right)$.
  * Years beyond 5: 30 calendar days' basic wage per year $\left(\frac{\text{Basic Salary}}{30} \times 30 \times \text{Years}_{6+}\right)$.
* **Statutory Maximum Cap:** The aggregate gratuity cannot exceed **2 years' total salary** ($24 \times \text{Basic Salary}$).
* **Unified Scale:** Under Federal Decree-Law No. 33/2021, resignation and employer termination are treated identically for indefinite and limited contracts—no arbitrary deductions apply.

### 3.7 UAE Corporate Tax Calculator
* **Legal Anchor:** UAE Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses; Cabinet Decision No. 116 of 2022; Ministerial Decision No. 73 of 2023 on Small Business Relief (SBR).
* **Rate Structure:**
  * Net Taxable Profit up to AED 375,000: **0%**.
  * Net Taxable Profit exceeding AED 375,000: **9%** on the excess over AED 375,000.
* **Small Business Relief (SBR):** Election available for resident taxable persons with gross revenue $\le \text{AED } 3,000,000$ in relevant tax periods.

### 3.8 GCC Cross-Border Remittance True Cost Engine
* **Objective:** Unmask hidden FX markups charged by traditional exchange houses and wire operators in the GCC.
* **Calculation Formula:**
  $$\text{Hidden Cost} = \text{Send Amount} \times \left(1 - \frac{\text{Provider Exchange Rate}}{\text{Mid-Market Rate}}\right)$$
  $$\text{Total Fee} = \text{Upfront Wire Fee} + \text{Hidden FX Markup}$$
  $$\text{Effective Remittance Drag (\%)} = \frac{\text{Total Fee}}{\text{Send Amount}} \times 100$$
* **Covered Corridors:**
  * GCC Base: AED, SAR, QAR, KWD, OMR, BHD
  * Expat Destination: INR (India), PKR (Pakistan), PHP (Philippines), BDT (Bangladesh), EGP (Egypt), LKR (Sri Lanka).

---

## 4. Search & Generative AI Optimization Strategy (SEO, GEO, AEO, AIO)

### 4.1 Root Knowledge Manifest (`/llms.txt`)
Following the emerging `llms.txt` protocol, the repository root exposes an exhaustive, markdown-structured manifest documenting:
1. Canonical tool paths and HTTPS URLs.
2. Official legal citations for each calculator.
3. Explicit mathematical formulas and edge cases.
4. Data definitions and unit semantics for ingestion by LLMs (ChatGPT Search, Perplexity, Google Gemini, Claude).

### 4.2 Comprehensive JSON-LD Schema Graphs
Every tool page features three hardcoded, syntax-validated schema blocks:
* `WebApplication`: Declaring application category (`FinanceApplication`, `LegalApplication`), operating systems, price (`0.00`), currency, browser requirements, and feature lists.
* `FAQPage`: Exact entity matching for all visible accordion Q&As to trigger Google Rich Snippets and Perplexity direct extraction.
* `BreadcrumbList`: Structural hierarchy linking Home $\rightarrow$ Tools $\rightarrow$ Specific Calculator.

### 4.3 800–1,200 Words of Institutional On-Page Content (AdSense Quality Defense)
To prevent Google AdSense "Low-Value Content" or "Thin Affiliate" flags, each page includes:
1. **Direct Answer Block (50 words):** Placed right under the `<h1>`, giving an exact statutory summary.
2. **Interactive Calculator Widget:** Zero-latency dual slider/input controls.
3. **Statutory Formula Breakdown:** Detailed LaTeX-style variable definitions.
4. **Reference Benchmark Matrix:** Tables comparing gratuity across 1, 3, 5, 7, 10, and 15 years.
5. **Practical Real-World Case Studies:** Realistic expatriate scenarios (e.g., 4.5 years resignation vs 8 years termination).
6. **Statutory FAQ Accordion:** Answering 5–6 critical compliance questions per country.

---

## 5. Deployment & Continuous Integration Strategy
* **Platform:** Cloudflare Pages (Direct Git Integration).
* **Build Command:** Static HTML (`None` / Pre-built output directory: `.`).
* **Environment:** Pure static hosting; ultra-low TTFB (< 50ms globally) backed by Cloudflare edge caching.
