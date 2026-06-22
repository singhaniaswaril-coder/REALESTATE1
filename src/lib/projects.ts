import pRes1 from "@/assets/project-residential-1.jpg";
import pRes2 from "@/assets/project-residential-2.jpg";
import pCom1 from "@/assets/project-commercial-1.jpg";
import pCom2 from "@/assets/project-commercial-2.jpg";
import pUp1 from "@/assets/project-upcoming-1.jpg";

export type Project = {
  name: string;
  img: string;
  location: string;
  status: string;
  tag: "Residential" | "Commercial" | "Upcoming";
  desc: string;
};

export const PROJECTS: Project[] = [
  { name: "Anantara Greens", img: pRes1, location: "OMR, Chennai", status: "Ready to Move", tag: "Residential",
    desc: "Twin-tower residences set across 8 acres of landscaped commons, with skyline-grade 3 and 4 BHK homes." },
  { name: "Lumière Villas", img: pRes2, location: "ECR, Chennai", status: "Selling Fast", tag: "Residential",
    desc: "A private enclave of 42 architect-designed villas with pool-side living and tropical courtyards." },
  { name: "SPR One Tower", img: pCom1, location: "Guindy, Chennai", status: "Operational", tag: "Commercial",
    desc: "A 1.4 million sq ft Grade-A glass tower anchoring the city's most active business district." },
  { name: "The Quartier", img: pCom2, location: "Velachery, Chennai", status: "Pre-Leasing", tag: "Commercial",
    desc: "A mixed-use destination of premium retail, F&B and creative workspaces around a central plaza." },
  { name: "Songline Township", img: pUp1, location: "Sriperumbudur", status: "Launching Q1", tag: "Upcoming",
    desc: "A 64-acre integrated township with residences, schools, wellness, and a 4-acre central park." },
  { name: "Riverline Heights", img: pRes1, location: "Pallikaranai", status: "Pre-Launch", tag: "Upcoming",
    desc: "Waterfront-facing tower residences with double-height sky lounges and a wellness deck on the 24th floor." },
];
