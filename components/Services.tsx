"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services, booking } from "@/lib/data";

export default function Services() {
  const entry = services.find((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <section id="services" className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="small-caps text-xs font-medium text-muted tracking-widest mb-4">
            How I work with clients
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight max-w-2xl">
            Start with five days. Scale only if the numbers hold up.
          </h2>
        </motion.div>

        {/* Entry offer — the one thing you can book today */}
        {entry && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border border-ink/25 rounded-sm p-7 md:p-9 mb-6 bg-[#F5F4F0]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-4">
              <div>
                <p className="small-caps text-[10px] font-medium text-accent tracking-widest mb-2">
                  Start here · {entry.duration} · {entry.structure}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-ink">
                  {entry.name}
                </h3>
              </div>
              <p className="font-display text-2xl text-accent tabular-nums">
                {entry.priceFrom.gbp}
                <span className="mx-2 text-border" aria-hidden="true">
                  /
                </span>
                <span className="text-ink/70">{entry.priceFrom.idr}</span>
              </p>
            </div>

            <p className="text-sm md:text-base text-ink/80 leading-relaxed mb-6 max-w-2xl">
              {entry.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-7">
              {entry.deliverables.map((d) => (
                <p
                  key={d}
                  className="flex gap-2 text-sm text-ink leading-relaxed"
                >
                  <span aria-hidden="true" className="text-accent shrink-0">
                    —
                  </span>
                  <span>{d}</span>
                </p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={booking.url}
                className="inline-block bg-ink text-background text-sm font-medium px-6 py-2.5 rounded hover:bg-accent transition-colors duration-200"
              >
                {booking.label}
                <span aria-hidden="true" className="ml-1.5">
                  →
                </span>
              </a>
              <p className="text-xs text-muted">{booking.note}</p>
            </div>
          </motion.article>
        )}

        <p className="small-caps text-[10px] font-medium text-muted tracking-widest mb-4">
          If you already know what you need
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rest.map((service, i) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className="border border-border rounded-sm p-6 flex flex-col bg-background hover:border-ink/40 transition-colors duration-200"
            >
              <div className="mb-5">
                <p className="font-display text-3xl font-bold text-accent/40 leading-none tabular-nums mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="small-caps text-[10px] font-medium text-muted tracking-widest mb-2">
                  {service.duration} · {service.structure}
                </p>
                <h3 className="font-display text-xl text-ink mb-2">
                  {service.name}
                </h3>
                <p className="text-xs text-muted">
                  From{" "}
                  <span className="text-accent font-medium">
                    {service.priceFrom.gbp}
                  </span>
                  <span className="mx-1.5 text-border" aria-hidden="true">
                    /
                  </span>
                  <span className="text-ink/80">{service.priceFrom.idr}</span>
                </p>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-5">
                {service.summary}
              </p>

              <div className="mb-5">
                <p className="small-caps text-[10px] font-medium text-muted tracking-widest mb-2">
                  Deliverables
                </p>
                <ul className="space-y-1.5">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex gap-2 text-xs text-ink leading-relaxed"
                    >
                      <span aria-hidden="true" className="text-accent shrink-0">
                        —
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 border-t border-border">
                <p className="small-caps text-[10px] font-medium text-muted tracking-widest mb-1">
                  Best for
                </p>
                <p className="text-xs text-muted leading-relaxed italic">
                  {service.bestFor}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm"
        >
          <p className="text-muted">
            Klien Indonesia?{" "}
            <Link
              href="/harga"
              className="text-ink hover:text-accent transition-colors duration-150 underline underline-offset-4 decoration-border"
            >
              Lihat harga dalam rupiah
            </Link>
          </p>
          <Link
            href="#contact"
            className="text-ink hover:text-accent transition-colors duration-150 flex items-center gap-1 font-medium"
          >
            Send a one-paragraph brief instead
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
