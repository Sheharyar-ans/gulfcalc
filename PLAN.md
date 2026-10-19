# GulfCalc (gulfcalc.tech): Master Systems Engineering & Implementation Plan

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
| **`responsive-design`** | Implements strict mobile-first viewport adaptation (from 320px small screens to 4K displays) with touch targets >= 48px and zero horizontal overflow. |
| **`accessibility`** | Conforms strictly to WCAG 2.1 AA/AAA: semantic landmark tags (`<main>`, `<nav>`, `<article>`), ARIA live regions (`aria-live="polite"` for calculation updates), and high contrast ratios (>= 4.5:1). |
| **`technical-seo`** | Injects hardcoded schema graphs (`WebApplication`, `FAQPage`, `BreadcrumbList`, `Organization`, `BlogPosting`), Open Graph/Twitter Cards, and canonical tags. |
| **`seo-content`** | Formulates 1,200–1,500 words of statutory analysis per guide and blog post, strictly avoiding AI tropes and em-dashes. |
| **`web-performance`** | Targets perfect 100/100 Core Web Vitals (LCP < 0.8s, CLS = 0, INP < 50ms) by omitting heavy JavaScript frameworks and asset bloat. |
| **`web-security`** | Implements Cloudflare Pages `_headers` security directives (HSTS, CSP, X-Frame-Options) and client-side data privacy. |
| **`browser-testing` & `visual-qa`** | Validates dual-input synchronization (sliders + inputs), copy-to-clipboard APIs, responsive layouts, and print CSS formatting. |

---

## 2. Directory & Route Hierarchy

```
gulfcalc-web/
├── _headers                                 # Cloudflare Pages Edge Security Headers
├── index.html                               # Institutional GCC Portal, Interactive Hero & Filter
├── about-us.html                            # Institutional Methodology, Accuracy Statement & Mission
├── contact-us.html                          # Corporate Inquiries & Web3Forms Zero-Backend Integration
├── privacy-policy.html                      # GDPR, CCPA, and GCC Data Privacy Compliance
├── terms-of-service.html                    # Legal Terms of Use, Non-Reliance & IP Protections
├── disclaimer.html                          # Statutory Financial & Legal Advice Disclaimer
├── sitemap.xml                              # XML Sitemap covering all 26+ routes
├── robots.txt                               # Search Engine & AI Bot Crawl Directives
├── llms.txt                                 # LLM Engine Knowledge Manifest
├── PLAN.md                                  # Persistent Master Architecture & Engineering Roadmap
├── ARCHITECTURE.md                          # Comprehensive Technical Specification & Tokens
├── TASK_QUEUE.md                            # Granular Checkable Backlog
├── assets/
│   ├── css/
│   │   └── main.css                         # Shared Fintech Design System, Resets & Print Styles
│   └── js/
│       ├── core-calculator.js               # Universal Mathematical Kernels & Formatting Helpers
│       └── navigation.js                    # Mobile Drawer, Nation Filtering & UI Helpers
├── labour-laws/
│   └── index.html                           # Comprehensive GCC Labour Laws Comparative Directory (>1,500 words)
├── tools/
│   ├── kuwait-indemnity-calculator.html     # Kuwait Labour Law No. 6/2010 (Article 55 / 26 Working Days)
│   ├── oman-gratuity-calculator.html        # Oman Royal Decree 53/2023 (New 30-Day Rule vs RD 35/2003)
│   ├── qatar-gratuity-calculator.html       # Qatar Labour Law No. 14/2004 & Ministry Guidelines
│   ├── bahrain-eosi-calculator.html         # Bahrain Law No. 36/2012 & 2024 SIO Accrual Rules (+ 10% VAT)
│   ├── saudi-end-of-service-calculator.html # Saudi Labour Law Articles 84, 85, 87 (Actual Wage Basis)
│   ├── uae-gratuity-calculator.html         # UAE Federal Decree-Law No. 33/2021 (Unified Resignation/Termination)
│   ├── uae-corporate-tax-calculator.html    # UAE Corporate Tax Decree-Law No. 47/2022 (9% > AED 375k + SBR)
│   └── gcc-remittance-fee-calculator.html   # GCC Interbank vs Exchange Spread True Cost Engine
└── blog/
    ├── index.html                           # Dedicated Blog Hub with Category Filters & Search
    ├── uae-gratuity-calculation-limited-contract-2026.html
    ├── saudi-labor-law-article-84-85-resignation-rules.html
    ├── kuwait-labor-law-article-55-26-days-calculation.html
    ├── oman-new-labor-law-royal-decree-53-2023-gratuity.html
    ├── uae-corporate-tax-small-business-relief-guide.html
    ├── qatar-end-of-service-benefits-overtime-wages.html
    ├── bahrain-sio-expat-end-of-service-reform.html
    ├── gcc-vat-reverse-charge-mechanism-cross-border-services.html
    ├── dubai-golden-visa-real-estate-salary-thresholds.html
    └── dews-vs-traditional-cash-gratuity-uae-workplace-savings.html
```
