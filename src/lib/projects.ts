// Real Scaling Ventures project data, sourced from the company profile + brief.
// Ongoing project renders (explicit imports)
import jaiFront from "@/assets/jai-shankeshwar/front-elevation.png";
import jaiNorth from "@/assets/jai-shankeshwar/north-elevation.png";
import jaiSouth from "@/assets/jai-shankeshwar/south-elevation.png";
import anantaElev1 from "@/assets/scaling-ananta/elevation-01.png";
import anantaElev2 from "@/assets/scaling-ananta/elevation-02.png";

// Brochure page galleries (folder globs — drop more pages in and they appear automatically)
function gallery(modules: Record<string, unknown>): string[] {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url as string);
}

const jaiBrochure = gallery(
  import.meta.glob("../assets/jai-shankeshwar/brochure-*.jpeg", {
    eager: true,
    query: "?url",
    import: "default",
  }),
);
const anantaBrochure = gallery(
  import.meta.glob("../assets/scaling-ananta/brochure-*.jpeg", {
    eager: true,
    query: "?url",
    import: "default",
  }),
);

export type ProjectStatus = "Ongoing" | "Coming Soon";
export type ProjectCategory = "Residential" | "Commercial";

export type Project = {
  slug: string;
  name: string;
  street: string;
  area?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  config?: string;
  tagline?: string;
  summary: string;
  highlights?: string[];
  image?: string;
  gallery?: string[];
};

export const PROJECTS: Project[] = [
  // ---------------- ONGOING ----------------
  {
    slug: "jai-shankeshwar",
    name: "Jai Shankeshwar Apartment",
    street: "Vellala Street",
    area: "Purasaiwakkam, Chennai 600084",
    category: "Residential",
    status: "Ongoing",
    config: "3 & 4 BHK Luxury Apartments",
    tagline: "A lifestyle of unparalleled comfort and convenience.",
    summary:
      "Our flagship residence on Vellala Street — a boutique tower of expansive 3 & 4 BHK homes wrapped in refined stone-and-timber elevations, framed balconies and covered parking. Expected completion by Diwali 2026.",
    highlights: [
      "Spacious 3 & 4 BHK homes",
      "Covered car parking",
      "Premium elevation & finishes",
      "Expected delivery: Diwali 2026",
    ],
    image: jaiFront,
    gallery: [jaiFront, jaiNorth, jaiSouth, ...jaiBrochure],
  },
  {
    slug: "scaling-ananta",
    name: "Scaling Ananta",
    street: "Chellappa Street",
    area: "Chennai",
    category: "Residential",
    status: "Ongoing",
    config: "2 BHK Flats — only 8 units",
    tagline: "Own the dream. Live the lifestyle.",
    summary:
      "An intimate collection of just eight thoughtfully planned 2 BHK homes on Chellappa Street — 100% Vastu-compliant, with a lift, round-the-clock security and covered car parking.",
    highlights: [
      "2 BHK flats — only 8 units",
      "100% Vastu-compliant",
      "Lift & 24/7 security",
      "Covered car parking",
    ],
    image: anantaElev1,
    gallery: [anantaElev1, anantaElev2, ...anantaBrochure],
  },
  // ---------------- COMING SOON ----------------
  {
    slug: "scaling-pinnacle",
    name: "Scaling Pinnacle",
    street: "Vellalar Street",
    area: "Chennai",
    category: "Residential",
    status: "Coming Soon",
    summary:
      "A new residential landmark taking shape on Vellalar Street — modern homes designed around light, space and long-term value.",
  },
  {
    slug: "scaling-arihant-business-centre",
    name: "Scaling Arihant Business Centre",
    street: "Hunters Road",
    area: "Chennai",
    category: "Commercial",
    status: "Coming Soon",
    summary:
      "A premium Grade-A commercial address coming soon on Hunters Road — workspaces and retail built for ambitious businesses.",
  },
  {
    slug: "scaling-arihant-enclave",
    name: "Scaling Arihant Enclave",
    street: "Shenoy Nagar",
    area: "Chennai",
    category: "Residential",
    status: "Coming Soon",
    summary:
      "A modern residential enclave planned at Shenoy Nagar — thoughtfully master-planned living in one of the city's most connected neighbourhoods.",
  },
];

export const ONGOING_PROJECTS = PROJECTS.filter((p) => p.status === "Ongoing");
export const UPCOMING_PROJECTS = PROJECTS.filter((p) => p.status === "Coming Soon");
