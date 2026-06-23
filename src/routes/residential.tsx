import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/lib/category-page";

export const Route = createFileRoute("/residential")({
  head: () => ({
    meta: [
      { title: "Residential Projects — Scaling Ventures" },
      { name: "description", content: "Explore Scaling Ventures's premium residential developments — villas, high-rise homes and integrated communities across India." },
      { property: "og:title", content: "Residential Projects — Scaling Ventures" },
      { property: "og:description", content: "Premium villas, high-rises and integrated residential communities by Scaling Ventures." },
    ],
  }),
  component: ResidentialPage,
});

function ResidentialPage() {
  return (
    <CategoryPage
      category="Residential"
      eyebrow="Residential Portfolio"
      title={"Homes designed for a lifetime — not a season."}
      intro="From skyline-grade apartments to private villa enclaves, every Scaling Ventures residence is master-planned around light, landscape and lasting craftsmanship. Discover homes built to be inherited."
      highlights={[
        { v: "12,000+", l: "Homes Delivered" },
        { v: "18", l: "Residential Addresses" },
        { v: "8 Acres", l: "Avg. Green Commons" },
        { v: "A+", l: "Build Quality Grade" },
      ]}
    />
  );
}
