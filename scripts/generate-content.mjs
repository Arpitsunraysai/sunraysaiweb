import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../src/lib/content");

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/\(/g, " ")
    .replace(/\)/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function pick(arr, i) {
  return arr[i % arr.length];
}

const metricSets = [
  [
    { label: "Avg. Delivery Lift", value: "2.4×" },
    { label: "Uptime Target", value: "99.99%" },
    { label: "Senior Engineers", value: "100%" },
    { label: "Client Retention", value: "94%" },
  ],
  [
    { label: "Latency Reduction", value: "60%+" },
    { label: "Scale Ceiling", value: "10M+" },
    { label: "Go-Live Speed", value: "40% faster" },
    { label: "Defect Escape", value: "<0.1%" },
  ],
  [
    { label: "Cost Efficiency", value: "35%" },
    { label: "Automation Gain", value: "70%" },
    { label: "Global Delivery", value: "24/7" },
    { label: "Security Reviews", value: "Every release" },
  ],
];

const techPools = {
  ai: ["Python", "PyTorch", "LangChain", "OpenAI", "Vector DBs", "Kubernetes"],
  web: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
  cloud: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes"],
  data: ["Spark", "dbt", "Snowflake", "Kafka", "Airflow", "BigQuery"],
  enterprise: ["NestJS", "Java", "PostgreSQL", "Kafka", "GraphQL", "Elasticsearch"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  default: ["TypeScript", "Node.js", "Next.js", "PostgreSQL", "AWS", "Docker"],
};

function techFor(title) {
  const t = title.toLowerCase();
  if (t.includes("ai") || t.includes("chatgpt") || t.includes("agent") || t.includes("fraud") || t.includes("recommendation") || t.includes("predictive")) return techPools.ai;
  if (t.includes("cloud") || t.includes("devops") || t.includes("backup")) return techPools.cloud;
  if (t.includes("data") || t.includes("analytics") || t.includes("bi") || t.includes("migration")) return techPools.data;
  if (t.includes("mobile")) return techPools.mobile;
  if (t.includes("erp") || t.includes("enterprise") || t.includes("crm") || t.includes("mes") || t.includes("wms")) return techPools.enterprise;
  if (t.includes("front") || t.includes("web") || t.includes("ui") || t.includes("ux") || t.includes("design")) return techPools.web;
  return techPools.default;
}

function buildDetail({ title, description, category, vertical, context }) {
  const slug = slugify(title);
  const metrics = pick(metricSets, title.length);
  const technologies = techFor(title);

  const overview = [
    `${title} is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. ${description.replace(/\.$/, "")}—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.`,
    `Since 2014, our senior teams across the USA, Singapore, and India have shipped mission-critical platforms for healthcare, finance, retail, manufacturing, and telecom leaders. For ${title}, that means pairing deep product thinking with battle-tested infrastructure—not junior experiments wrapped in slide decks.`,
    `Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat ${title} as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability.`,
  ];

  const capabilities = [
    `End-to-end ${title} strategy, architecture, and implementation roadmaps tailored to your operating model.`,
    `Production-ready platforms with observability, security controls, and CI/CD from day one.`,
    `Integration with your existing ERP, CRM, data warehouses, identity providers, and third-party APIs.`,
    `Performance engineering for high concurrency, low latency, and predictable cost at scale.`,
    `Knowledge transfer, runbooks, and optional dedicated teams so capability stays inside your organization.`,
  ];

  const approach = [
    `Discover: we map business workflows, constraints, and success metrics with your stakeholders before writing a line of production code.`,
    `Architect: we design modular, cloud-native foundations with clear service boundaries, data contracts, and failure modes documented upfront.`,
    `Build: senior engineers deliver in short, demoable increments with automated testing, security review, and continuous deployment.`,
    `Harden: load testing, chaos scenarios, and operational readiness checks ensure launch is calm—not heroic.`,
    `Scale: we stay engaged through hypercare and optional managed evolution so the system compounds value over time.`,
  ];

  const outcomes = [
    `Faster time-to-value with senior-only delivery and reusable architectural blueprints refined across industries.`,
    `Systems that remain maintainable: typed APIs, clean domain boundaries, and documentation that new engineers can actually use.`,
    `Measurable operational gains—lower incident rates, clearer ownership, and infrastructure that expands with demand instead of collapsing under it.`,
    `A partnership posture: we challenge weak assumptions, protect long-term architecture, and refuse shortcuts that create technical debt.`,
  ];

  if (context === "solution" && vertical) {
    overview[1] = `In ${vertical}, ${title} must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.`;
    capabilities.unshift(`Industry-tuned ${title} workflows designed specifically for ${vertical} operating constraints.`);
  }

  if (context === "industry") {
    overview[0] = `Sunrays AI partners with ${title} organizations to engineer resilient digital platforms that create durable competitive advantage. ${description}`;
    capabilities[0] = `Industry-specific product and platform strategy for ${title} leaders navigating modernization and AI adoption.`;
  }

  return {
    slug,
    title,
    tagline: description,
    category,
    vertical: vertical || null,
    overview,
    capabilities,
    approach,
    outcomes,
    metrics,
    technologies,
  };
}

// ——— SERVICES ———
const services = [
  { title: "AI Integration", description: "Implementing LLMs and neural automation to enhance legacy systems.", category: "Strategic Purpose" },
  { title: "ChatGPT Apps", description: "Custom GPT-powered software development for client-facing interfaces.", category: "Strategic Purpose" },
  { title: "AI Agent Dev", description: "Building autonomous agents to automate complex enterprise workflows.", category: "Strategic Purpose" },
  { title: "API Integration", description: "Seamlessly connecting third-party services with high-availability middleware.", category: "Strategic Purpose" },
  { title: "Product Discovery", description: "Requirement analysis and prototype validation before full-scale engineering.", category: "Strategic Purpose" },
  { title: "Re-Engineering", description: "Refactoring legacy codebases for modern performance and maintainability.", category: "Strategic Purpose" },
  { title: "App Modernization", description: "Migrating on-premise systems to cloud-native, scalable microservices.", category: "Strategic Purpose" },
  { title: "Software Product Dev", description: "End-to-end development of new digital products for ventures.", category: "Strategic Purpose" },
  { title: "CTO as a Service", description: "Strategic technical oversight for founders requiring architectural leadership.", category: "Strategic Purpose" },
  { title: "Offshore Dev", description: "High-quality development centers managed by senior local architects.", category: "Strategic Purpose" },
  { title: "Enterprise Software", description: "Heavy-duty management platforms and specialized ERP solutions.", category: "Strategic Purpose" },
  { title: "Software Audit", description: "Technical due diligence and vulnerability assessment of existing systems.", category: "Strategic Purpose" },
  { title: "High-Load Systems", description: "Architecting for millions of requests with zero-latency requirements.", category: "Strategic Purpose" },
  { title: "Dedicated Team", description: "Senior engineers integrated as a seamless extension of your workforce.", category: "Strategic Purpose" },
  { title: "Software Architecture", description: "Structural blueprinting focusing on modularity, security, and growth.", category: "Strategic Purpose" },
  { title: "Data Migration", description: "Safe orchestration of mission-critical data between ecosystems.", category: "Strategic Purpose" },
  { title: "Mapping Solutions", description: "Advanced GIS and visualization tools for logistics and urban planning.", category: "Strategic Purpose" },
  { title: "Business Analysis", description: "Bridging the gap between business objectives and technical roadmaps.", category: "Operational Flow" },
  { title: "Tech Support", description: "Ongoing maintenance and rapid resolution for production systems.", category: "Operational Flow" },
  { title: "UI/UX Design", description: "Swiss modernist aesthetic focused on clarity and premium interaction.", category: "Operational Flow" },
  { title: "QA & Testing", description: "Automated testing suites ensuring zero-failure deployment cycles.", category: "Operational Flow" },
  { title: "Back-End Dev", description: "High-performance server logic using Node.js and TypeScript.", category: "Operational Flow" },
  { title: "Digital Transformation", description: "Strategic consulting for companies evolving into the digital future.", category: "Operational Flow" },
  { title: "Web Design", description: "Architecting responsive, high-load front-ends for global audiences.", category: "Operational Flow" },
  { title: "DevOps", description: "CI/CD automation, cloud orchestration, and structural resilience.", category: "Operational Flow" },
  { title: "Front-End Dev", description: "Interactive experiences built with React and Next.js.", category: "Operational Flow" },
  { title: "Clouds", description: "Management of AWS, Azure, and Google Cloud infrastructures.", category: "Operational Flow" },
  // Home-only aliases as first-class pages that redirect conceptually via shared slugs
  { title: "Architecture", description: "System design for high-concurrency scale and modular resilience.", category: "Strategic Purpose", aliasOf: "software-architecture" },
  { title: "Enterprise Dev", description: "Custom ERP, CRM, and management tools for industry giants.", category: "Strategic Purpose", aliasOf: "enterprise-software" },
  { title: "Support", description: "Ongoing technical maintenance and rapid product updates.", category: "Operational Flow", aliasOf: "tech-support" },
];

// ——— SOLUTIONS ———
const verticalMeta = {
  retail: "Retail & E-commerce",
  "it-telecom": "IT & Telecom",
  automotive: "Automotive",
  manufacture: "Manufacturing",
  finance: "Finance",
};

const solutionsByVertical = {
  retail: [
    ["Enterprise Resource Planning (ERP)", "Centralized management of core business processes."],
    ["Customer Relationship Management (CRM)", "Optimizing customer interactions and data."],
    ["Help Desk Software", "Efficient ticket management and customer support."],
    ["Accounting Software", "Financial tracking and compliance for retail."],
    ["Document Management", "Digital storage and workflow for business documents."],
    ["Purchasing Management", "Streamlined procurement and vendor relations."],
    ["Payment Processing", "Secure and fast transaction handling."],
    ["Product Recommendation", "AI-driven personalization for customers."],
    ["Distribution Management (DMS)", "Supply chain orchestration and logistics."],
    ["Order Management (OMS)", "End-to-end order lifecycle tracking."],
    ["Warehouse Management (WMS)", "Real-time inventory and warehouse control."],
    ["Inventory Management", "Accurate stock tracking across channels."],
    ["Shipping Software", "Carrier integration and label automation."],
    ["B2B Portal Development", "Dedicated platforms for business partners."],
    ["Point of Sale (POS)", "Modern checkout experiences for physical stores."],
    ["CPQ Software", "Accurate pricing and quote generation."],
    ["Product Information (PIM)", "Centralized product data management."],
    ["Learning Management (LMS)", "Staff training and development platforms."],
  ],
  "it-telecom": [
    ["Enterprise Resource Planning (ERP)", "Scalable resource planning for tech firms."],
    ["Customer Relationship Management (CRM)", "Managing complex B2B client relationships."],
    ["Network Management", "Infrastructure monitoring and optimization."],
    ["IT Service Management (ITSM)", "Standardized IT delivery and support."],
    ["Telecom Billing", "High-volume usage tracking and invoicing."],
    ["Financial Management", "Advanced fiscal tracking for enterprises."],
    ["Data Backup and Recovery", "Resilient disaster recovery planning."],
    ["Customer Support", "Multi-channel technical support systems."],
    ["Governance and Compliance", "Ensuring regulatory and security standards."],
    ["Telecom Inventory Optimization", "Stock and hardware lifecycle management."],
    ["Supply Chain Visibility", "End-to-end transparency in tech logistics."],
    ["Project Management Tool", "Agile delivery and resource allocation."],
    ["Workflow Automation", "Reducing manual ops through logic."],
    ["Feedback and Survey", "Capturing and analyzing user sentiment."],
    ["Learning Management (LMS)", "Continuous learning for tech teams."],
    ["Data Analytics and BI", "Insights from complex datasets."],
    ["Customer Success", "Driving retention and growth metrics."],
    ["Legal and Compliance", "Managing legal risks and regulations."],
  ],
  automotive: [
    ["Manufacturing Execution (MES)", "Floor-level production control."],
    ["Product Lifecycle (PLM)", "Managing products from concept to sunset."],
    ["Supply Chain Management (SCM)", "Automotive-grade logistics and parts tracking."],
    ["Enterprise Resource Planning (ERP)", "Integrated ops for manufacturers."],
    ["Customer Relationship Management (CRM)", "Dealer-focused client engagement."],
    ["Dealer Management (DMS)", "Sales and service automation for dealers."],
    ["Human Resource Management (HRM)", "Workforce planning for large plants."],
    ["Quality Management (QMS)", "Zero-defect quality assurance."],
    ["Dealer Network Management", "Orchestrating regional dealer hubs."],
    ["Enterprise Asset Management (EAM)", "Infrastructure and tool maintenance."],
    ["Predictive Maintenance", "AI-driven uptime for assembly lines."],
    ["Production Planning", "Optimal scheduling for complex builds."],
    ["Warehouse Management (WMS)", "Parts and vehicle inventory control."],
    ["Environment and Safety (EHS)", "Ensuring plant safety and compliance."],
    ["Document Management", "Secure storage for engineering docs."],
    ["Warranty Management", "Claims processing and analysis."],
    ["Sales Forecasting", "Market-driven production estimates."],
    ["Fleet Management", "Tracking corporate and test fleets."],
  ],
  manufacture: [
    ["Enterprise Resource Planning (ERP)", "End-to-end manufacturing orchestration."],
    ["Manufacturing Execution (MES)", "Real-time production monitoring."],
    ["Supply Chain Management (SCM)", "Global logistics and raw materials."],
    ["Product Lifecycle (PLM)", "Digital thread for manufactured goods."],
    ["Warehouse Management (WMS)", "Inventory control for finished goods."],
    ["MRP II Software", "Advanced material requirement planning."],
    ["Customer Relationship Management (CRM)", "B2B sales and distributor relations."],
    ["Human Resources (HRMS)", "Plant-level workforce management."],
    ["Maintenance Management", "Maximizing equipment availability."],
    ["Labor Management", "Efficiency tracking and shift planning."],
    ["Document Management", "ISO standards and blueprint control."],
    ["Process Simulation", "Digital twins for plant optimization."],
    ["Predictive Analytics", "Forecasting failure and output."],
    ["Statistical Process Control (SPC)", "Ensuring dimensional and quality standards."],
    ["Cost Estimation", "Accurate quoting for custom manufacturing."],
    ["Shop Floor Control", "Visualizing production status."],
    ["Risk Management", "Identifying and mitigating plant risks."],
    ["Compliance Management", "Adhering to global safety standards."],
    ["Workflow Management", "Standardizing SOPs and approvals."],
    ["Asset Management", "Lifecycle tracking of heavy machinery."],
    ["Barcode and RFID System", "Precision item-level tracking."],
    ["Legal and Compliance", "Regulatory oversight for manufacturers."],
  ],
  finance: [
    ["Enterprise Resource Planning (ERP)", "Core finance and administrative control."],
    ["Accounting Software", "Ledgers, journals, and fiscal reporting."],
    ["Customer Relationship Management (CRM)", "Managing high-net-worth client profiles."],
    ["Financial Reporting System", "Automated statement generation."],
    ["Treasury Management", "Liquidity and cash flow orchestration."],
    ["Risk Management", "Quantitative risk assessment platforms."],
    ["FP&A Software", "Advanced planning and budgeting tools."],
    ["Billing and Invoicing", "Automating accounts receivable."],
    ["Payment Processing", "Multi-currency settlement logic."],
    ["Trading Platforms", "Low-latency market execution tools."],
    ["Credit Scoring", "Algorithmic risk evaluation for lending."],
    ["Expense Management", "Employee spend tracking and audits."],
    ["Tax Management", "Corporate tax calculation and filing."],
    ["Fraud Detection", "AI-powered anomaly detection in payments."],
    ["Loan Origination", "Automation of the lending lifecycle."],
    ["Regulatory Reporting", "Compliance reporting for central banks."],
    ["Document Management", "Secure, audited digital archiving."],
    ["Insurance Management", "Policy administration and claims."],
    ["Mortgage Management", "Residential and commercial loan hubs."],
    ["Audit Management", "Internal and external audit workflow."],
    ["Enterprise Risk (ERM)", "Strategic risk tracking across units."],
    ["RTGS System", "Real-time settlement for high-value funds."],
    ["Learning Management (LMS)", "Continuous certification and training."],
    ["Legal and Compliance", "AML and KYC regulatory systems."],
  ],
};

// ——— INDUSTRIES ———
const industries = [
  { title: "Retail & E-commerce", description: "Transforming customer journeys with AI-driven personalization and high-performance checkout systems.", slug: "retail-e-commerce" },
  { title: "IT & Telecom", description: "Next-gen network management and cloud-native architectures for the world's largest carriers.", slug: "it-telecom" },
  { title: "Automotive", description: "Engineering digital twins and embedded systems for the future of autonomous mobility.", slug: "automotive" },
  { title: "Manufacturing", description: "Industrial IoT solutions and predictive maintenance systems for smart factories.", slug: "manufacturing" },
  { title: "Finance & Banking", description: "Secure, scalable fintech ecosystems and blockchain-enabled transaction protocols.", slug: "finance-banking" },
  { title: "Healthcare", description: "HIPAA-compliant platforms and medical imaging analysis driven by advanced machine learning.", slug: "healthcare" },
  { title: "Logistics", description: "Real-time supply chain visibility and automated warehouse orchestration systems.", slug: "logistics" },
  { title: "Real Estate", description: "Proptech solutions for property management and immersive VR-driven real estate marketing.", slug: "real-estate" },
  { title: "Energy & Utilities", description: "Smart grid management and renewable energy monitoring systems for a sustainable future.", slug: "energy-utilities" },
  { title: "Education", description: "Scalable E-learning platforms and adaptive learning systems for global institutions.", slug: "education" },
  { title: "Public Sector", description: "Digital government initiatives and citizen-centric platforms with military-grade security.", slug: "public-sector" },
  { title: "Travel", description: "Online booking engines and guest experience platforms for hospitality leaders.", slug: "travel" },
  { title: "Media", description: "High-load CMS systems and data-driven ad-tech ecosystems for publishers.", slug: "media" },
  { title: "Finance", description: "Fintech platforms, secure banking, and high-frequency trading architectures.", slug: "finance", aliasOf: "finance-banking" },
  { title: "Retail & E-com", description: "B2C platforms, loyalty systems, and specialized CRM ecosystems for global retail leaders.", slug: "retail-e-com", aliasOf: "retail-e-commerce" },
];

function serialize(obj, indent = 2) {
  return JSON.stringify(obj, null, indent);
}

// Build services map
const servicesMap = {};
const serviceAliases = {};
for (const s of services) {
  const detail = buildDetail({ ...s, context: "service" });
  if (s.aliasOf) {
    serviceAliases[detail.slug] = s.aliasOf;
    continue;
  }
  servicesMap[detail.slug] = detail;
}
// also register aliases pointing to canonical
for (const [alias, canonical] of Object.entries(serviceAliases)) {
  // keep alias entries out of map; resolve at runtime
}

const solutionsMap = {};
for (const [vertical, items] of Object.entries(solutionsByVertical)) {
  solutionsMap[vertical] = {};
  for (const [title, description] of items) {
    const detail = buildDetail({
      title,
      description,
      category: verticalMeta[vertical],
      vertical: verticalMeta[vertical],
      context: "solution",
    });
    solutionsMap[vertical][detail.slug] = detail;
  }
}

const industriesMap = {};
const industryAliases = {};
for (const ind of industries) {
  if (ind.aliasOf) {
    industryAliases[ind.slug] = ind.aliasOf;
    continue;
  }
  const detail = buildDetail({
    title: ind.title,
    description: ind.description,
    category: "Industry",
    context: "industry",
  });
  detail.slug = ind.slug || detail.slug;
  industriesMap[detail.slug] = detail;
}

const typesTs = `export type DetailMetric = {
  label: string;
  value: string;
};

export type DetailContent = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  vertical?: string | null;
  overview: string[];
  capabilities: string[];
  approach: string[];
  outcomes: string[];
  metrics: DetailMetric[];
  technologies: string[];
};
`;

const servicesTs = `import type { DetailContent } from "./types";

export const SERVICE_ALIASES: Record<string, string> = ${serialize(serviceAliases)};

export const servicesContent: Record<string, DetailContent> = ${serialize(servicesMap)};

export function getService(slug: string): DetailContent | undefined {
  const resolved = SERVICE_ALIASES[slug] ?? slug;
  return servicesContent[resolved];
}

export function getAllServiceSlugs(): string[] {
  return [...Object.keys(servicesContent), ...Object.keys(SERVICE_ALIASES)];
}

export function serviceHref(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/\\(/g, " ")
    .replace(/\\)/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  const resolved = SERVICE_ALIASES[slug] ?? slug;
  return \`/services/\${resolved}\`;
}
`;

const solutionsTs = `import type { DetailContent } from "./types";

export type SolutionVertical = "retail" | "it-telecom" | "automotive" | "manufacture" | "finance";

export const VERTICAL_LABELS: Record<SolutionVertical, string> = ${serialize(verticalMeta)};

export const solutionsContent: Record<SolutionVertical, Record<string, DetailContent>> = ${serialize(solutionsMap)};

export function getSolution(vertical: string, slug: string): DetailContent | undefined {
  const bucket = solutionsContent[vertical as SolutionVertical];
  return bucket?.[slug];
}

export function getAllSolutionParams(): { vertical: string; slug: string }[] {
  return (Object.keys(solutionsContent) as SolutionVertical[]).flatMap((vertical) =>
    Object.keys(solutionsContent[vertical]).map((slug) => ({ vertical, slug }))
  );
}

export function solutionHref(vertical: SolutionVertical, title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/\\(/g, " ")
    .replace(/\\)/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return \`/solutions/\${vertical}/\${slug}\`;
}
`;

const industriesTs = `import type { DetailContent } from "./types";

export const INDUSTRY_ALIASES: Record<string, string> = ${serialize(industryAliases)};

export const industriesContent: Record<string, DetailContent> = ${serialize(industriesMap)};

export function getIndustry(slug: string): DetailContent | undefined {
  const resolved = INDUSTRY_ALIASES[slug] ?? slug;
  return industriesContent[resolved];
}

export function getAllIndustrySlugs(): string[] {
  return [...Object.keys(industriesContent), ...Object.keys(INDUSTRY_ALIASES)];
}

export function industryHref(title: string): string {
  const map: Record<string, string> = {
    "Retail & E-com": "retail-e-commerce",
    "Retail & E-commerce": "retail-e-commerce",
    "IT & Telecom": "it-telecom",
    Automotive: "automotive",
    Manufacturing: "manufacturing",
    Finance: "finance-banking",
    "Finance & Banking": "finance-banking",
    Healthcare: "healthcare",
    Logistics: "logistics",
    "Real Estate": "real-estate",
    "Energy & Utilities": "energy-utilities",
    Education: "education",
    "Public Sector": "public-sector",
    Travel: "travel",
    Media: "media",
  };
  const slug = map[title] ?? title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  const resolved = INDUSTRY_ALIASES[slug] ?? slug;
  return \`/industries/\${resolved}\`;
}
`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "types.ts"), typesTs);
fs.writeFileSync(path.join(outDir, "services.ts"), servicesTs);
fs.writeFileSync(path.join(outDir, "solutions.ts"), solutionsTs);
fs.writeFileSync(path.join(outDir, "industries.ts"), industriesTs);

console.log("Generated content:");
console.log("  services:", Object.keys(servicesMap).length, "+ aliases", Object.keys(serviceAliases).length);
console.log("  solutions:", Object.values(solutionsMap).reduce((n, m) => n + Object.keys(m).length, 0));
console.log("  industries:", Object.keys(industriesMap).length, "+ aliases", Object.keys(industryAliases).length);
