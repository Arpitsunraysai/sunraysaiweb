export type DetailMetric = {
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
