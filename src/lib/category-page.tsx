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
    <main className="bg-[#F7F4EE]">
      {/* Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28" style={{ background: "#0F3D2E" }}>
        <div className="container-x">
          <Link to="/" className="text-[11px] tracking-[0.22em] uppercase text-[#F7F4EE]/70 hover:text-[#C8A96B]">
            ← Back to Home
          </Link>
          <Reveal>
            <span className="mt-8 inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase" style={{ color: "#C8A96B" }}>
              <span className="block w-8 h-px" style={{ background: "#C8A96B" }} />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.04] text-[#F7F4EE] max-w-4xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-2xl text-[#F7F4EE]/80 text-base md:text-lg leading-relaxed font-light">
              {intro}
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px border-t border-[rgba(247,244,238,0.12)] pt-10">
            {highlights.map((h) => (
              <div key={h.l} className="px-2 md:px-4">
                <div className="font-display text-3xl md:text-4xl" style={{ color: "#C8A96B" }}>{h.v}</div>
                <div className="mt-1 text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-[#F7F4EE]/70">{h.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 md:py-32" style={{ background: "#E8E1D8" }}>
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
                <article className="group bg-[#F7F4EE] border border-[#d9d2c6] overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-[0_24px_60px_-30px_rgba(15,61,46,0.45)] hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" width={1200} height={900}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                    <span className="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase"
                      style={{ background: "rgba(15,61,46,0.92)", color: "#F7F4EE" }}>
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
                    <Link to="/" hash="contact" className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#0F3D2E] group/link">
                      Enquire About {p.name.split(" ")[0]}
                      <span className="inline-block transition-transform group-hover/link:translate-x-1" style={{ color: "#C8A96B" }}>→</span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28" style={{ background: "#0F3D2E" }}>
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-[#F7F4EE] max-w-3xl mx-auto leading-[1.1]">
              Begin a conversation with our {category.toLowerCase()} advisory team.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <Link to="/" hash="contact" className="btn-primary" style={{ background: "#C8A96B", borderColor: "#C8A96B", color: "#0F3D2E" }}>
                Book a Consultation
              </Link>
              <Link to="/" className="btn-outline" style={{ borderColor: "rgba(247,244,238,0.4)", color: "#F7F4EE" }}>
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
