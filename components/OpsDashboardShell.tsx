"use client";

import { signOut, useSession } from "next-auth/react";

const MACS_BASE =
  process.env.NEXT_PUBLIC_MACS_URL || "http://100.81.47.91:8101";

export function OpsDashboardShell({
  title,
  description,
  macsProject,
}: {
  title: string;
  description: string;
  macsProject: string;
}) {
  const { data: session } = useSession();
  const macsUrl = `${MACS_BASE}/?project=${encodeURIComponent(macsProject)}`;

  return (
    <main className="min-h-dvh bg-neutral-50">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="text-sm text-neutral-500 hover:text-neutral-900"
          >
            ← Nauval Zulfikar
          </a>
          <div className="flex items-center gap-3">
            {session?.user?.email && (
              <span className="text-xs text-neutral-500">
                {session.user.email}
              </span>
            )}
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-xs text-neutral-600 hover:bg-neutral-100"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl tracking-tight text-neutral-900">
              {title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600">
              {description}
            </p>
          </div>
          <a
            href={macsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-lg border border-emerald-600/30 bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
          >
            Buka chat di MACS →
          </a>
        </div>

        <div className="rounded-2xl border border-dashed border-neutral-300 bg-white/60 p-10 text-center">
          <div className="mb-2 text-xs uppercase tracking-wider text-neutral-400">
            Belum tersambung
          </div>
          <p className="mx-auto max-w-md text-sm text-neutral-500">
            Dashboard untuk{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5">
              {macsProject}
            </code>{" "}
            belum terhubung ke API project. Bikin endpoint{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5">
              /api/dashboard
            </code>{" "}
            di project ini, terus widget di sini bakal hidup.
          </p>
        </div>
      </section>
    </main>
  );
}
