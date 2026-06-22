import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/lib/category-page";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Projects — SPRGlobal" },
      { name: "description", content: "SPRGlobal's Grade-A commercial towers, business campuses and mixed-use destinations engineered for India's most ambitious enterprises." },
      { property: "og:title", content: "Commercial Projects — SPRGlobal" },
      { property: "og:description", content: "Grade-A commercial towers and mixed-use destinations by SPRGlobal." },
    ],
  }),
  component: CommercialPage,
});

function CommercialPage() {
  return (
    <CategoryPage
      category="Commercial"
      eyebrow="Commercial Portfolio"
      title={"Workplaces built for the next generation of Indian enterprise."}
      intro="Grade-A towers, mixed-use destinations and retail anchors — engineered for performance, sustainability and the kind of address that elevates a brand. Every SPRGlobal commercial development is built to outperform its market for decades."
      highlights={[
        { v: "9M", l: "Sq Ft Leased" },
        { v: "120+", l: "Anchor Tenants" },
        { v: "LEED", l: "Gold Certified" },
        { v: "24/7", l: "Facility Management" },
      ]}
    />
  );
}
