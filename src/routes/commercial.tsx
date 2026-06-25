import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/lib/category-page";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Projects — Scaling Ventures" },
      { name: "description", content: "Scaling Ventures's Grade-A commercial towers, business campuses and mixed-use destinations engineered for India's most ambitious enterprises." },
      { property: "og:title", content: "Commercial Projects — Scaling Ventures" },
      { property: "og:description", content: "Grade-A commercial towers and mixed-use destinations by Scaling Ventures." },
    ],
  }),
  component: CommercialPage,
});

function CommercialPage() {
  return (
    <CategoryPage
      category="Commercial"
      eyebrow="Commercial Portfolio"
      title={"Commercial spaces for ambitious businesses."}
      intro="Our commercial developments are designed for performance and presence — modern workspaces and retail in well-connected Chennai locations. Scaling Arihant Business Centre on Hunters Road is coming soon."
      highlights={[
        { v: "Hunters Road", l: "Coming Soon" },
        { v: "Grade-A", l: "Workspaces" },
        { v: "100%", l: "Vastu Compliant" },
        { v: "2024", l: "Established" },
      ]}
    />
  );
}
