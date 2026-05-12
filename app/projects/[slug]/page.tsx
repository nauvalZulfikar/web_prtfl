import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";
import { toVideoEmbed } from "@/lib/video";

const statusLabel: Record<string, string> = {
  production: "Live in production",
  "in-progress": "In progress",
  research: "Research",
  concept: "Concept",
  publication: "Publication",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Nauval Zulfikar`,
    description: project.subtitle,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const idx = projects.findIndex((p) => p.slug === params.slug);
  if (idx === -1) return notFound();

  const project = projects[idx];
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;
  const video = toVideoEmbed(project.links.video);

  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-20">
        {/* Breadcrumb */}
        <p className="small-caps text-xs font-medium text-muted tracking-widest mb-8">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <Link href="/projects" className="hover:text-accent transition-colors">
            Projects
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-ink">{project.title}</span>
        </p>

        {/* Meta bar */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted mb-4">
          <span>{project.year}</span>
          <span aria-hidden="true">·</span>
          <span>{project.role}</span>
          <span aria-hidden="true">·</span>
          <span className="text-accent font-medium">
            {statusLabel[project.status]}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl text-ink mb-4 leading-tight">
          {project.title}
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-muted leading-relaxed mb-10">
          {project.subtitle}
        </p>

        {/* Links row */}
        {(project.links.live ||
          project.links.github ||
          project.links.paper ||
          project.links.demo ||
          project.links.kaggle) && (
          <div className="flex flex-wrap gap-5 text-sm mb-12 pb-8 border-b border-border">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-accent transition-colors duration-150 flex items-center gap-1 font-medium"
              >
                Live site
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-150 flex items-center gap-1"
              >
                GitHub
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.links.paper && (
              <a
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-150 flex items-center gap-1"
              >
                Paper
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-150 flex items-center gap-1"
              >
                Demo
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.links.kaggle && (
              <a
                href={project.links.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-150 flex items-center gap-1"
              >
                Kaggle
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors duration-150 flex items-center gap-1"
              >
                Walkthrough
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}

        {/* Walkthrough video */}
        {video && (
          <section className="mb-12">
            <p className="small-caps text-xs font-medium text-muted tracking-widest mb-4">
              Walkthrough
            </p>
            <div className="relative w-full overflow-hidden rounded-sm border border-border bg-[#F5F4F0]" style={{ paddingTop: "56.25%" }}>
              {video.kind === "iframe" ? (
                <iframe
                  src={video.src}
                  title={`${project.title} — walkthrough`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
          </section>
        )}

        {/* Highlights — 2-3 wow bullets at top */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="mb-12">
            <p className="small-caps text-xs font-medium text-muted tracking-widest mb-4">
              Highlights
            </p>
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-ink leading-relaxed">
                  <span aria-hidden="true" className="text-accent shrink-0">
                    ★
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Problem */}
        <section className="mb-12">
          <p className="small-caps text-xs font-medium text-muted tracking-widest mb-4">
            Problem
          </p>
          <p className="text-sm md:text-base text-ink leading-relaxed">
            {project.problem}
          </p>
        </section>

        {/* Approach */}
        <section className="mb-12">
          <p className="small-caps text-xs font-medium text-muted tracking-widest mb-4">
            Approach
          </p>
          <ul className="space-y-3">
            {project.approach.map((a) => (
              <li
                key={a}
                className="flex gap-3 text-sm md:text-base text-ink leading-relaxed"
              >
                <span aria-hidden="true" className="text-accent shrink-0 pt-1">
                  —
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Stack */}
        <section className="mb-12">
          <p className="small-caps text-xs font-medium text-muted tracking-widest mb-4">
            Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-xs text-muted border border-border px-2.5 py-1 rounded-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-12">
          <p className="small-caps text-xs font-medium text-muted tracking-widest mb-4">
            Outcome
          </p>
          <ul className="space-y-3">
            {project.outcome.map((o) => (
              <li
                key={o}
                className="flex gap-3 text-sm md:text-base text-ink leading-relaxed"
              >
                <span aria-hidden="true" className="text-accent shrink-0 pt-1">
                  —
                </span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tags */}
        <section className="mb-12">
          <p className="small-caps text-xs font-medium text-muted tracking-widest mb-4">
            Tags
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <Link
                key={t}
                href={`/projects?tag=${encodeURIComponent(t)}`}
                className="text-xs text-muted border border-border px-2.5 py-1 rounded-sm hover:text-accent hover:border-accent/40 transition-colors duration-150"
              >
                {t}
              </Link>
            ))}
          </div>
        </section>

        {/* Prev / next nav */}
        <nav className="mt-16 pt-8 border-t border-border flex items-stretch justify-between gap-4">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex-1 max-w-[45%]"
            >
              <p className="small-caps text-[10px] font-medium text-muted tracking-widest mb-1">
                ← Previous
              </p>
              <p className="text-sm text-ink group-hover:text-accent transition-colors duration-150 line-clamp-2">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex-1 max-w-[45%] text-right"
            >
              <p className="small-caps text-[10px] font-medium text-muted tracking-widest mb-1">
                Next →
              </p>
              <p className="text-sm text-ink group-hover:text-accent transition-colors duration-150 line-clamp-2">
                {next.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </nav>
      </main>
      <Footer />
    </>
  );
}
