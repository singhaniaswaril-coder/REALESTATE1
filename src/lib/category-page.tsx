import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/lib/reveal";
import { PROJECTS, type Project } from "@/lib/projects";

type Category = "Residential" | "Commercial";

export function CategoryPage({
  category,
  eyebrow,
  title,
  intro,
  highlights,
}: {
  category: Category;
  eyebrow: string;
  title: string;
  intro: string;
  highlights: { v: string; l: string }[];
}) {
  const items = PROJECTS.filter((p) => p.tag === category);
  return (
    <main className="bg-[#FFFFFF]">
      {/* Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28" style={{ background: "#0C2A4D" }}>
        <div className="container-x">
          <Link to="/" className="text-[11px] tracking-[0.22em] uppercase text-[#FFFFFF]/70 hover:text-[#EF7320]">
            ← Back to Home
          </Link>
          <Reveal>
            <span className="mt-8 inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase" style={{ color: "#EF7320" }}>
              <span className="block w-8 h-px" style={{ background: "#EF7320" }} />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04] text-[#FFFFFF] max-w-4xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-2xl text-[#FFFFFF]/80 text-base md:text-lg leading-relaxed font-light">
              {intro}
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px border-t border-[rgba(255,255,255,0.12)] pt-10">
            {highlights.map((h) => (
              <div key={h.l} className="px-2 md:px-4">
                <div className="font-display text-3xl md:text-4xl" style={{ color: "#EF7320" }}>{h.v}</div>
                <div className="mt-1 text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#FFFFFF]/70">{h.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 md:py-32" style={{ background: "#F1F5FB" }}>
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Featured {category} Developments</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl leading-[1.08] max-w-2xl">
              Designed with discipline. Delivered with care.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {items.map((p: Project, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <article className="group bg-[#FFFFFF] border border-[#E2E8F0] overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_24px_60px_-30px_rgba(12,42,77,0.45)] hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" width={1200} height={900}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                    <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase"
                      style={{ background: "rgba(12,42,77,0.92)", color: "#FFFFFF" }}>
                      {p.status}
                    </span>
                  </div>
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <div className="text-[11px] tracking-[0.22em] uppercase text-[#0C2A4D]/70 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#EF7320]" />
                      {p.location}
                    </div>
                    <h3 className="mt-3 font-display text-2xl md:text-[26px] leading-tight">{p.name}</h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-[#15233B]/75 flex-1">{p.desc}</p>
                    <Link to="/" hash="contact" className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#0C2A4D] group/link">
                      Enquire About {p.name.split(" ")[0]}
                      <span className="inline-block transition-transform group-hover/link:translate-x-1" style={{ color: "#EF7320" }}>→</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28" style={{ background: "#0C2A4D" }}>
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-[#FFFFFF] max-w-3xl mx-auto leading-[1.1]">
              Begin a conversation with our {category.toLowerCase()} advisory team.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link to="/" hash="contact" className="btn-primary" style={{ background: "#EF7320", borderColor: "#EF7320", color: "#0C2A4D" }}>
                Book a Consultation
              </Link>
              <Link to="/" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#FFFFFF" }}>
                View All Projects
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export { createFileRoute };
