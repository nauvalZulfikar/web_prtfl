"use client";

import { motion } from "framer-motion";
import { skillClusters } from "@/lib/data";

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
          Capabilities
        </motion.p>

        <div className="space-y-12">
          {skillClusters.map((cluster, i) => (
            <motion.div
              key={cluster.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
            >
              <div className="md:col-span-4">
                <h3 className="font-display text-xl text-ink mb-2">
                  {cluster.heading}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {cluster.blurb}
                </p>
              </div>
              <div className="md:col-span-8">
                <div className="flex flex-wrap gap-2">
                  {cluster.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm border border-ink/15 text-ink px-3 py-1.5 rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
