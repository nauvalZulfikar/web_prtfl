# AGENTS.md — Nauval Zulfikar Portfolio Website

## Project Goal
Build a production-ready personal portfolio website for Nauval Zulfikar, a Senior Data Scientist.
Deploy target: **Vercel**. Stack: **Next.js 14 (App Router) + Tailwind CSS + TypeScript**.

---

## Aesthetic Direction
**Refined editorial minimalism** — think high-end consultancy or a serious research publication, not a startup landing page.

- Typography: Use **Geist** (from Vercel/next/font) for body + **Playfair Display** (Google Fonts) for display headings. This pairing signals intelligence and taste.
- Color palette: Near-white background (`#FAFAF8`), near-black text (`#1A1A18`), single accent color warm amber (`#C17D3C`) for highlights only — used sparingly on hover states and metric numbers.
- No gradients. No hero illustrations. No stock icons. Whitespace is the design.
- Subtle motion: staggered fade-in on scroll for sections using Intersection Observer. No bouncing, no parallax.
- One memorable detail: a thin `1px` vertical timeline line running through the Experience section.

---

## Tech Stack
```
Next.js 14 (App Router)
TypeScript
Tailwind CSS
next/font (Geist + Playfair Display)
Framer Motion (for scroll-triggered fade-ins only — keep it minimal)
```

No UI component libraries (no shadcn, no MUI). Hand-craft every component.

---

## Project Structure
```
/
├── app/
│   ├── layout.tsx          # Root layout, font setup, metadata
│   ├── page.tsx            # Main single-page composition
│   └── globals.css         # Tailwind base + custom CSS vars
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Metrics.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts             # All CV data as typed constants (no hardcoding in components)
├── public/
│   └── (empty — no images needed)
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Data — lib/data.ts
Define all content as typed TypeScript constants. Components must import from here, never hardcode strings.

```typescript
export const profile = {
  name: "Nauval Zulfikar",
  title: "Senior Data Scientist",
  location: "Bandung, Indonesia",
  visa: "Eligible to work in the UK (Graduate Visa)",
  email: "zulfikar.nauval1998@gmail.com",
  linkedin: "https://linkedin.com/in/nauval-zulfikar/",
  github: "https://github.com/NauvalZulfikar",
  summary: "5+ years building ML models, credit risk systems, and NLP pipelines in regulated financial environments. MSc Business Analytics (Aston University, 1:1 First Class).",
}

export const metrics = [
  { value: "45%", label: "Faster project delivery" },
  { value: "80%", label: "Manual workload reduced" },
  { value: "5.3%", label: "Investment return uplift" },
  { value: "40%", label: "Click-through rate increase" },
]

export const skills = {
  core: ["Python", "SQL", "Machine Learning", "NLP / LLM", "Credit Risk Modeling", "A/B Testing", "AWS", "PySpark"],
  supporting: ["Docker", "RAG", "Causal Inference", "ETL Pipelines", "Power BI", "PyTorch", "Bayesian Statistics", "Model Governance", "Fraud Detection", "Time Series Analysis"],
}

export const experience = [
  {
    company: "Public Works & Spatial Planning Dept. (PUTR)",
    type: "Government",
    role: "Data Scientist & Project Manager",
    location: "Bandung, Indonesia",
    period: "Sep 2022 – Present",
    impact: ["45% faster delivery", "20% data efficiency gain"],
    description: "Led a team to automate ETL pipelines and build self-service dashboards, replacing manual data entry for regional building development tracking. Embedded data governance and privacy practices across all workflows.",
    tools: ["Python", "PySpark", "AWS", "Power BI", "Agile", "Jira"],
  },
  {
    company: "Bank Muamalat Indonesia",
    type: "Corporation",
    role: "Lead Data Scientist — Leadership Development Program",
    location: "Jakarta, Indonesia",
    period: "Nov 2019 – Aug 2022",
    impact: ["+5.3% investment return"],
    description: "Developed NLP models for credit portfolio analysis and risk scoring in a licensed banking environment. Applied clustering for market segmentation, led A/B testing, and maintained model validation aligned with regulatory and audit frameworks.",
    tools: ["AWS", "NLP", "SQL", "PySpark", "Docker", "NoSQL"],
  },
  {
    company: "Syncwell",
    type: "Start-up (Remote, UK)",
    role: "Marketing Data Scientist",
    location: "Birmingham, UK",
    period: "Jul – Sep 2024",
    impact: ["40% CTR increase", "22% follower growth"],
    description: "Built predictive ML models, ran A/B tests, and implemented automated campaign triggers to improve customer journey and engagement.",
    tools: ["Python", "SQL", "Tableau", "Salesforce"],
  },
  {
    company: "PCOS Challenge",
    type: "Non-Profit (Remote, UK)",
    role: "Strategic Data Scientist Specialist",
    location: "Birmingham, UK",
    period: "Jun – Aug 2024",
    impact: ["80% manual workload reduction"],
    description: "Developed a customer attribution model and automated report text extraction. Created interactive data visualisations to surface patient financial concerns.",
    tools: ["Python", "Streamlit", "Power BI", "PySpark", "Hadoop"],
  },
]

export const projects = [
  {
    title: "CV–Job Desc Suitability Checker",
    description: "DeBERTa-v3-based job matching tool with RAG retrieval and end-to-end ML pipeline orchestration. Outperforms traditional ATS benchmarks on candidate-job relevance.",
    tags: ["NLP", "RAG", "DeBERTa", "Python"],
    github: "https://github.com/NauvalZulfikar",
    date: "Nov 2024",
  },
  {
    title: "Machine Scheduler Automation",
    description: "Streamlit-based production scheduling system with interactive Gantt charts and real-time machine utilisation dashboards. Optimised production planning by 63%.",
    tags: ["Python", "Streamlit", "Workflow Orchestration"],
    github: "https://github.com/NauvalZulfikar",
    date: "Jan 2025",
  },
  {
    title: "Sport Footwear Sales Prediction",
    description: "Comparative analysis of multiple ML models for sales forecasting performance. Published January 2025.",
    tags: ["ML", "Forecasting", "Python"],
    github: "https://github.com/NauvalZulfikar",
    date: "Jan 2025",
    isPublication: true,
  },
]

export const education = [
  {
    school: "Aston University",
    degree: "MSc Business Analytics",
    grade: "1:1 First Class",
    location: "Birmingham, UK",
    period: "2023 – 2024",
    notes: [
      "Full-tuition Aston Enterprise Scholarship 2023",
      "Pitching Contest 2024 runner-up",
      "Dissertation: Enhancing Supply Chain Information Sharing via Blockchain",
      "Distinctions: Effective Management Consultancy, Decision Models, Software Analytics",
    ],
  },
  {
    school: "Ritsumeikan Asia Pacific University",
    degree: "BBA Innovation & Economics",
    grade: null,
    location: "Beppu, Japan",
    period: "2016 – 2019",
    notes: [
      "APU 50% Tuition Reduction Scholarship",
      "JASSO Scholarship",
      "Distinctions: Business Data Analysis, Consumer Behaviour, Marketing Research",
    ],
  },
]
```

---

## Component Specs

### Nav.tsx
- Sticky top, `backdrop-blur-sm`, thin bottom border.
- Left: name in small caps. Right: links to `#experience`, `#projects`, `#education`, `#contact`.
- On mobile: hide nav links, keep name only (no hamburger needed — this is a portfolio, not an app).
- Active section highlighting via scroll detection with `IntersectionObserver`.

### Hero.tsx
- Full viewport height minus nav.
- Left-aligned text, vertically centered.
- Hierarchy: visa badge (small pill) → name (large Playfair Display) → title → summary → CTA buttons.
- Two CTAs: "Get in touch" (filled) + "GitHub" (outline).
- Subtle detail: a small dot or dash separator between location and visa status.

### Metrics.tsx
- 4-column grid on desktop, 2-column on mobile.
- Each card: metric number in amber accent color (large, Playfair Display) + label in muted gray.
- No borders on cards — use tight spacing and a subtle background tint (`#F5F4F0`) to differentiate.
- Section header: "Impact by numbers" in small-caps label style.

### Skills.tsx
- Two groups: "Core" and "Supporting".
- Core skills: slightly larger pill tags with a thin border.
- Supporting: smaller, muted pills.
- No icons. Typography does the work.

### Experience.tsx
- Vertical timeline layout. A `1px` vertical line on the left, with a small circle marker at each entry.
- Each entry: company name + type badge → role → period → impact pills (amber) → description → tool tags.
- Impact pills must visually stand out — use amber text on a warm tint background.
- Timeline line should be `#E8E5DF` (light warm gray).

### Projects.tsx
- 3-column grid on desktop, 1-column on mobile.
- Cards with thin border (`1px solid #E8E5DF`), hover: border darkens slightly.
- Each card: title → description → tag pills → GitHub link arrow.
- Publication badge on the Sales Prediction project.

### Education.tsx
- Two entries, clean list. No cards needed.
- School name in medium weight, degree + grade inline, notes as a small bulleted list in muted text.
- Scholarship notes should be visually distinct (italic or amber text) — these are proof of merit, make them readable.

### Footer.tsx
- Single line: email on left, LinkedIn + GitHub links on right.
- Minimal. Thin top border.

---

## Tailwind Config
Extend the default theme with:
```typescript
theme: {
  extend: {
    colors: {
      background: "#FAFAF8",
      ink: "#1A1A18",
      muted: "#6B6B67",
      border: "#E8E5DF",
      accent: "#C17D3C",
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)"],
      display: ["var(--font-playfair)"],
    },
  },
}
```

---

## Animations
Use Framer Motion `motion.div` with `initial={{ opacity: 0, y: 20 }}` and `whileInView={{ opacity: 1, y: 0 }}` for section entrances.
- `viewport={{ once: true, margin: "-80px" }}`
- `transition={{ duration: 0.5, ease: "easeOut" }}`
- Stagger children in grids using `transition={{ delay: index * 0.08 }}`

Keep it subtle. Do NOT add hover animations to every element — reserve motion for scroll entrances and link underlines.

---

## SEO & Metadata — app/layout.tsx
```typescript
export const metadata = {
  title: "Nauval Zulfikar — Senior Data Scientist",
  description: "Senior Data Scientist with 5+ years in ML, credit risk, and NLP. MSc Business Analytics (Aston, 1:1). Available to work in the UK.",
  openGraph: {
    title: "Nauval Zulfikar — Senior Data Scientist",
    description: "Building ML models, credit risk systems, and NLP pipelines in regulated financial environments.",
    url: "https://nauvalzulfikar.vercel.app",
    type: "website",
  },
}
```

---

## Responsive Breakpoints
- Mobile-first. Base styles = mobile.
- `md:` (768px) for 2-column layouts.
- `lg:` (1024px) for 3-column grids and full desktop layout.
- Max content width: `max-w-4xl mx-auto px-6`.

---

## Quality Checklist (Claude Code must verify before finishing)
- [ ] All content sourced from `lib/data.ts` — no hardcoded strings in components
- [ ] No inline styles — Tailwind classes only (except Framer Motion transform values)
- [ ] Lighthouse accessibility score ≥ 90 (check heading hierarchy, alt text, color contrast)
- [ ] `next/link` used for all internal navigation
- [ ] No `console.log` left in production code
- [ ] Runs without errors with `npm run build`
- [ ] All GitHub links point to `https://github.com/NauvalZulfikar` (update individual repo URLs when available)
- [ ] `vercel.json` not needed — zero-config deploy works with Next.js out of the box

---

## How to Run
```bash
npx create-next-app@latest nauval-portfolio --typescript --tailwind --app --no-src-dir
cd nauval-portfolio
npm install framer-motion
# Copy all component files and lib/data.ts
npm run dev
```

## Deploy
```bash
# Push to GitHub, then connect repo to Vercel dashboard
# Or:
npx vercel --prod
```
