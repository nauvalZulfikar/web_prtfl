"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

export default function ProjectArchive({
  projects,
  heading = "Archive",
}: {
  projects: Project[];
  heading?: string;
}) {
  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="small-caps text-xs font-medium text-muted tracking-widest mb-10"
        >
          {heading}
        </motion.p>

        <ul className="divide-y divide-border border-t border-border">
          {projects.map((project, i) => (
            <motion.li
              key={project.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.04 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 py-4 group"
              >
                <span className="text-xs text-muted w-20 shrink-0 tabular-nums">
                  {project.year}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-ink font-medium group-hover:text-accent transition-colors duration-150">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mt-0.5 line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 md:shrink-0 md:max-w-[40%] justify-end">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted border border-border px-2 py-0.5 rounded-sm whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  aria-hidden="true"
                  className="text-muted group-hover:text-accent transition-colors duration-150 hidden md:inline"
                >
                  →
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
