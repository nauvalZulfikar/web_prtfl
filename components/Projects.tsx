"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const statusLabel: Record<string, string> = {
  production: "Live in production",
  "in-progress": "In progress",
  research: "Research",
  concept: "Concept",
  publication: "Publication",
};

export default function Projects() {
  const featured = projects.filter((p) => p.tier === 1);

  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-baseline justify-between mb-12"
        >
          <p className="small-caps text-xs font-medium text-muted tracking-widest">
            Featured Projects
          </p>
          <Link
            href="/projects"
            className="text-xs text-muted hover:text-accent transition-colors duration-150 flex items-center gap-1"
          >
            All projects
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>

        <div className="space-y-14">
          {featured.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
              className="group"
            >
              {/* Meta bar */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted mb-3">
                <span>{project.year}</span>
                <span aria-hidden="true">·</span>
                <span>{project.role}</span>
                <span aria-hidden="true">·</span>
                <span className="text-accent font-medium">
                  {statusLabel[project.status]}
                </span>
              </div>

              {/* Title */}
              <Link href={`/projects/${project.slug}`} className="block group">
                <h3 className="font-display text-2xl md:text-3xl text-ink mb-3 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
              </Link>

              {/* Subtitle */}
              <p className="text-sm text-muted leading-relaxed mb-5 md:text-base">
                {project.subtitle}
              </p>

              {/* Problem + outcome row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <div>
                  <p className="small-caps text-[10px] font-medium text-muted tracking-widest mb-1.5">
                    Problem
                  </p>
                  <p className="text-xs text-muted leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="small-caps text-[10px] font-medium text-muted tracking-widest mb-1.5">
                    Outcome
                  </p>
                  <ul className="text-xs text-muted leading-relaxed space-y-1">
                    {project.outcome.map((o) => (
                      <li key={o} className="flex gap-2">
                        <span
                          aria-hidden="true"
                          className="text-accent shrink-0"
                        >
                          —
                        </span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted border border-border px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links row */}
              <div className="flex flex-wrap items-center gap-5 text-xs">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-ink hover:text-accent transition-colors duration-150 flex items-center gap-1 font-medium"
                >
                  Read case study
                  <span aria-hidden="true">→</span>
                </Link>
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors duration-150 flex items-center gap-1"
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
