import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Camera, Zap, Droplets, Sun, Sprout, Smartphone, ShieldCheck, Bath, Trees,
  Car, Compass, Building2, ArrowRight, Download, Instagram, MapPin,
  ChevronLeft, ChevronRight, Flame,
} from "lucide-react";
import {
  Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Reveal, useScrolled } from "@/lib/reveal";
import {
  ONGOING_PROJECTS, UPCOMING_PROJECTS, type Project,
} from "@/lib/projects";
import { LEADERS, type Leader } from "@/lib/leadership";
import heroImg from "@/assets/Cover page new.jpg";
import aboutImg from "@/assets/scaling-ananta/elevation-02.png";
import whiteLogo from "@/assets/full_white_logo.png";
import profilePdf from "@/assets/scaling-ventures-profile.pdf?url";

/* Brand palette - Orange = primary/dominant, Blue = secondary, White = base */
const ORANGE = "#EF7320";
const BLUE = "#0C2A4D";
const BLUE_DEEP = "#081E38";
const INK = "#15233B";
const WHITE = "#FFFFFF";
const MIST = "#F1F5FB";

// TODO: replace with the real Scaling Ventures Instagram URL once available.
const INSTAGRAM_URL = "https://www.instagram.com/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scaling Ventures - Modern Construction & Real Estate, Chennai" },
      { name: "description", content: "Scaling Ventures is a professionally managed construction and real-estate development firm in Chennai, delivering innovative, sustainable and high-quality residential developments." },
      { property: "og:title", content: "Scaling Ventures - Modern Construction & Real Estate" },
      { property: "og:description", content: "Thoughtfully planned residential developments built on excellence, transparency and timely execution." },
    ],
  }),
  component: HomePage,
});

/* ---------------- NAV ---------------- */

type NavItem = { label: string; href: string };
const NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

function Logo({ className = "h-16 md:h-20" }: { className?: string }) {
  return (
    <a href="#home" className="inline-flex items-center" aria-label="Scaling Ventures Pvt. Ltd. home">
      <img src={whiteLogo} alt="Scaling Ventures Pvt. Ltd." className={`${className} w-auto`} />
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
    <>
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: solid ? BLUE : "linear-gradient(to bottom, rgba(8,30,56,0.55), rgba(8,30,56,0))",
        borderBottom: solid ? "1px solid rgba(255,255,255,0.10)" : "none",
        backdropFilter: solid ? "saturate(140%) blur(8px)" : "none",
      }}
    >
      <div className="container-x flex items-center justify-between h-[76px] md:h-24">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[12.5px] tracking-[0.14em] uppercase font-medium text-white/85 hover:text-[#EF7320] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:inline-flex btn-primary !py-3 !px-5 !text-[11px]">
            Enquire Now
          </a>
          <button
            className="lg:hidden grid place-items-center h-10 w-10 rounded-sm border border-white/40 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>
      </div>
      </header>

      {/* Mobile panel - rendered outside <header> so its fixed positioning is
          relative to the viewport (a backdrop-filter ancestor would otherwise
          become its containing block and collapse it to zero height). */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[76px] bottom-0 z-50 overflow-y-auto transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        style={{ background: BLUE }}
      >
        <div className="px-6 py-10 flex flex-col gap-1">
          {NAV.map((n, i) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-4 text-white font-display text-3xl border-b border-white/10"
              style={{ animation: open ? `marquee-fade 0.6s ease ${i * 60}ms both` : undefined }}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex justify-center items-center py-4 text-[12px] tracking-[0.18em] uppercase"
            style={{ background: ORANGE, color: WHITE }}
          >
            Enquire Now
          </a>
        </div>
      </div>
    </>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Modern Chennai cityscape at twilight"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(8,30,56,0.55) 0%, rgba(8,30,56,0.35) 40%, rgba(8,30,56,0.88) 100%)" }}
      />
      <div className="relative container-x w-full pt-32 pb-[240px] md:pb-44">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase" style={{ color: ORANGE }}>
              <span className="block w-8 h-px" style={{ background: ORANGE }} />
              Established 2024 · Chennai
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-[44px] sm:text-6xl lg:text-7xl leading-[1.03] text-white">
              Spaces that elevate{" "}
              <em className="not-italic" style={{ color: ORANGE }}>everyday living.</em>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-7 text-white/80 text-base md:text-lg max-w-xl leading-relaxed font-light">
              Scaling Ventures is a professionally managed construction and real-estate
              development firm, crafting innovative, sustainable and high-quality residential
              developments across Chennai.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">Explore Projects</a>
              <a href={profilePdf} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Download className="h-4 w-4" /> Company Profile
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* honest stat strip */}
      <div className="absolute left-0 right-0 bottom-0 border-t border-white/12" style={{ background: "rgba(8,30,56,0.65)", backdropFilter: "blur(8px)" }}>
        <div className="container-x grid grid-cols-2 md:grid-cols-4">
          {[
            { v: "2024", l: "Established" },
            { v: "5", l: "Signature Projects" },
            { v: "2", l: "Ongoing Developments" },
            { v: "100%", l: "Vastu Compliant" },
          ].map((s, i) => (
            <div
              key={s.l}
              className="py-6 md:py-7 px-2 md:px-4 text-center md:text-left border-white/10"
              style={{ borderRightWidth: i < 3 ? 1 : 0, borderRightStyle: "solid" }}
            >
              <div className="font-display text-3xl md:text-4xl" style={{ color: ORANGE }}>{s.v}</div>
              <div className="mt-1 text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

const VALUES = ["Excellence", "Transparency", "Timely Execution", "Customer-Focused Innovation"];

function About() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: WHITE }}>
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative">
            <img
              src={aboutImg}
              alt="A Scaling Ventures residential development"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block p-6 max-w-[260px]" style={{ background: ORANGE }}>
              <div className="font-display text-4xl text-white">2024</div>
              <p className="mt-2 text-white/90 text-sm leading-relaxed">
                Founded in Chennai with a commitment to transparency, quality and timely delivery.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={120}>
          <span className="eyebrow">Who We Are</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.08]">
            About Scaling Ventures
          </h2>
          <span className="gold-divider mt-7" />
          <p className="mt-7 text-[15.5px] leading-[1.8]" style={{ color: `${INK}cc` }}>
            Scaling Ventures, established in December 2024, is a professionally managed construction
            and real-estate development firm driven by a vision to become a trusted name in modern
            construction - through innovative, sustainable and high-quality developments that elevate
            lifestyles and communities.
          </p>
          <p className="mt-4 text-[15.5px] leading-[1.8]" style={{ color: `${INK}cc` }}>
            With a commitment to excellence, transparency, timely execution and customer-focused
            innovation, we focus on delivering thoughtfully planned residential projects that combine
            modern design, superior workmanship and long-term value.
          </p>

          <div className="mt-9 flex flex-wrap gap-2.5">
            {VALUES.map((v) => (
              <span
                key={v}
                className="px-4 py-2.5 text-[11px] tracking-[0.16em] uppercase border"
                style={{ borderColor: "#E2E8F0", color: BLUE }}
              >
                {v}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- MISSION & VISION ---------------- */

function MissionVision() {
  const cards = [
    {
      k: "Mission",
      body: "To deliver thoughtfully planned residential projects that combine modern design, superior workmanship and long-term value - with an unwavering commitment to excellence, transparency, timely execution and customer-focused innovation.",
    },
    {
      k: "Vision",
      body: "To become a trusted name in modern construction through innovative, sustainable and high-quality developments that elevate lifestyles and communities.",
    },
  ];
  return (
    <section id="mission" className="py-24 md:py-32" style={{ background: BLUE, color: WHITE }}>
      <div className="container-x">
        <Reveal>
          <span className="eyebrow" style={{ color: ORANGE }}>What Drives Us</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.08] text-white max-w-2xl">
            Our Mission &amp; Vision
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 gap-7">
          {cards.map((c, i) => (
            <Reveal key={c.k} delay={i * 120}>
              <div className="h-full p-9 md:p-11 border border-white/12" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="flex items-center gap-3">
                  <span className="block w-8 h-px" style={{ background: ORANGE }} />
                  <span className="text-[11px] tracking-[0.28em] uppercase" style={{ color: ORANGE }}>{c.k}</span>
                </div>
                <p className="mt-6 font-display italic text-2xl md:text-[28px] leading-[1.5] text-white/95">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */

function BrochureDialog({ project }: { project: Project }) {
  const images = project.gallery ?? [];
  const [idx, setIdx] = useState(0);
  if (images.length === 0) return null;
  const go = (d: number) => setIdx((v) => (v + d + images.length) % images.length);
  return (
    <Dialog onOpenChange={() => setIdx(0)}>
      <DialogTrigger asChild>
        <button className="btn-primary !py-3 !px-5 !text-[11px]">View Brochure</button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl !p-0 overflow-hidden border-0 bg-[#0C2A4D]">
        <DialogTitle className="sr-only">{project.name} brochure</DialogTitle>
        <DialogDescription className="sr-only">Project renders and brochure pages for {project.name}.</DialogDescription>
        <div className="relative bg-[#0C2A4D]">
          <div className="aspect-[3/4] sm:aspect-[4/3] w-full grid place-items-center">
            <img src={images[idx]} alt={`${project.name} - ${idx + 1}`} className="max-h-[78vh] w-full object-contain" />
          </div>
          {images.length > 1 && (
            <>
              <button onClick={() => go(-1)} aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-black/45 text-white hover:bg-[#EF7320] transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => go(1)} aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-black/45 text-white hover:bg-[#EF7320] transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#081E38]">
          <span className="text-white font-display text-lg">{project.name}</span>
          <span className="text-[11px] tracking-[0.18em] uppercase text-white/60">{idx + 1} / {images.length}</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function OngoingCard({ p, i }: { p: Project; i: number }) {
  return (
    <Reveal delay={i * 80}>
      <article className="group bg-white border border-[#E2E8F0] overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_24px_60px_-30px_rgba(12,42,77,0.45)] hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F1F5FB]">
          <img src={p.image} alt={p.name} loading="lazy"
            className="w-full h-full object-contain transition-transform duration-[1200ms] group-hover:scale-105" />
          <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase text-white"
            style={{ background: "rgba(12,42,77,0.92)" }}>
            Ongoing
          </span>
          <span className="absolute top-4 right-4 px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase text-white" style={{ background: ORANGE }}>
            {p.category}
          </span>
        </div>
        <div className="p-6 md:p-8 flex flex-col flex-1">
          <div className="text-[11px] tracking-[0.22em] uppercase flex items-center gap-2" style={{ color: `${BLUE}b3` }}>
            <MapPin className="h-3.5 w-3.5" style={{ color: ORANGE }} />
            {p.street}{p.area ? `, ${p.area}` : ""}
          </div>
          <h3 className="mt-3 font-display text-2xl md:text-3xl leading-tight">{p.name}</h3>
          {p.config && <p className="mt-1.5 text-[12.5px] tracking-[0.12em] uppercase" style={{ color: ORANGE }}>{p.config}</p>}
          {p.tagline && <p className="mt-4 font-display italic text-xl text-[#0C2A4D]">{p.tagline}</p>}
          <p className="mt-3 text-[14.5px] leading-relaxed flex-1" style={{ color: `${INK}bf` }}>{p.summary}</p>

          {p.highlights && (
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-[13px]" style={{ color: `${INK}cc` }}>
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0" style={{ background: ORANGE }} />
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-7 flex flex-wrap gap-2.5">
            <BrochureDialog project={p} />
            <a href="#contact" className="btn-secondary !py-3 !px-5 !text-[11px]">Enquire</a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ComingSoonCard({ p, i }: { p: Project; i: number }) {
  return (
    <Reveal delay={i * 70}>
      <article className="group bg-white border border-[#E2E8F0] overflow-hidden flex flex-col h-full">
        <div className="relative aspect-[16/11] overflow-hidden grid place-items-center"
          style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DEEP} 60%, #123a63 100%)` }}>
          <div className="text-center px-6">
            <Building2 className="mx-auto h-10 w-10 text-white/40" />
            <p className="mt-3 text-[10px] tracking-[0.28em] uppercase text-white/55">Render Coming Soon</p>
          </div>
          <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase text-white" style={{ background: ORANGE }}>
            Coming Soon
          </span>
        </div>
        <div className="p-6 md:p-7 flex flex-col flex-1">
          <div className="text-[11px] tracking-[0.22em] uppercase flex items-center gap-2" style={{ color: `${BLUE}b3` }}>
            <MapPin className="h-3.5 w-3.5" style={{ color: ORANGE }} />
            {p.street}
          </div>
          <h3 className="mt-3 font-display text-2xl leading-tight">{p.name}</h3>
          <p className="mt-1.5 text-[12px] tracking-[0.12em] uppercase" style={{ color: ORANGE }}>{p.category}</p>
          <p className="mt-3 text-[14px] leading-relaxed flex-1" style={{ color: `${INK}bf` }}>{p.summary}</p>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase" style={{ color: BLUE }}>
            Register Interest <ArrowRight className="h-3.5 w-3.5" style={{ color: ORANGE }} />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32" style={{ background: MIST }}>
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Our Projects</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.08] max-w-2xl">
            Thoughtfully planned homes, built to last.
          </h2>
        </Reveal>

        {/* Ongoing */}
        <div className="mt-14 flex items-center gap-4">
          <h3 className="font-display text-2xl text-[#0C2A4D]">Ongoing Projects</h3>
          <span className="flex-1 h-px bg-[#D6DEE9]" />
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-7">
          {ONGOING_PROJECTS.map((p, i) => <OngoingCard key={p.slug} p={p} i={i} />)}
        </div>

        {/* Coming soon */}
        <div className="mt-20 flex items-center gap-4">
          <h3 className="font-display text-2xl text-[#0C2A4D]">Coming Soon</h3>
          <span className="flex-1 h-px bg-[#D6DEE9]" />
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {UPCOMING_PROJECTS.map((p, i) => <ComingSoonCard key={p.slug} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LEADERSHIP ---------------- */

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

function LeaderCard({ leader, i }: { leader: Leader; i: number }) {
  return (
    <Reveal delay={i * 50}>
      <article className="group bg-white border border-[#E2E8F0] overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_24px_60px_-30px_rgba(12,42,77,0.4)] hover:-translate-y-1">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#F1F5FB]">
          {leader.photo ? (
            <img src={leader.photo} alt={leader.name} loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-105" />
          ) : (
            <div className="w-full h-full grid place-items-center" style={{ background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_DEEP} 100%)` }}>
              <span className="font-display text-6xl text-white/85">{initials(leader.name)}</span>
            </div>
          )}
          <span className="absolute bottom-0 inset-x-0 px-4 py-2 text-[10px] tracking-[0.2em] uppercase text-white"
            style={{ background: leader.role === "Legal Advisor" ? BLUE : "rgba(239,115,32,0.95)" }}>
            {leader.role}
          </span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display text-xl text-[#0C2A4D]">{leader.name}</h3>
          <p className="mt-2.5 text-[13.5px] leading-relaxed flex-1" style={{ color: `${INK}cc` }}>{leader.summary}</p>
          <Dialog>
            <DialogTrigger asChild>
              <button className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase self-start" style={{ color: BLUE }}>
                Read more <ArrowRight className="h-3.5 w-3.5" style={{ color: ORANGE }} />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <div className="flex items-center gap-4">
                {leader.photo ? (
                  <img src={leader.photo} alt={leader.name} className="h-16 w-16 rounded-full object-cover object-top" />
                ) : (
                  <span className="h-16 w-16 rounded-full grid place-items-center font-display text-2xl text-white"
                    style={{ background: BLUE }}>{initials(leader.name)}</span>
                )}
                <div>
                  <DialogTitle className="font-display text-2xl text-[#0C2A4D]">{leader.name}</DialogTitle>
                  <DialogDescription className="text-[11px] tracking-[0.2em] uppercase mt-1" style={{ color: ORANGE }}>
                    {leader.role}
                  </DialogDescription>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {leader.bio.map((b, k) => (
                  <li key={k} className="flex items-start gap-3 text-[14px] leading-relaxed" style={{ color: `${INK}cc` }}>
                    <span className="mt-2 block h-1.5 w-1.5 shrink-0" style={{ background: ORANGE }} />
                    {b}
                  </li>
                ))}
              </ul>
            </DialogContent>
          </Dialog>
        </div>
      </article>
    </Reveal>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="py-24 md:py-32" style={{ background: WHITE }}>
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Meet Our Partners</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.08]">
              The team behind Scaling Ventures.
            </h2>
            <p className="mt-6 text-[15.5px] leading-[1.8]" style={{ color: `${INK}bf` }}>
              A leadership group spanning real estate, finance, logistics, design and law - bound by a
              shared commitment to quality, transparency and long-term value.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERS.map((l, i) => <LeaderCard key={l.name} leader={l} i={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AMENITIES & USP ---------------- */

const AMENITIES = [
  { icon: Camera, t: "CCTV Surveillance", d: "Monitored coverage across common areas and entries." },
  { icon: Zap, t: "Power Backup", d: "Reliable backup so essentials never pause." },
  { icon: Droplets, t: "Rainwater Harvesting", d: "Sustainable water management built in." },
  { icon: Sun, t: "Solar Panels on Terrace", d: "Clean energy to power shared services." },
  { icon: Sprout, t: "Terrace Garden", d: "Green, open space to unwind above the city." },
  { icon: Smartphone, t: "MyGate App", d: "Smart visitor, security and community management." },
  { icon: ShieldCheck, t: "24/7 Security", d: "Round-the-clock security on premises." },
  { icon: Bath, t: "Driver's Toilet", d: "Thoughtful provision for staff and drivers." },
  { icon: Trees, t: "Turf at Terrace", d: "An all-weather recreation surface up top." },
  { icon: Car, t: "Visitor's Car Parking", d: "Dedicated, hassle-free parking for guests." },
  { icon: Flame, t: "Fire Safety", d: "Fire detection and safety systems across the building." },
  { icon: Compass, t: "100% Vastu Compliance", d: "Homes planned in full alignment with Vastu." },
];

function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-32" style={{ background: MIST }}>
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Key Amenities &amp; USP</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.08]">
              Designed into every Scaling Ventures home.
            </h2>
            <p className="mt-6 text-[15.5px] leading-[1.8]" style={{ color: `${INK}bf` }}>
              The lifestyle features and conveniences our residents can expect across Scaling
              Ventures projects.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#E2E8F0] border border-[#E2E8F0]">
          {AMENITIES.map((a, i) => (
            <Reveal key={a.t} delay={i * 40}>
              <div className="bg-white p-5 md:p-7 h-full flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <span className="mt-0.5 grid place-items-center h-11 w-11 shrink-0" style={{ background: "rgba(239,115,32,0.10)" }}>
                  <a.icon className="h-5 w-5" style={{ color: ORANGE }} />
                </span>
                <div className="min-w-0">
                  <h4 className="font-display text-[17px] md:text-[20px] text-[#0C2A4D]">{a.t}</h4>
                  <p className="mt-1.5 text-[13px] md:text-sm leading-relaxed" style={{ color: `${INK}bf` }}>{a.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CORPORATE PROFILE ---------------- */

function ProfileCTA() {
  return (
    <section className="py-20 md:py-24" style={{ background: BLUE, color: WHITE }}>
      <div className="container-x grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-8">
          <span className="eyebrow" style={{ color: ORANGE }}>Corporate Profile</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-[1.1] text-white max-w-2xl">
            Explore the full Scaling Ventures story.
          </h2>
          <p className="mt-4 text-white/75 max-w-xl text-[15px] leading-relaxed">
            Download our company profile for an overview of who we are, our leadership, projects and
            the standards we build to.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:text-right" delay={120}>
          <a href={profilePdf} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <Download className="h-4 w-4" /> Download Company Profile
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- ENQUIRY (form only) ---------------- */

function Enquiry() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "General Enquiry", message: "" });
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

  const field = "w-full bg-transparent border-b border-[#E2E8F0] py-3.5 text-[15px] text-[#15233B] placeholder:text-[#15233B]/40 focus:outline-none focus:border-[#EF7320] transition-colors";
  const label = "text-[10px] tracking-[0.22em] uppercase text-[#15233B]/60";

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: WHITE }}>
      <div className="container-x grid lg:grid-cols-12 gap-14">
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">Get in Touch</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.08]">
            Enquire about a Scaling Ventures home.
          </h2>
          <span className="gold-divider mt-7" />
          <p className="mt-7 text-[15px] leading-[1.85]" style={{ color: `${INK}cc` }}>
            Share a few details and our team will get back to you with availability, pricing and a
            personal walkthrough of the project you're interested in.
          </p>
          <div className="mt-10 space-y-5">
            {[
              { l: "Direct from the developer", v: "No middlemen - you speak to our team." },
              { l: "Personal response", v: "Every enquiry is reviewed and answered personally." },
              { l: "Transparent guidance", v: "Clear information on every project and price." },
            ].map((b) => (
              <div key={b.l} className="flex gap-4">
                <span className="mt-1.5 block h-2 w-2 shrink-0" style={{ background: ORANGE }} />
                <div className="min-w-0">
                  <div className="font-display text-lg text-[#0C2A4D]">{b.l}</div>
                  <div className="text-sm" style={{ color: `${INK}b3` }}>{b.v}</div>
                </div>
              </div>
            ))}
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2.5 text-[12px] tracking-[0.16em] uppercase" style={{ color: BLUE }}>
            <Instagram className="h-4 w-4" style={{ color: ORANGE }} /> Follow us on Instagram
          </a>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <div className="bg-white border border-[#E2E8F0] p-7 md:p-12">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto grid place-items-center h-14 w-14 rounded-full" style={{ background: ORANGE }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2"><path d="M5 12l4 4 10-10" /></svg>
                </div>
                <h3 className="mt-6 font-display text-3xl text-[#0C2A4D]">Thank you.</h3>
                <p className="mt-3 max-w-sm mx-auto" style={{ color: `${INK}bf` }}>Our team will reach out to you shortly.</p>
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
                    <option>General Enquiry</option>
                    <option>Jai Shankeshwar Apartment</option>
                    <option>Scaling Ananta</option>
                    <option>Upcoming Projects</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className={label}>Message</label>
                  <textarea rows={3} className={field + " resize-none"} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us briefly what you're looking for" />
                </div>
                <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="text-xs max-w-sm" style={{ color: `${INK}8c` }}>By submitting, you agree to be contacted by a Scaling Ventures representative.</p>
                  <button type="submit" className="btn-primary">Submit Enquiry</button>
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
  const year = new Date().getFullYear();
  return (
    <footer className="pt-20 pb-10" style={{ background: BLUE_DEEP, color: WHITE }}>
      <div className="container-x grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Logo className="h-16 md:h-20" />
          <p className="mt-6 text-sm leading-relaxed text-white/65 max-w-sm">
            Scaling Ventures Pvt. Ltd. - a professionally managed construction and real-estate
            development firm, established December 2024, building thoughtfully planned residential
            developments across Chennai.
          </p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center h-9 w-9 border border-white/18 hover:border-[#EF7320] hover:text-[#EF7320] transition-colors">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-[10px] tracking-[0.28em] uppercase" style={{ color: ORANGE }}>Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="text-white/70 hover:text-[#EF7320] transition-colors">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <h4 className="text-[10px] tracking-[0.28em] uppercase" style={{ color: ORANGE }}>Projects</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[...ONGOING_PROJECTS, ...UPCOMING_PROJECTS].map((p) => (
              <li key={p.slug}><a href="#projects" className="text-white/70 hover:text-[#EF7320] transition-colors">{p.name}</a></li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/55">Chennai, Tamil Nadu, India</p>
        </div>
      </div>
      <div className="container-x mt-16 pt-7 border-t border-white/10 flex flex-wrap justify-between gap-4 text-xs text-white/50">
        <p>© {year} Scaling Ventures Pvt. Ltd. All rights reserved.</p>
        <a href={profilePdf} target="_blank" rel="noopener noreferrer" className="hover:text-[#EF7320]">Company Profile</a>
      </div>
    </footer>
  );
}

/* ---------------- MOBILE STICKY CTA ---------------- */

function StickyCTA() {
  return (
    <a
      href="#contact"
      className="md:hidden fixed left-4 right-4 bottom-4 z-40 flex items-center justify-center gap-2 py-4 text-[11px] tracking-[0.2em] uppercase shadow-[0_18px_40px_-12px_rgba(239,115,32,0.5)]"
      style={{ background: ORANGE, color: WHITE }}
    >
      Enquire Now <ArrowRight className="h-4 w-4" />
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
      <MissionVision />
      <Projects />
      <Leadership />
      <Amenities />
      <ProfileCTA />
      <Enquiry />
      <Footer />
      <StickyCTA />
    </main>
  );
}
