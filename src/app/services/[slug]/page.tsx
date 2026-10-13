import { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { getAllServiceSlugs, getService } from "@/lib/content/services";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getService(slug);
  return {
    title: data ? `${data.title} | Sunrays AI` : "Service | Sunrays AI",
    description: data?.tagline || "Enterprise software and AI engineering services.",
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getService(slug);
  if (!data) return notFound();

  return (
    <DetailPage
      data={data}
      backHref="/services"
      backLabel="Back to Services"
      eyebrow="Service"
    />
  );
}
