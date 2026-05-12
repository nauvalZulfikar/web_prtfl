"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

const statusLabel: Record<string, string> = {
  production: "Live",
  "in-progress": "In progress",
  research: "Research",
  concept: "Concept",
  publication: "Publication",
};

export default function ProjectsIndex() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  const grouped = useMemo(() => {
    return {
      tier1: filtered.filter((p) => p.tier === 1),
      tier2: filtered.filter((p) => p.tier === 2),
      tier3: filtered.filter((p) => p.tier === 3),
    };
  }, [filtered]);

  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto px-6 pt-10 pb-20">
        {/* Breadcrumb */}
        <p className="small-caps text-xs font-medium text-muted tracking-widest mb-8">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          Projects
        </p>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl text-ink mb-4">
            All projects
          </h1>
          <p className="text-sm md:text-base text-muted max-w-2xl leading-relaxed">
            A complete inventory of production systems, applied research, and
            experimental work — data platforms, LLM systems, quantitative
            tools, and consumer AI products.
          </p>
        </motion.div>

        {/* Tag filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mb-12"
        >
          <p className="small-caps text-[10px] font-medium text-muted tracking-widest mb-3">
            Filter by tag
          </p>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveTag(null)}
              className={`text-xs px-2.5 py-1 rounded-sm border transition-colors duration-150 ${
                activeTag === null
                  ? "border-accent text-accent bg-accent/5"
                  : "border-border text-muted hover:text-ink"
              }`}
            >
              All ({projects.length})
            </button>
            {allTags.map((tag) => {
              const count = projects.filter((p) => p.tags.includes(tag)).length;
              const active = activeTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(active ? null : tag)}
                  className={`text-xs px-2.5 py-1 rounded-sm border transition-colors duration-150 ${
                    active
                      ? "border-accent text-accent bg-accent/5"
                      : "border-border text-muted hover:text-ink"
                  }`}
                >
                  {tag} ({count})
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tier sections */}
        {grouped.tier1.length > 0 && (
          <TierSection heading="Featured" items={grouped.tier1} />
        )}
        {grouped.tier2.length > 0 && (
          <TierSection heading="Selected Work" items={grouped.tier2} />
        )}
        {grouped.tier3.length > 0 && (
          <TierSection heading="Archive & Publications" items={grouped.tier3} />
        )}

        {filtered.length === 0 && (
          <p className="text-sm text-muted py-8 text-center">
            No projects match this tag.
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}

function TierSection({
  heading,
  items,
}: {
  heading: string;
  items: typeof projects;
}) {
  return (
    <section className="mb-14">
      <p className="small-caps text-xs font-medium text-muted tracking-widest mb-6">
        {heading}
      </p>
      <ul className="divide-y divide-border border-t border-border">
        {items.map((project, i) => (
          <motion.li
            key={project.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.04 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 py-5 group"
            >
              <span className="text-xs text-muted w-20 shrink-0 tabular-nums">
                {project.year}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3 className="text-sm text-ink font-medium group-hover:text-accent transition-colors duration-150">
                    {project.title}
                  </h3>
                  <span className="text-[10px] text-accent/80 tracking-wide">
                    · {statusLabel[project.status]}
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed mt-1 line-clamp-2">
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
    </section>
  );
}
