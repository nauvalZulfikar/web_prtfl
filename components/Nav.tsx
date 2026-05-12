"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/data";

const navLinks = [
  { href: "/#services", section: "services", label: "Services" },
  { href: "/#projects", section: "projects", label: "Projects" },
  { href: "/#about", section: "about", label: "About" },
  { href: "/projects", section: "projects-index", label: "All work" },
  { href: "/#contact", section: "contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  const isHome = pathname === "/";
  const isProjectsRoute = pathname?.startsWith("/projects") ?? false;

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["services", "projects", "about", "contact"];
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
  }, [isHome]);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="small-caps text-sm font-medium tracking-widest text-ink hover:text-accent transition-colors duration-150"
        >
          {profile.name}
        </Link>
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, section, label }) => {
            let isActive = false;
            if (section === "projects-index") {
              isActive = isProjectsRoute;
            } else if (isHome) {
              isActive = activeSection === section;
            }
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm transition-colors duration-150 ${
                    isActive ? "text-accent" : "text-muted hover:text-ink"
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
