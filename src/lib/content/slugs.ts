/** Lightweight slug helpers safe to import from client components. */

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/\(/g, " ")
    .replace(/\)/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const SERVICE_ALIASES: Record<string, string> = {
  architecture: "software-architecture",
  "enterprise-dev": "enterprise-software",
  support: "tech-support",
};

export function serviceHref(title: string): string {
  const slug = slugify(title);
  const resolved = SERVICE_ALIASES[slug] ?? slug;
  return `/services/${resolved}`;
}

export type SolutionVertical =
  | "retail"
  | "it-telecom"
  | "automotive"
  | "manufacture"
  | "finance";

export function solutionHref(vertical: SolutionVertical, title: string): string {
  return `/solutions/${vertical}/${slugify(title)}`;
}

const INDUSTRY_MAP: Record<string, string> = {
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

export function industryHref(title: string): string {
  const slug = INDUSTRY_MAP[title] ?? slugify(title);
  return `/industries/${slug}`;
}
