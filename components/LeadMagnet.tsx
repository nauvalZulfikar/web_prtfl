"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { leadMagnet, profile } from "@/lib/data";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Send me the automation guide"
  )}&body=${encodeURIComponent(
    `Hi Nauval,\n\nPlease send me the "5 manual workflows that pay back in 90 days" guide.\n\nMy email: ${
      email || "(your email)"
    }\nCompany: \nWorkflow I'm thinking about: \n\nThanks.`
  )}`;

  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border border-border rounded-sm p-8 md:p-10 bg-[#F5F4F0]/60"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <p className="small-caps text-[10px] font-medium text-accent tracking-widest mb-3">
                {leadMagnet.badge}
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-ink leading-tight mb-4">
                {leadMagnet.title}
              </h2>
              <p className="text-sm md:text-base text-ink/80 leading-relaxed mb-5">
                {leadMagnet.description}
              </p>
              <ul className="space-y-2 mb-6">
                {leadMagnet.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2.5 text-sm text-ink/85 leading-relaxed"
                  >
                    <span aria-hidden="true" className="text-accent shrink-0 pt-0.5">
                      —
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-5 flex flex-col justify-center">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!email.trim()) return;
                  setSubmitted(true);
                  window.location.href = mailtoUrl;
                }}
                className="flex flex-col gap-3"
              >
                <label className="text-xs text-muted small-caps tracking-widest font-medium">
                  Your work email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="border border-border rounded-sm px-4 py-2.5 text-sm bg-background focus:outline-none focus:border-ink transition-colors"
                />
                <button
                  type="submit"
                  className="bg-ink text-background text-sm font-medium px-6 py-2.5 rounded hover:bg-accent transition-colors duration-200 mt-1"
                >
                  {leadMagnet.cta}
                </button>
                <p className="text-xs text-muted leading-relaxed mt-1">
                  {leadMagnet.privacyNote}
                </p>
                {submitted && (
                  <p className="text-xs text-accent mt-1">
                    Opening your email client — hit send to receive the guide.
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
