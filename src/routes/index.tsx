import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal, useScrolled } from "@/lib/reveal";
import heroImg from "@/assets/hero-skyline.jpg";
import aboutImg from "@/assets/about-interior.jpg";
import pRes1 from "@/assets/project-residential-1.jpg";
import pRes2 from "@/assets/project-residential-2.jpg";
import pCom1 from "@/assets/project-commercial-1.jpg";
import pCom2 from "@/assets/project-commercial-2.jpg";
import pUp1 from "@/assets/project-upcoming-1.jpg";
import poolImg from "@/assets/amenity-pool.jpg";
import mapImg from "@/assets/location-map.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SPRGlobal — Crafting Landmark Communities Across India" },
      { name: "description", content: "Premium residential, commercial and integrated township developments by SPRGlobal. Built on legacy, designed for the next generation of Indian living." },
      { property: "og:title", content: "SPRGlobal — Crafting Landmark Communities" },
      { property: "og:description", content: "Premium residential, commercial and integrated township developments." },
    ],
  }),
  component: HomePage,
});

/* ---------------- NAV ---------------- */

type NavItem = { label: string; href?: string; to?: "/residential" | "/commercial" };
const NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Residential", to: "/residential" },
  { label: "Commercial", to: "/commercial" },
  { label: "Projects", href: "#projects" },
  { label: "Amenities", href: "#amenities" },
  { label: "Investors", href: "#investors" },
  { label: "Contact", href: "#contact" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5 group" aria-label="SPRGlobal home">
      <span
        className="grid place-items-center h-9 w-9 rounded-sm border"
        style={{
          borderColor: light ? "rgba(247,244,238,0.4)" : "var(--color-emerald-brand)",
          background: light ? "transparent" : "var(--color-emerald-brand)",
        }}
      >
        <span
          className="font-display text-[15px] leading-none"
          style={{ color: light ? "#F7F4EE" : "#C8A96B" }}
        >S</span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[19px] tracking-wide"
          style={{ color: light ? "#F7F4EE" : "#0F3D2E" }}
        >SPR<span style={{ color: "#C8A96B" }}>Global</span></span>
        <span
          className="text-[9px] tracking-[0.32em] mt-0.5"
          style={{ color: light ? "rgba(247,244,238,0.6)" : "#5b6470" }}
        >REAL ESTATE</span>
      </span>
    </a>
  );
}

function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: solid ? "#F7F4EE" : "linear-gradient(to bottom, rgba(10,32,24,0.55), rgba(10,32,24,0))",
        borderBottom: solid ? "1px solid var(--color-border)" : "1px solid transparent",
        backdropFilter: solid ? "saturate(140%) blur(8px)" : "none",
      }}
    >
      <div className="container-x flex items-center justify-between h-[72px] md:h-20">
        <Logo light={!solid} />
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => {
            const cls = "text-[12.5px] tracking-[0.14em] uppercase font-medium transition-colors hover:opacity-100";
            const style = { color: solid ? "#1F2933" : "#F7F4EE", opacity: solid ? 0.85 : 0.9 };
            return n.to ? (
              <Link key={n.label} to={n.to} className={cls} style={style}>{n.label}</Link>
            ) : (
              <a key={n.label} href={n.href} className={cls} style={style}>{n.label}</a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:inline-flex btn-primary !py-3 !px-5 !text-[11px]">
            Enquire Now
          </a>
          <button
            className="lg:hidden grid place-items-center h-10 w-10 rounded-sm border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              borderColor: solid ? "var(--color-border)" : "rgba(247,244,238,0.4)",
              color: solid ? "#1F2933" : "#F7F4EE",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M3 7h18M3 12h18M3 17h18" /></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "#0F3D2E" }}
      >
        <div className="px-6 py-10 flex flex-col gap-1">
          {NAV.map((n, i) => {
            const cls = "py-4 text-[#F7F4EE] font-display text-3xl border-b border-[rgba(247,244,238,0.08)]";
            const style = { animation: open ? `marquee-fade 0.6s ease ${i * 60}ms both` : undefined };
            return n.to ? (
              <Link key={n.label} to={n.to} onClick={() => setOpen(false)} className={cls} style={style}>{n.label}</Link>
            ) : (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className={cls} style={style}>{n.label}</a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex justify-center items-center py-4 text-[12px] tracking-[0.18em] uppercase"
            style={{ background: "#C8A96B", color: "#0F3D2E" }}
          >
            Enquire Now
          </a>
          <div className="mt-8 text-[#F7F4EE]/60 text-sm">
            <p>+91 44 4000 0000</p>
            <p>care@sprglobal.in</p>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Aerial view of premium SPRGlobal township at twilight"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,32,24,0.55) 0%, rgba(10,32,24,0.35) 40%, rgba(10,32,24,0.85) 100%)",
        }}
      />
      <div className="relative container-x w-full pb-16 md:pb-24 pt-32">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase" style={{ color: "#C8A96B" }}>
              <span className="block w-8 h-px" style={{ background: "#C8A96B" }} />
              Since 1985 — Building Trust
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-[44px] sm:text-6xl lg:text-7xl leading-[1.02] text-[#F7F4EE]">
              Landmarks that <em className="not-italic" style={{ color: "#C8A96B" }}>endure.</em><br />
              Communities that <em className="not-italic font-display italic">elevate.</em>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-7 text-[#F7F4EE]/80 text-base md:text-lg max-w-xl leading-relaxed font-light">
              SPRGlobal crafts integrated residential, commercial, and lifestyle destinations
              across India — designed with discipline, delivered with conviction, and built
              to be inherited.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary" style={{ background: "#C8A96B", borderColor: "#C8A96B", color: "#0F3D2E" }}>
                Explore Projects
              </a>
              <a href="#contact" className="btn-outline">Book a Consultation</a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* stats strip */}
      <div className="absolute left-0 right-0 bottom-0 border-t border-[rgba(247,244,238,0.12)]" style={{ background: "rgba(10,32,24,0.65)", backdropFilter: "blur(8px)" }}>
        <div className="container-x grid grid-cols-2 md:grid-cols-4">
          {[
            { v: "39+", l: "Years of Legacy" },
            { v: "60", l: "Landmark Developments" },
            { v: "28M", l: "Sq Ft Delivered" },
            { v: "18,500+", l: "Families Served" },
          ].map((s, i) => (
            <div
              key={s.l}
              className="py-6 md:py-7 px-2 md:px-4 text-center md:text-left border-[rgba(247,244,238,0.08)]"
              style={{ borderRightWidth: i < 3 ? 1 : 0, borderRightStyle: "solid" }}
            >
              <div className="font-display text-3xl md:text-4xl" style={{ color: "#C8A96B" }}>{s.v}</div>
              <div className="mt-1 text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#F7F4EE]/70">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F7F4EE]">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative">
            <img
              src={aboutImg}
              alt="A SPRGlobal luxury residence interior"
              className="w-full h-[520px] object-cover"
              loading="lazy"
              width={1200}
              height={1400}
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block p-6 max-w-[260px]" style={{ background: "#0F3D2E" }}>
              <div className="font-display text-4xl text-[#C8A96B]">A+</div>
              <p className="mt-2 text-[#F7F4EE]/80 text-sm leading-relaxed">
                CRISIL-equivalent build quality benchmark across every SPRGlobal residence.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={120}>
          <span className="eyebrow">About SPRGlobal</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.08]">
            Four decades of building Chennai — and the cities of tomorrow.
          </h2>
          <span className="gold-divider mt-7" />
          <p className="mt-7 text-[15.5px] leading-[1.8] text-[#1F2933]/80">
            SPRGlobal began with a quiet conviction — that a home is the most considered
            purchase a family ever makes. From a single residential project in 1985 to a portfolio
            spanning integrated townships, premium high-rises, Grade-A commercial campuses, and
            curated retail destinations, we have grown without ever growing impatient.
          </p>
          <p className="mt-4 text-[15.5px] leading-[1.8] text-[#1F2933]/80">
            Every SPRGlobal address is shaped by the same discipline: a master-planned approach,
            an obsession with material integrity, and a refusal to compromise on the everyday
            details that quietly define great living.
          </p>

          <div className="mt-10 border-t border-[#d9d2c6] pt-8">
            <span className="eyebrow">Our Philosophy</span>
            <p className="mt-4 font-display italic text-2xl md:text-[26px] leading-snug text-[#0F3D2E]">
              “We don't build buildings. We build the conditions for a life well-lived —
              and we measure ourselves a generation at a time.”
            </p>
            <p className="mt-4 text-sm text-[#1F2933]/70">— Aravind Ramanathan, Managing Director</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */

type Project = {
  name: string; img: string; location: string; status: string; tag: "Residential" | "Commercial" | "Upcoming"; desc: string;
};

const PROJECTS: Project[] = [
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

function Projects() {
  const [tab, setTab] = useState<"All" | Project["tag"]>("All");
  const filtered = tab === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === tab);
  return (
    <section id="projects" className="py-24 md:py-32" style={{ background: "#E8E1D8" }}>
      <div className="container-x">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:items-end">
          <Reveal>
            <span className="eyebrow">Featured Developments</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.08] max-w-2xl">
              A portfolio shaped by craft, location and conviction.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-1.5 p-1.5 border border-[#cfc6b6] bg-[#F7F4EE]">
              {(["All", "Residential", "Commercial", "Upcoming"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="px-4 py-2.5 text-[11px] tracking-[0.16em] uppercase font-medium transition-all"
                  style={{
                    background: tab === t ? "#0F3D2E" : "transparent",
                    color: tab === t ? "#F7F4EE" : "#1F2933",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((p, i) => (
            <Reveal key={p.name + i} delay={i * 60}>
              <article className="group bg-[#F7F4EE] border border-[#d9d2c6] overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_24px_60px_-30px_rgba(15,61,46,0.45)] hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={1200} height={900}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  <span
                    className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase"
                    style={{
                      background: p.tag === "Upcoming" ? "#C8A96B" : "rgba(15,61,46,0.92)",
                      color: p.tag === "Upcoming" ? "#0F3D2E" : "#F7F4EE",
                    }}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <div className="text-[11px] tracking-[0.22em] uppercase text-[#0F3D2E]/70 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C8A96B]" />
                    {p.location}
                  </div>
                  <h3 className="mt-3 font-display text-2xl md:text-[26px] leading-tight">{p.name}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[#1F2933]/75 flex-1">{p.desc}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#0F3D2E] group/link">
                    Discover Project
                    <span className="inline-block transition-transform group-hover/link:translate-x-1" style={{ color: "#C8A96B" }}>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AMENITIES ---------------- */

const AMENITIES = [
  { t: "Wellness & Spa", d: "Hydrotherapy pool, sauna, yoga pavilion, meditation court." },
  { t: "Sports & Play", d: "Tennis, badminton, cricket nets, board games, gymnasium." },
  { t: "Clubhouse", d: "60,000 sq ft of dining, lounge, library and private celebration suites." },
  { t: "Green Commons", d: "8+ acres of native landscaped gardens, jogging loops and groves." },
  { t: "Security", d: "Three-tier perimeter, smart access, 24/7 concierge and surveillance." },
  { t: "Connectivity", d: "Curated transit pods, EV charging, last-mile shuttle to metro." },
];

function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-32 bg-[#F7F4EE]">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Amenities & Lifestyle</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.08]">
              A lifestyle layered into every acre.
            </h2>
            <p className="mt-6 text-[15.5px] leading-[1.8] text-[#1F2933]/75">
              Beyond architecture, SPRGlobal designs the everyday rituals of community —
              quiet mornings by the water, evenings at the clubhouse, weekends on the green.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-7">
          {/* Hero amenity */}
          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden h-[420px] lg:h-full min-h-[420px]">
              <img src={poolImg} alt="Infinity pool at SPRGlobal clubhouse" loading="lazy" width={1400} height={1000}
                className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,61,46,0) 40%, rgba(15,61,46,0.85) 100%)" }} />
              <div className="absolute left-0 right-0 bottom-0 p-7 md:p-10">
                <span className="text-[10px] tracking-[0.32em] uppercase" style={{ color: "#C8A96B" }}>Signature Experience</span>
                <h3 className="mt-3 font-display text-3xl md:text-4xl text-[#F7F4EE] max-w-md leading-tight">
                  The Skyline Infinity Deck
                </h3>
                <p className="mt-3 text-[#F7F4EE]/80 max-w-md text-[14.5px] leading-relaxed">
                  A 70-metre infinity pool suspended above the city — engineered as the quiet
                  centrepiece of every SPRGlobal flagship community.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-px bg-[#d9d2c6] border border-[#d9d2c6]">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.t} delay={i * 50}>
                <div className="bg-[#F7F4EE] p-6 h-full">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 grid place-items-center h-9 w-9 border border-[#0F3D2E]/20 shrink-0">
                      <span className="block w-2 h-2" style={{ background: "#C8A96B" }} />
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-display text-[20px] text-[#0F3D2E]">{a.t}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#1F2933]/75">{a.d}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INVESTORS ---------------- */

function Investors() {
  const points = [
    { n: "01", t: "Strategic Locations", d: "Every site is selected for a 10-year horizon — proximity to transit, employment and infrastructure pipelines." },
    { n: "02", t: "Appreciation Track Record", d: "SPRGlobal addresses have delivered 1.8× to 2.4× average appreciation within five years of possession." },
    { n: "03", t: "Construction Integrity", d: "European-grade structural systems, in-house QA, and an enforced 240-point handover checklist." },
    { n: "04", t: "Integrated Communities", d: "Townships designed as ecosystems — work, learning, wellness and leisure within a 10-minute walk." },
    { n: "05", t: "On-Time Delivery", d: "94% of SPRGlobal projects delivered on or ahead of committed possession date." },
    { n: "06", t: "NRI-Ready Process", d: "Dedicated NRI desk, remote documentation, currency-hedged payment plans and global service standards." },
  ];
  return (
    <section id="investors" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#0F3D2E", color: "#F7F4EE" }}>
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow" style={{ color: "#C8A96B" }}>Why Invest in SPRGlobal</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.08] text-[#F7F4EE]">
              A real estate portfolio engineered for confidence — and compounding.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-[#F7F4EE]/75 leading-[1.8] text-[15px]">
              We build for the homeowner first. That same discipline is what makes
              SPRGlobal one of South India's most resilient real estate stories for
              long-term investors and NRI buyers.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(247,244,238,0.10)]">
          {points.map((p, i) => (
            <Reveal key={p.n} delay={i * 50}>
              <div className="p-8 md:p-10 h-full" style={{ background: "#0F3D2E" }}>
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl" style={{ color: "#C8A96B" }}>{p.n}</span>
                  <span className="block flex-1 h-px bg-[rgba(247,244,238,0.18)]" />
                </div>
                <h3 className="mt-5 font-display text-[22px] text-[#F7F4EE]">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#F7F4EE]/70">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-[rgba(247,244,238,0.12)]">
          {[
            { v: "₹14,200 Cr", l: "Assets Developed" },
            { v: "94%", l: "On-Time Delivery" },
            { v: "AA−", l: "Build Rating" },
            { v: "32 Cities", l: "Future Footprint" },
          ].map((s, i) => (
            <div key={s.l} className="py-8 text-center border-[rgba(247,244,238,0.10)]" style={{ borderRightWidth: i < 3 ? 1 : 0, borderRightStyle: "solid" }}>
              <div className="font-display text-3xl md:text-4xl text-[#C8A96B]">{s.v}</div>
              <div className="mt-1.5 text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#F7F4EE]/65">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

const TESTIS = [
  { q: "Three years in, the build quality has held without a single complaint. SPRGlobal delivered exactly the residence they promised — and then some.", n: "Arvind & Meera Krishnan", t: "Homeowners, Anantara Greens", c: "3BHK Buyer" },
  { q: "As an NRI buyer, the entire process — documentation, possession, fit-out — was handled with a level of clarity I haven't seen from any other developer.", n: "Dr. Rohit Sundararajan", t: "NRI Investor, Singapore", c: "Investment Purchase" },
  { q: "Our commercial team has been at SPR One Tower for two years. The building is run like a five-star asset. Tenants notice that.", n: "Priya Natarajan", t: "Director, Lighthouse Capital", c: "Commercial Lease" },
  { q: "What sold us wasn't the brochure — it was walking into a five-year-old SPR project and seeing how well it had aged.", n: "Sanjay & Anita Iyer", t: "Homeowners, Lumière Villas", c: "Villa Buyer" },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIS.length), 7000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#F7F4EE]">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <span className="eyebrow">Voices of Trust</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.08]">
            What our residents and investors say.
          </h2>
          <div className="mt-8 flex items-center gap-2 text-[#C8A96B]">
            {"★★★★★".split("").map((s, k) => <span key={k} className="text-xl">{s}</span>)}
            <span className="ml-3 text-sm text-[#1F2933]/70">4.9 / 5 across 1,200+ verified families</span>
          </div>
          <div className="mt-10 flex gap-2">
            {TESTIS.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                className="h-1 transition-all"
                style={{
                  width: k === i ? 40 : 20,
                  background: k === i ? "#0F3D2E" : "#1F2933",
                  opacity: k === i ? 1 : 0.2,
                }}
              />
            ))}
          </div>
        </Reveal>
        <Reveal className="lg:col-span-8" delay={120}>
          <div className="relative bg-white border border-[#d9d2c6] p-8 md:p-14">
            <span className="absolute top-6 right-8 font-display text-[110px] leading-none text-[#C8A96B]/30 select-none">”</span>
            <p className="font-display italic text-2xl md:text-[30px] leading-[1.45] text-[#1F2933] max-w-3xl">
              {TESTIS[i].q}
            </p>
            <div className="mt-10 pt-6 border-t border-[#d9d2c6] flex flex-wrap items-center gap-4 justify-between">
              <div>
                <div className="font-display text-xl text-[#0F3D2E]">{TESTIS[i].n}</div>
                <div className="text-sm text-[#1F2933]/65 mt-1">{TESTIS[i].t}</div>
              </div>
              <span className="text-[10px] tracking-[0.22em] uppercase px-3 py-1.5 border border-[#C8A96B] text-[#0F3D2E]">
                {TESTIS[i].c}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- EVENTS ---------------- */

const EVENTS = [
  { d: "12 Mar 2026", c: "Project Launch", t: "Songline Township — Public Unveiling", x: "A 64-acre masterplan launches with private previews for invited families and partners.", img: pUp1 },
  { d: "28 Jan 2026", c: "Milestone", t: "Anantara Greens crosses 90% possession", x: "1,200+ families now call Anantara home as the final phase enters fit-out completion.", img: pRes1 },
  { d: "08 Dec 2025", c: "Investor Meet", t: "NRI Investor Roundtable — Singapore", x: "An invitation-only conversation on the future of South Indian residential investment.", img: pCom1 },
];

function Events() {
  return (
    <section id="events" className="py-24 md:py-32" style={{ background: "#E8E1D8" }}>
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="eyebrow">Events & Announcements</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.08] max-w-xl">
              Moments that mark the journey forward.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <a href="#contact" className="btn-ghost-dark">View Press Room</a>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-7">
          {EVENTS.map((e, i) => (
            <Reveal key={e.t} delay={i * 80}>
              <article className="group bg-[#F7F4EE] border border-[#d9d2c6] h-full flex flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={e.img} alt="" loading="lazy" width={1200} height={750}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[10px] tracking-[0.22em] uppercase">
                    <span className="text-[#0F3D2E]">{e.d}</span>
                    <span className="w-1 h-1 rounded-full bg-[#C8A96B]" />
                    <span style={{ color: "#C8A96B" }}>{e.c}</span>
                  </div>
                  <h3 className="mt-4 font-display text-[22px] leading-snug text-[#0F3D2E]">{e.t}</h3>
                  <p className="mt-3 text-[14.5px] text-[#1F2933]/75 leading-relaxed flex-1">{e.x}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#0F3D2E]">
                    Read More <span style={{ color: "#C8A96B" }}>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOCATION ---------------- */

function Location() {
  const chips = [
    "8 min — IT Corridor", "12 min — Intl. School", "18 min — Apollo Hospitals",
    "10 min — Phoenix Marketcity", "6 min — Metro Station", "35 min — GMR Airport",
    "5 min — ORR Access", "20 min — Marina Beach",
  ];
  return (
    <section className="py-24 md:py-32 bg-[#F7F4EE]">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">Location & Connectivity</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.08]">
            Where you live is the first decision. We make it the easiest.
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.8] text-[#1F2933]/75">
            Every SPRGlobal address sits at the intersection of urban convenience and quiet residential
            character — close to what matters, removed from what doesn't.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-2.5">
            {chips.map((c) => (
              <div key={c} className="px-4 py-3 border border-[#d9d2c6] bg-white text-[13px] text-[#1F2933]/85">
                <span className="inline-block w-1.5 h-1.5 mr-2.5 align-middle" style={{ background: "#C8A96B" }} />
                {c}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={120}>
          <div className="relative overflow-hidden border border-[#d9d2c6]">
            <img src={mapImg} alt="Connectivity overview of SPRGlobal locations across Chennai" loading="lazy" width={1600} height={1000}
              className="w-full h-[520px] object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,61,46,0.45) 0%, rgba(15,61,46,0.05) 60%)" }} />
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <div className="px-4 py-2.5 bg-[#F7F4EE] text-[10px] tracking-[0.22em] uppercase text-[#0F3D2E]">
                Chennai Metropolitan Region
              </div>
              <div className="hidden md:flex px-4 py-2.5 bg-[#0F3D2E] text-[10px] tracking-[0.22em] uppercase text-[#C8A96B]">
                12 Active Locations
              </div>
            </div>
            {/* Pin */}
            <div className="absolute left-[42%] top-[48%]">
              <span className="relative grid place-items-center h-4 w-4">
                <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(200,169,107,0.45)" }} />
                <span className="relative block h-3 w-3 rounded-full border-2 border-[#F7F4EE]" style={{ background: "#C8A96B" }} />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- ENQUIRY ---------------- */

function Enquiry() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "Residential", location: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^\+?[\d\s-]{8,15}$/.test(form.phone)) e.phone = "Enter a valid phone number";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Enter a valid email";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const field = "w-full bg-transparent border-b border-[#d9d2c6] py-3.5 text-[15px] text-[#1F2933] placeholder:text-[#1F2933]/40 focus:outline-none focus:border-[#0F3D2E] transition-colors";
  const label = "text-[10px] tracking-[0.22em] uppercase text-[#1F2933]/60";

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F7F4EE]">
      <div className="container-x grid lg:grid-cols-12 gap-14">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">Begin the Conversation</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.08]">
            Speak with a senior advisor. No call centres.
          </h2>
          <span className="gold-divider mt-7" />
          <p className="mt-7 text-[15px] leading-[1.85] text-[#1F2933]/80">
            Every enquiry is reviewed personally by our relationship team and answered within
            one business day. We'll walk you through inventory, pricing, finance options, and
            a private site visit at your convenience.
          </p>
          <div className="mt-10 space-y-5">
            {[
              { l: "Response Promise", v: "Within 24 hours, every enquiry." },
              { l: "Private Consultation", v: "Senior advisor, not a call agent." },
              { l: "NRI Friendly", v: "Remote documentation & timezone support." },
            ].map((b) => (
              <div key={b.l} className="flex gap-4">
                <span className="mt-1.5 block h-2 w-2 shrink-0" style={{ background: "#C8A96B" }} />
                <div className="min-w-0">
                  <div className="font-display text-lg text-[#0F3D2E]">{b.l}</div>
                  <div className="text-sm text-[#1F2933]/70">{b.v}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <div className="bg-white border border-[#d9d2c6] p-7 md:p-12">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto grid place-items-center h-14 w-14 rounded-full" style={{ background: "#0F3D2E" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8A96B" strokeWidth="2"><path d="M5 12l4 4 10-10" /></svg>
                </div>
                <h3 className="mt-6 font-display text-3xl text-[#0F3D2E]">Thank you.</h3>
                <p className="mt-3 text-[#1F2933]/75 max-w-sm mx-auto">A senior SPRGlobal advisor will reach out within one business day.</p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div>
                  <label className={label}>Full Name</label>
                  <input className={field} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                  {errors.name && <p className="text-xs text-red-600 mt-2">{errors.name}</p>}
                </div>
                <div>
                  <label className={label}>Phone Number</label>
                  <input className={field} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98XXX XXXXX" />
                  {errors.phone && <p className="text-xs text-red-600 mt-2">{errors.phone}</p>}
                </div>
                <div>
                  <label className={label}>Email</label>
                  <input className={field} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
                  {errors.email && <p className="text-xs text-red-600 mt-2">{errors.email}</p>}
                </div>
                <div>
                  <label className={label}>Interested In</label>
                  <select className={field} value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                    <option>Residential</option>
                    <option>Villas</option>
                    <option>Commercial</option>
                    <option>Investment Advisory</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className={label}>Preferred Location</label>
                  <input className={field} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="e.g. OMR, ECR, Guindy" />
                </div>
                <div className="md:col-span-2">
                  <label className={label}>Message</label>
                  <textarea rows={3} className={field + " resize-none"} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us briefly what you're looking for" />
                </div>
                <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-[#1F2933]/55 max-w-sm">By submitting, you agree to be contacted by an SPRGlobal advisor. Your information is never shared.</p>
                  <button type="submit" className="btn-primary">Request Consultation</button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="pt-20 pb-10" style={{ background: "#0a2a20", color: "#F7F4EE" }}>
      <div className="container-x grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-6 text-sm leading-relaxed text-[#F7F4EE]/65 max-w-xs">
            SPRGlobal is a premium real estate developer crafting landmark residential,
            commercial and integrated township destinations across India since 1985.
          </p>
          <div className="mt-7 flex gap-3">
            {["in", "ig", "yt", "x"].map((s) => (
              <a key={s} href="#" aria-label={s} className="grid place-items-center h-9 w-9 border border-[rgba(247,244,238,0.18)] text-[10px] tracking-[0.18em] uppercase hover:border-[#C8A96B] hover:text-[#C8A96B] transition-colors">{s}</a>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-[10px] tracking-[0.28em] uppercase text-[#C8A96B]">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.slice(0, 5).map((n) => (
              <li key={n.href}><a href={n.href} className="text-[#F7F4EE]/70 hover:text-[#C8A96B] transition-colors">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-[10px] tracking-[0.28em] uppercase text-[#C8A96B]">Projects</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {PROJECTS.slice(0, 5).map((p) => (
              <li key={p.name}><a href="#projects" className="text-[#F7F4EE]/70 hover:text-[#C8A96B] transition-colors">{p.name}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-[10px] tracking-[0.28em] uppercase text-[#C8A96B]">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-[#F7F4EE]/70">
            <li>SPRGlobal Tower, Anna Salai,<br />Chennai 600002, India</li>
            <li><a href="tel:+914440000000" className="hover:text-[#C8A96B]">+91 44 4000 0000</a></li>
            <li><a href="mailto:care@sprglobal.in" className="hover:text-[#C8A96B]">care@sprglobal.in</a></li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-16 pt-7 border-t border-[rgba(247,244,238,0.10)] flex flex-wrap justify-between gap-4 text-xs text-[#F7F4EE]/50">
        <p>© {new Date().getFullYear()} SPRGlobal Realty Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#C8A96B]">Privacy</a>
          <a href="#" className="hover:text-[#C8A96B]">Terms</a>
          <a href="#" className="hover:text-[#C8A96B]">RERA Disclosures</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- MOBILE STICKY CTA ---------------- */

function StickyCTA() {
  return (
    <a
      href="#contact"
      className="md:hidden fixed left-4 right-4 bottom-4 z-40 flex items-center justify-center gap-2 py-4 text-[11px] tracking-[0.2em] uppercase shadow-[0_18px_40px_-12px_rgba(15,61,46,0.5)]"
      style={{ background: "#0F3D2E", color: "#C8A96B" }}
    >
      Enquire Now <span>→</span>
    </a>
  );
}

/* ---------------- PAGE ---------------- */

function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Amenities />
      <Investors />
      <Testimonials />
      <Events />
      <Location />
      <Enquiry />
      <Footer />
      <StickyCTA />
    </main>
  );
}
