"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="small-caps text-xs font-medium text-muted tracking-widest mb-10"
        >
          Projects
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="border border-border p-5 rounded-sm flex flex-col gap-4 hover:border-ink/30 transition-colors duration-200 group"
            >
              {/* Title row */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-ink text-sm leading-snug">
                  {project.title}
                </h3>
                {project.isPublication && (
                  <span className="shrink-0 text-xs border border-accent/40 text-accent px-2 py-0.5 rounded-full">
                    Publication
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs text-muted leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted border border-border px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-accent flex items-center gap-1 transition-colors duration-150 mt-auto"
                aria-label={`View ${project.title} on GitHub`}
              >
                View on GitHub
                <span aria-hidden="true" className="text-base leading-none">
                  →
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
