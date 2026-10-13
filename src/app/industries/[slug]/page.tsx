import { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { getAllIndustrySlugs, getIndustry } from "@/lib/content/industries";

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getIndustry(slug);
  return {
    title: data ? `${data.title} | Sunrays AI` : "Industry | Sunrays AI",
    description: data?.tagline || "Industry-focused digital engineering.",
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getIndustry(slug);
  if (!data) return notFound();

  return (
    <DetailPage
      data={data}
      backHref="/industries"
      backLabel="Back to Industries"
      eyebrow="Industry"
    />
  );
}
