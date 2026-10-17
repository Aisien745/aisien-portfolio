// ─────────────────────────────────────────────────────────────
// ALL SITE CONTENT LIVES HERE. Edit this file, the pages update.
// Items marked "EDIT" are placeholders: replace with your real notes
// and results.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Aisien Solovev",
  initials: "AS",
  degree: "BSc Economics & Management",
  tagline: "From first-year theory to real-world decisions.",
  intro:
    "A running record of my degree: what I studied, what I read, and how I applied it to real business problems.",
  email: "solovevaisien@gmail.com",
  linkedin: "https://www.linkedin.com/in/solovevaisien/",
  github: "https://github.com/aysiens",
  cv: "/CV_Aisien_Solovev.pdf",
  locations: "Brussels / Siena",
};

// ── Journey (home page timeline) ─────────────────────────────
export const journey = [
  {
    year: "Year 1",
    title: "Foundations",
    text: "Micro and macroeconomics, accounting and statistics. Learning the language of markets and how to read a balance sheet.",
  },
  {
    year: "Year 2",
    title: "Tools",
    text: "Corporate finance and Python. Moving from theory to evidence: data, models, valuation.",
  },
  {
    year: "Erasmus",
    title: "Entrepreneurship",
    text: "Exchange at EPHEC: strategy, financial planning, trendwatching and an international entrepreneurial project.",
  },
]; // EDIT

// ── Subjects ─────────────────────────────────────────────────
// `group` decides the section on the Subjects page (groups appear in the
// order they first show up in this list).
// The chapters of each subject are Markdown files in
//   content/subjects/<subject-name-in-lowercase-with-dashes>/
export type Subject = {
  name: string;
  group: string;
  area: "Economics" | "Finance" | "Management" | "Quantitative" | "Entrepreneurship";
  blurb: string;
  takeaway?: string; // optional: one line you want to remember
  code?: string;
  ects?: number;
};

export const subjects: Subject[] = [
  // Erasmus at EPHEC: Innovative International Entrepreneurship (ENT11)
  { name: "Strategic Management", group: "Erasmus · EPHEC", area: "Management", code: "ERA108", ects: 5, blurb: "How firms build and sustain competitive advantage." }, // EDIT
  { name: "Business Case Studies Analysis", group: "Erasmus · EPHEC", area: "Management", code: "ERA109", ects: 5, blurb: "Structuring real business problems and defending a recommendation." }, // EDIT
  { name: "Financial Plan", group: "Erasmus · EPHEC", area: "Finance", code: "ERA104", ects: 5, blurb: "Turning a business idea into numbers: forecasts, funding, viability." }, // EDIT
  { name: "Trendwatching", group: "Erasmus · EPHEC", area: "Management", code: "ERA120", ects: 5, blurb: "Spotting the megatrends reshaping the world and what they mean for business." }, // EDIT
  { name: "International Innovative Entrepreneurial Project", group: "Erasmus · EPHEC", area: "Entrepreneurship", code: "ERA116", ects: 10, blurb: "Building an international business project with a net positive societal impact." }, // EDIT
];

// Optional banner shown under a group title on the Subjects page.
export const programs: Record<
  string,
  { title: string; code: string; ects: number; text: string }
> = {
  "Erasmus · EPHEC": {
    title: "Innovative International Entrepreneurship",
    code: "ENT11",
    ects: 30,
    text: "Four 5-ECTS modules build the theory (strategy, case analysis, financial planning, trendwatching) to prepare a 10-ECTS international entrepreneurial project.",
  },
};

// ── Library ──────────────────────────────────────────────────
export type Reading = {
  title: string;
  author: string;
  type: "Book" | "Paper" | "Report" | "Article"  ;
  theme: string;
  note: string;
  fileUrl?: string;
};

export const library: Reading[] = [
  { 
    title: "Monetary Policy, Inflation, and Crises: Evidence from History and Administrative Data", 
    author: "GABRIEL JIMÉNEZ, DMITRY KUVSHINOV, JOSÉ-LUIS PEYDRÓ, and BJÖRN RICHTER", 
    type: "Article", 
    theme: "EU policy", 
    note: "A blueprint for Europe's growth and investment gap.",
    fileUrl: "/monetary-policy.pdf",
  },
]; // EDIT: add what you actually read, and your own note

// ── Business cases ───────────────────────────────────────────
export type Case = {
  slug: string;
  type: string;
  title: string;
  summary: string;
  tags: string[];
  link?: string;
  context: string;
  approach: string[];
  result: string;
};

export const cases: Case[] = [
  {
    slug: "scitrack",
    type: "SaaS MVP",
    title: "SciTrack: Academic Literature Monitoring",
    summary: "A B2B platform that turns plain-English research topics into optimised boolean queries with OpenAI.",
    tags: ["Next.js", "OpenAI API", "Tailwind", "PostgreSQL"],
    link: "https://scitrack-mvp.vercel.app/",
    context: "Researchers lose hours writing boolean search queries and still miss relevant papers. The question: can an LLM lower that barrier and become a paid product?",
    approach: [
      "Defined the user and the pain point, then sized the niche.",
      "Built the MVP full-stack: query generation, monitoring, alerts.",
      "Designed a freemium model with usage-based limits.",
    ],
    result: "A working, deployed MVP with a scalable freemium architecture.",
  },
  {
    slug: "glp1",
    type: "Market Sizing",
    title: "GLP-1 Therapeutics Market Sizing",
    summary: "An automated pipeline pulling World Bank, WHO and openFDA data to size an investment opportunity.",
    tags: ["Python", "pandas", "REST APIs"],
    link: "https://github.com/aysiens",
    context: "GLP-1 drugs are reshaping the obesity and diabetes market. How large could it get, and where?",
    approach: [
      "Pulled prevalence, demographic and approval data through public APIs.",
      "Built a bottom-up model: population, prevalence, treatment rate, price.",
      "Stress-tested the assumptions with scenarios.",
    ],
    result: "A repeatable, data-driven view that supports investment evaluation.",
  },
  {
    slug: "ecommerce",
    type: "ETL Automation",
    title: "E-commerce Intelligence System",
    summary: "An ETL system tracking real-time pricing and competitor metrics across retail platforms.",
    tags: ["Python", "Web scraping", "ETL"],
    link: "https://github.com/aysiens",
    context: "Pricing decisions in retail are only as good as the competitive data behind them.",
    approach: [
      "Scraped and normalised prices across dynamic platforms.",
      "Scheduled the pipeline and stored a clean history.",
      "Surfaced price gaps and trends for decisions.",
    ],
    result: "Faster, evidence-based operational and pricing decisions.",
  },
]; // EDIT: replace with the real details and numbers

// ── Home page stats (computed from the data above) ───────────
export const stats = [
  { value: "3+", label: "Years of study" },
  { value: String(subjects.length), label: "Subjects" },
  { value: String(cases.length), label: "Business cases" },
  { value: "C1", label: "English" },
];
