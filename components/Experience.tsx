"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="small-caps text-xs font-medium text-muted tracking-widest mb-12"
        >
          Experience
        </motion.p>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-2 bottom-2 w-px bg-border"
          />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
                className="pl-8 relative"
              >
                {/* Circle marker */}
                <div
                  aria-hidden="true"
                  className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-border border-2 border-background"
                />

                {/* Company + type badge */}
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-medium text-ink">{job.company}</h3>
                  <span className="text-xs border border-border text-muted px-2 py-0.5 rounded-full">
                    {job.type}
                  </span>
                </div>

                {/* Role */}
                <p className="text-sm text-muted mb-1">{job.role}</p>

                {/* Period + location */}
                <p className="text-xs text-muted mb-3">
                  {job.period} · {job.location}
                </p>

                {/* Impact pills */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {job.impact.map((imp) => (
                    <span
                      key={imp}
                      className="text-xs text-accent bg-accent/10 px-2.5 py-1 rounded-full font-medium"
                    >
                      {imp}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Tool tags */}
                <div className="flex flex-wrap gap-1.5">
                  {job.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs text-muted border border-border px-2 py-0.5 rounded-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
