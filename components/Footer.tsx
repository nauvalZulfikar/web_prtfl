import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="text-sm text-muted hover:text-accent transition-colors duration-150"
        >
          {profile.email}
        </a>
        <div className="flex items-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors duration-150"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors duration-150"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
