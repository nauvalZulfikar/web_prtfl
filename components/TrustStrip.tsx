"use client";

import { motion } from "framer-motion";
import { trustStrip } from "@/lib/data";

export default function TrustStrip() {
  return (
    <section className="py-12 border-t border-border bg-[#F5F4F0]/40">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="small-caps text-[10px] font-medium text-muted tracking-widest mb-4">
            Shipped for
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10">
            {trustStrip.worked.map((name, i) => (
              <span key={name} className="flex items-center gap-x-6">
                <span className="text-sm md:text-base font-medium text-ink/80">
                  {name}
                </span>
                {i < trustStrip.worked.length - 1 && (
                  <span aria-hidden="true" className="text-border">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
            {trustStrip.output.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="font-display text-2xl md:text-3xl font-bold text-ink tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs text-muted leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
