import { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import {
  getAllSolutionParams,
  getSolution,
  VERTICAL_LABELS,
  type SolutionVertical,
} from "@/lib/content/solutions";

export function generateStaticParams() {
  return getAllSolutionParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string; slug: string }>;
}): Promise<Metadata> {
  const { vertical, slug } = await params;
  const data = getSolution(vertical, slug);
  const label = VERTICAL_LABELS[vertical as SolutionVertical];
  return {
    title: data
      ? `${data.title} — ${label || "Solutions"} | Sunrays AI`
      : "Solution | Sunrays AI",
    description: data?.tagline || "Industry vertical software solutions.",
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ vertical: string; slug: string }>;
}) {
  const { vertical, slug } = await params;
  const data = getSolution(vertical, slug);
  if (!data) return notFound();

  return (
    <DetailPage
      data={data}
      backHref="/solutions"
      backLabel="Back to Solutions"
      eyebrow="Solution"
    />
  );
}
