"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="small-caps text-xs font-medium text-muted tracking-widest mb-10"
        >
          Education
        </motion.p>

        <div className="space-y-10">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              {/* School + period */}
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-medium text-ink">{edu.school}</h3>
                <span className="text-xs text-muted">{edu.period}</span>
              </div>

              {/* Degree + grade */}
              <p className="text-sm text-muted mb-1">
                {edu.degree}
                {edu.grade && (
                  <span className="text-ink font-medium"> · {edu.grade}</span>
                )}
              </p>

              {/* Location */}
              <p className="text-xs text-muted mb-4">{edu.location}</p>

              {/* Notes */}
              <ul className="space-y-1">
                {edu.notes.map((note) => {
                  const isScholarship =
                    note.toLowerCase().includes("scholarship") ||
                    note.toLowerCase().includes("jasso");
                  return (
                    <li key={note} className="flex gap-2 text-xs text-muted">
                      <span aria-hidden="true" className="text-border select-none">
                        —
                      </span>
                      <span className={isScholarship ? "text-accent italic" : ""}>
                        {note}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
