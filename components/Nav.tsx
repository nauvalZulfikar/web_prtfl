"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile } from "@/lib/data";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="small-caps text-sm font-medium tracking-widest text-ink">
          {profile.name}
        </span>
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => {
            const id = href.replace("#", "");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm transition-colors duration-150 ${
                    activeSection === id
                      ? "text-accent"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
