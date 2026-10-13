import type { DetailContent } from "./types";

export const INDUSTRY_ALIASES: Record<string, string> = {
  "finance": "finance-banking",
  "retail-e-com": "retail-e-commerce"
};

export const industriesContent: Record<string, DetailContent> = {
  "retail-e-commerce": {
    "slug": "retail-e-commerce",
    "title": "Retail & E-commerce",
    "tagline": "Transforming customer journeys with AI-driven personalization and high-performance checkout systems.",
    "category": "Industry",
    "vertical": null,
    "overview": [
      "Sunrays AI partners with Retail & E-commerce organizations to engineer resilient digital platforms that create durable competitive advantage. Transforming customer journeys with AI-driven personalization and high-performance checkout systems.",
      "Since 2014, our senior teams across the USA, Singapore, and India have shipped mission-critical platforms for healthcare, finance, retail, manufacturing, and telecom leaders. For Retail & E-commerce, that means pairing deep product thinking with battle-tested infrastructure—not junior experiments wrapped in slide decks.",
      "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Retail & E-commerce as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
    ],
    "capabilities": [
      "Industry-specific product and platform strategy for Retail & E-commerce leaders navigating modernization and AI adoption.",
      "Production-ready platforms with observability, security controls, and CI/CD from day one.",
      "Integration with your existing ERP, CRM, data warehouses, identity providers, and third-party APIs.",
      "Performance engineering for high concurrency, low latency, and predictable cost at scale.",
      "Knowledge transfer, runbooks, and optional dedicated teams so capability stays inside your organization."
    ],
    "approach": [
      "Discover: we map business workflows, constraints, and success metrics with your stakeholders before writing a line of production code.",
      "Architect: we design modular, cloud-native foundations with clear service boundaries, data contracts, and failure modes documented upfront.",
      "Build: senior engineers deliver in short, demoable increments with automated testing, security review, and continuous deployment.",
      "Harden: load testing, chaos scenarios, and operational readiness checks ensure launch is calm—not heroic.",
      "Scale: we stay engaged through hypercare and optional managed evolution so the system compounds value over time."
    ],
    "outcomes": [
      "Faster time-to-value with senior-only delivery and reusable architectural blueprints refined across industries.",
      "Systems that remain maintainable: typed APIs, clean domain boundaries, and documentation that new engineers can actually use.",
      "Measurable operational gains—lower incident rates, clearer ownership, and infrastructure that expands with demand instead of collapsing under it.",
      "A partnership posture: we challenge weak assumptions, protect long-term architecture, and refuse shortcuts that create technical debt."
    ],
    "metrics": [
      {
        "label": "Latency Reduction",
        "value": "60%+"
      },
      {
        "label": "Scale Ceiling",
        "value": "10M+"
      },
      {
        "label": "Go-Live Speed",
        "value": "40% faster"
      },
      {
        "label": "Defect Escape",
        "value": "<0.1%"
      }
    ],
    "technologies": [
      "Python",
      "PyTorch",
      "LangChain",
      "OpenAI",
      "Vector DBs",
      "Kubernetes"
    ]
  },
  "it-telecom": {
    "slug": "it-telecom",
    "title": "IT & Telecom",
    "tagline": "Next-gen network management and cloud-native architectures for the world's largest carriers.",
    "category": "Industry",
    "vertical": null,
    "overview": [
      "Sunrays AI partners with IT & Telecom organizations to engineer resilient digital platforms that create durable competitive advantage. Next-gen network management and cloud-native architectures for the world's largest carriers.",
      "Since 2014, our senior teams across the USA, Singapore, and India have shipped mission-critical platforms for healthcare, finance, retail, manufacturing, and telecom leaders. For IT & Telecom, that means pairing deep product thinking with battle-tested infrastructure—not junior experiments wrapped in slide decks.",
      "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat IT & Telecom as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
    ],
    "capabilities": [
      "Industry-specific product and platform strategy for IT & Telecom leaders navigating modernization and AI adoption.",
      "Production-ready platforms with observability, security controls, and CI/CD from day one.",
      "Integration with your existing ERP, CRM, data warehouses, identity providers, and third-party APIs.",
      "Performance engineering for high concurrency, low latency, and predictable cost at scale.",
      "Knowledge transfer, runbooks, and optional dedicated teams so capability stays inside your organization."
    ],
    "approach": [
      "Discover: we map business workflows, constraints, and success metrics with your stakeholders before writing a line of production code.",
      "Architect: we design modular, cloud-native foundations with clear service boundaries, data contracts, and failure modes documented upfront.",
      "Build: senior engineers deliver in short, demoable increments with automated testing, security review, and continuous deployment.",
      "Harden: load testing, chaos scenarios, and operational readiness checks ensure launch is calm—not heroic.",
      "Scale: we stay engaged through hypercare and optional managed evolution so the system compounds value over time."
    ],
    "outcomes": [
      "Faster time-to-value with senior-only delivery and reusable architectural blueprints refined across industries.",
      "Systems that remain maintainable: typed APIs, clean domain boundaries, and documentation that new engineers can actually use.",
      "Measurable operational gains—lower incident rates, clearer ownership, and infrastructure that expands with demand instead of collapsing under it.",
      "A partnership posture: we challenge weak assumptions, protect long-term architecture, and refuse shortcuts that create technical debt."
    ],
    "metrics": [
      {
        "label": "Avg. Delivery Lift",
        "value": "2.4×"
      },
      {
        "label": "Uptime Target",
        "value": "99.99%"
      },
      {
        "label": "Senior Engineers",
        "value": "100%"
      },
      {
        "label": "Client Retention",
        "value": "94%"
      }
    ],
    "technologies": [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  "automotive": {
    "slug": "automotive",
    "title": "Automotive",
    "tagline": "Engineering digital twins and embedded systems for the future of autonomous mobility.",
    "category": "Industry",
    "vertical": null,
    "overview": [
      "Sunrays AI partners with Automotive organizations to engineer resilient digital platforms that create durable competitive advantage. Engineering digital twins and embedded systems for the future of autonomous mobility.",
      "Since 2014, our senior teams across the USA, Singapore, and India have shipped mission-critical platforms for healthcare, finance, retail, manufacturing, and telecom leaders. For Automotive, that means pairing deep product thinking with battle-tested infrastructure—not junior experiments wrapped in slide decks.",
      "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Automotive as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
    ],
    "capabilities": [
      "Industry-specific product and platform strategy for Automotive leaders navigating modernization and AI adoption.",
      "Production-ready platforms with observability, security controls, and CI/CD from day one.",
      "Integration with your existing ERP, CRM, data warehouses, identity providers, and third-party APIs.",
      "Performance engineering for high concurrency, low latency, and predictable cost at scale.",
      "Knowledge transfer, runbooks, and optional dedicated teams so capability stays inside your organization."
    ],
    "approach": [
      "Discover: we map business workflows, constraints, and success metrics with your stakeholders before writing a line of production code.",
      "Architect: we design modular, cloud-native foundations with clear service boundaries, data contracts, and failure modes documented upfront.",
      "Build: senior engineers deliver in short, demoable increments with automated testing, security review, and continuous deployment.",
      "Harden: load testing, chaos scenarios, and operational readiness checks ensure launch is calm—not heroic.",
      "Scale: we stay engaged through hypercare and optional managed evolution so the system compounds value over time."
    ],
    "outcomes": [
      "Faster time-to-value with senior-only delivery and reusable architectural blueprints refined across industries.",
      "Systems that remain maintainable: typed APIs, clean domain boundaries, and documentation that new engineers can actually use.",
      "Measurable operational gains—lower incident rates, clearer ownership, and infrastructure that expands with demand instead of collapsing under it.",
      "A partnership posture: we challenge weak assumptions, protect long-term architecture, and refuse shortcuts that create technical debt."
    ],
    "metrics": [
      {
        "label": "Latency Reduction",
        "value": "60%+"
      },
      {
        "label": "Scale Ceiling",
        "value": "10M+"
      },
      {
        "label": "Go-Live Speed",
        "value": "40% faster"
      },
      {
        "label": "Defect Escape",
        "value": "<0.1%"
      }
    ],
    "technologies": [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  "manufacturing": {
    "slug": "manufacturing",
    "title": "Manufacturing",
    "tagline": "Industrial IoT solutions and predictive maintenance systems for smart factories.",
    "category": "Industry",
    "vertical": null,
    "overview": [
      "Sunrays AI partners with Manufacturing organizations to engineer resilient digital platforms that create durable competitive advantage. Industrial IoT solutions and predictive maintenance systems for smart factories.",
      "Since 2014, our senior teams across the USA, Singapore, and India have shipped mission-critical platforms for healthcare, finance, retail, manufacturing, and telecom leaders. For Manufacturing, that means pairing deep product thinking with battle-tested infrastructure—not junior experiments wrapped in slide decks.",
      "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Manufacturing as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
    ],
    "capabilities": [
      "Industry-specific product and platform strategy for Manufacturing leaders navigating modernization and AI adoption.",
      "Production-ready platforms with observability, security controls, and CI/CD from day one.",
      "Integration with your existing ERP, CRM, data warehouses, identity providers, and third-party APIs.",
      "Performance engineering for high concurrency, low latency, and predictable cost at scale.",
      "Knowledge transfer, runbooks, and optional dedicated teams so capability stays inside your organization."
    ],
    "approach": [
      "Discover: we map business workflows, constraints, and success metrics with your stakeholders before writing a line of production code.",
      "Architect: we design modular, cloud-native foundations with clear service boundaries, data contracts, and failure modes documented upfront.",
      "Build: senior engineers deliver in short, demoable increments with automated testing, security review, and continuous deployment.",
      "Harden: load testing, chaos scenarios, and operational readiness checks ensure launch is calm—not heroic.",
      "Scale: we stay engaged through hypercare and optional managed evolution so the system compounds value over time."
    ],
    "outcomes": [
      "Faster time-to-value with senior-only delivery and reusable architectural blueprints refined across industries.",
      "Systems that remain maintainable: typed APIs, clean domain boundaries, and documentation that new engineers can actually use.",
      "Measurable operational gains—lower incident rates, clearer ownership, and infrastructure that expands with demand instead of collapsing under it.",
      "A partnership posture: we challenge weak assumptions, protect long-term architecture, and refuse shortcuts that create technical debt."
    ],
    "metrics": [
      {
        "label": "Latency Reduction",
        "value": "60%+"
      },
      {
        "label": "Scale Ceiling",
        "value": "10M+"
      },
      {
        "label": "Go-Live Speed",
        "value": "40% faster"
      },
      {
        "label": "Defect Escape",
        "value": "<0.1%"
      }
    ],
    "technologies": [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  "finance-banking": {
    "slug": "finance-banking",
    "title": "Finance & Banking",
    "tagline": "Secure, scalable fintech ecosystems and blockchain-enabled transaction protocols.",
    "category": "Industry",
    "vertical": null,
    "overview": [
      "Sunrays AI partners with Finance & Banking organizations to engineer resilient digital platforms that create durable competitive advantage. Secure, scalable fintech ecosystems and blockchain-enabled transaction protocols.",
      "Since 2014, our senior teams across the USA, Singapore, and India have shipped mission-critical platforms for healthcare, finance, retail, manufacturing, and telecom leaders. For Finance & Banking, that means pairing deep product thinking with battle-tested infrastructure—not junior experiments wrapped in slide decks.",
      "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Finance & Banking as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
    ],
    "capabilities": [
      "Industry-specific product and platform strategy for Finance & Banking leaders navigating modernization and AI adoption.",
      "Production-ready platforms with observability, security controls, and CI/CD from day one.",
      "Integration with your existing ERP, CRM, data warehouses, identity providers, and third-party APIs.",
      "Performance engineering for high concurrency, low latency, and predictable cost at scale.",
      "Knowledge transfer, runbooks, and optional dedicated teams so capability stays inside your organization."
    ],
    "approach": [
      "Discover: we map business workflows, constraints, and success metrics with your stakeholders before writing a line of production code.",
      "Architect: we design modular, cloud-native foundations with clear service boundaries, data contracts, and failure modes documented upfront.",
      "Build: senior engineers deliver in short, demoable increments with automated testing, security review, and continuous deployment.",
      "Harden: load testing, chaos scenarios, and operational readiness checks ensure launch is calm—not heroic.",
      "Scale: we stay engaged through hypercare and optional managed evolution so the system compounds value over time."
    ],
    "outcomes": [
      "Faster time-to-value with senior-only delivery and reusable architectural blueprints refined across industries.",
      "Systems that remain maintainable: typed APIs, clean domain boundaries, and documentation that new engineers can actually use.",
      "Measurable operational gains—lower incident rates, clearer ownership, and infrastructure that expands with demand instead of collapsing under it.",
      "A partnership posture: we challenge weak assumptions, protect long-term architecture, and refuse shortcuts that create technical debt."
    ],
    "metrics": [
      {
        "label": "Cost Efficiency",
        "value": "35%"
      },
      {
        "label": "Automation Gain",
        "value": "70%"
      },
      {
        "label": "Global Delivery",
        "value": "24/7"
      },
      {
        "label": "Security Reviews",
        "value": "Every release"
      }
    ],
    "technologies": [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  "healthcare": {
    "slug": "healthcare",
    "title": "Healthcare",
    "tagline": "HIPAA-compliant platforms and medical imaging analysis driven by advanced machine learning.",
    "category": "Industry",
    "vertical": null,
    "overview": [
      "Sunrays AI partners with Healthcare organizations to engineer resilient digital platforms that create durable competitive advantage. HIPAA-compliant platforms and medical imaging analysis driven by advanced machine learning.",
      "Since 2014, our senior teams across the USA, Singapore, and India have shipped mission-critical platforms for healthcare, finance, retail, manufacturing, and telecom leaders. For Healthcare, that means pairing deep product thinking with battle-tested infrastructure—not junior experiments wrapped in slide decks.",
      "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Healthcare as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
    ],
    "capabilities": [
      "Industry-specific product and platform strategy for Healthcare leaders navigating modernization and AI adoption.",
      "Production-ready platforms with observability, security controls, and CI/CD from day one.",
      "Integration with your existing ERP, CRM, data warehouses, identity providers, and third-party APIs.",
      "Performance engineering for high concurrency, low latency, and predictable cost at scale.",
      "Knowledge transfer, runbooks, and optional dedicated teams so capability stays inside your organization."
    ],
    "approach": [
      "Discover: we map business workflows, constraints, and success metrics with your stakeholders before writing a line of production code.",
      "Architect: we design modular, cloud-native foundations with clear service boundaries, data contracts, and failure modes documented upfront.",
      "Build: senior engineers deliver in short, demoable increments with automated testing, security review, and continuous deployment.",
      "Harden: load testing, chaos scenarios, and operational readiness checks ensure launch is calm—not heroic.",
      "Scale: we stay engaged through hypercare and optional managed evolution so the system compounds value over time."
    ],
    "outcomes": [
      "Faster time-to-value with senior-only delivery and reusable architectural blueprints refined across industries.",
      "Systems that remain maintainable: typed APIs, clean domain boundaries, and documentation that new engineers can actually use.",
      "Measurable operational gains—lower incident rates, clearer ownership, and infrastructure that expands with demand instead of collapsing under it.",
      "A partnership posture: we challenge weak assumptions, protect long-term architecture, and refuse shortcuts that create technical debt."
    ],
    "metrics": [
      {
        "label": "Latency Reduction",
        "value": "60%+"
      },
      {
        "label": "Scale Ceiling",
        "value": "10M+"
      },
      {
        "label": "Go-Live Speed",
        "value": "40% faster"
      },
      {
        "label": "Defect Escape",
        "value": "<0.1%"
      }
    ],
    "technologies": [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  "logistics": {
    "slug": "logistics",
    "title": "Logistics",
    "tagline": "Real-time supply chain visibility and automated warehouse orchestration systems.",
    "category": "Industry",
    "vertical": null,
    "overview": [
      "Sunrays AI partners with Logistics organizations to engineer resilient digital platforms that create durable competitive advantage. Real-time supply chain visibility and automated warehouse orchestration systems.",
      "Since 2014, our senior teams across the USA, Singapore, and India have shipped mission-critical platforms for healthcare, finance, retail, manufacturing, and telecom leaders. For Logistics, that means pairing deep product thinking with battle-tested infrastructure—not junior experiments wrapped in slide decks.",
      "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Logistics as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
    ],
    "capabilities": [
      "Industry-specific product and platform strategy for Logistics leaders navigating modernization and AI adoption.",
      "Production-ready platforms with observability, security controls, and CI/CD from day one.",
      "Integration with your existing ERP, CRM, data warehouses, identity providers, and third-party APIs.",
      "Performance engineering for high concurrency, low latency, and predictable cost at scale.",
      "Knowledge transfer, runbooks, and optional dedicated teams so capability stays inside your organization."
    ],
    "approach": [
      "Discover: we map business workflows, constraints, and success metrics with your stakeholders before writing a line of production code.",
      "Architect: we design modular, cloud-native foundations with clear service boundaries, data contracts, and failure modes documented upfront.",
      "Build: senior engineers deliver in short, demoable increments with automated testing, security review, and continuous deployment.",
      "Harden: load testing, chaos scenarios, and operational readiness checks ensure launch is calm—not heroic.",
      "Scale: we stay engaged through hypercare and optional managed evolution so the system compounds value over time."
    ],
    "outcomes": [
      "Faster time-to-value with senior-only delivery and reusable architectural blueprints refined across industries.",
      "Systems that remain maintainable: typed APIs, clean domain boundaries, and documentation that new engineers can actually use.",
      "Measurable operational gains—lower incident rates, clearer ownership, and infrastructure that expands with demand instead of collapsing under it.",
      "A partnership posture: we challenge weak assumptions, protect long-term architecture, and refuse shortcuts that create technical debt."
    ],
    "metrics": [
      {
        "label": "Avg. Delivery Lift",
        "value": "2.4×"
      },
      {
        "label": "Uptime Target",
        "value": "99.99%"
      },
      {
        "label": "Senior Engineers",
        "value": "100%"
      },
      {
        "label": "Client Retention",
        "value": "94%"
      }
    ],
    "technologies": [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  "real-estate": {
    "slug": "real-estate",
    "title": "Real Estate",
    "tagline": "Proptech solutions for property management and immersive VR-driven real estate marketing.",
    "category": "Industry",
    "vertical": null,
    "overview": [
      "Sunrays AI partners with Real Estate organizations to engineer resilient digital platforms that create durable competitive advantage. Proptech solutions for property management and immersive VR-driven real estate marketing.",
      "Since 2014, our senior teams across the USA, Singapore, and India have shipped mission-critical platforms for healthcare, finance, retail, manufacturing, and telecom leaders. For Real Estate, that means pairing deep product thinking with battle-tested infrastructure—not junior experiments wrapped in slide decks.",
      "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Real Estate as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
    ],
    "capabilities": [
      "Industry-specific product and platform strategy for Real Estate leaders navigating modernization and AI adoption.",
      "Production-ready platforms with observability, security controls, and CI/CD from day one.",
      "Integration with your existing ERP, CRM, data warehouses, identity providers, and third-party APIs.",
      "Performance engineering for high concurrency, low latency, and predictable cost at scale.",
      "Knowledge transfer, runbooks, and optional dedicated teams so capability stays inside your organization."
    ],
    "approach": [
      "Discover: we map business workflows, constraints, and success metrics with your stakeholders before writing a line of production code.",
      "Architect: we design modular, cloud-native foundations with clear service boundaries, data contracts, and failure modes documented upfront.",
      "Build: senior engineers deliver in short, demoable increments with automated testing, security review, and continuous deployment.",
      "Harden: load testing, chaos scenarios, and operational readiness checks ensure launch is calm—not heroic.",
      "Scale: we stay engaged through hypercare and optional managed evolution so the system compounds value over time."
    ],
    "outcomes": [
      "Faster time-to-value with senior-only delivery and reusable architectural blueprints refined across industries.",
      "Systems that remain maintainable: typed APIs, clean domain boundaries, and documentation that new engineers can actually use.",
      "Measurable operational gains—lower incident rates, clearer ownership, and infrastructure that expands with demand instead of collapsing under it.",
      "A partnership posture: we challenge weak assumptions, protect long-term architecture, and refuse shortcuts that create technical debt."
    ],
    "metrics": [
      {
        "label": "Cost Efficiency",
        "value": "35%"
      },
      {
        "label": "Automation Gain",
        "value": "70%"
      },
      {
        "label": "Global Delivery",
        "value": "24/7"
      },
      {
        "label": "Security Reviews",
        "value": "Every release"
      }
    ],
    "technologies": [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  "energy-utilities": {
    "slug": "energy-utilities",
    "title": "Energy & Utilities",
    "tagline": "Smart grid management and renewable energy monitoring systems for a sustainable future.",
    "category": "Industry",
    "vertical": null,
    "overview": [
      "Sunrays AI partners with Energy & Utilities organizations to engineer resilient digital platforms that create durable competitive advantage. Smart grid management and renewable energy monitoring systems for a sustainable future.",
      "Since 2014, our senior teams across the USA, Singapore, and India have shipped mission-critical platforms for healthcare, finance, retail, manufacturing, and telecom leaders. For Energy & Utilities, that means pairing deep product thinking with battle-tested infrastructure—not junior experiments wrapped in slide decks.",
      "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Energy & Utilities as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
    ],
    "capabilities": [
      "Industry-specific product and platform strategy for Energy & Utilities leaders navigating modernization and AI adoption.",
      "Production-ready platforms with observability, security controls, and CI/CD from day one.",
      "Integration with your existing ERP, CRM, data warehouses, identity providers, and third-party APIs.",
      "Performance engineering for high concurrency, low latency, and predictable cost at scale.",
      "Knowledge transfer, runbooks, and optional dedicated teams so capability stays inside your organization."
    ],
    "approach": [
      "Discover: we map business workflows, constraints, and success metrics with your stakeholders before writing a line of production code.",
      "Architect: we design modular, cloud-native foundations with clear service boundaries, data contracts, and failure modes documented upfront.",
      "Build: senior engineers deliver in short, demoable increments with automated testing, security review, and continuous deployment.",
      "Harden: load testing, chaos scenarios, and operational readiness checks ensure launch is calm—not heroic.",
      "Scale: we stay engaged through hypercare and optional managed evolution so the system compounds value over time."
    ],
    "outcomes": [
      "Faster time-to-value with senior-only delivery and reusable architectural blueprints refined across industries.",
      "Systems that remain maintainable: typed APIs, clean domain boundaries, and documentation that new engineers can actually use.",
      "Measurable operational gains—lower incident rates, clearer ownership, and infrastructure that expands with demand instead of collapsing under it.",
      "A partnership posture: we challenge weak assumptions, protect long-term architecture, and refuse shortcuts that create technical debt."
    ],
    "metrics": [
      {
        "label": "Avg. Delivery Lift",
        "value": "2.4×"
      },
      {
        "label": "Uptime Target",
        "value": "99.99%"
      },
      {
        "label": "Senior Engineers",
        "value": "100%"
      },
      {
        "label": "Client Retention",
        "value": "94%"
      }
    ],
    "technologies": [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  "education": {
    "slug": "education",
    "title": "Education",
    "tagline": "Scalable E-learning platforms and adaptive learning systems for global institutions.",
    "category": "Industry",
    "vertical": null,
    "overview": [
      "Sunrays AI partners with Education organizations to engineer resilient digital platforms that create durable competitive advantage. Scalable E-learning platforms and adaptive learning systems for global institutions.",
      "Since 2014, our senior teams across the USA, Singapore, and India have shipped mission-critical platforms for healthcare, finance, retail, manufacturing, and telecom leaders. For Education, that means pairing deep product thinking with battle-tested infrastructure—not junior experiments wrapped in slide decks.",
      "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Education as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
    ],
    "capabilities": [
      "Industry-specific product and platform strategy for Education leaders navigating modernization and AI adoption.",
      "Production-ready platforms with observability, security controls, and CI/CD from day one.",
      "Integration with your existing ERP, CRM, data warehouses, identity providers, and third-party APIs.",
      "Performance engineering for high concurrency, low latency, and predictable cost at scale.",
      "Knowledge transfer, runbooks, and optional dedicated teams so capability stays inside your organization."
    ],
    "approach": [
      "Discover: we map business workflows, constraints, and success metrics with your stakeholders before writing a line of production code.",
      "Architect: we design modular, cloud-native foundations with clear service boundaries, data contracts, and failure modes documented upfront.",
      "Build: senior engineers deliver in short, demoable increments with automated testing, security review, and continuous deployment.",
      "Harden: load testing, chaos scenarios, and operational readiness checks ensure launch is calm—not heroic.",
      "Scale: we stay engaged through hypercare and optional managed evolution so the system compounds value over time."
    ],
    "outcomes": [
      "Faster time-to-value with senior-only delivery and reusable architectural blueprints refined across industries.",
      "Systems that remain maintainable: typed APIs, clean domain boundaries, and documentation that new engineers can actually use.",
      "Measurable operational gains—lower incident rates, clearer ownership, and infrastructure that expands with demand instead of collapsing under it.",
      "A partnership posture: we challenge weak assumptions, protect long-term architecture, and refuse shortcuts that create technical debt."
    ],
    "metrics": [
      {
        "label": "Avg. Delivery Lift",
        "value": "2.4×"
      },
      {
        "label": "Uptime Target",
        "value": "99.99%"
      },
      {
        "label": "Senior Engineers",
        "value": "100%"
      },
      {
        "label": "Client Retention",
        "value": "94%"
      }
    ],
    "technologies": [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  "public-sector": {
    "slug": "public-sector",
    "title": "Public Sector",
    "tagline": "Digital government initiatives and citizen-centric platforms with military-grade security.",
    "category": "Industry",
    "vertical": null,
    "overview": [
      "Sunrays AI partners with Public Sector organizations to engineer resilient digital platforms that create durable competitive advantage. Digital government initiatives and citizen-centric platforms with military-grade security.",
      "Since 2014, our senior teams across the USA, Singapore, and India have shipped mission-critical platforms for healthcare, finance, retail, manufacturing, and telecom leaders. For Public Sector, that means pairing deep product thinking with battle-tested infrastructure—not junior experiments wrapped in slide decks.",
      "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Public Sector as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
    ],
    "capabilities": [
      "Industry-specific product and platform strategy for Public Sector leaders navigating modernization and AI adoption.",
      "Production-ready platforms with observability, security controls, and CI/CD from day one.",
      "Integration with your existing ERP, CRM, data warehouses, identity providers, and third-party APIs.",
      "Performance engineering for high concurrency, low latency, and predictable cost at scale.",
      "Knowledge transfer, runbooks, and optional dedicated teams so capability stays inside your organization."
    ],
    "approach": [
      "Discover: we map business workflows, constraints, and success metrics with your stakeholders before writing a line of production code.",
      "Architect: we design modular, cloud-native foundations with clear service boundaries, data contracts, and failure modes documented upfront.",
      "Build: senior engineers deliver in short, demoable increments with automated testing, security review, and continuous deployment.",
      "Harden: load testing, chaos scenarios, and operational readiness checks ensure launch is calm—not heroic.",
      "Scale: we stay engaged through hypercare and optional managed evolution so the system compounds value over time."
    ],
    "outcomes": [
      "Faster time-to-value with senior-only delivery and reusable architectural blueprints refined across industries.",
      "Systems that remain maintainable: typed APIs, clean domain boundaries, and documentation that new engineers can actually use.",
      "Measurable operational gains—lower incident rates, clearer ownership, and infrastructure that expands with demand instead of collapsing under it.",
      "A partnership posture: we challenge weak assumptions, protect long-term architecture, and refuse shortcuts that create technical debt."
    ],
    "metrics": [
      {
        "label": "Latency Reduction",
        "value": "60%+"
      },
      {
        "label": "Scale Ceiling",
        "value": "10M+"
      },
      {
        "label": "Go-Live Speed",
        "value": "40% faster"
      },
      {
        "label": "Defect Escape",
        "value": "<0.1%"
      }
    ],
    "technologies": [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  "travel": {
    "slug": "travel",
    "title": "Travel",
    "tagline": "Online booking engines and guest experience platforms for hospitality leaders.",
    "category": "Industry",
    "vertical": null,
    "overview": [
      "Sunrays AI partners with Travel organizations to engineer resilient digital platforms that create durable competitive advantage. Online booking engines and guest experience platforms for hospitality leaders.",
      "Since 2014, our senior teams across the USA, Singapore, and India have shipped mission-critical platforms for healthcare, finance, retail, manufacturing, and telecom leaders. For Travel, that means pairing deep product thinking with battle-tested infrastructure—not junior experiments wrapped in slide decks.",
      "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Travel as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
    ],
    "capabilities": [
      "Industry-specific product and platform strategy for Travel leaders navigating modernization and AI adoption.",
      "Production-ready platforms with observability, security controls, and CI/CD from day one.",
      "Integration with your existing ERP, CRM, data warehouses, identity providers, and third-party APIs.",
      "Performance engineering for high concurrency, low latency, and predictable cost at scale.",
      "Knowledge transfer, runbooks, and optional dedicated teams so capability stays inside your organization."
    ],
    "approach": [
      "Discover: we map business workflows, constraints, and success metrics with your stakeholders before writing a line of production code.",
      "Architect: we design modular, cloud-native foundations with clear service boundaries, data contracts, and failure modes documented upfront.",
      "Build: senior engineers deliver in short, demoable increments with automated testing, security review, and continuous deployment.",
      "Harden: load testing, chaos scenarios, and operational readiness checks ensure launch is calm—not heroic.",
      "Scale: we stay engaged through hypercare and optional managed evolution so the system compounds value over time."
    ],
    "outcomes": [
      "Faster time-to-value with senior-only delivery and reusable architectural blueprints refined across industries.",
      "Systems that remain maintainable: typed APIs, clean domain boundaries, and documentation that new engineers can actually use.",
      "Measurable operational gains—lower incident rates, clearer ownership, and infrastructure that expands with demand instead of collapsing under it.",
      "A partnership posture: we challenge weak assumptions, protect long-term architecture, and refuse shortcuts that create technical debt."
    ],
    "metrics": [
      {
        "label": "Avg. Delivery Lift",
        "value": "2.4×"
      },
      {
        "label": "Uptime Target",
        "value": "99.99%"
      },
      {
        "label": "Senior Engineers",
        "value": "100%"
      },
      {
        "label": "Client Retention",
        "value": "94%"
      }
    ],
    "technologies": [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  },
  "media": {
    "slug": "media",
    "title": "Media",
    "tagline": "High-load CMS systems and data-driven ad-tech ecosystems for publishers.",
    "category": "Industry",
    "vertical": null,
    "overview": [
      "Sunrays AI partners with Media organizations to engineer resilient digital platforms that create durable competitive advantage. High-load CMS systems and data-driven ad-tech ecosystems for publishers.",
      "Since 2014, our senior teams across the USA, Singapore, and India have shipped mission-critical platforms for healthcare, finance, retail, manufacturing, and telecom leaders. For Media, that means pairing deep product thinking with battle-tested infrastructure—not junior experiments wrapped in slide decks.",
      "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Media as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
    ],
    "capabilities": [
      "Industry-specific product and platform strategy for Media leaders navigating modernization and AI adoption.",
      "Production-ready platforms with observability, security controls, and CI/CD from day one.",
      "Integration with your existing ERP, CRM, data warehouses, identity providers, and third-party APIs.",
      "Performance engineering for high concurrency, low latency, and predictable cost at scale.",
      "Knowledge transfer, runbooks, and optional dedicated teams so capability stays inside your organization."
    ],
    "approach": [
      "Discover: we map business workflows, constraints, and success metrics with your stakeholders before writing a line of production code.",
      "Architect: we design modular, cloud-native foundations with clear service boundaries, data contracts, and failure modes documented upfront.",
      "Build: senior engineers deliver in short, demoable increments with automated testing, security review, and continuous deployment.",
      "Harden: load testing, chaos scenarios, and operational readiness checks ensure launch is calm—not heroic.",
      "Scale: we stay engaged through hypercare and optional managed evolution so the system compounds value over time."
    ],
    "outcomes": [
      "Faster time-to-value with senior-only delivery and reusable architectural blueprints refined across industries.",
      "Systems that remain maintainable: typed APIs, clean domain boundaries, and documentation that new engineers can actually use.",
      "Measurable operational gains—lower incident rates, clearer ownership, and infrastructure that expands with demand instead of collapsing under it.",
      "A partnership posture: we challenge weak assumptions, protect long-term architecture, and refuse shortcuts that create technical debt."
    ],
    "metrics": [
      {
        "label": "Cost Efficiency",
        "value": "35%"
      },
      {
        "label": "Automation Gain",
        "value": "70%"
      },
      {
        "label": "Global Delivery",
        "value": "24/7"
      },
      {
        "label": "Security Reviews",
        "value": "Every release"
      }
    ],
    "technologies": [
      "TypeScript",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Docker"
    ]
  }
};

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
  return `/industries/${resolved}`;
}
