"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { startHere } from "@/lib/data";

export default function StartHere() {
  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="small-caps text-xs font-medium text-muted tracking-widest mb-3">
            Start here
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-ink leading-tight max-w-2xl">
            Pick the case study closest to your situation.
          </h2>
        </motion.div>

        <ul className="divide-y divide-border border-t border-border">
          {startHere.map((pick, i) => (
            <motion.li
              key={pick.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
            >
              <Link
                href={pick.href}
                className="flex flex-col md:flex-row md:items-baseline md:gap-6 py-5 group"
              >
                <span className="text-xs text-muted md:w-44 shrink-0 leading-snug mb-2 md:mb-0">
                  If you&apos;re {pick.audience.toLowerCase()}…
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm md:text-base text-ink font-medium group-hover:text-accent transition-colors duration-150 mb-1">
                    Read {pick.pickLabel}
                    <span aria-hidden="true" className="ml-1.5">
                      →
                    </span>
                  </p>
                  <p className="text-xs text-muted leading-relaxed">
                    {pick.reason}
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
