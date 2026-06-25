// Leadership profiles, sourced from the Scaling Ventures company profile + brief.
import sailender from "@/assets/sailender-jain.png";
import arvind from "@/assets/arvind-bagrecha.png";
import manish from "@/assets/manish-sancheti.png";
import kuldeep from "@/assets/kuldeep-tandi.png";
import chetan from "@/assets/chetan-bagrecha.png";
import sambhav from "@/assets/sambhav-bantiya.png";
import anil from "@/assets/anil-kumar-lunawath.png";

export type Leader = {
  name: string;
  role: "Director" | "Legal Advisor";
  photo?: string;
  summary: string;
  bio: string[];
};

export const LEADERS: Leader[] = [
  {
    name: "Sailender Jain",
    role: "Director",
    photo: sailender,
    summary:
      "Three decades of leadership in transportation, warehousing and logistics, with 15+ years in real estate and infrastructure development.",
    bio: [
      "30+ years of leadership experience in Transportation, Warehousing & Logistics through Srinivasa Roadways Pvt. Ltd.",
      "15+ years of expertise in the Real Estate industry, with strong experience in infrastructure and asset development.",
      "A pioneer in multimodal logistics, specializing in container movement across Rail, Road & Sea networks throughout India.",
      "Recognized for operational excellence, strategic supply-chain management, and building a trusted flagship logistics enterprise over three decades.",
    ],
  },
  {
    name: "Arvind Bagrecha",
    role: "Director",
    photo: arvind,
    summary:
      "15+ years in real estate and 30+ years in finance, vehicle loans and property mortgage solutions.",
    bio: [
      "15+ years of expertise in the Real Estate industry.",
      "30+ years of experience in Finance, Vehicle Loans & Property Mortgage solutions.",
      "Strong strategic knowledge in Investments, Asset Management & Financial Planning.",
      "Recognized for building trusted client relationships through ethical and transparent business practices.",
    ],
  },
  {
    name: "Manish Kumar Sancheti",
    role: "Director",
    photo: manish,
    summary:
      "20+ years in the gold and jewellery business, with deep experience across real estate development, investments and finance.",
    bio: [
      "20+ years of experience in the Gold & Jewellery business through Krishna Gold House.",
      "8–10 years of expertise in Real Estate Development & Investments.",
      "7+ years of experience in Finance & Business Management with strong market understanding.",
      "A multifaceted professional with over 20 years in music and singing, reflecting creativity, leadership and strong public-engagement skills.",
    ],
  },
  {
    name: "Kuldeep Tandi",
    role: "Director",
    photo: kuldeep,
    summary:
      "20+ years as an entrepreneur in the automobile industry, with strong expertise in finance and business operations.",
    bio: [
      "20+ years of entrepreneurial experience in the Automobile industry through the successful GK Bikes brand.",
      "5–10 years of expertise in Finance & Business Operations, driving strong financial management and growth.",
      "A proven track record in customer relationship management, market expansion and operational excellence.",
      "Recognized for building a trusted business presence through commitment, reliability and long-term industry experience.",
    ],
  },
  {
    name: "Chetan Bagrecha",
    role: "Director",
    photo: chetan,
    summary:
      "A young, dedicated entrepreneur driving the company's day-to-day operational and administrative growth.",
    bio: [
      "A young and dedicated entrepreneur contributing to the operational and administrative growth of the company.",
      "Handles backend operations including documentation, coordination and project workflow management.",
      "Experienced in construction site evaluation, reporting and execution support.",
      "Plays a key role in maintaining efficient processes and ensuring smooth day-to-day project operations.",
    ],
  },
  {
    name: "Sambhav Bantiya",
    role: "Director",
    photo: sambhav,
    summary:
      "A young, dynamic entrepreneur with a strong vision for modern real estate and business development.",
    bio: [
      "A young and dynamic entrepreneur with a strong vision for modern real estate and business development.",
      "Passionate about branding, strategic growth and innovative business expansion.",
      "Actively involved in project planning, client relations and brand positioning.",
      "Focused on building a trusted, future-ready enterprise through creativity, leadership and customer-centric values.",
    ],
  },
  {
    name: "Subhadra Lunawath",
    role: "Director",
    // No photo supplied - rendered as a brand monogram.
    summary:
      "A design and marketing specialist who blends creative planning with brand development and interior design.",
    bio: [
      "Expertise in Design Management with a strong focus on creative planning and execution.",
      "Experienced in Marketing Strategy, Brand Development & Client Engagement.",
      "Skilled in Interior Designing with an eye for modern aesthetics and functional spaces.",
      "Recognized for combining creativity, market insight and innovative design solutions to enhance project value.",
    ],
  },
  {
    name: "Anil Kumar Lunawath",
    role: "Legal Advisor",
    photo: anil,
    // No bio in the company profile - placeholder copy, please review/replace.
    summary:
      "Legal Advisor to Scaling Ventures, guiding the company on regulatory compliance, documentation and transaction governance.",
    bio: [
      "Serves as Legal Advisor to Scaling Ventures, overseeing legal and regulatory matters across the company's projects.",
      "Advises on property documentation, title due diligence and contract governance.",
      "Ensures statutory and regulatory compliance throughout project planning, execution and delivery.",
      "Supports transparent, secure and well-structured transactions for every stakeholder.",
    ],
  },
];
