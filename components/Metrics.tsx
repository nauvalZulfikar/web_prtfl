"use client";

import { motion } from "framer-motion";
import { metrics } from "@/lib/data";

export default function Metrics() {
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
          Impact by numbers
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="bg-[#F5F4F0] px-5 py-6 rounded-sm"
            >
              <p className="font-display text-4xl font-bold text-accent mb-2">
                {m.value}
              </p>
              <p className="text-sm text-muted leading-snug">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
