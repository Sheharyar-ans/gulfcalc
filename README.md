# 🌐 GulfCalc: Precision Statutory & Financial Calculation Engines for the GCC

> **High-precision, zero-latency, client-side statutory and financial calculation platform built for the 6 Gulf Cooperation Council (GCC) member nations.** Engineered with rigorous legal accuracy, unmetered edge deployment, and an absolute zero-PII client privacy architecture.

[![Deployment Status](https://img.shields.io/badge/Deployment-Cloudflare%20Pages%20Active-059669?style=for-the-badge&logo=cloudflare&logoColor=white)](https://gulfcalc.tech)
[![Production URL](https://img.shields.io/badge/Production-gulfcalc.tech-0284c7?style=for-the-badge&logo=googlechrome&logoColor=white)](https://gulfcalc.tech)
[![License: MIT](https://img.shields.io/badge/License-MIT-slate?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20Vanilla%20JS%20%7C%20CSS3-f59e0b?style=for-the-badge&logo=javascript&logoColor=white)](https://gulfcalc.tech)
[![Coverage](https://img.shields.io/badge/Coverage-6%20GCC%20Nations-7c3aed?style=for-the-badge&logo=globe&logoColor=white)](https://gulfcalc.tech/labour-laws/)
[![Privacy Architecture](https://img.shields.io/badge/Engine-100%25%20Client--Side%20Zero--PII-10b981?style=for-the-badge&logo=privatedivision&logoColor=white)](https://gulfcalc.tech/privacy-policy.html)

---

## ⚡ Live Demo & Direct Platform Access

Experience the production deployment at **[https://gulfcalc.tech](https://gulfcalc.tech)**.

### Quick Navigation
* 🧮 **[19 Statutory & AI Calculators](#-complete-tool-inventory-matrix)**: Explore all national end-of-service, tax, GOSI, PIFSS, RERA, and AI legal engines.
* ⚖️ **[GCC Labour Laws Directory](https://gulfcalc.tech/labour-laws/index.html)**: Comprehensive statutory comparative analysis across all 6 member states.
* 📚 **[Financial & Legal Blog Hub](https://gulfcalc.tech/blog/index.html)**: 10 peer-reviewed technical guides on GCC tax, corporate structure, and labor decrees.
* 🏗️ **[System Architecture](#-architectural-principles--performance-highlights)**: Client-side determination, security headers, and edge delivery.
* 👨‍💻 **[Author & Architect Profile](#-designed-built--maintained-by-sheharyar-siraj)**: Engineering credentials and portfolio links.

---

## 🎯 Executive Overview & Problem Solved

### The Real-World Challenge
Cross-border compensation, statutory severance (gratuity/indemnity), corporate tax, and social insurance calculations in the Gulf region have long been compromised by fragmented, inaccurate, and legally outdated web utilities. Many legacy portals:
1. Suffer from silent calculation errors by applying a generic 30-day divisor to Kuwait compensation, violating judicial precedents.
2. Ignore recent legislative overhauls such as Oman's Royal Decree 53/2023, UAE Federal Decree-Law No. 33/2021, and Bahrain's 2024 SIO direct deposit mandates.
3. Expose sensitive corporate payroll and individual remuneration numbers by transmitting user inputs to unencrypted third-party backend servers.

### How GulfCalc Solves This
GulfCalc provides an institutional-grade, zero-runtime-dependency calculation platform designed specifically for CFOs, human resource directors, expatriate professionals, legal counsel, and cross-border payroll specialists. Every formula is verified against primary statutory texts and official gazettes:

* **Kuwait Law No. 6/2010 (Article 55):** Strictly enforces the mandatory **26 working days divisor** (`Daily Wage = Monthly Wage / 26`), completely eliminating the unlawful 30-day divisor used by non-compliant calculators.
* **Oman Royal Decree No. 53/2023 (Article 61):** Integrates the modern **flat 30 days per year** accrual standard from year one while preserving dual-scale calculation mechanics for pre-July 2023 tenures under repealed RD 35/2003.
* **Saudi Labour Law (Royal Decree No. M/51, Articles 84 & 85):** Implements the official Ministry of Human Resources and Social Development (MHRSD) **Actual Wage** standard (basic salary plus fixed housing and transport allowances) along with tiered resignation deductions and Article 87 statutory exceptions.
* **UAE Federal Decree-Law No. 33/2021 (Article 51):** Fully harmonizes limited contract severance and establishes 100% entitlement parity between worker resignation and employer termination after 1 continuous year of service.
* **Bahrain Law No. 36/2012 & 2024 SIO Reform:** Encapsulates the phased shift to monthly employer deposits into the Social Insurance Organisation (SIO) fund under Ministerial Decision No. 109/2023, paired with a 10% national VAT calculation module.
* **UAE Corporate Tax (Federal Decree-Law No. 47/2022):** Accurately computes 0% tax up to AED 375,000 and 9% on excess profits, modeling Small Business Relief (SBR) election thresholds up to AED 3,000,000 under Ministerial Decision No. 73/2023.

---

## 🧮 Complete Tool Inventory Matrix

| Flag & Nation | Calculator Name | Legal / Statutory Basis | Route Path | Core Formula Highlights |
| :--- | :--- | :--- | :--- | :--- |
| 🇰🇼 **Kuwait** | **Kuwait Indemnity Calculator** | Law No. 6/2010, Arts. 51, 53, 55 | [`/tools/kuwait-indemnity-calculator.html`](https://gulfcalc.tech/tools/kuwait-indemnity-calculator.html) | `Wage / 26` divisor. 15 days (yrs 1-5), 30 days (yr 6+). Capped at 18 months. Tiered resignation deductions. |
| 🇸🇦 **Saudi Arabia** | **Saudi End of Service Award** | Royal Decree M/51, Arts. 84, 85, 87 | [`/tools/saudi-end-of-service-calculator.html`](https://gulfcalc.tech/tools/saudi-end-of-service-calculator.html) | Actual wage basis (Basic + Housing + Transport). 0.5 mo/yr (1-5 yrs), 1 mo/yr (6+ yrs). Resignation tiers & Art. 87 exemptions. |
| 🇦🇪 **UAE** | **UAE Gratuity Calculator** | Federal Decree-Law No. 33/2021, Art. 51 | [`/tools/uae-gratuity-calculator.html`](https://gulfcalc.tech/tools/uae-gratuity-calculator.html) | Basic wage basis. 21 days (yrs 1-5), 30 days (yr 6+). Capped at 24 months. Identical entitlement on resignation & termination. |
| 🇶🇦 **Qatar** | **Qatar Gratuity Calculator** | Law No. 14/2004, Art. 54 | [`/tools/qatar-gratuity-calculator.html`](https://gulfcalc.tech/tools/qatar-gratuity-calculator.html) | Basic wage basis. Minimum 21 calendar days per completed year. Continuous pro-rata fractional tenure resolution. |
| 🇴🇲 **Oman** | **Oman Gratuity Calculator** | Royal Decree 53/2023, Art. 61 | [`/tools/oman-gratuity-calculator.html`](https://gulfcalc.tech/tools/oman-gratuity-calculator.html) | Flat 30 days per completed year from year one. Legacy dual-scale calculation engine for tenures spanning pre-July 2023. |
| 🇧🇭 **Bahrain** | **Bahrain EOSI & VAT Calculator** | Law No. 36/2012, Art. 116 & SIO 2024 | [`/tools/bahrain-eosi-calculator.html`](https://gulfcalc.tech/tools/bahrain-eosi-calculator.html) | 15 days (yrs 1-3), 30 days (yr 4+). SIO deposit modeling. Real-time 10% standard VAT addition and extraction. |
| 🇦🇪 **UAE** | **UAE Corporate Tax Calculator** | Federal Decree-Law No. 47/2022 | [`/tools/uae-corporate-tax-calculator.html`](https://gulfcalc.tech/tools/uae-corporate-tax-calculator.html) | 0% on profits <= AED 375,000; 9% on profits > AED 375,000. Small Business Relief (SBR) election for revenue <= AED 3M. |
| 🌐 **Pan-GCC** | **GCC Remittance Fee Engine** | Financial Conduct & FX Spread Rules | [`/tools/gcc-remittance-fee-calculator.html`](https://gulfcalc.tech/tools/gcc-remittance-fee-calculator.html) | Computes total foreign exchange drag: `True Drag = Flat Upfront Fee + (Send Amount * FX Markup Spread %)`. |
| 🇸🇦 **Saudi Arabia** | **Saudi GOSI & SANED Calculator** | Royal Decree M/22 & Royal Decree M/18 | [`/tools/saudi-gosi-calculator.html`](https://gulfcalc.tech/tools/saudi-gosi-calculator.html) | Citizen 9.75% Annuity + 0.75% SANED (21% total). Expat 2% Occupational Hazard paid by employer. 45k SAR cap. |
| 🌐 **Pan-GCC** | **Cost of Living Comparator** | Purchasing Power & Parity Metrics | [`/tools/gcc-cost-of-living-comparator.html`](https://gulfcalc.tech/tools/gcc-cost-of-living-comparator.html) | Multi-city parity engine across Dubai, Abu Dhabi, Riyadh, Jeddah, Doha, Kuwait City, Muscat, Manama. |
| 🇰🇼 **Kuwait** | **Kuwait PIFSS Net Pay Engine** | Amiri Decree No. 61 of 1976 | [`/tools/kuwait-pifss-net-salary-calculator.html`](https://gulfcalc.tech/tools/kuwait-pifss-net-salary-calculator.html) | Kuwaiti citizen 10.5% social security deduction (capped at 3,000 KWD) vs expatriate flat 0% statutory deduction. |
| 🇦🇪 **UAE** | **Golden Visa Property Engine** | Cabinet Resolution No. 65 of 2022 | [`/tools/uae-golden-visa-property-calculator.html`](https://gulfcalc.tech/tools/uae-golden-visa-property-calculator.html) | AED 2,000,000 property equity threshold, 4% DLD fee, 20% mortgage down payment, and net rental yield projection. |
| 🇸🇦 **Saudi Arabia** | **Saudi Dependent Fee & Iqama** | Council of Ministers No. 518/1438H | [`/tools/saudi-dependent-fee-calculator.html`](https://gulfcalc.tech/tools/saudi-dependent-fee-calculator.html) | 400 SAR/mo dependent fee, Jawazat renewal fees, and Maktab Amal commercial levies across quarterly cycles. |
| 🇦🇪 **UAE** | **UAE Overstay Fine Calculator** | ICP & GDRFA Unified Regulations | [`/tools/uae-overstay-fine-calculator.html`](https://gulfcalc.tech/tools/uae-overstay-fine-calculator.html) | Flat 50 AED/day unified tariff, 30-180 day grace period modeling, and mandatory 260 AED airport Out-Pass fees. |
| 🇦🇪 **UAE** | **UAE Emiratisation Penalty** | Cabinet Resolution No. 19/M of 2022 | [`/tools/uae-emiratisation-penalty-calculator.html`](https://gulfcalc.tech/tools/uae-emiratisation-penalty-calculator.html) | MoHRE financial contributions (8,000-9,000 AED/mo) across 20-49 and 50+ staff firms evaluated semi-annually. |
| 🇦🇪 **Dubai** | **Dubai RERA Rent Calculator** | Dubai Decree No. 43 of 2013 | [`/tools/dubai-rera-rent-calculator.html`](https://gulfcalc.tech/tools/dubai-rera-rent-calculator.html) | 0% to 20% rent hike caps based on RERA Rental Index gap and mandatory 90-day written notice compliance. |
| 🇰🇼 **Kuwait** | **Kuwait Family Visa Eligibility** | Ministerial Decision No. 56 of 2024 | [`/tools/kuwait-family-visa-calculator.html`](https://gulfcalc.tech/tools/kuwait-family-visa-calculator.html) | 800 KWD minimum salary rule, degree verification, Dhaman health fees, and PACI Civil ID charges. |
| 🌐 **Pan-GCC** | **AI Contract Clause Checker** | GCC Non-Derogation Doctrines | [`/tools/ai-contract-clause-checker.html`](https://gulfcalc.tech/tools/ai-contract-clause-checker.html) | Interactive client-side review of void terms (visa clawbacks, passport retention, non-compete overreach). |
| 🌐 **Pan-GCC** | **AI Resignation Letter Engine** | Statutory Labor Notice Decrees | [`/tools/ai-resignation-letter-generator.html`](https://gulfcalc.tech/tools/ai-resignation-letter-generator.html) | Drafts formal resignation notices citing exact GCC statutory articles to protect terminal gratuity rights. |

---

## 🏛️ Architectural Principles & Performance Highlights

```
   ┌──────────────────────────────────────────────────────────────┐
   │                 CLOUDFLARE ANYCAST EDGE                      │
   │               300+ Edge Nodes (<30ms TTFB)                   │
   │       Strict Security Headers (CSP, HSTS, X-Frame)           │
   └──────────────────────────────┬───────────────────────────────┘
                                  │
                                  ▼
   ┌──────────────────────────────────────────────────────────────┐
   │                     BROWSER CLIENT RUNTIME                   │
   │   ┌──────────────────────┐        ┌──────────────────────┐   │
   │   │  Semantic HTML5 DOM  │        │   Tailwind/CSS Main  │   │
   │   └──────────┬───────────┘        └──────────┬───────────┘   │
   │              │                               │               │
   │              ▼                               ▼               │
   │   ┌──────────────────────────────────────────────────────┐   │
   │   │         Pure Client-Side Math Calculation Engine     │   │
   │   │   * Zero Network Calls                               │   │
   │   │   * Zero Analytics/Ad Trackers                       │   │
   │   │   * Zero Database Stored PII                         │   │
   │   └──────────────────────────────────────────────────────┘   │
   └──────────────────────────────────────────────────────────────┘
```

### 1. Zero Server Overhead & Zero-PII Privacy
GulfCalc executes 100% of mathematical operations in the client's local browser runtime using lightweight ES6+ JavaScript. User salary figures, service dates, and company financial records **never** touch a remote server, third-party API, or cloud database.

### 2. Edge-Distributed Static Performance
Deployed on Cloudflare Pages over 300+ global Anycast edge locations:
* **Time to First Byte (TTFB):** Under 30ms globally.
* **Asset Footprint:** Pure semantic HTML5 and vanilla CSS/JS. Zero heavy JavaScript framework overhead (No React, Vue, or Angular bundle bloat).
* **Core Web Vitals:** 100/100 performance, accessibility, best practices, and SEO.

### 3. Search & AI Engine Optimization (SEO, GEO, AEO, AIO)
* **Root Machine Manifests:** Native [`/llms.txt`](https://gulfcalc.tech/llms.txt) and [`/llms-full.txt`](https://gulfcalc.tech/llms-full.txt) for direct citation and accurate retrieval by Perplexity, OpenAI Search, Claude, and Gemini.
* **Structured Data Graph:** Valid, hardcoded JSON-LD schemas embedded across every route:
  * `WebApplication` on all 12 calculator pages.
  * `BlogPosting` on all 10 authoritative research articles.
  * `FAQPage` matching on-page accordion content for instant rich snippet generation.
  * `BreadcrumbList` establishing hierarchical navigation across subpaths.
* **AEO 45-Word Answer Blocks:** Precision direct-answer blocks placed directly beneath `<h1>` headers for generative search citation.

### 4. Enterprise Edge Security (`_headers`)
Hardened with enterprise security headers:
```http
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; ...
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## 📂 Repository Directory Structure

```text
gulfcalc-web/
├── _headers                                  # Cloudflare Pages Edge Security Headers
├── .gitignore                                # Git Ignore Directives (Keeps Internal Docs Local)
├── favicon.svg                               # Brand Icon (Slate #0f172a / Emerald #059669 Shield)
├── index.html                                # Main Portal, Interactive Hero & Comparison Matrix
├── about-us.html                             # Platform Methodology, Accuracy & Mission
├── contact-us.html                           # Secure Zero-Backend Corporate Contact Engine
├── privacy-policy.html                       # GDPR, CCPA, and GCC Data Privacy Compliance
├── terms-of-service.html                     # Terms of Service & Non-Reliance Declarations
├── disclaimer.html                           # Statutory Financial & Legal Disclaimers
├── robots.txt                                # Search Engine & AI Crawler Directives
├── sitemap.xml                               # XML Sitemap (All 37 Production Endpoints)
├── llms.txt                                  # Standardized LLM Knowledge Manifest
├── llms-full.txt                             # Deep Context & Formula Manifest for AI Agents
├── README.md                                 # Master Architectural Specification & Open Source Docs
├── assets/
│   ├── css/
│   │   └── main.css                          # Fintech Design System, Utility Tokens & Print Styles
│   └── js/
│       ├── core-calculator.js                # Core Mathematical Kernels & Formatting Helpers
│       └── navigation.js                     # Mobile Drawer, Filter Tabs & Real-Time Search
├── labour-laws/
│   └── index.html                            # Central GCC Labour Laws Comparative Directory
├── tools/
│   ├── kuwait-indemnity-calculator.html      # Kuwait Article 55 / 26 Working Days Engine
│   ├── saudi-end-of-service-calculator.html  # Saudi Articles 84-87 Actual Wage Engine
│   ├── uae-gratuity-calculator.html          # UAE Federal Decree-Law No. 33/2021 Engine
│   ├── qatar-gratuity-calculator.html        # Qatar Law No. 14/2004 Gratuity Engine
│   ├── oman-gratuity-calculator.html         # Oman Royal Decree 53/2023 30-Day Engine
│   ├── bahrain-eosi-calculator.html          # Bahrain SIO 2024 Accruals & 10% VAT Engine
│   ├── uae-corporate-tax-calculator.html     # UAE 9% Corporate Tax & SBR Relief Engine
│   ├── gcc-remittance-fee-calculator.html    # GCC Remittance Hidden FX Spread Engine
│   ├── saudi-gosi-calculator.html            # Saudi GOSI & SANED Contribution Engine
│   ├── gcc-cost-of-living-comparator.html    # 8-City GCC Purchasing Power & Parity Comparator
│   ├── kuwait-pifss-net-salary-calculator.html # Kuwait PIFSS Social Security & Net Pay Engine
│   ├── uae-golden-visa-property-calculator.html # UAE Real Estate Golden Visa Equity Engine
│   ├── saudi-dependent-fee-calculator.html   # Saudi SAR 400/mo Dependent Fee & Maktab Amal Engine
│   ├── uae-overstay-fine-calculator.html     # UAE Flat 50 AED/day Visa Overstay Fine Engine
│   ├── uae-emiratisation-penalty-calculator.html # MoHRE NAFIS Emiratisation Penalty Calculator
│   ├── dubai-rera-rent-calculator.html       # Dubai Decree 43/2013 RERA Rent Hike Cap Calculator
│   ├── kuwait-family-visa-calculator.html    # Kuwait 800 KWD Salary Rule & Dhaman Fee Calculator
│   ├── ai-contract-clause-checker.html       # AI Client-Side GCC Contract Clause Review Engine
│   └── ai-resignation-letter-generator.html  # AI GCC Statutory Resignation Letter Generator
└── blog/
    ├── index.html                            # GCC Legal & Financial Intelligence Blog Hub
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

---

## 💻 Local Development & Preview

Because GulfCalc relies on pure vanilla web standards with zero heavy bundler dependencies, setting up a local preview takes seconds:

### 1. Clone the Repository
```bash
git clone https://github.com/Sheharyar-ans/gulfcalc.git
cd gulfcalc
```

### 2. Launch Local Static Server
You can preview the platform using any static web server:

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Node.js (`npx serve`):**
```bash
npx serve . -p 8000
```

**Using VS Code Live Server:**
Right-click on `index.html` and select **"Open with Live Server"**.

Visit `http://localhost:8000` in your browser.

---

## 👨‍💻 Designed, Built & Maintained by Sheharyar Siraj

<div align="center">

### **Sheharyar Siraj**
*Principal Software Architect, Frontend Engineer & FinTech Systems Specialist*

[![Portfolio Website](https://img.shields.io/badge/Portfolio-sheharyarsiraj.com-059669?style=for-the-badge&logo=googlechrome&logoColor=white)](https://sheharyarsiraj.com/)
[![GitHub Profile](https://img.shields.io/badge/GitHub-Sheharyar--ans-0f172a?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sheharyar-ans)
[![Project Platform](https://img.shields.io/badge/Platform-gulfcalc.tech-0284c7?style=for-the-badge&logo=safari&logoColor=white)](https://gulfcalc.tech)

<p align="center">
  <b>Specializing in high-performance web systems, fintech calculation engines, and search-optimized digital architecture.</b><br>
  Full ownership of architectural design, statutory legal modeling, UX/UI design system, and deployment pipeline for GulfCalc.
</p>

👉 **[Explore Full Engineering Portfolio at sheharyarsiraj.com](https://sheharyarsiraj.com/)**

</div>

---

## 📄 Legal Disclaimers & Licensing

### Open-Source License
This project is open-sourced under the terms of the **[MIT License](LICENSE)**.

### Statutory Disclaimer
GulfCalc provides automated computational estimates for informational and preliminary planning purposes. Calculations are based on public statutes, ministerial decisions, and decree-laws from the respective GCC member states. However, GulfCalc is not an authorized legal practice, accredited auditing firm, or government agency. These utilities do not constitute formal legal counsel or certified financial advice. Formal severance settlements and corporate tax determinations must be verified with licensed legal counsel, authorized chartered accountants, or the respective Ministry of Human Resources / Federal Tax Authority.