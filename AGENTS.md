# Mandatory Website Quality, SEO & Anti-AI Compliance Guidelines

These rules are strictly enforced across the entire "GulfCalc" repository (`gulfcalc.tech`). Every single update, edit, hotfix, or new page addition MUST pass all criteria across these 6 phases without exception.

---

## Phase 1: Editorial & Anti-AI Humanization Protocol

1. **Absolute Ban on Em-Dashes (`—`, `–`, `--`)**:
   - Zero em-dashes, en-dashes, or double hyphens anywhere in visible text, headings, button labels, image `alt` attributes, or `<meta>` tags.
   - Replace with standard commas, periods, colons, or parentheses.

2. **Zero Banned AI Buzzwords**:
   - None of the following 22 AI clichés may appear anywhere in copy, headings, or meta tags:
     - `delve` / `delving`
     - `tapestry`
     - `in today's fast-paced world` / `in today's digital landscape`
     - `furthermore`
     - `testament to` / `a beacon of`
     - `pivotal`
     - `vital` / `crucial`
     - `robust`
     - `seamless` / `seamlessly`
     - `plethora` / `myriad`
     - `game-changer`
     - `foster` / `fostering`
     - `holistic`
     - `leverage` / `leveraging`
     - `empower` / `empowering`

3. **Eliminate Forced Triads & Formulaic Conclusions**:
   - No forced three-part adjective/verb chains (e.g., "empowering, protecting, and transforming").
   - No cliché synthetic conclusions starting with "In conclusion", "Ultimately", or "As we navigate".

4. **Authoritative Subject-Matter Expert Voice**:
   - Write from the perspective of a seasoned GCC legal and financial analyst.
   - Active, clear sentences with direct statutory citations.

---

## Phase 2: SEO, GEO, AIO & AEO Constraints

1. **Single `<h1>` Heading**:
   - Exactly one `<h1>` per page, featuring the primary target keyword naturally.
2. **45-Word Direct Answer Capsule**:
   - Placed directly beneath the `<h1>` inside `.direct-answer-callout`.
   - Word count must be strictly between 40 and 48 words (target 45 words).
   - Directly answers search intent without introductory fluff.
3. **Strict Heading Hierarchy**:
   - Strict `H1` -> `H2` -> `H3` sequence.
   - Never skip heading levels (e.g., jumping from `H2` directly to `H4` is prohibited).
4. **Metadata Standards**:
   - Title tag: 50 to 60 characters.
   - Meta description: 140 to 155 characters.
   - Self-referential `<link rel="canonical">` on every page.
   - Complete OpenGraph (`og:title`, `og:description`, `og:url`, `og:image`) and Twitter card tags.

---

## Phase 3: Structured Data & Schema Markup

1. **Valid JSON-LD**:
   - Valid syntax without escaping errors.
2. **Schema Coverage**:
   - `WebApplication` schema on interactive calculators.
   - `BlogPosting` schema on statutory articles.
   - `BreadcrumbList` on all hierarchical sub-pages.
3. **1:1 FAQ Parity**:
   - Every `Question` and `Answer` in `FAQPage` schema must match the visible DOM text word-for-word.

---

## Phase 4: Content Depth & Statutory Authority

1. **Word Count Baselines**:
   - Articles: 1,300 to 1,600+ words.
   - Calculators: 1,200 to 1,500+ words of explanatory legal and financial analysis below the interactive tool.
2. **Real Statutory Citations**:
   - Must cite official Royal Decrees, Federal Laws, and Ministerial Decisions (e.g., UAE Law No. 33 of 2021, Saudi Royal Decree No. M/51, Bahrain Law No. 36 of 2012, Oman Royal Decree No. 52 of 2023).
3. **Comparison Tables**:
   - Clear tables with explicit `<th>` headers comparing brackets, rates, and exemptions.
4. **Keyword-Rich Visual Media**:
   - Relevant editorial imagery with descriptive `alt` tags and explicit `width`, `height`, `loading="lazy"`, and `decoding="async"`.

---

## Phase 5: Technical, UI/UX & Responsive Standards

1. **Touch Targets**:
   - All interactive controls, inputs, and buttons must meet minimum dimensions of 44px x 44px.
2. **Court-Ready Print Styling**:
   - `@media print` rules on calculation results and legal tools, cleanly hiding navigation, sidebar, and footers.
3. **Internal Linking Mesh**:
   - Minimum 4 contextual internal links per page connecting tools, directories, and blog guides.

---

## Phase 6: Architecture, Manifests & Verification

1. **Manifest Synchronization**:
   - Every new URL must be added to `sitemap.xml`, `llms.txt`, and `llms-full.txt`.
2. **Automated Verification**:
   - Run `python scripts/audit_compliance.py` after every modification to verify 100% compliance before committing and pushing to `main`.
