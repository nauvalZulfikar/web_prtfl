"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
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
          Skills
        </motion.p>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          >
            <p className="text-xs text-muted mb-3 font-medium tracking-wide uppercase">
              Core
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.core.map((skill) => (
                <span
                  key={skill}
                  className="text-sm border border-ink/20 text-ink px-3.5 py-1.5 rounded-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
          >
            <p className="text-xs text-muted mb-3 font-medium tracking-wide uppercase">
              Supporting
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.supporting.map((skill) => (
                <span
                  key={skill}
                  className="text-xs border border-border text-muted px-3 py-1 rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
