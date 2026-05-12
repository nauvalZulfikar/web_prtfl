"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-3.5rem)] flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Availability badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide border border-border text-muted px-3 py-1 rounded-full">
              <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />
              {profile.availability}
            </span>
          </div>

          {/* Greeting */}
          <p className="font-display text-2xl md:text-3xl text-muted leading-tight mb-2">
            {profile.greeting}
          </p>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-ink mb-4">
            {profile.name}
          </h1>

          {/* Title + sub-title */}
          <p className="text-xl md:text-2xl text-ink font-light mb-1">
            {profile.title}
          </p>
          <p className="text-base md:text-lg text-accent font-medium mb-5">
            {profile.subtitle}
          </p>

          {/* Location */}
          <p className="text-sm text-muted mb-6 flex items-center gap-2">
            <span>{profile.location}</span>
          </p>

          {/* Summary */}
          <p className="text-base text-ink/80 leading-relaxed mb-10 max-w-xl">
            {profile.summary}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="#services"
              className="inline-block bg-ink text-background text-sm font-medium px-6 py-2.5 rounded hover:bg-accent transition-colors duration-200"
            >
              How I work with clients
            </Link>
            <Link
              href="#contact"
              className="inline-block border border-border text-ink text-sm font-medium px-6 py-2.5 rounded hover:border-ink transition-colors duration-200"
            >
              Start a conversation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
