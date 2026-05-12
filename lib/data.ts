export const profile = {
  name: "Nauval Zulfikar",
  title: "Senior Data Scientist · Operations Research & Simulation",
  subtitle: "Process automation in industry · Digital Twin research in academia",
  location: "Bandung, Indonesia · GMT+7",
  availability: "Available for UK, EU, and remote contracts · PhD applicant (Aston, p196342)",
  email: "zulfikar.nauval1998@gmail.com",
  linkedin: "https://linkedin.com/in/nauval-zulfikar/",
  github: "https://github.com/NauvalZulfikar",
  greeting: "Hi, I'm Nauval.",
  summary:
    "Two practices share one toolchain. In industry I find workflows where a smart person spends half their week copy-pasting between systems and replace the manual parts with software that runs on its own — across a licensed bank, a regional government, and UK start-ups. In research I build Digital Twin prototypes for behaviourally-responsive urban logistics, combining agent-based modelling, discrete-event simulation, MILP optimisation, and LLM-generated adaptive decision rules. MSc Business Analytics (Aston, 1:1 First Class) and prospective PhD candidate at Aston Business School.",
};

export const trustStrip = {
  worked: [
    "Bank Muamalat",
    "PUTR Bandung",
    "Syncwell (UK)",
    "PCOS Challenge (UK)",
    "Aston University",
  ],
  output: [
    { value: "18", label: "systems live in production" },
    { value: "5", label: "industries served" },
    { value: "4", label: "countries delivered in" },
    { value: "5+ yrs", label: "under audit-grade rules" },
  ],
};

export const about = {
  heading: "How I got here, and how I work",
  paragraphs: [
    "I started in regulated banking, where every model had to pass audit. That's where I learned automation has to be reliable first, clever second — and that the boring part of the job (governance, monitoring, hand-over) is what makes it last.",
    "Then 5+ years across Indonesian government, UK startups, and multi-site retail kept showing me the same pattern: a smart person spending half their week on copy-paste work the system should be doing. I scope tight, ship fast, and hand over clean. I'm allergic to dressed-up strategy decks — I prefer working software your team can use on Monday.",
    "What I'm building toward: a small portfolio of operational systems that prove AI implementation done right looks boring on the outside and reliable on the inside. If that resonates with how you think about your operations, I'd like to talk.",
  ],
  signOff: "— Nauval",
};

export const leadMagnet = {
  badge: "Free guide",
  title:
    "5 manual workflows in your team that pay back automation in 90 days",
  description:
    "A 12-page guide based on diagnostic sprints I've run for banks, government, and retail ops. Spot the workflows worth automating, score the ROI, and sequence the build so you ship value first — not exploration.",
  bullets: [
    "Diagnostic checklist — 12 questions to find the workflows worth automating",
    "ROI calculation worksheet, including the costs people forget",
    "Common automation traps in regulated industries (and how to avoid them)",
    "A 90-day sequencing template so you ship value before exploration",
  ],
  cta: "Send me the guide",
  privacyNote:
    "One email. No newsletter spam. I'll only follow up if you reply with a question.",
};

export type StartHerePick = {
  href: string;
  audience: string;
  pickLabel: string;
  reason: string;
};

export const startHere: StartHerePick[] = [
  {
    href: "/projects/dpmbg",
    audience: "running operations across multiple sites or branches",
    pickLabel: "DPMBG",
    reason:
      "Replaced spreadsheet juggling for Indonesia's school nutrition programme — one system handles menus, deliveries, and variance reports across multiple kitchens, with each kitchen's data kept separate.",
  },
  {
    href: "/projects/sibedas",
    audience: "tired of static weekly reports landing in your inbox",
    pickLabel: "Sibedas PBG",
    reason:
      "Built for Bandung's permits department — leadership now asks the system 'how many permits last week?' in plain language instead of waiting for an analyst to build the chart.",
  },
  {
    href: "/projects/property-ai",
    audience: "tracking listings or competitor data scattered across many sites",
    pickLabel: "Bandung Property AI",
    reason:
      "Pulls real-estate listings from across the Bandung market into one place, drafts marketing copy in Indonesian automatically, and surfaces direct-from-owner stock that brokers usually bury.",
  },
];

export const metrics = [
  { value: "80%", label: "of manual work eliminated" },
  { value: "63%", label: "better production planning" },
  { value: "45%", label: "faster project delivery" },
  { value: "40%", label: "more campaign engagement" },
];

export type SkillCluster = {
  heading: string;
  blurb: string;
  items: string[];
};

export const skillClusters: SkillCluster[] = [
  {
    heading: "Process Automation",
    blurb:
      "Replacing manual workflows with software that runs on its own — from data collection to daily operations. The boring stuff your team shouldn't be doing.",
    items: [
      "Data pipelines",
      "Scheduled automation",
      "Web data collection",
      "Background job processing",
      "API & system integrations",
      "Multi-branch / multi-tenant systems",
      "Tenant data isolation",
      "Server deployment",
    ],
  },
  {
    heading: "AI Implementation & Development",
    blurb:
      "Practical AI features shipped to production — including AI that runs entirely on your own computers when your data can't leave the building.",
    items: [
      "OpenAI / Anthropic APIs",
      "Custom AI model fine-tuning",
      "Knowledge-grounded AI assistants",
      "On-premise / offline AI",
      "Computer vision",
      "Text classification",
      "AI agents",
      "Document search",
    ],
  },
  {
    heading: "Analytics & Decision Systems",
    blurb:
      "Turning raw data into something leadership actually opens — dashboards, forecasts, and ask-it-in-plain-language layers over your own data.",
    items: [
      "SQL · Python · PySpark",
      "Ask-in-plain-language analytics",
      "Dashboards (Power BI, custom)",
      "Forecasting & time-series",
      "Controlled experiments (A/B)",
      "What-caused-what analysis",
      "Audit-grade model governance",
      "AWS",
    ],
  },
  {
    heading: "Research & Simulation Methods",
    blurb:
      "Hybrid modelling stack used in my Aston PhD application work (Digital Twin for crowd-shipping) — applicable equally to industrial process simulation and academic research.",
    items: [
      "Agent-Based Modelling (mesa)",
      "Discrete-Event Simulation (simpy)",
      "Digital Twin architecture",
      "Mixed-Integer Linear Programming (Pyomo · scipy.optimize.milp)",
      "Discrete choice modelling (MNL · Mixed Logit · Biogeme)",
      "AnyLogic (in progress)",
      "RAG over behavioural literature",
      "Causal inference · Bayesian methods",
    ],
  },
];

export const experience = [
  {
    company: "Public Works & Spatial Planning Dept. (PUTR)",
    type: "Government",
    role: "Automation & Analytics Lead",
    location: "Bandung, Indonesia",
    period: "Sep 2022 – Present",
    impact: ["45% faster delivery", "20% data efficiency gain"],
    description:
      "Replaced manual spreadsheet workflows across building permits, small-business, tourism, and spatial-planning data. Architected Sibedas — a platform that automatically pulls data from the national permits portal, syncs both ways with Google Sheets so non-technical staff keep using familiar tools, and lets leadership ask questions in plain language instead of waiting for weekly reports.",
    tools: ["Laravel", "Python", "PySpark", "AWS", "Power BI", "OpenAI API", "Docker"],
  },
  {
    company: "Bank Muamalat Indonesia",
    type: "Corporation",
    role: "Data Scientist — Leadership Development Program",
    location: "Jakarta, Indonesia",
    period: "Nov 2019 – Aug 2022",
    impact: ["+5.3% investment return"],
    description:
      "Built AI tools that read text data to assess credit risk inside a licensed bank — every step audit-ready and aligned with regulator requirements. Ran controlled experiments and customer segmentation under formal model-governance rules.",
    tools: ["AWS", "NLP", "SQL", "PySpark", "Docker", "NoSQL"],
  },
  {
    company: "Syncwell",
    type: "Start-up (Remote, UK)",
    role: "Marketing Automation Contractor",
    location: "Birmingham, UK",
    period: "Jul – Sep 2024",
    impact: ["40% CTR increase", "22% follower growth"],
    description:
      "Set up automated marketing triggers and AI-driven customer scoring across the customer journey. Built a controlled-experiment system inside Salesforce so the marketing team could test ideas without waiting on engineering.",
    tools: ["Python", "SQL", "Tableau", "Salesforce"],
  },
  {
    company: "PCOS Challenge",
    type: "Non-Profit (Remote, UK)",
    role: "Analytics Automation Contractor",
    location: "Birmingham, UK",
    period: "Jun – Aug 2024",
    impact: ["80% manual workload reduction"],
    description:
      "Automated extraction of key information from PDF reports and built a model that traced which channels actually brought patients in — replacing manual reconciliation. Interactive dashboards surfaced patient financial-concern patterns the spreadsheet workflow couldn't catch.",
    tools: ["Python", "Streamlit", "Power BI", "PySpark", "Hadoop"],
  },
];

export type ProjectStatus = "production" | "in-progress" | "research" | "concept" | "publication";
export type ProjectTier = 1 | 2 | 3;

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  tier: ProjectTier;
  status: ProjectStatus;
  role: string;
  tags: string[];
  stack: string[];
  links: {
    live?: string;
    github?: string;
    paper?: string;
    demo?: string;
    kaggle?: string;
    /** Loom share, YouTube watch, Vimeo, or raw mp4. Normalised to embed at render time. */
    video?: string;
  };
  problem: string;
  approach: string[];
  outcome: string[];
  highlights?: string[];
};

export const projects: Project[] = [
  // ─── Tier 1 — Featured Research (Aston PhD application portfolio) ──
  {
    slug: "mini-digital-twin",
    title: "Mini Digital Twin — Integrated Passenger-Freight Transport",
    subtitle:
      "Three-layer Digital Twin prototype for behaviourally-responsive crowd-shipping: FastAPI mock-IoT data layer, mesa agent-based + simpy discrete-event simulation, Streamlit dashboard with interactive disruption injection. Built for Aston PhD application p196342.",
    year: "May 2026",
    tier: 1,
    status: "research",
    role: "Solo builder",
    tags: ["Digital Twin", "Agent-Based Modelling", "Discrete-Event Simulation", "Research"],
    stack: [
      "Python",
      "FastAPI",
      "mesa (ABM)",
      "simpy (DES)",
      "Streamlit",
      "folium",
      "plotly",
      "Pydantic",
    ],
    links: { github: "https://github.com/nauvalZulfikar/Mini-Digital-Twin" },
    problem:
      "The Aston PhD project description (p196342) calls for a Digital Twin framework that integrates technical IPFT operations with behavioural responsiveness under disruption. No publicly available reference architecture demonstrates this hybrid simulation pattern at scale.",
    approach: [
      "Data layer: FastAPI mock-IoT (WebSocket bus telemetry every 5s + REST parcel demand)",
      "Simulation layer: mesa-based passenger agents with detour/reward/trust decision rules + simpy-based freight terminal queueing",
      "Dashboard layer: Streamlit multi-page (Live Map, KPIs, Disruption Lab, About) with live folium map + plotly time series",
      "Interactive disruption injection: heavy rain (bus speed -60%), bus breakdown (capacity -30%), parcel surge (demand ×2.5)",
    ],
    outcome: [
      "Smoke-tested: 45% acceptance rate over 20 ticks · 62% terminal utilisation",
      "12 files, 1045 lines, publicly available on GitHub",
      "Referenced as the architectural prototype of Phase 1 in the PhD research statement",
    ],
    highlights: [
      "Mirrors Sajadi & Al-Bazi's hybrid DES + ABM supervisory methodology",
      "Disruption Lab makes behavioural-operational response observable in real time",
    ],
  },
  {
    slug: "llm-shipper-profiles",
    title: "LLM Shipper Profiles — Adaptive Decision-Rule Generation",
    subtitle:
      "End-to-end system that generates literature-grounded crowd-shipper decision rules from traveller profiles, using RAG over a behavioural literature knowledge base + gpt-4o-mini. Direct implementation of the methodology named verbatim in the Aston PhD project description.",
    year: "May 2026",
    tier: 1,
    status: "research",
    role: "Solo builder",
    tags: ["LLM", "RAG", "Behavioural Modelling", "Research"],
    stack: [
      "Python",
      "OpenAI gpt-4o-mini",
      "sentence-transformers",
      "scikit-learn (TF-IDF)",
      "Pydantic",
      "Jupyter",
    ],
    links: { github: "https://github.com/nauvalZulfikar/LLM-Shipper-Profiles-" },
    problem:
      "The Aston PhD posting calls for 'use of Large Language Models (LLMs) to generate adaptive user profiles and decision rules' — a methodology with no public reference implementation. Existing crowd-shipping decision models rely on fixed-utility discrete choice, missing the heterogeneity LLMs can capture.",
    approach: [
      "Pydantic schemas for TravellerProfile, ParcelRequest, DecisionRule",
      "Curated knowledge base of 10 chunks from Punel & Stathopoulos (2017), Archetti et al. (2016), Le et al. (2019), Sampaio et al. (2020)",
      "RAG retriever (sentence-transformers cosine + sklearn TF-IDF fallback)",
      "LLM generator (gpt-4o-mini) producing literature-cited DecisionRule JSON with reasoning",
      "Dual-mode design: deterministic rule-based fallback when no API key, so reviewers can rerun offline",
    ],
    outcome: [
      "13 files, 1449 lines, publicly available on GitHub",
      "Demo notebook: 5 walkthrough examples + aggregate threshold distribution",
      "Integration hook into Mini-Digital-Twin agent-based simulation layer",
    ],
    highlights: [
      "Built before submission to demonstrate the methodology rather than claim it",
      "Repurposes the November 2024 CV-JD Suitability Checker codebase — proves the architecture",
    ],
  },
  {
    slug: "vrp-milp-crowdshipping",
    title: "VRPOD MILP — Vehicle Routing with Occasional Drivers",
    subtitle:
      "Mixed-Integer Linear Programming formulation of the Vehicle Routing Problem with Occasional Drivers (Archetti et al. 2016), solved with scipy.optimize.milp (HiGHS). On a toy 8-customer / 2-truck / 3-shipper instance, crowd-shipping reduces total cost by 38.5%.",
    year: "May 2026",
    tier: 1,
    status: "research",
    role: "Solo builder",
    tags: ["MILP", "Optimisation", "Operations Research", "Research"],
    stack: [
      "Python",
      "scipy.optimize.milp (HiGHS)",
      "numpy",
      "matplotlib",
      "networkx",
      "Jupyter",
    ],
    links: { github: "https://github.com/nauvalZulfikar/VRP-MILP" },
    problem:
      "The Aston PhD posting names 'optimisation' as an essential requirement. The Archetti, Savelsbergh & Speranza (2016) VRPOD is the canonical formal model for crowd-shipping, but the reference implementation is not publicly available.",
    approach: [
      "Decision variables: y[m,c] for occasional driver m delivers customer c; z[k,c] for truck k delivers customer c",
      "Objective: minimise truck cost + crowd-shipper compensation, with capacity constraints + detour pre-processing",
      "Solver: scipy.optimize.milp (HiGHS branch-and-bound) — no external solver install needed",
      "Visualisation: side-by-side baseline vs with-crowd-shippers route plots with savings annotation",
    ],
    outcome: [
      "13 files, 793 lines, publicly available on GitHub",
      "Toy instance result: baseline cost 63.84 → with crowd-shippers 39.29 = 38.5% savings",
      "Phase B extension plan: explicit MTZ subtour-elimination, scale to 20-50 customers",
    ],
    highlights: [
      "Replicates the foundational paper of the entire crowd-shipping literature",
      "Demonstrates OR maturity through LaTeX-rendered formulation in README",
    ],
  },
  {
    slug: "crowd-shipping-abm-sweep",
    title: "Crowd-Shipping ABM — 450-Run Behavioural Sweep",
    subtitle:
      "Agent-based simulation of crowd-shipper acceptance with a systematic parameter sweep characterising the reward-supply response surface. 450 simulations: 9 reward levels × 5 supply densities × 10 replications. Auto-generated findings cite Punel & Stathopoulos (2017) and Le et al. (2019).",
    year: "May 2026",
    tier: 1,
    status: "research",
    role: "Solo builder",
    tags: ["Agent-Based Modelling", "Behavioural Simulation", "Research"],
    stack: [
      "Python",
      "numpy",
      "pandas",
      "matplotlib",
      "seaborn",
      "tqdm",
    ],
    links: { github: "https://github.com/nauvalZulfikar/Crowd-Shipping-ABM-" },
    problem:
      "The crowd-shipping literature posits non-linear reward elasticity (Punel & Stathopoulos 2017) and supply-side matching effects (Le et al. 2019), but most agent-based studies focus on a single parameter axis. A research-grade ABM should systematically map the joint reward × supply response surface.",
    approach: [
      "Pure-Python ABM: Passenger, Parcel, Platform agent classes with detour/reward/trust decision rules",
      "Sweep grid: reward_mean ∈ {10..50 step 5}, n_passengers ∈ {20..100 step 20}, 10 reps each = 450 runs",
      "Auto-generated findings.md links empirical patterns to Punel & Stathopoulos (2017) and Le et al. (2019)",
      "Visualisation: heatmap + error-bar reward curves per supply level",
    ],
    outcome: [
      "12 files, 1075 lines, publicly available on GitHub",
      "Supply effect: acceptance rises from 45.34% (n_pax=20) to 79.80% (n_pax=100) — 34pp spread",
      "High-high corner (reward ≥ £40, n_pax ≥ 80): 78% acceptance ceiling",
    ],
    highlights: [
      "450 simulations + auto-cited findings = research-grade rigour signal",
      "Pure Python, no exotic dependencies — fully reproducible",
    ],
  },

  // ─── Tier 1 — Featured Industry ────────────────────────────
  {
    slug: "dpmbg",
    title: "DPMBG — Dapur Pintar MBG",
    subtitle:
      "Replaced spreadsheet juggling for the school nutrition programme — one system handles menu planning, delivery routing, and variance reports across multiple kitchens. Each kitchen's data stays cleanly separate, verified by 96 automated checks.",
    year: "2026",
    tier: 1,
    status: "production",
    role: "Solo architect & developer",
    tags: ["Multi-Branch Operations", "Optimisation", "Mobile-Ready App", "Government"],
    stack: [
      "FastAPI",
      "SQLAlchemy",
      "Supabase Postgres",
      "Pydantic",
      "JWT",
      "React 19",
      "Vite 7",
      "Tailwind 4",
      "Recharts",
      "PWA",
      "Server-Sent Events",
      "Docker",
      "Pytest",
      "Nginx",
    ],
    links: { live: "https://dpmbg.aureonforge.com" },
    problem:
      "Indonesia's school nutrition programme serves millions of meals every day, yet kitchen operators run on spreadsheets — menu planning, ingredient variance, delivery routing, and coordination across multiple kitchens all break the moment one operator runs more than a single kitchen.",
    approach: [
      "One platform handling three layers — the programme, each operator (foundation or company), and each kitchen — with cleanly separated permissions so no one sees data they shouldn't",
      "Built-in optimisation engines for menu planning and delivery routing, instead of manual scheduling on a whiteboard",
      "Automated price-checking for ingredients, refreshed on a schedule, so costs stay current without manual lookups",
      "QR-code scanning for receiving deliveries, plus thermal-printer support for kitchen tickets",
      "Live updates push to a mobile-friendly dashboard that installs on operator phones and works offline",
      "96 automated tests across realistic multi-kitchen scenarios — verifying every kitchen's data stays separate, even with mixed foundation + company operators sharing the platform",
    ],
    outcome: [
      "Live in production for the pilot kitchen (SPPG Paseh)",
      "Variance reporting replaces manual reconciliation between planned menus and actual deliveries",
      "Foundation for the GiziGuard on-site AI nutrition layer (next project)",
    ],
    highlights: [
      "Each kitchen's data stays isolated, verified by 96 automated tests",
      "Full ownership: I built the backend, frontend, deployment, and ongoing operations",
      "Updates ship without taking the system offline",
    ],
  },
  {
    slug: "giziguard",
    title: "GiziGuard — On-Site AI Nutrition Assistant",
    subtitle:
      "An AI assistant for school kitchens that runs entirely on-site — no internet needed, no data leaves the building. Trained on Indonesia's official food composition database to validate nutrition automatically. Submitted to the Kaggle Gemma 4 Good Hackathon.",
    year: "2026",
    tier: 1,
    status: "in-progress",
    role: "Solo builder",
    tags: ["Custom AI Model", "Computer Vision", "On-Site AI", "Government"],
    stack: [
      "Gemma 4",
      "Unsloth",
      "Ollama",
      "Python",
      "Hik-Connect CCTV",
      "RAG",
      "TKPI Dataset",
      "FastAPI",
    ],
    links: {
      github: "https://github.com/NauvalZulfikar/dapurPintarMBG",
      kaggle: "https://www.kaggle.com/competitions/gemma-4-good-hackathon",
    },
    problem:
      "Kitchens under the school nutrition programme need real-time nutrition validation, but schools have unreliable internet and strict expectations that data stays on-premises. Cloud-hosted AI is neither reliable nor appropriate here.",
    approach: [
      "Trained a custom AI model on Indonesian and Sundanese cooking and nutrition data, matching the pilot kitchen's language mix",
      "Grounded the AI's answers in Indonesia's official food composition database, so it cites real numbers instead of guessing",
      "CCTV activity recognition tracks kitchen events — receiving, prep, plating, distribution — using the existing camera system",
      "Runs entirely on a small computer at the kitchen — no internet connection needed, no data leaves the premises",
      "Plugs into the DPMBG system as a separate nutrition-analysis service",
    ],
    outcome: [
      "Submission targeted for the Kaggle Gemma 4 Good Hackathon (deadline 2026-05-18)",
      "Reusable on-site AI layer applicable to other government nutrition programmes",
    ],
    highlights: [
      "Runs offline — no data ever leaves school premises",
      "Understands both Bahasa Indonesia and Sundanese",
      "Combines camera vision and language AI on affordable hardware",
    ],
  },
  {
    slug: "jobflow-ai",
    title: "JobFlow AI",
    subtitle:
      "LLM-powered job application platform — evolution of the Nov 2024 CV-JD suitability research into a full product.",
    year: "2024 – present",
    tier: 2,
    status: "in-progress",
    role: "Solo builder",
    tags: ["AI Job Matching", "Career Product", "Recruiting Tech"],
    stack: [
      "Next.js",
      "TypeScript",
      "Python",
      "DeBERTa-v3",
      "RAG",
      "Vector Search",
      "FastAPI",
    ],
    links: { github: "https://github.com/NauvalZulfikar" },
    problem:
      "Traditional ATS filters rely on lexical keyword matching. Qualified candidates get rejected on surface-level mismatches, and recruiters waste cycles on irrelevant shortlists. The CV-JD research (Nov 2024) proved a DeBERTa-v3 baseline could outperform ATS on relevance — the product layer turns that into a usable platform.",
    approach: [
      "DeBERTa-v3-based semantic matching model trained to rank CV–JD pairs on true relevance (beats TF-IDF baselines used in most ATS engines)",
      "RAG retrieval over a user's resume corpus + career history to auto-tailor each application to the specific job description",
      "Six product pillars: profile store, aggregated job feed, AI tailoring engine, one-click apply, application tracker dashboard, AI-assisted interview prep",
      "End-to-end reproducible ML pipeline with orchestration — designed for continuous evaluation as the model evolves",
    ],
    outcome: [
      "Underlying CV-JD matcher published Nov 2024 as a research artefact",
      "Platform layer in active development — web app shell, job aggregation, and tailoring engine scaffolded",
    ],
    highlights: [
      "Model beats traditional ATS on candidate–job relevance",
      "RAG over personal career corpus enables genuinely tailored resumes",
    ],
  },
  {
    slug: "sibedas",
    title: "Sibedas PBG — Regional Government Data Platform",
    subtitle:
      "Replaced static weekly reports for Bandung's permits department — leadership now queries KPIs in plain language. Permit fees calculate automatically from rules the policy team can update themselves, no developer needed.",
    year: "2023 – present",
    tier: 1,
    status: "production",
    role: "Automation & Analytics Lead (PUTR)",
    tags: ["Data Aggregation", "Ask-in-Plain-Language Analytics", "Dashboards", "Government"],
    stack: [
      "Laravel 11",
      "PHP 8.2",
      "MariaDB",
      "Vite",
      "React",
      "ApexCharts",
      "OpenAI API",
      "Google Sheets API",
      "Docker",
      "Nginx",
    ],
    links: { live: "https://sibedaspbg.cloud" },
    problem:
      "Bandung's permits department had no single view over regional data scattered across the national permits portal, spreadsheets, and manual department reports — covering building permits, small-business records, tourism, and spatial plans. Leadership read static weekly reports that were already stale by the time they arrived.",
    approach: [
      "Automatically pulls fresh data from the national permits portal in the background, with retries when the source is down",
      "Two-way sync with Google Sheets so non-technical staff keep working in the tool they already know",
      "Permit-fee calculation runs from a rule engine the policy team can update themselves — no developer needed when rules change",
      "Dashboard suite: regional resumes, tourism growth, spatial-plan gap analysis, satellite monitoring, opportunity analytics",
      "Chatbot Pimpinan — leadership asks 'how many permits last week?' in plain language and gets an answer, replacing the wait-for-the-analyst loop",
      "Granular access control so each role only sees what they should — set per menu, per action",
    ],
    outcome: [
      "Live at sibedaspbg.cloud, in daily use by department staff",
      "Leadership self-serves answers from the data instead of waiting for weekly reports",
      "Automatic fee calculation replaces a manual process that used to produce errors",
    ],
    highlights: [
      "First plain-language analytics for leadership in a Bandung government agency",
      "Pulls data automatically from the national permits portal — no manual download",
      "Fee rules can be updated by the policy team without touching code",
    ],
  },
  {
    slug: "pos-desain",
    title: "DESAIN POS — Multi-tenant Point of Sale",
    subtitle:
      "Production point-of-sale platform powering live retail operations — multi-branch admin, offline-first cashier app that keeps selling when WiFi drops, separate per-tenant data.",
    year: "2026",
    tier: 2,
    status: "production",
    role: "Solo architect & developer",
    tags: ["Point of Sale", "Multi-Branch Retail", "Offline-First", "Tenant Isolation"],
    stack: [
      "TypeScript",
      "pnpm",
      "Turborepo",
      "Hono",
      "Drizzle ORM",
      "Postgres (RLS)",
      "BullMQ",
      "Redis",
      "React",
      "Vite",
      "Next.js 15",
      "Tailwind",
      "Docker",
      "pm2",
      "Nginx",
    ],
    links: { live: "https://pos.aureonforge.com" },
    problem:
      "Indonesian retail operators juggle multiple POS systems for storefront, kasir tablet, and back-office reporting. Off-the-shelf platforms charge per-terminal, assume single-tenant ops, or fail the moment connectivity drops at the till.",
    approach: [
      "14-package monorepo (apps/ + packages/ + infra/) — Hono API, Next 15 admin, React+Vite cashier PWA, BullMQ workers, shared Drizzle schema",
      "Postgres Row-Level Security enforces tenant isolation at the database layer, not at ORM filter scope",
      "Offline-first cashier PWA: IndexedDB queue, optimistic UI, background sync on reconnect — store keeps selling when WAN drops",
      "BullMQ workers handle async work (printing, rollups, integrations) so API latency stays flat under load",
      "PII encryption at rest (PII_ENCRYPTION_KEY_HEX) for consumer-data compliance",
      "Single-VPS deploy via pm2 with 4 process types (api, worker, admin, pos) plus dedicated Postgres + Redis containers, fronted by host Nginx + certbot TLS",
    ],
    outcome: [
      "Live in production at pos.aureonforge.com serving real store operations",
      "Zero-downtime deploys via pm2 reload + docker compose up for infra changes",
      "Generates real revenue and operational data feeding ongoing iteration",
    ],
    highlights: [
      "Tenant isolation via Postgres RLS — defence-in-depth beyond ORM filtering",
      "True offline-first cashier sells without network, reconciles on reconnect",
      "Solo-built monorepo replaces a multi-vendor POS stack",
    ],
  },
  {
    slug: "qf-dashboard",
    title: "QF Dashboard — Quantitative Trading Platform",
    subtitle:
      "Personal quant finance workbench on MT5 broker data, focused on XAUUSD.",
    year: "2025",
    tier: 2,
    status: "in-progress",
    role: "Solo builder",
    tags: ["Quant Trading", "Finance", "Time-Series"],
    stack: [
      "FastAPI",
      "Python",
      "MetaTrader5",
      "SQLite",
      "Parquet",
      "Next.js",
      "TypeScript",
      "TradingView Lightweight Charts",
      "Tailwind",
      "shadcn/ui",
    ],
    links: { github: "https://github.com/NauvalZulfikar" },
    problem:
      "Quantitative trading research needs an integrated workbench — data ingestion, time-series analysis, strategy backtesting, live signal monitoring — without the overhead of enterprise platforms. Existing retail tools silo data, research, and execution.",
    approach: [
      "MT5 (Exness demo) data pipeline → SQLite + Parquet storage for tick/bar history and feature tables",
      "FastAPI backend serving bar/tick data, technical indicators, strategy backtest results, and live signals",
      "Next.js frontend with TradingView Lightweight Charts for interactive visualisation",
      "Single-user design — deploy-to-server with no auth overhead, but structured for later multi-user expansion",
    ],
    outcome: [
      "XAUUSD strategy research in active iteration",
      "Roadmap: extend to additional assets once research on XAUUSD converges, deploy automated execution",
    ],
    highlights: [
      "End-to-end quant workflow in a single codebase: ingest → research → backtest → visualise",
      "Parquet-backed feature store enables fast iteration on long histories",
    ],
  },

  // ─── Tier 2 — Selected Work ───────────────────────────────
  {
    slug: "linguaflow",
    title: "LinguaFlow",
    subtitle:
      "AI-powered language learning platform built on Spaced Repetition, Active Recall, and Comprehensible Input.",
    year: "2026",
    tier: 2,
    status: "in-progress",
    role: "Solo builder",
    tags: ["AI", "Consumer Product", "Language Learning"],
    stack: ["Next.js", "Turbo Monorepo", "Prisma", "TypeScript", "Tailwind", "Docker"],
    links: { github: "https://github.com/NauvalZulfikar" },
    problem:
      "Most language apps gamify shallow vocabulary drills. Serious learners need structured progression from A1 to C2 grounded in evidence-based learning science.",
    approach: [
      "Monorepo (Turbo) with separate apps and shared packages",
      "Prisma-backed schema modelling learners, decks, reviews, and content units",
      "SRS scheduler with Active Recall prompts and Comprehensible Input adaptation",
    ],
    outcome: ["Core scheduler and content pipeline scaffolded; closed-alpha targeted 2026"],
  },
  {
    slug: "ktp",
    title: "KTP — Product Catalogue Analytics",
    subtitle:
      "Product catalogue analysis platform — rebuilt from one-off scripts into proper software with a clean admin UI.",
    year: "2025",
    tier: 2,
    status: "in-progress",
    role: "Solo builder",
    tags: ["Product Catalogue", "Data Analytics", "Refactor"],
    stack: ["FastAPI", "uv", "SQLite", "Next.js 16", "React 19", "Tailwind 4", "pnpm", "OpenAPI"],
    links: { github: "https://github.com/NauvalZulfikar" },
    problem:
      "Catalogue/product analysis workflows built as ad-hoc Python scripts accumulate tech debt fast — no clear contract, no UI, no testability.",
    approach: [
      "Split into FastAPI backend (backend/app/) + Next.js 16 frontend, with SQLite for local dev",
      "OpenAPI auto-generated and consumed by the frontend via openapi-typescript — contract-first dev",
      "Legacy scripts archived under legacy/ for reference without blocking refactor",
    ],
    outcome: ["Production-shaped architecture replacing the legacy script pile"],
  },
  {
    slug: "taf",
    title: "TAF (BERKAH) — Accounting & Finance System",
    subtitle:
      "Internal accounting platform with hierarchical Chart of Accounts and a bank-statement reconciliation engine.",
    year: "2025",
    tier: 2,
    status: "production",
    role: "Lead developer",
    tags: ["Accounting", "Finance", "Internal Tools"],
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "Tailwind CSS", "Alpine.js", "Blade"],
    links: {},
    problem:
      "Internal finance ops needed a hierarchical Chart of Accounts + a reliable bank-mutation import pipeline covering validation and normalisation.",
    approach: [
      "Module TAF-07: hierarchical Chart of Accounts (multi-level COA) with journaling",
      "Module TAF-06: bank-mutation import foundation — validation, normalisation, idempotent ingestion",
      "Blade + Alpine.js stack — no SPA, fast to ship, easy to maintain in-company",
    ],
    outcome: ["Deployed against production MySQL at db.zein-corp.com"],
  },
  {
    slug: "dropship",
    title: "Dropship Engine",
    subtitle:
      "Affiliate-first commerce automation system targeting <2 hours manual intervention per day at scale.",
    year: "2025",
    tier: 2,
    status: "in-progress",
    role: "Solo builder",
    tags: ["Automation", "AI", "E-commerce"],
    stack: ["Python", "FastAPI", "Docker", "ML pipelines"],
    links: {},
    problem:
      "Indonesian dropshipping operators run fragmented, manual stacks across store, affiliate, fulfillment, and analytics. Margins compress before automation ever lands.",
    approach: [
      "Affiliate-first strategy: promote affiliate products to gather real conversion data, then flip proven niches to full dropshipping",
      "Modular codebase — store, affiliate, fulfillment, analytics, ai, core — each can be deployed or swapped independently",
      "ML layer (requirements-ml.txt) for niche scoring and product selection",
    ],
    outcome: ["Automation foundation + affiliate layer shipped; niche-scoring ML in training"],
  },
  {
    slug: "agent-dashboard",
    title: "Agent Dashboard",
    subtitle:
      "Web tool to author Claude Code agents directly into Google-Drive-synced project folders, with image context.",
    year: "2025",
    tier: 2,
    status: "production",
    role: "Solo builder",
    tags: ["Developer Tools", "AI Tooling", "Internal Productivity"],
    stack: ["Next.js", "Google Drive API", "OAuth", "Claude Opus 4.7", "TypeScript"],
    links: { github: "https://github.com/NauvalZulfikar" },
    problem:
      "Authoring Claude Code subagents by hand is tedious and error-prone. Developers want templates, photo context (mockups, schemas, error screenshots), and one-click deploy into the right .claude/agents/ folder.",
    approach: [
      "Google OAuth → browse Drive root folders → pick project → see existing .claude/agents/",
      "Template-based agent generation via Claude Opus 4.7 with optional image attachment for extra context",
      "Writes the generated agent file to <project>/.claude/agents/<name>.md on Drive — Drive Desktop sync picks it up locally within seconds",
    ],
    outcome: ["Used internally to rapidly scaffold subagents across the Aureonforge project set"],
  },
  {
    slug: "bara",
    title: "BARA",
    subtitle:
      "Customer-facing app for managing customer logos and brand assets, backed by an AI tagging assistant.",
    year: "2025",
    tier: 2,
    status: "in-progress",
    role: "Solo builder",
    tags: ["Customer App", "Asset Management", "Internal Tool"],
    stack: ["React", "Vite", "Python", "SQLite"],
    links: {},
    problem:
      "Customer-facing asset workflow (logos, artwork) needed a lightweight UI with a Python agent handling storage and metadata, without spinning up a full SaaS stack.",
    approach: [
      "React + Vite frontend with an on-disk schema.sql for structured storage",
      "Python agent (agent.py) backing ingestion and LLM-assisted asset tagging",
    ],
    outcome: ["Functional internal tool; iterating on UX"],
  },
  {
    slug: "aureonforge",
    title: "Aureonforge Web — Brand Ecosystem",
    subtitle:
      "Landing site and brand hub for the Aureonforge project cluster, fronting DPMBG, Sibedas, QF, and more on a single server.",
    year: "2026",
    tier: 2,
    status: "production",
    role: "Owner / architect",
    tags: ["Brand", "Project Hub", "Hosting"],
    stack: ["HTML", "Vercel-style static", "Nginx", "Docker"],
    links: { live: "https://aureonforge.com" },
    problem:
      "Personal project cluster on a single VPS needed a consistent brand surface and *.aureonforge.com reverse-proxy layer fronting mixed Docker + systemd services.",
    approach: [
      "Static landing site with project index",
      "Host-level Nginx routing *.aureonforge.com to the right container per sub-domain",
      "All projects live under /root/projects/ with deterministic deploy scripts per app",
    ],
    outcome: [
      "Serves as the public face and reverse-proxy layer for 5+ production deployments",
    ],
  },

  {
    slug: "property-ai",
    title: "Bandung Property AI",
    subtitle:
      "Pulls real-estate listings from across the Bandung market into one place, drafts Indonesian-language marketing copy automatically, and surfaces direct-from-owner properties that brokers usually bury under their own stock.",
    year: "2026",
    tier: 1,
    status: "production",
    role: "Solo builder",
    tags: ["Real Estate", "AI Marketing Copy", "Listings Aggregation"],
    stack: [
      "FastAPI",
      "Python",
      "OpenAI GPT-4o-mini",
      "Playwright",
      "SQLite",
      "Tailwind",
    ],
    links: {},
    problem:
      "Bandung's residential property market is scattered across multiple listing sites, brokers, and direct-from-owner channels. Buyers and agents waste hours collating listings, and direct-owner inventory buried under broker stock gets missed entirely.",
    approach: [
      "Automated listing collection across 4 area-specific accounts to gather inventory from the major Bandung property portals without tripping rate limits",
      "Direct-from-owner classifier filters out broker stock so users see negotiable inventory first",
      "AI assistant drafts listing descriptions, price comparables, and buyer outreach in Indonesian — saves agents hours per listing",
      "Admin panel for catalogue browsing, collection control, and AI chatbot",
    ],
    outcome: [
      "Live admin running with active aggregation across the Bandung area",
      "AI chatbot acts as a buyer-side property advisor over the aggregated catalogue",
    ],
    highlights: [
      "Direct-from-owner filter surfaces negotiable stock that brokers usually bury",
      "AI marketing copy in Indonesian saves agents hours per listing",
    ],
  },
  {
    slug: "dputr-pm",
    title: "DPUTR Project Management — Construction Workflow Platform",
    subtitle:
      "Internal admin platform for managing dozens of concurrent infrastructure projects at Bandung's Public Works & Spatial Planning Department — budgets, vendors, milestones, sign-offs, all in one place.",
    year: "2026",
    tier: 2,
    status: "in-progress",
    role: "Lead developer",
    tags: ["Government", "Project Management", "Construction"],
    stack: [
      "Laravel 12",
      "PHP 8.2",
      "Filament 3",
      "MySQL",
      "Tailwind CSS",
      "Livewire",
    ],
    links: {},
    problem:
      "DPUTR Bandung manages dozens of concurrent infrastructure projects with budgets, vendor contracts, milestone reporting, and inter-departmental signoff — all coordinated via spreadsheets and email. There is no single source of truth for project status, schedule, or financial drawdown.",
    approach: [
      "Filament 3 admin panel for project records, milestones, vendors, contracts, and budget drawdown",
      "18-phase delivery roadmap covering intake, planning, vendor onboarding, execution tracking, financial reconciliation, and closeout",
      "Role-based access aligned with the internal DPUTR organisational structure (manager → PM → field staff)",
      "Designed to share data fabric with the Sibedas regional platform — building permits, spatial plans, and project pipeline live in one model",
    ],
    outcome: [
      "Phase 2 of 18 shipped — project intake and core entity scaffolding live in internal preview",
      "Roadmap targets full operational rollout across the DPUTR project portfolio",
    ],
    highlights: [
      "Pure server-rendered Laravel + Filament — fast to ship and extend without a separate SPA",
      "Reuses authentication and tenancy patterns from the Sibedas platform",
    ],
  },

  // ─── Tier 3 — Archive / Publications / Concepts ───────────
  {
    slug: "bendungan-cibeureum",
    title: "Bendungan Cibeureum — IoT Dam Automation",
    subtitle:
      "Proposal and ML feasibility analysis for automating dam and irrigation gate control.",
    year: "2025",
    tier: 3,
    status: "concept",
    role: "Proposer",
    tags: ["IoT", "AI Feasibility", "Proposal"],
    stack: ["Python", "ML", "IoT (proposed)"],
    links: {},
    problem:
      "Cibeureum dam irrigation relies on manual gate operation. A data-driven control system would reduce response time and water loss.",
    approach: [
      "Feasibility ML models over water-flow, rainfall, and downstream-demand data",
      "Proposal document + spreadsheet model delivered to stakeholder",
    ],
    outcome: ["Concept stage; awaiting stakeholder go-ahead"],
  },
  {
    slug: "machine-scheduler",
    title: "Machine Scheduler Automation",
    subtitle:
      "Streamlit-based production scheduling system with interactive Gantt visualisation and real-time utilisation dashboards.",
    year: "Jan 2025",
    tier: 3,
    status: "production",
    role: "Solo builder",
    tags: ["Production Scheduling", "Operations", "Manufacturing"],
    stack: ["Python", "Streamlit", "Gantt Visualisation", "Workflow Orchestration"],
    links: { github: "https://github.com/NauvalZulfikar" },
    problem:
      "Production planning ran on spreadsheets with no visibility into machine idle time or rescheduling impact.",
    approach: [
      "Built a scheduling engine with interactive Gantt views and real-time machine-utilisation dashboards",
      "Supports dynamic rescheduling without re-exporting plans",
    ],
    outcome: ["Optimised production planning by 63% and minimised idle time"],
  },
  {
    slug: "sport-footwear-ml",
    title: "Sport Footwear Sales Prediction — ML Comparative Study",
    subtitle:
      "Comparative performance analysis of multiple ML models for footwear sales forecasting.",
    year: "Jan 2025",
    tier: 3,
    status: "publication",
    role: "Author",
    tags: ["AI Forecasting", "Retail", "Publication"],
    stack: ["Python", "scikit-learn", "Forecasting"],
    links: {},
    problem:
      "Retail sales forecasting accuracy varies materially by model family. The study benchmarked several ML approaches on sports-footwear data to characterise trade-offs.",
    approach: [
      "Trained and compared multiple ML regressors on forecasting accuracy",
      "Reported findings in a publication",
    ],
    outcome: ["Published January 2025"],
  },
];

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
];

export type Service = {
  slug: string;
  name: string;
  duration: string;
  structure: string;
  priceFrom: { gbp: string; idr: string };
  summary: string;
  deliverables: string[];
  bestFor: string;
};

export const services: Service[] = [
  {
    slug: "diagnostic",
    name: "Diagnostic Sprint",
    duration: "1–2 weeks",
    structure: "Fixed-fee",
    priceFrom: { gbp: "£4,500", idr: "Rp 32jt" },
    summary:
      "I sit with your team for 1–2 weeks, find every workflow that's eating analyst hours, and tell you which ones are worth automating. You get a roadmap with concrete time and money savings — no proposals dressed up as strategy.",
    deliverables: [
      "List of every manual workflow worth automating, ranked by payback",
      "Hours and cost saved per workflow, in your own numbers",
      "Plain-English roadmap any director can sign off on",
      "90-day projection so you know when it pays back",
    ],
    bestFor:
      "Operations leads who suspect their team spends 30%+ of the week on copy-paste work but can't prove it yet.",
  },
  {
    slug: "build",
    name: "Build Engagement",
    duration: "4–12 weeks",
    structure: "Milestone-based",
    priceFrom: { gbp: "£18,000", idr: "Rp 120jt" },
    summary:
      "I build the automation system end-to-end and hand it to your team. Working software replaces the manual workflow — your people stop doing the boring part and start doing the part that needs their judgement.",
    deliverables: [
      "Software that does the manual work for you, deployed and live",
      "AI features only where they save real time — not because they're trendy",
      "Monitoring so you know it's working without checking",
      "Training for your in-house team so you're not locked in",
    ],
    bestFor:
      "Teams with a clear automation target and a deadline — government programmes, banks, retail chains, anyone running operations across multiple sites.",
  },
  {
    slug: "run",
    name: "Run & Iterate",
    duration: "Monthly retainer",
    structure: "Day-rate retainer",
    priceFrom: { gbp: "£2,400 / mo", idr: "Rp 16jt / mo" },
    summary:
      "I keep the system running, fix what breaks, and add new automations as your processes evolve. Think of it as having a senior engineer on call without paying a full-time salary.",
    deliverables: [
      "Someone on call when something breaks",
      "Quarterly check-up to keep the system honest as your data changes",
      "Backlog of small improvements so the system keeps paying back",
      "Roadmap reviews with your stakeholders, in their language",
    ],
    bestFor:
      "Teams that already have automation and want it to keep paying back instead of decaying when the original engineer leaves.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  org: string;
  /** Set to false (or omit) to hide while the quote is being confirmed. Default true when populated. */
  published?: boolean;
};

// Testimonials are populated as engagements complete — only verified, attributable quotes.
// Add real entries here. Set published: true to render. The component hides automatically
// while no published entries exist.
export const testimonials: Testimonial[] = [
  // Example shape (kept commented so it doesn't render until the real quote is in):
  // {
  //   quote: "Replaced six weeks of manual reconciliation with a workflow our analysts trust.",
  //   author: "—",
  //   role: "Head of Operations",
  //   org: "PUTR Bandung",
  //   published: true,
  // },
];
