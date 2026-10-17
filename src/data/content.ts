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
    theme: "Monetary Policy & Financial Stability",
    note: "How prolonged rate cuts followed by rate hikes can fuel credit booms and increase banking crisis risk.",
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
  fileUrl?: string;
  context: string;
  approach: string[];
  result: string;
};

export const cases: Case[] = [
  {
    slug: "tesla-vs-byd",
    type: "Market Strategy",
    title: "Tesla vs. BYD: China's EV Contest",
    summary: "Analyzing competitive advantages and market share dynamics in the world's largest electric vehicle market.",
    tags: ["Automotive", "Competitive Strategy", "EV"],
    fileUrl: "/BYD.pdf",
    context: "Tesla and BYD are competing fiercely in the Chinese EV market, driven by government support, charging infrastructure, and shifting consumer preferences.",
    approach: [
      "Compared product strategies between pure BEVs (Tesla) and hybrids (BYD).",
      "Analyzed market share, pricing dynamics, and cost structures in China.",
      "Evaluated the impact of government joint ventures and subsidies on competitive moats.",
    ],
    result: "A strategic breakdown of competitive advantages and scaling challenges in a hyper-competitive market.",
  },
  {
    slug: "hatley-global-expansion",
    type: "Growth Strategy",
    title: "Hatley: Global Expansion",
    summary: "Evaluating international growth strategies and post-Brexit adaptation for an apparel brand.",
    tags: ["Retail", "Global Expansion", "E-commerce"],
    fileUrl: "/Hatley.pdf",
    context: "Hatley faces growth challenges in the children's apparel market, navigating post-Brexit realities in the UK while refocusing on the US and Canadian markets.",
    approach: [
      "Analyzed distribution channels across e-commerce, retail, and wholesale.",
      "Assessed sustainability practices in the fashion industry as a competitive edge.",
      "Evaluated market dynamics and key players in North America.",
    ],
    result: "Strategic recommendations for sustainable growth and adapting to changing international trade environments.",
  },
  {
    slug: "swissone-vs-toblerone",
    type: "Market Entry",
    title: "SwissOne vs. Toblerone",
    summary: "Analyzing market entry and brand positioning in the highly consolidated Swiss chocolate industry.",
    tags: ["FMCG", "Brand Strategy", "Market Share"],
    fileUrl: "/SwissOne.pdf",
    context: "SwissOne is entering a domestic market dominated by legacy brands like Toblerone and Mars, facing risks in cacao sourcing and intense competition.",
    approach: [
      "Analyzed the Swiss chocolate industry structure and competitor market shares.",
      "Evaluated product portfolio positioning and eco-friendly packaging strategies.",
      "Assessed sourcing risks and supply chain sustainability.",
    ],
    result: "A strategic market entry evaluation focusing on sustainable differentiation against established market leaders.",
  },
  {
    slug: "marlfield-house",
    type: "Operations & Succession",
    title: "Marlfield House Crossroads",
    summary: "Navigating succession, digital transformation, and staff retention at a luxury historic hotel.",
    tags: ["Hospitality", "Digital Strategy", "Operations"],
    fileUrl: "/marlfield.pdf", // Убедись, что переименовал файл в public/marlfield.pdf
    context: "Marlfield House, an Irish aristocratic estate turned luxury hotel, is undergoing generational succession while facing high staff turnover and digital marketing challenges.",
    approach: [
      "Analyzed the impact of high staff turnover on operational costs and training.",
      "Evaluated digital marketing investments (Google Ads, Meta, Mailchimp).",
      "Assessed the balance between preserving historical legacy and modernizing the guest experience.",
    ],
    result: "An operational roadmap for succession planning, improving retention, and optimizing digital ROI.",
  }
];

// ── Home page stats (computed from the data above) ───────────
export const stats = [
  { value: "3+", label: "Years of study" },
  { value: String(subjects.length), label: "Subjects" },
  { value: String(cases.length), label: "Business cases" },
  { value: "C1", label: "English" },
];
