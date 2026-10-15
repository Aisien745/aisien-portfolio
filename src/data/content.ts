// ─────────────────────────────────────────────────────────────
// ALL SITE CONTENT LIVES HERE. Edit this file, the pages update.
// Items marked "EDIT" are placeholders: replace with your real courses,
// notes and results.
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
    text: "Econometrics, corporate finance and Python. Moving from theory to evidence: data, models, valuation.",
  },
  {
    year: "Year 3",
    title: "Application",
    text: "Strategy, European economics and real projects. Turning frameworks into products, pipelines and recommendations.",
  },
]; // EDIT

export const stats = [
  { value: "3+", label: "Years of study" },
  { value: "12", label: "Core subjects" },
  { value: "3", label: "Business cases" },
  { value: "C1", label: "English" },
]; // EDIT

// ── Subjects ─────────────────────────────────────────────────
export type Subject = {
  name: string;
  year: 1 | 2 | 3;
  area: "Economics" | "Finance" | "Management" | "Quantitative";
  blurb: string;
  takeaway: string;
};

export const subjects: Subject[] = [
  { name: "Microeconomics", year: 1, area: "Economics", blurb: "Consumer and firm behaviour, market structures, welfare.", takeaway: "Every business decision is a trade-off at the margin." },
  { name: "Macroeconomics", year: 1, area: "Economics", blurb: "Growth, inflation, monetary and fiscal policy.", takeaway: "Policy shapes the environment every firm operates in." },
  { name: "Financial Accounting", year: 1, area: "Finance", blurb: "Reading and building the three financial statements.", takeaway: "Accounting is the scoreboard; know how it is kept." },
  { name: "Statistics", year: 1, area: "Quantitative", blurb: "Probability, inference, hypothesis testing.", takeaway: "Numbers without uncertainty are just opinions." },
  { name: "Corporate Finance", year: 2, area: "Finance", blurb: "Valuation, capital structure, cost of capital.", takeaway: "Value is the present value of future cash flows." },
  { name: "Econometrics", year: 2, area: "Quantitative", blurb: "Regression, causality, time series.", takeaway: "Correlation is cheap, identification is the work." },
  { name: "Marketing", year: 2, area: "Management", blurb: "Segmentation, positioning, pricing.", takeaway: "Start with the customer problem, not the product." },
  { name: "Operations Management", year: 2, area: "Management", blurb: "Process design, supply chains, bottlenecks.", takeaway: "The constraint sets the pace of the whole system." },
  { name: "Corporate Strategy", year: 3, area: "Management", blurb: "Competitive advantage, industry analysis, M&A.", takeaway: "Strategy is choosing what not to do." },
  { name: "European Economy", year: 3, area: "Economics", blurb: "Single market, EU institutions, trade and policy.", takeaway: "Integration creates both scale and friction." },
  { name: "International Trade", year: 3, area: "Economics", blurb: "Comparative advantage, tariffs, global value chains.", takeaway: "Trade gains are real, but unevenly shared." },
  { name: "Data Analytics (Python)", year: 3, area: "Quantitative", blurb: "pandas, APIs, ETL and visualisation.", takeaway: "Automate the boring part so you can think." },
]; // EDIT

// ── Library ──────────────────────────────────────────────────
export type Reading = {
  title: string;
  author: string;
  type: "Book" | "Paper" | "Report";
  theme: string;
  note: string;
};

export const library: Reading[] = [
  { title: "Good Strategy / Bad Strategy", author: "Richard Rumelt", type: "Book", theme: "Strategy", note: "A strategy is a diagnosis, a guiding policy and coherent actions." },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", type: "Book", theme: "Behavioural", note: "Why real decision-makers deviate from the rational model." },
  { title: "Poor Economics", author: "Abhijit Banerjee & Esther Duflo", type: "Book", theme: "Development", note: "Evidence-based thinking applied to how people actually live." },
  { title: "Capital in the Twenty-First Century", author: "Thomas Piketty", type: "Book", theme: "Macro", note: "Long-run data on wealth, income and inequality." },
  { title: "Misbehaving", author: "Richard Thaler", type: "Book", theme: "Behavioural", note: "How behavioural economics changed the discipline." },
  { title: "The Future of European Competitiveness", author: "Mario Draghi", type: "Report", theme: "EU policy", note: "A blueprint for Europe's growth and investment gap." },
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
