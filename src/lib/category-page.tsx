import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { PROJECTS, type Project, type ProjectCategory } from "@/lib/projects";
import { LaunchingSoonMedia } from "@/lib/coming-soon";
import heroDesktop from "@/assets/covers/desktop.webp";
import heroMobile from "@/assets/covers/mobile.webp";

const ORANGE = "#EF7320";
const BLUE = "#0C2A4D";
const INK = "#15233B";

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const isUpcoming = p.status === "Coming Soon";
  return (
    <Reveal delay={i * 60}>
      <article className="group bg-white border border-[#E2E8F0] overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_24px_60px_-30px_rgba(12,42,77,0.45)] hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden grid place-items-center"
          style={p.image ? { background: "#F1F5FB" } : undefined}>
          {p.image ? (
            <img src={p.image} alt={p.name} loading="lazy"
              className="w-full h-full object-contain transition-transform duration-[1200ms] group-hover:scale-105" />
          ) : (
            <LaunchingSoonMedia subtitle={p.name} />
          )}
          <span className="absolute top-4 left-4 z-10 px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase text-white"
            style={{ background: isUpcoming ? ORANGE : "rgba(12,42,77,0.92)" }}>
            {p.status}
          </span>
        </div>
        <div className="p-6 md:p-7 flex flex-col flex-1">
          <div className="text-[11px] tracking-[0.22em] uppercase flex items-center gap-2" style={{ color: `${BLUE}b3` }}>
            <MapPin className="h-3.5 w-3.5" style={{ color: ORANGE }} />
            {p.street}{p.area ? `, ${p.area}` : ""}
          </div>
          <h3 className="mt-3 font-display text-2xl leading-tight">{p.name}</h3>
          {p.config && <p className="mt-1.5 text-[12px] tracking-[0.12em] uppercase" style={{ color: ORANGE }}>{p.config}</p>}
          <p className="mt-3 text-[14.5px] leading-relaxed flex-1" style={{ color: `${INK}bf` }}>{p.summary}</p>
          <Link to="/" hash="contact" className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase" style={{ color: BLUE }}>
            {isUpcoming ? "Register Interest" : "Enquire"} <ArrowRight className="h-3.5 w-3.5" style={{ color: ORANGE }} />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export function CategoryPage({
  category,
  eyebrow,
  title,
  intro,
  highlights,
}: {
  category: ProjectCategory;
  eyebrow: string;
  title: string;
  intro: string;
  highlights: { v: string; l: string }[];
}) {
  const items = PROJECTS.filter((p) => p.category === category);
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: BLUE }}>
        <picture className="absolute inset-0 w-full h-full">
          <source media="(max-width: 767px)" srcSet={heroMobile} />
          <img src={heroDesktop} alt="" aria-hidden className="w-full h-full object-cover" />
        </picture>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(8,30,56,0.72) 0%, rgba(8,30,56,0.6) 45%, rgba(8,30,56,0.9) 100%)" }}
        />
        <div className="relative container-x">
          <Link to="/" className="text-[11px] tracking-[0.22em] uppercase text-white/70 hover:text-[#EF7320]">
            ← Back to Home
          </Link>
          <Reveal>
            <span className="mt-8 inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase" style={{ color: ORANGE }}>
              <span className="block w-8 h-px" style={{ background: ORANGE }} />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04] text-white max-w-4xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed font-light">
              {intro}
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px border-t border-white/12 pt-10">
            {highlights.map((h) => (
              <div key={h.l} className="px-2 md:px-4">
                <div className="font-display text-3xl md:text-4xl" style={{ color: ORANGE }}>{h.v}</div>
                <div className="mt-1 text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-white/70">{h.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 md:py-32" style={{ background: "#F1F5FB" }}>
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">{category} Developments</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl leading-[1.08] max-w-2xl">
              Designed with discipline. Delivered with care.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {items.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28" style={{ background: BLUE }}>
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-white max-w-3xl mx-auto leading-[1.1]">
              Begin a conversation with our {category.toLowerCase()} team.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link to="/" hash="contact" className="btn-primary">Enquire Now</Link>
              <Link to="/" hash="projects" className="btn-outline">View All Projects</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export { createFileRoute };
