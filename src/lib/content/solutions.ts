import type { DetailContent } from "./types";

export type SolutionVertical = "retail" | "it-telecom" | "automotive" | "manufacture" | "finance";

export const VERTICAL_LABELS: Record<SolutionVertical, string> = {
  "retail": "Retail & E-commerce",
  "it-telecom": "IT & Telecom",
  "automotive": "Automotive",
  "manufacture": "Manufacturing",
  "finance": "Finance"
};

export const solutionsContent: Record<SolutionVertical, Record<string, DetailContent>> = {
  "retail": {
    "enterprise-resource-planning-erp": {
      "slug": "enterprise-resource-planning-erp",
      "title": "Enterprise Resource Planning (ERP)",
      "tagline": "Centralized management of core business processes.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Enterprise Resource Planning (ERP) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Centralized management of core business processes—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Enterprise Resource Planning (ERP) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Enterprise Resource Planning (ERP) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Enterprise Resource Planning (ERP) workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Enterprise Resource Planning (ERP) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "customer-relationship-management-crm": {
      "slug": "customer-relationship-management-crm",
      "title": "Customer Relationship Management (CRM)",
      "tagline": "Optimizing customer interactions and data.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Customer Relationship Management (CRM) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Optimizing customer interactions and data—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Customer Relationship Management (CRM) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Customer Relationship Management (CRM) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Customer Relationship Management (CRM) workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Customer Relationship Management (CRM) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "help-desk-software": {
      "slug": "help-desk-software",
      "title": "Help Desk Software",
      "tagline": "Efficient ticket management and customer support.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Help Desk Software is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Efficient ticket management and customer support—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Help Desk Software must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Help Desk Software as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Help Desk Software workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Help Desk Software strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "accounting-software": {
      "slug": "accounting-software",
      "title": "Accounting Software",
      "tagline": "Financial tracking and compliance for retail.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Accounting Software is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Financial tracking and compliance for retail—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Accounting Software must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Accounting Software as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Accounting Software workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Accounting Software strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "document-management": {
      "slug": "document-management",
      "title": "Document Management",
      "tagline": "Digital storage and workflow for business documents.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Document Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Digital storage and workflow for business documents—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Document Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Document Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Document Management workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Document Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "purchasing-management": {
      "slug": "purchasing-management",
      "title": "Purchasing Management",
      "tagline": "Streamlined procurement and vendor relations.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Purchasing Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Streamlined procurement and vendor relations—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Purchasing Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Purchasing Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Purchasing Management workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Purchasing Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "payment-processing": {
      "slug": "payment-processing",
      "title": "Payment Processing",
      "tagline": "Secure and fast transaction handling.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Payment Processing is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Secure and fast transaction handling—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Payment Processing must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Payment Processing as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Payment Processing workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Payment Processing strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "product-recommendation": {
      "slug": "product-recommendation",
      "title": "Product Recommendation",
      "tagline": "AI-driven personalization for customers.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Product Recommendation is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. AI-driven personalization for customers—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Product Recommendation must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Product Recommendation as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Product Recommendation workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Product Recommendation strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "distribution-management-dms": {
      "slug": "distribution-management-dms",
      "title": "Distribution Management (DMS)",
      "tagline": "Supply chain orchestration and logistics.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Distribution Management (DMS) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Supply chain orchestration and logistics—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Distribution Management (DMS) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Distribution Management (DMS) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Distribution Management (DMS) workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Distribution Management (DMS) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "order-management-oms": {
      "slug": "order-management-oms",
      "title": "Order Management (OMS)",
      "tagline": "End-to-end order lifecycle tracking.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Order Management (OMS) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. End-to-end order lifecycle tracking—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Order Management (OMS) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Order Management (OMS) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Order Management (OMS) workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Order Management (OMS) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "warehouse-management-wms": {
      "slug": "warehouse-management-wms",
      "title": "Warehouse Management (WMS)",
      "tagline": "Real-time inventory and warehouse control.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Warehouse Management (WMS) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Real-time inventory and warehouse control—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Warehouse Management (WMS) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Warehouse Management (WMS) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Warehouse Management (WMS) workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Warehouse Management (WMS) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "inventory-management": {
      "slug": "inventory-management",
      "title": "Inventory Management",
      "tagline": "Accurate stock tracking across channels.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Inventory Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Accurate stock tracking across channels—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Inventory Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Inventory Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Inventory Management workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Inventory Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "shipping-software": {
      "slug": "shipping-software",
      "title": "Shipping Software",
      "tagline": "Carrier integration and label automation.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Shipping Software is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Carrier integration and label automation—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Shipping Software must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Shipping Software as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Shipping Software workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Shipping Software strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "b2b-portal-development": {
      "slug": "b2b-portal-development",
      "title": "B2B Portal Development",
      "tagline": "Dedicated platforms for business partners.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "B2B Portal Development is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Dedicated platforms for business partners—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, B2B Portal Development must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat B2B Portal Development as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned B2B Portal Development workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end B2B Portal Development strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "point-of-sale-pos": {
      "slug": "point-of-sale-pos",
      "title": "Point of Sale (POS)",
      "tagline": "Modern checkout experiences for physical stores.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Point of Sale (POS) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Modern checkout experiences for physical stores—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Point of Sale (POS) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Point of Sale (POS) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Point of Sale (POS) workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Point of Sale (POS) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "cpq-software": {
      "slug": "cpq-software",
      "title": "CPQ Software",
      "tagline": "Accurate pricing and quote generation.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "CPQ Software is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Accurate pricing and quote generation—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, CPQ Software must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat CPQ Software as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned CPQ Software workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end CPQ Software strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "product-information-pim": {
      "slug": "product-information-pim",
      "title": "Product Information (PIM)",
      "tagline": "Centralized product data management.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Product Information (PIM) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Centralized product data management—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Product Information (PIM) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Product Information (PIM) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Product Information (PIM) workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Product Information (PIM) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "learning-management-lms": {
      "slug": "learning-management-lms",
      "title": "Learning Management (LMS)",
      "tagline": "Staff training and development platforms.",
      "category": "Retail & E-commerce",
      "vertical": "Retail & E-commerce",
      "overview": [
        "Learning Management (LMS) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Staff training and development platforms—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Retail & E-commerce, Learning Management (LMS) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Learning Management (LMS) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Learning Management (LMS) workflows designed specifically for Retail & E-commerce operating constraints.",
        "End-to-end Learning Management (LMS) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    }
  },
  "it-telecom": {
    "enterprise-resource-planning-erp": {
      "slug": "enterprise-resource-planning-erp",
      "title": "Enterprise Resource Planning (ERP)",
      "tagline": "Scalable resource planning for tech firms.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Enterprise Resource Planning (ERP) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Scalable resource planning for tech firms—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Enterprise Resource Planning (ERP) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Enterprise Resource Planning (ERP) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Enterprise Resource Planning (ERP) workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Enterprise Resource Planning (ERP) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "customer-relationship-management-crm": {
      "slug": "customer-relationship-management-crm",
      "title": "Customer Relationship Management (CRM)",
      "tagline": "Managing complex B2B client relationships.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Customer Relationship Management (CRM) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Managing complex B2B client relationships—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Customer Relationship Management (CRM) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Customer Relationship Management (CRM) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Customer Relationship Management (CRM) workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Customer Relationship Management (CRM) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "network-management": {
      "slug": "network-management",
      "title": "Network Management",
      "tagline": "Infrastructure monitoring and optimization.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Network Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Infrastructure monitoring and optimization—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Network Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Network Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Network Management workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Network Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "it-service-management-itsm": {
      "slug": "it-service-management-itsm",
      "title": "IT Service Management (ITSM)",
      "tagline": "Standardized IT delivery and support.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "IT Service Management (ITSM) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Standardized IT delivery and support—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, IT Service Management (ITSM) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat IT Service Management (ITSM) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned IT Service Management (ITSM) workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end IT Service Management (ITSM) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "telecom-billing": {
      "slug": "telecom-billing",
      "title": "Telecom Billing",
      "tagline": "High-volume usage tracking and invoicing.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Telecom Billing is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. High-volume usage tracking and invoicing—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Telecom Billing must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Telecom Billing as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Telecom Billing workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Telecom Billing strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "Spark",
        "dbt",
        "Snowflake",
        "Kafka",
        "Airflow",
        "BigQuery"
      ]
    },
    "financial-management": {
      "slug": "financial-management",
      "title": "Financial Management",
      "tagline": "Advanced fiscal tracking for enterprises.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Financial Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Advanced fiscal tracking for enterprises—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Financial Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Financial Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Financial Management workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Financial Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "data-backup-and-recovery": {
      "slug": "data-backup-and-recovery",
      "title": "Data Backup and Recovery",
      "tagline": "Resilient disaster recovery planning.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Data Backup and Recovery is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Resilient disaster recovery planning—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Data Backup and Recovery must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Data Backup and Recovery as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Data Backup and Recovery workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Data Backup and Recovery strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "AWS",
        "Azure",
        "GCP",
        "Terraform",
        "Docker",
        "Kubernetes"
      ]
    },
    "customer-support": {
      "slug": "customer-support",
      "title": "Customer Support",
      "tagline": "Multi-channel technical support systems.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Customer Support is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Multi-channel technical support systems—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Customer Support must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Customer Support as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Customer Support workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Customer Support strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "governance-and-compliance": {
      "slug": "governance-and-compliance",
      "title": "Governance and Compliance",
      "tagline": "Ensuring regulatory and security standards.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Governance and Compliance is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Ensuring regulatory and security standards—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Governance and Compliance must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Governance and Compliance as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Governance and Compliance workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Governance and Compliance strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "telecom-inventory-optimization": {
      "slug": "telecom-inventory-optimization",
      "title": "Telecom Inventory Optimization",
      "tagline": "Stock and hardware lifecycle management.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Telecom Inventory Optimization is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Stock and hardware lifecycle management—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Telecom Inventory Optimization must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Telecom Inventory Optimization as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Telecom Inventory Optimization workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Telecom Inventory Optimization strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "supply-chain-visibility": {
      "slug": "supply-chain-visibility",
      "title": "Supply Chain Visibility",
      "tagline": "End-to-end transparency in tech logistics.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Supply Chain Visibility is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. End-to-end transparency in tech logistics—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Supply Chain Visibility must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Supply Chain Visibility as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Supply Chain Visibility workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Supply Chain Visibility strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "Python",
        "PyTorch",
        "LangChain",
        "OpenAI",
        "Vector DBs",
        "Kubernetes"
      ]
    },
    "project-management-tool": {
      "slug": "project-management-tool",
      "title": "Project Management Tool",
      "tagline": "Agile delivery and resource allocation.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Project Management Tool is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Agile delivery and resource allocation—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Project Management Tool must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Project Management Tool as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Project Management Tool workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Project Management Tool strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "workflow-automation": {
      "slug": "workflow-automation",
      "title": "Workflow Automation",
      "tagline": "Reducing manual ops through logic.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Workflow Automation is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Reducing manual ops through logic—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Workflow Automation must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Workflow Automation as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Workflow Automation workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Workflow Automation strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "feedback-and-survey": {
      "slug": "feedback-and-survey",
      "title": "Feedback and Survey",
      "tagline": "Capturing and analyzing user sentiment.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Feedback and Survey is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Capturing and analyzing user sentiment—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Feedback and Survey must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Feedback and Survey as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Feedback and Survey workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Feedback and Survey strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "learning-management-lms": {
      "slug": "learning-management-lms",
      "title": "Learning Management (LMS)",
      "tagline": "Continuous learning for tech teams.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Learning Management (LMS) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Continuous learning for tech teams—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Learning Management (LMS) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Learning Management (LMS) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Learning Management (LMS) workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Learning Management (LMS) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "data-analytics-and-bi": {
      "slug": "data-analytics-and-bi",
      "title": "Data Analytics and BI",
      "tagline": "Insights from complex datasets.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Data Analytics and BI is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Insights from complex datasets—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Data Analytics and BI must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Data Analytics and BI as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Data Analytics and BI workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Data Analytics and BI strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "Spark",
        "dbt",
        "Snowflake",
        "Kafka",
        "Airflow",
        "BigQuery"
      ]
    },
    "customer-success": {
      "slug": "customer-success",
      "title": "Customer Success",
      "tagline": "Driving retention and growth metrics.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Customer Success is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Driving retention and growth metrics—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Customer Success must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Customer Success as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Customer Success workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Customer Success strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "legal-and-compliance": {
      "slug": "legal-and-compliance",
      "title": "Legal and Compliance",
      "tagline": "Managing legal risks and regulations.",
      "category": "IT & Telecom",
      "vertical": "IT & Telecom",
      "overview": [
        "Legal and Compliance is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Managing legal risks and regulations—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In IT & Telecom, Legal and Compliance must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Legal and Compliance as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Legal and Compliance workflows designed specifically for IT & Telecom operating constraints.",
        "End-to-end Legal and Compliance strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
  },
  "automotive": {
    "manufacturing-execution-mes": {
      "slug": "manufacturing-execution-mes",
      "title": "Manufacturing Execution (MES)",
      "tagline": "Floor-level production control.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Manufacturing Execution (MES) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Floor-level production control—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Manufacturing Execution (MES) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Manufacturing Execution (MES) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Manufacturing Execution (MES) workflows designed specifically for Automotive operating constraints.",
        "End-to-end Manufacturing Execution (MES) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "product-lifecycle-plm": {
      "slug": "product-lifecycle-plm",
      "title": "Product Lifecycle (PLM)",
      "tagline": "Managing products from concept to sunset.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Product Lifecycle (PLM) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Managing products from concept to sunset—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Product Lifecycle (PLM) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Product Lifecycle (PLM) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Product Lifecycle (PLM) workflows designed specifically for Automotive operating constraints.",
        "End-to-end Product Lifecycle (PLM) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "supply-chain-management-scm": {
      "slug": "supply-chain-management-scm",
      "title": "Supply Chain Management (SCM)",
      "tagline": "Automotive-grade logistics and parts tracking.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Supply Chain Management (SCM) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Automotive-grade logistics and parts tracking—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Supply Chain Management (SCM) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Supply Chain Management (SCM) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Supply Chain Management (SCM) workflows designed specifically for Automotive operating constraints.",
        "End-to-end Supply Chain Management (SCM) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "Python",
        "PyTorch",
        "LangChain",
        "OpenAI",
        "Vector DBs",
        "Kubernetes"
      ]
    },
    "enterprise-resource-planning-erp": {
      "slug": "enterprise-resource-planning-erp",
      "title": "Enterprise Resource Planning (ERP)",
      "tagline": "Integrated ops for manufacturers.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Enterprise Resource Planning (ERP) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Integrated ops for manufacturers—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Enterprise Resource Planning (ERP) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Enterprise Resource Planning (ERP) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Enterprise Resource Planning (ERP) workflows designed specifically for Automotive operating constraints.",
        "End-to-end Enterprise Resource Planning (ERP) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "customer-relationship-management-crm": {
      "slug": "customer-relationship-management-crm",
      "title": "Customer Relationship Management (CRM)",
      "tagline": "Dealer-focused client engagement.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Customer Relationship Management (CRM) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Dealer-focused client engagement—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Customer Relationship Management (CRM) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Customer Relationship Management (CRM) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Customer Relationship Management (CRM) workflows designed specifically for Automotive operating constraints.",
        "End-to-end Customer Relationship Management (CRM) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "dealer-management-dms": {
      "slug": "dealer-management-dms",
      "title": "Dealer Management (DMS)",
      "tagline": "Sales and service automation for dealers.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Dealer Management (DMS) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Sales and service automation for dealers—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Dealer Management (DMS) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Dealer Management (DMS) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Dealer Management (DMS) workflows designed specifically for Automotive operating constraints.",
        "End-to-end Dealer Management (DMS) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "human-resource-management-hrm": {
      "slug": "human-resource-management-hrm",
      "title": "Human Resource Management (HRM)",
      "tagline": "Workforce planning for large plants.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Human Resource Management (HRM) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Workforce planning for large plants—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Human Resource Management (HRM) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Human Resource Management (HRM) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Human Resource Management (HRM) workflows designed specifically for Automotive operating constraints.",
        "End-to-end Human Resource Management (HRM) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "quality-management-qms": {
      "slug": "quality-management-qms",
      "title": "Quality Management (QMS)",
      "tagline": "Zero-defect quality assurance.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Quality Management (QMS) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Zero-defect quality assurance—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Quality Management (QMS) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Quality Management (QMS) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Quality Management (QMS) workflows designed specifically for Automotive operating constraints.",
        "End-to-end Quality Management (QMS) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "dealer-network-management": {
      "slug": "dealer-network-management",
      "title": "Dealer Network Management",
      "tagline": "Orchestrating regional dealer hubs.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Dealer Network Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Orchestrating regional dealer hubs—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Dealer Network Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Dealer Network Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Dealer Network Management workflows designed specifically for Automotive operating constraints.",
        "End-to-end Dealer Network Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "enterprise-asset-management-eam": {
      "slug": "enterprise-asset-management-eam",
      "title": "Enterprise Asset Management (EAM)",
      "tagline": "Infrastructure and tool maintenance.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Enterprise Asset Management (EAM) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Infrastructure and tool maintenance—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Enterprise Asset Management (EAM) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Enterprise Asset Management (EAM) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Enterprise Asset Management (EAM) workflows designed specifically for Automotive operating constraints.",
        "End-to-end Enterprise Asset Management (EAM) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "predictive-maintenance": {
      "slug": "predictive-maintenance",
      "title": "Predictive Maintenance",
      "tagline": "AI-driven uptime for assembly lines.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Predictive Maintenance is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. AI-driven uptime for assembly lines—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Predictive Maintenance must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Predictive Maintenance as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Predictive Maintenance workflows designed specifically for Automotive operating constraints.",
        "End-to-end Predictive Maintenance strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "production-planning": {
      "slug": "production-planning",
      "title": "Production Planning",
      "tagline": "Optimal scheduling for complex builds.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Production Planning is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Optimal scheduling for complex builds—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Production Planning must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Production Planning as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Production Planning workflows designed specifically for Automotive operating constraints.",
        "End-to-end Production Planning strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "warehouse-management-wms": {
      "slug": "warehouse-management-wms",
      "title": "Warehouse Management (WMS)",
      "tagline": "Parts and vehicle inventory control.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Warehouse Management (WMS) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Parts and vehicle inventory control—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Warehouse Management (WMS) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Warehouse Management (WMS) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Warehouse Management (WMS) workflows designed specifically for Automotive operating constraints.",
        "End-to-end Warehouse Management (WMS) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "environment-and-safety-ehs": {
      "slug": "environment-and-safety-ehs",
      "title": "Environment and Safety (EHS)",
      "tagline": "Ensuring plant safety and compliance.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Environment and Safety (EHS) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Ensuring plant safety and compliance—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Environment and Safety (EHS) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Environment and Safety (EHS) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Environment and Safety (EHS) workflows designed specifically for Automotive operating constraints.",
        "End-to-end Environment and Safety (EHS) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "document-management": {
      "slug": "document-management",
      "title": "Document Management",
      "tagline": "Secure storage for engineering docs.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Document Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Secure storage for engineering docs—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Document Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Document Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Document Management workflows designed specifically for Automotive operating constraints.",
        "End-to-end Document Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "warranty-management": {
      "slug": "warranty-management",
      "title": "Warranty Management",
      "tagline": "Claims processing and analysis.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Warranty Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Claims processing and analysis—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Warranty Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Warranty Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Warranty Management workflows designed specifically for Automotive operating constraints.",
        "End-to-end Warranty Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "sales-forecasting": {
      "slug": "sales-forecasting",
      "title": "Sales Forecasting",
      "tagline": "Market-driven production estimates.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Sales Forecasting is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Market-driven production estimates—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Sales Forecasting must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Sales Forecasting as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Sales Forecasting workflows designed specifically for Automotive operating constraints.",
        "End-to-end Sales Forecasting strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "fleet-management": {
      "slug": "fleet-management",
      "title": "Fleet Management",
      "tagline": "Tracking corporate and test fleets.",
      "category": "Automotive",
      "vertical": "Automotive",
      "overview": [
        "Fleet Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Tracking corporate and test fleets—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Automotive, Fleet Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Fleet Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Fleet Management workflows designed specifically for Automotive operating constraints.",
        "End-to-end Fleet Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    }
  },
  "manufacture": {
    "enterprise-resource-planning-erp": {
      "slug": "enterprise-resource-planning-erp",
      "title": "Enterprise Resource Planning (ERP)",
      "tagline": "End-to-end manufacturing orchestration.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Enterprise Resource Planning (ERP) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. End-to-end manufacturing orchestration—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Enterprise Resource Planning (ERP) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Enterprise Resource Planning (ERP) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Enterprise Resource Planning (ERP) workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Enterprise Resource Planning (ERP) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "manufacturing-execution-mes": {
      "slug": "manufacturing-execution-mes",
      "title": "Manufacturing Execution (MES)",
      "tagline": "Real-time production monitoring.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Manufacturing Execution (MES) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Real-time production monitoring—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Manufacturing Execution (MES) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Manufacturing Execution (MES) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Manufacturing Execution (MES) workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Manufacturing Execution (MES) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "supply-chain-management-scm": {
      "slug": "supply-chain-management-scm",
      "title": "Supply Chain Management (SCM)",
      "tagline": "Global logistics and raw materials.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Supply Chain Management (SCM) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Global logistics and raw materials—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Supply Chain Management (SCM) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Supply Chain Management (SCM) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Supply Chain Management (SCM) workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Supply Chain Management (SCM) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "Python",
        "PyTorch",
        "LangChain",
        "OpenAI",
        "Vector DBs",
        "Kubernetes"
      ]
    },
    "product-lifecycle-plm": {
      "slug": "product-lifecycle-plm",
      "title": "Product Lifecycle (PLM)",
      "tagline": "Digital thread for manufactured goods.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Product Lifecycle (PLM) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Digital thread for manufactured goods—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Product Lifecycle (PLM) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Product Lifecycle (PLM) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Product Lifecycle (PLM) workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Product Lifecycle (PLM) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "warehouse-management-wms": {
      "slug": "warehouse-management-wms",
      "title": "Warehouse Management (WMS)",
      "tagline": "Inventory control for finished goods.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Warehouse Management (WMS) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Inventory control for finished goods—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Warehouse Management (WMS) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Warehouse Management (WMS) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Warehouse Management (WMS) workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Warehouse Management (WMS) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "mrp-ii-software": {
      "slug": "mrp-ii-software",
      "title": "MRP II Software",
      "tagline": "Advanced material requirement planning.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "MRP II Software is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Advanced material requirement planning—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, MRP II Software must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat MRP II Software as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned MRP II Software workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end MRP II Software strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "customer-relationship-management-crm": {
      "slug": "customer-relationship-management-crm",
      "title": "Customer Relationship Management (CRM)",
      "tagline": "B2B sales and distributor relations.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Customer Relationship Management (CRM) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. B2B sales and distributor relations—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Customer Relationship Management (CRM) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Customer Relationship Management (CRM) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Customer Relationship Management (CRM) workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Customer Relationship Management (CRM) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "human-resources-hrms": {
      "slug": "human-resources-hrms",
      "title": "Human Resources (HRMS)",
      "tagline": "Plant-level workforce management.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Human Resources (HRMS) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Plant-level workforce management—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Human Resources (HRMS) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Human Resources (HRMS) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Human Resources (HRMS) workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Human Resources (HRMS) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "maintenance-management": {
      "slug": "maintenance-management",
      "title": "Maintenance Management",
      "tagline": "Maximizing equipment availability.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Maintenance Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Maximizing equipment availability—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Maintenance Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Maintenance Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Maintenance Management workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Maintenance Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "labor-management": {
      "slug": "labor-management",
      "title": "Labor Management",
      "tagline": "Efficiency tracking and shift planning.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Labor Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Efficiency tracking and shift planning—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Labor Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Labor Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Labor Management workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Labor Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "document-management": {
      "slug": "document-management",
      "title": "Document Management",
      "tagline": "ISO standards and blueprint control.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Document Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. ISO standards and blueprint control—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Document Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Document Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Document Management workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Document Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "process-simulation": {
      "slug": "process-simulation",
      "title": "Process Simulation",
      "tagline": "Digital twins for plant optimization.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Process Simulation is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Digital twins for plant optimization—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Process Simulation must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Process Simulation as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Process Simulation workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Process Simulation strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "predictive-analytics": {
      "slug": "predictive-analytics",
      "title": "Predictive Analytics",
      "tagline": "Forecasting failure and output.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Predictive Analytics is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Forecasting failure and output—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Predictive Analytics must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Predictive Analytics as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Predictive Analytics workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Predictive Analytics strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "Python",
        "PyTorch",
        "LangChain",
        "OpenAI",
        "Vector DBs",
        "Kubernetes"
      ]
    },
    "statistical-process-control-spc": {
      "slug": "statistical-process-control-spc",
      "title": "Statistical Process Control (SPC)",
      "tagline": "Ensuring dimensional and quality standards.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Statistical Process Control (SPC) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Ensuring dimensional and quality standards—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Statistical Process Control (SPC) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Statistical Process Control (SPC) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Statistical Process Control (SPC) workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Statistical Process Control (SPC) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "cost-estimation": {
      "slug": "cost-estimation",
      "title": "Cost Estimation",
      "tagline": "Accurate quoting for custom manufacturing.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Cost Estimation is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Accurate quoting for custom manufacturing—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Cost Estimation must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Cost Estimation as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Cost Estimation workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Cost Estimation strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "shop-floor-control": {
      "slug": "shop-floor-control",
      "title": "Shop Floor Control",
      "tagline": "Visualizing production status.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Shop Floor Control is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Visualizing production status—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Shop Floor Control must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Shop Floor Control as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Shop Floor Control workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Shop Floor Control strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "risk-management": {
      "slug": "risk-management",
      "title": "Risk Management",
      "tagline": "Identifying and mitigating plant risks.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Risk Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Identifying and mitigating plant risks—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Risk Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Risk Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Risk Management workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Risk Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "compliance-management": {
      "slug": "compliance-management",
      "title": "Compliance Management",
      "tagline": "Adhering to global safety standards.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Compliance Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Adhering to global safety standards—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Compliance Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Compliance Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Compliance Management workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Compliance Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "workflow-management": {
      "slug": "workflow-management",
      "title": "Workflow Management",
      "tagline": "Standardizing SOPs and approvals.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Workflow Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Standardizing SOPs and approvals—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Workflow Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Workflow Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Workflow Management workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Workflow Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "asset-management": {
      "slug": "asset-management",
      "title": "Asset Management",
      "tagline": "Lifecycle tracking of heavy machinery.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Asset Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Lifecycle tracking of heavy machinery—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Asset Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Asset Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Asset Management workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Asset Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "barcode-and-rfid-system": {
      "slug": "barcode-and-rfid-system",
      "title": "Barcode and RFID System",
      "tagline": "Precision item-level tracking.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Barcode and RFID System is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Precision item-level tracking—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Barcode and RFID System must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Barcode and RFID System as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Barcode and RFID System workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Barcode and RFID System strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "legal-and-compliance": {
      "slug": "legal-and-compliance",
      "title": "Legal and Compliance",
      "tagline": "Regulatory oversight for manufacturers.",
      "category": "Manufacturing",
      "vertical": "Manufacturing",
      "overview": [
        "Legal and Compliance is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Regulatory oversight for manufacturers—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Manufacturing, Legal and Compliance must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Legal and Compliance as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Legal and Compliance workflows designed specifically for Manufacturing operating constraints.",
        "End-to-end Legal and Compliance strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
  },
  "finance": {
    "enterprise-resource-planning-erp": {
      "slug": "enterprise-resource-planning-erp",
      "title": "Enterprise Resource Planning (ERP)",
      "tagline": "Core finance and administrative control.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Enterprise Resource Planning (ERP) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Core finance and administrative control—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Enterprise Resource Planning (ERP) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Enterprise Resource Planning (ERP) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Enterprise Resource Planning (ERP) workflows designed specifically for Finance operating constraints.",
        "End-to-end Enterprise Resource Planning (ERP) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "accounting-software": {
      "slug": "accounting-software",
      "title": "Accounting Software",
      "tagline": "Ledgers, journals, and fiscal reporting.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Accounting Software is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Ledgers, journals, and fiscal reporting—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Accounting Software must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Accounting Software as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Accounting Software workflows designed specifically for Finance operating constraints.",
        "End-to-end Accounting Software strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "customer-relationship-management-crm": {
      "slug": "customer-relationship-management-crm",
      "title": "Customer Relationship Management (CRM)",
      "tagline": "Managing high-net-worth client profiles.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Customer Relationship Management (CRM) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Managing high-net-worth client profiles—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Customer Relationship Management (CRM) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Customer Relationship Management (CRM) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Customer Relationship Management (CRM) workflows designed specifically for Finance operating constraints.",
        "End-to-end Customer Relationship Management (CRM) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "financial-reporting-system": {
      "slug": "financial-reporting-system",
      "title": "Financial Reporting System",
      "tagline": "Automated statement generation.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Financial Reporting System is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Automated statement generation—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Financial Reporting System must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Financial Reporting System as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Financial Reporting System workflows designed specifically for Finance operating constraints.",
        "End-to-end Financial Reporting System strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "treasury-management": {
      "slug": "treasury-management",
      "title": "Treasury Management",
      "tagline": "Liquidity and cash flow orchestration.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Treasury Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Liquidity and cash flow orchestration—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Treasury Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Treasury Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Treasury Management workflows designed specifically for Finance operating constraints.",
        "End-to-end Treasury Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "risk-management": {
      "slug": "risk-management",
      "title": "Risk Management",
      "tagline": "Quantitative risk assessment platforms.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Risk Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Quantitative risk assessment platforms—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Risk Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Risk Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Risk Management workflows designed specifically for Finance operating constraints.",
        "End-to-end Risk Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "fp-and-a-software": {
      "slug": "fp-and-a-software",
      "title": "FP&A Software",
      "tagline": "Advanced planning and budgeting tools.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "FP&A Software is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Advanced planning and budgeting tools—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, FP&A Software must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat FP&A Software as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned FP&A Software workflows designed specifically for Finance operating constraints.",
        "End-to-end FP&A Software strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "billing-and-invoicing": {
      "slug": "billing-and-invoicing",
      "title": "Billing and Invoicing",
      "tagline": "Automating accounts receivable.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Billing and Invoicing is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Automating accounts receivable—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Billing and Invoicing must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Billing and Invoicing as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Billing and Invoicing workflows designed specifically for Finance operating constraints.",
        "End-to-end Billing and Invoicing strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "Spark",
        "dbt",
        "Snowflake",
        "Kafka",
        "Airflow",
        "BigQuery"
      ]
    },
    "payment-processing": {
      "slug": "payment-processing",
      "title": "Payment Processing",
      "tagline": "Multi-currency settlement logic.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Payment Processing is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Multi-currency settlement logic—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Payment Processing must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Payment Processing as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Payment Processing workflows designed specifically for Finance operating constraints.",
        "End-to-end Payment Processing strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "trading-platforms": {
      "slug": "trading-platforms",
      "title": "Trading Platforms",
      "tagline": "Low-latency market execution tools.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Trading Platforms is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Low-latency market execution tools—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Trading Platforms must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Trading Platforms as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Trading Platforms workflows designed specifically for Finance operating constraints.",
        "End-to-end Trading Platforms strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "credit-scoring": {
      "slug": "credit-scoring",
      "title": "Credit Scoring",
      "tagline": "Algorithmic risk evaluation for lending.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Credit Scoring is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Algorithmic risk evaluation for lending—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Credit Scoring must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Credit Scoring as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Credit Scoring workflows designed specifically for Finance operating constraints.",
        "End-to-end Credit Scoring strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "expense-management": {
      "slug": "expense-management",
      "title": "Expense Management",
      "tagline": "Employee spend tracking and audits.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Expense Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Employee spend tracking and audits—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Expense Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Expense Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Expense Management workflows designed specifically for Finance operating constraints.",
        "End-to-end Expense Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "tax-management": {
      "slug": "tax-management",
      "title": "Tax Management",
      "tagline": "Corporate tax calculation and filing.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Tax Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Corporate tax calculation and filing—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Tax Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Tax Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Tax Management workflows designed specifically for Finance operating constraints.",
        "End-to-end Tax Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "fraud-detection": {
      "slug": "fraud-detection",
      "title": "Fraud Detection",
      "tagline": "AI-powered anomaly detection in payments.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Fraud Detection is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. AI-powered anomaly detection in payments—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Fraud Detection must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Fraud Detection as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Fraud Detection workflows designed specifically for Finance operating constraints.",
        "End-to-end Fraud Detection strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "Python",
        "PyTorch",
        "LangChain",
        "OpenAI",
        "Vector DBs",
        "Kubernetes"
      ]
    },
    "loan-origination": {
      "slug": "loan-origination",
      "title": "Loan Origination",
      "tagline": "Automation of the lending lifecycle.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Loan Origination is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Automation of the lending lifecycle—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Loan Origination must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Loan Origination as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Loan Origination workflows designed specifically for Finance operating constraints.",
        "End-to-end Loan Origination strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "regulatory-reporting": {
      "slug": "regulatory-reporting",
      "title": "Regulatory Reporting",
      "tagline": "Compliance reporting for central banks.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Regulatory Reporting is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Compliance reporting for central banks—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Regulatory Reporting must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Regulatory Reporting as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Regulatory Reporting workflows designed specifically for Finance operating constraints.",
        "End-to-end Regulatory Reporting strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "document-management": {
      "slug": "document-management",
      "title": "Document Management",
      "tagline": "Secure, audited digital archiving.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Document Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Secure, audited digital archiving—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Document Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Document Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Document Management workflows designed specifically for Finance operating constraints.",
        "End-to-end Document Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "insurance-management": {
      "slug": "insurance-management",
      "title": "Insurance Management",
      "tagline": "Policy administration and claims.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Insurance Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Policy administration and claims—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Insurance Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Insurance Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Insurance Management workflows designed specifically for Finance operating constraints.",
        "End-to-end Insurance Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "mortgage-management": {
      "slug": "mortgage-management",
      "title": "Mortgage Management",
      "tagline": "Residential and commercial loan hubs.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Mortgage Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Residential and commercial loan hubs—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Mortgage Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Mortgage Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Mortgage Management workflows designed specifically for Finance operating constraints.",
        "End-to-end Mortgage Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "audit-management": {
      "slug": "audit-management",
      "title": "Audit Management",
      "tagline": "Internal and external audit workflow.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Audit Management is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Internal and external audit workflow—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Audit Management must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Audit Management as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Audit Management workflows designed specifically for Finance operating constraints.",
        "End-to-end Audit Management strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "enterprise-risk-erm": {
      "slug": "enterprise-risk-erm",
      "title": "Enterprise Risk (ERM)",
      "tagline": "Strategic risk tracking across units.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Enterprise Risk (ERM) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Strategic risk tracking across units—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Enterprise Risk (ERM) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Enterprise Risk (ERM) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Enterprise Risk (ERM) workflows designed specifically for Finance operating constraints.",
        "End-to-end Enterprise Risk (ERM) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
        "NestJS",
        "Java",
        "PostgreSQL",
        "Kafka",
        "GraphQL",
        "Elasticsearch"
      ]
    },
    "rtgs-system": {
      "slug": "rtgs-system",
      "title": "RTGS System",
      "tagline": "Real-time settlement for high-value funds.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "RTGS System is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Real-time settlement for high-value funds—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, RTGS System must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat RTGS System as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned RTGS System workflows designed specifically for Finance operating constraints.",
        "End-to-end RTGS System strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "learning-management-lms": {
      "slug": "learning-management-lms",
      "title": "Learning Management (LMS)",
      "tagline": "Continuous certification and training.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Learning Management (LMS) is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. Continuous certification and training—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Learning Management (LMS) must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Learning Management (LMS) as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Learning Management (LMS) workflows designed specifically for Finance operating constraints.",
        "End-to-end Learning Management (LMS) strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
    "legal-and-compliance": {
      "slug": "legal-and-compliance",
      "title": "Legal and Compliance",
      "tagline": "AML and KYC regulatory systems.",
      "category": "Finance",
      "vertical": "Finance",
      "overview": [
        "Legal and Compliance is a core capability where Sunrays AI sets the standard for enterprise-grade delivery. AML and KYC regulatory systems—executed with architecture-first discipline, clear domain models, and systems engineered for real production load.",
        "In Finance, Legal and Compliance must respect industry realities—compliance, seasonal spikes, partner ecosystems, and operational complexity. Our vertical specialists combine software craftsmanship with domain fluency so the solution lands with operators, not just IT.",
        "Clients engage us when the cost of failure is high: regulatory exposure, peak traffic, complex integrations, or modernization that cannot freeze the business. We treat Legal and Compliance as a strategic lever—accelerating growth while hardening reliability, security, and day-two operability."
      ],
      "capabilities": [
        "Industry-tuned Legal and Compliance workflows designed specifically for Finance operating constraints.",
        "End-to-end Legal and Compliance strategy, architecture, and implementation roadmaps tailored to your operating model.",
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
  }
};

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
    .replace(/\(/g, " ")
    .replace(/\)/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return `/solutions/${vertical}/${slug}`;
}
