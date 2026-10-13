"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Building2, Network, Landmark, 
  Database, ShieldCheck, BarChart, Settings, Users, 
  Layers, Gauge, HardDrive, 
  MessageSquare, Briefcase, Workflow, CheckCircle, 
  TrendingUp, GitMerge, 
  Truck, CreditCard, Monitor, Cpu, 
  Activity, Shield, FileText, PieChart, ShoppingCart, 
  Zap, Boxes, Globe
} from "lucide-react";
import { solutionHref, type SolutionVertical } from "@/lib/content/slugs";

interface SolutionItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const retailSolutions: SolutionItem[] = [
  { icon: <Building2 className="w-8 h-8 text-indigo-600 mb-6" />, title: "Enterprise Resource Planning (ERP)", description: "Centralized management of core business processes." },
  { icon: <Users className="w-8 h-8 text-indigo-600 mb-6" />, title: "Customer Relationship Management (CRM)", description: "Optimizing customer interactions and data." },
  { icon: <MessageSquare className="w-8 h-8 text-indigo-600 mb-6" />, title: "Help Desk Software", description: "Efficient ticket management and customer support." },
  { icon: <PieChart className="w-8 h-8 text-indigo-600 mb-6" />, title: "Accounting Software", description: "Financial tracking and compliance for retail." },
  { icon: <FileText className="w-8 h-8 text-indigo-600 mb-6" />, title: "Document Management", description: "Digital storage and workflow for business documents." },
  { icon: <ShoppingCart className="w-8 h-8 text-indigo-600 mb-6" />, title: "Purchasing Management", description: "Streamlined procurement and vendor relations." },
  { icon: <CreditCard className="w-8 h-8 text-indigo-600 mb-6" />, title: "Payment Processing", description: "Secure and fast transaction handling." },
  { icon: <Zap className="w-8 h-8 text-indigo-600 mb-6" />, title: "Product Recommendation", description: "AI-driven personalization for customers." },
  { icon: <Truck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Distribution Management (DMS)", description: "Supply chain orchestration and logistics." },
  { icon: <Boxes className="w-8 h-8 text-indigo-600 mb-6" />, title: "Order Management (OMS)", description: "End-to-end order lifecycle tracking." },
  { icon: <HardDrive className="w-8 h-8 text-indigo-600 mb-6" />, title: "Warehouse Management (WMS)", description: "Real-time inventory and warehouse control." },
  { icon: <Database className="w-8 h-8 text-indigo-600 mb-6" />, title: "Inventory Management", description: "Accurate stock tracking across channels." },
  { icon: <Truck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Shipping Software", description: "Carrier integration and label automation." },
  { icon: <Globe className="w-8 h-8 text-indigo-600 mb-6" />, title: "B2B Portal Development", description: "Dedicated platforms for business partners." },
  { icon: <Monitor className="w-8 h-8 text-indigo-600 mb-6" />, title: "Point of Sale (POS)", description: "Modern checkout experiences for physical stores." },
  { icon: <Settings className="w-8 h-8 text-indigo-600 mb-6" />, title: "CPQ Software", description: "Accurate pricing and quote generation." },
  { icon: <Layers className="w-8 h-8 text-indigo-600 mb-6" />, title: "Product Information (PIM)", description: "Centralized product data management." },
  { icon: <TrendingUp className="w-8 h-8 text-indigo-600 mb-6" />, title: "Learning Management (LMS)", description: "Staff training and development platforms." },
];

const itTelecomSolutions: SolutionItem[] = [
  { icon: <Building2 className="w-8 h-8 text-indigo-600 mb-6" />, title: "Enterprise Resource Planning (ERP)", description: "Scalable resource planning for tech firms." },
  { icon: <Users className="w-8 h-8 text-indigo-600 mb-6" />, title: "Customer Relationship Management (CRM)", description: "Managing complex B2B client relationships." },
  { icon: <Network className="w-8 h-8 text-indigo-600 mb-6" />, title: "Network Management", description: "Infrastructure monitoring and optimization." },
  { icon: <Settings className="w-8 h-8 text-indigo-600 mb-6" />, title: "IT Service Management (ITSM)", description: "Standardized IT delivery and support." },
  { icon: <CreditCard className="w-8 h-8 text-indigo-600 mb-6" />, title: "Telecom Billing", description: "High-volume usage tracking and invoicing." },
  { icon: <Landmark className="w-8 h-8 text-indigo-600 mb-6" />, title: "Financial Management", description: "Advanced fiscal tracking for enterprises." },
  { icon: <Shield className="w-8 h-8 text-indigo-600 mb-6" />, title: "Data Backup and Recovery", description: "Resilient disaster recovery planning." },
  { icon: <MessageSquare className="w-8 h-8 text-indigo-600 mb-6" />, title: "Customer Support", description: "Multi-channel technical support systems." },
  { icon: <ShieldCheck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Governance and Compliance", description: "Ensuring regulatory and security standards." },
  { icon: <Boxes className="w-8 h-8 text-indigo-600 mb-6" />, title: "Telecom Inventory Optimization", description: "Stock and hardware lifecycle management." },
  { icon: <TrendingUp className="w-8 h-8 text-indigo-600 mb-6" />, title: "Supply Chain Visibility", description: "End-to-end transparency in tech logistics." },
  { icon: <Briefcase className="w-8 h-8 text-indigo-600 mb-6" />, title: "Project Management Tool", description: "Agile delivery and resource allocation." },
  { icon: <Workflow className="w-8 h-8 text-indigo-600 mb-6" />, title: "Workflow Automation", description: "Reducing manual ops through logic." },
  { icon: <Activity className="w-8 h-8 text-indigo-600 mb-6" />, title: "Feedback and Survey", description: "Capturing and analyzing user sentiment." },
  { icon: <TrendingUp className="w-8 h-8 text-indigo-600 mb-6" />, title: "Learning Management (LMS)", description: "Continuous learning for tech teams." },
  { icon: <BarChart className="w-8 h-8 text-indigo-600 mb-6" />, title: "Data Analytics and BI", description: "Insights from complex datasets." },
  { icon: <CheckCircle className="w-8 h-8 text-indigo-600 mb-6" />, title: "Customer Success", description: "Driving retention and growth metrics." },
  { icon: <ShieldCheck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Legal and Compliance", description: "Managing legal risks and regulations." },
];

const automotiveSolutions: SolutionItem[] = [
  { icon: <Cpu className="w-8 h-8 text-indigo-600 mb-6" />, title: "Manufacturing Execution (MES)", description: "Floor-level production control." },
  { icon: <Settings className="w-8 h-8 text-indigo-600 mb-6" />, title: "Product Lifecycle (PLM)", description: "Managing products from concept to sunset." },
  { icon: <Truck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Supply Chain Management (SCM)", description: "Automotive-grade logistics and parts tracking." },
  { icon: <Building2 className="w-8 h-8 text-indigo-600 mb-6" />, title: "Enterprise Resource Planning (ERP)", description: "Integrated ops for manufacturers." },
  { icon: <Users className="w-8 h-8 text-indigo-600 mb-6" />, title: "Customer Relationship Management (CRM)", description: "Dealer-focused client engagement." },
  { icon: <Truck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Dealer Management (DMS)", description: "Sales and service automation for dealers." },
  { icon: <Users className="w-8 h-8 text-indigo-600 mb-6" />, title: "Human Resource Management (HRM)", description: "Workforce planning for large plants." },
  { icon: <ShieldCheck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Quality Management (QMS)", description: "Zero-defect quality assurance." },
  { icon: <Network className="w-8 h-8 text-indigo-600 mb-6" />, title: "Dealer Network Management", description: "Orchestrating regional dealer hubs." },
  { icon: <Settings className="w-8 h-8 text-indigo-600 mb-6" />, title: "Enterprise Asset Management (EAM)", description: "Infrastructure and tool maintenance." },
  { icon: <Zap className="w-8 h-8 text-indigo-600 mb-6" />, title: "Predictive Maintenance", description: "AI-driven uptime for assembly lines." },
  { icon: <Workflow className="w-8 h-8 text-indigo-600 mb-6" />, title: "Production Planning", description: "Optimal scheduling for complex builds." },
  { icon: <HardDrive className="w-8 h-8 text-indigo-600 mb-6" />, title: "Warehouse Management (WMS)", description: "Parts and vehicle inventory control." },
  { icon: <Shield className="w-8 h-8 text-indigo-600 mb-6" />, title: "Environment and Safety (EHS)", description: "Ensuring plant safety and compliance." },
  { icon: <FileText className="w-8 h-8 text-indigo-600 mb-6" />, title: "Document Management", description: "Secure storage for engineering docs." },
  { icon: <ShieldCheck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Warranty Management", description: "Claims processing and analysis." },
  { icon: <TrendingUp className="w-8 h-8 text-indigo-600 mb-6" />, title: "Sales Forecasting", description: "Market-driven production estimates." },
  { icon: <Truck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Fleet Management", description: "Tracking corporate and test fleets." },
];

const manufactureSolutions: SolutionItem[] = [
  { icon: <Building2 className="w-8 h-8 text-indigo-600 mb-6" />, title: "Enterprise Resource Planning (ERP)", description: "End-to-end manufacturing orchestration." },
  { icon: <Cpu className="w-8 h-8 text-indigo-600 mb-6" />, title: "Manufacturing Execution (MES)", description: "Real-time production monitoring." },
  { icon: <Truck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Supply Chain Management (SCM)", description: "Global logistics and raw materials." },
  { icon: <Settings className="w-8 h-8 text-indigo-600 mb-6" />, title: "Product Lifecycle (PLM)", description: "Digital thread for manufactured goods." },
  { icon: <HardDrive className="w-8 h-8 text-indigo-600 mb-6" />, title: "Warehouse Management (WMS)", description: "Inventory control for finished goods." },
  { icon: <Settings className="w-8 h-8 text-indigo-600 mb-6" />, title: "MRP II Software", description: "Advanced material requirement planning." },
  { icon: <Users className="w-8 h-8 text-indigo-600 mb-6" />, title: "Customer Relationship Management (CRM)", description: "B2B sales and distributor relations." },
  { icon: <Users className="w-8 h-8 text-indigo-600 mb-6" />, title: "Human Resources (HRMS)", description: "Plant-level workforce management." },
  { icon: <Settings className="w-8 h-8 text-indigo-600 mb-6" />, title: "Maintenance Management", description: "Maximizing equipment availability." },
  { icon: <Briefcase className="w-8 h-8 text-indigo-600 mb-6" />, title: "Labor Management", description: "Efficiency tracking and shift planning." },
  { icon: <FileText className="w-8 h-8 text-indigo-600 mb-6" />, title: "Document Management", description: "ISO standards and blueprint control." },
  { icon: <Activity className="w-8 h-8 text-indigo-600 mb-6" />, title: "Process Simulation", description: "Digital twins for plant optimization." },
  { icon: <BarChart className="w-8 h-8 text-indigo-600 mb-6" />, title: "Predictive Analytics", description: "Forecasting failure and output." },
  { icon: <PieChart className="w-8 h-8 text-indigo-600 mb-6" />, title: "Statistical Process Control (SPC)", description: "Ensuring dimensional and quality standards." },
  { icon: <CreditCard className="w-8 h-8 text-indigo-600 mb-6" />, title: "Cost Estimation", description: "Accurate quoting for custom制造." },
  { icon: <Monitor className="w-8 h-8 text-indigo-600 mb-6" />, title: "Shop Floor Control", description: "Visualizing production status." },
  { icon: <Shield className="w-8 h-8 text-indigo-600 mb-6" />, title: "Risk Management", description: "Identifying and mitigating plant risks." },
  { icon: <ShieldCheck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Compliance Management", description: "Adhering to global safety standards." },
  { icon: <Workflow className="w-8 h-8 text-indigo-600 mb-6" />, title: "Workflow Management", description: "Standardizing SOPs and approvals." },
  { icon: <Settings className="w-8 h-8 text-indigo-600 mb-6" />, title: "Asset Management", description: "Lifecycle tracking of heavy machinery." },
  { icon: <Boxes className="w-8 h-8 text-indigo-600 mb-6" />, title: "Barcode and RFID System", description: "Precision item-level tracking." },
  { icon: <ShieldCheck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Legal and Compliance", description: "Regulatory oversight for manufacturers." },
];

const financeSolutions: SolutionItem[] = [
  { icon: <Building2 className="w-8 h-8 text-indigo-600 mb-6" />, title: "Enterprise Resource Planning (ERP)", description: "Core finance and administrative control." },
  { icon: <PieChart className="w-8 h-8 text-indigo-600 mb-6" />, title: "Accounting Software", description: "Ledgers, journals, and fiscal reporting." },
  { icon: <Users className="w-8 h-8 text-indigo-600 mb-6" />, title: "Customer Relationship Management (CRM)", description: "Managing high-net-worth client profiles." },
  { icon: <FileText className="w-8 h-8 text-indigo-600 mb-6" />, title: "Financial Reporting System", description: "Automated statement generation." },
  { icon: <Landmark className="w-8 h-8 text-indigo-600 mb-6" />, title: "Treasury Management", description: "Liquidity and cash flow orchestration." },
  { icon: <Shield className="w-8 h-8 text-indigo-600 mb-6" />, title: "Risk Management", description: "Quantitative risk assessment platforms." },
  { icon: <BarChart className="w-8 h-8 text-indigo-600 mb-6" />, title: "FP&A Software", description: "Advanced planning and budgeting tools." },
  { icon: <CreditCard className="w-8 h-8 text-indigo-600 mb-6" />, title: "Billing and Invoicing", description: "Automating accounts receivable." },
  { icon: <Zap className="w-8 h-8 text-indigo-600 mb-6" />, title: "Payment Processing", description: "Multi-currency settlement logic." },
  { icon: <Monitor className="w-8 h-8 text-indigo-600 mb-6" />, title: "Trading Platforms", description: "Low-latency market execution tools." },
  { icon: <Gauge className="w-8 h-8 text-indigo-600 mb-6" />, title: "Credit Scoring", description: "Algorithmic risk evaluation for lending." },
  { icon: <Briefcase className="w-8 h-8 text-indigo-600 mb-6" />, title: "Expense Management", description: "Employee spend tracking and audits." },
  { icon: <PieChart className="w-8 h-8 text-indigo-600 mb-6" />, title: "Tax Management", description: "Corporate tax calculation and filing." },
  { icon: <ShieldCheck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Fraud Detection", description: "AI-powered anomaly detection in payments." },
  { icon: <Landmark className="w-8 h-8 text-indigo-600 mb-6" />, title: "Loan Origination", description: "Automation of the lending lifecycle." },
  { icon: <FileText className="w-8 h-8 text-indigo-600 mb-6" />, title: "Regulatory Reporting", description: "Compliance reporting for central banks." },
  { icon: <HardDrive className="w-8 h-8 text-indigo-600 mb-6" />, title: "Document Management", description: "Secure, audited digital archiving." },
  { icon: <Shield className="w-8 h-8 text-indigo-600 mb-6" />, title: "Insurance Management", description: "Policy administration and claims." },
  { icon: <Landmark className="w-8 h-8 text-indigo-600 mb-6" />, title: "Mortgage Management", description: "Residential and commercial loan hubs." },
  { icon: <Activity className="w-8 h-8 text-indigo-600 mb-6" />, title: "Audit Management", description: "Internal and external audit workflow." },
  { icon: <Settings className="w-8 h-8 text-indigo-600 mb-6" />, title: "Enterprise Risk (ERM)", description: "Strategic risk tracking across units." },
  { icon: <GitMerge className="w-8 h-8 text-indigo-600 mb-6" />, title: "RTGS System", description: "Real-time settlement for high-value funds." },
  { icon: <TrendingUp className="w-8 h-8 text-indigo-600 mb-6" />, title: "Learning Management (LMS)", description: "Continuous certification and training." },
  { icon: <ShieldCheck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Legal and Compliance", description: "AML and KYC regulatory systems." },
];

function SolutionCard({ item, vertical }: { item: SolutionItem; vertical: SolutionVertical }) {
  return (
    <Link href={solutionHref(vertical, item.title)} className="service-card cursor-none no-underline text-inherit block">
      <div className="scan-line"></div>
      {item.icon}
      <h4 className="text-lg font-bold uppercase mb-4 leading-tight">{item.title}</h4>
      <p className="text-slate-500 text-sm mt-auto">{item.description}</p>
    </Link>
  );
}

type TabID = SolutionVertical;

export default function SolutionsCapabilities() {
  const [activeTab, setActiveTab] = useState<TabID>("retail");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const label = document.querySelector("#solutions-capabilities .parallax-text");
    if (label) {
      gsap.fromTo(
        label,
        { x: "100%" },
        {
          x: "-100%",
          scrollTrigger: {
            trigger: label,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }
  }, []);

  const getSolutions = () => {
    switch (activeTab) {
      case "retail": return retailSolutions;
      case "it-telecom": return itTelecomSolutions;
      case "automotive": return automotiveSolutions;
      case "manufacture": return manufactureSolutions;
      case "finance": return financeSolutions;
      default: return retailSolutions;
    }
  };

  const solutions = getSolutions();

  return (
    <section id="solutions-capabilities" className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <span className="vol-label parallax-text">VERTICALS</span>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24">
          <span className="text-indigo-600 font-mono text-[10px] uppercase font-black tracking-[0.5em] mb-3 block">
            — Domain Experts
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter">
            Vertical <span className="italic font-cursive lowercase text-indigo-600">Solutions</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 border-b border-slate-100 mb-16 pb-4 overflow-x-auto no-scrollbar">
          <button
            className={`tab-btn text-[11px] font-black uppercase tracking-widest relative py-3 whitespace-nowrap ${
              activeTab === "retail" ? "active" : "text-slate-400 hover:text-indigo-600"
            }`}
            onClick={() => setActiveTab("retail")}
          >
            Retail & E-commerce
          </button>
          <button
            className={`tab-btn text-[11px] font-black uppercase tracking-widest relative py-3 whitespace-nowrap ${
              activeTab === "it-telecom" ? "active" : "text-slate-400 hover:text-indigo-600"
            }`}
            onClick={() => setActiveTab("it-telecom")}
          >
            IT & Telecom
          </button>
          <button
            className={`tab-btn text-[11px] font-black uppercase tracking-widest relative py-3 whitespace-nowrap ${
              activeTab === "automotive" ? "active" : "text-slate-400 hover:text-indigo-600"
            }`}
            onClick={() => setActiveTab("automotive")}
          >
            Automotive
          </button>
          <button
            className={`tab-btn text-[11px] font-black uppercase tracking-widest relative py-3 whitespace-nowrap ${
              activeTab === "manufacture" ? "active" : "text-slate-400 hover:text-indigo-600"
            }`}
            onClick={() => setActiveTab("manufacture")}
          >
            Manufacture
          </button>
          <button
            className={`tab-btn text-[11px] font-black uppercase tracking-widest relative py-3 whitespace-nowrap ${
              activeTab === "finance" ? "active" : "text-slate-400 hover:text-indigo-600"
            }`}
            onClick={() => setActiveTab("finance")}
          >
            Finance
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, idx) => (
            <SolutionCard key={`${activeTab}-${idx}`} item={item} vertical={activeTab} />
          ))}
        </div>
      </div>
    </section>
  );
}
