"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const visible = testimonials.filter((t) => t.published);
  if (visible.length === 0) return null;

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
          What clients say
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visible.map((t, i) => (
            <motion.figure
              key={`${t.author}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="border-l-2 border-accent/40 pl-5"
            >
              <blockquote className="font-display text-lg md:text-xl text-ink leading-snug mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="text-xs text-muted">
                <span className="text-ink font-medium">{t.author}</span>
                <span className="mx-1.5 text-border" aria-hidden="true">
                  ·
                </span>
                <span>{t.role}</span>
                <span className="mx-1.5 text-border" aria-hidden="true">
                  ·
                </span>
                <span>{t.org}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
