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
      title={"Homes designed for modern living."}
      intro="Thoughtfully planned residences across Chennai — combining modern design, superior workmanship and long-term value. From our flagship Jai Shankeshwar Apartment to upcoming enclaves, every home is built around comfort and quality."
      highlights={[
        { v: "4", l: "Residential Projects" },
        { v: "2", l: "Ongoing" },
        { v: "100%", l: "Vastu Compliant" },
        { v: "2024", l: "Established" },
      ]}
    />
  );
}
