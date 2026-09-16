import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { hargaId, booking, profile, trustStrip } from "@/lib/data";

export const metadata: Metadata = {
  title: "Harga — Nauval Zulfikar | Otomasi Proses & Sistem Operasional",
  description:
    "Harga tetap dalam rupiah untuk audit otomasi, pembangunan sistem, dan retainer perawatan. Untuk dinas, bank, dan operasi multi-cabang di Indonesia.",
};

export default function HargaPage() {
  const utama = hargaId.paket.find((p) => p.utama);
  const lain = hargaId.paket.filter((p) => !p.utama);

  return (
    <>
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <p className="small-caps text-xs font-medium text-muted tracking-widest mb-4">
          <Link
            href="/"
            className="hover:text-accent transition-colors duration-150"
          >
            Nauval Zulfikar
          </Link>
          <span className="mx-2 text-border" aria-hidden="true">
            /
          </span>
          Harga
        </p>

        <h1 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-6">
          {hargaId.judul}
        </h1>

        <p className="text-base text-ink/80 leading-relaxed max-w-2xl mb-3">
          {hargaId.intro}
        </p>
        <p className="text-xs text-muted mb-12">{hargaId.catatanPajak}</p>

        {/* Bukti singkat */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-border mb-14">
          {trustStrip.output.map((o) => (
            <div key={o.label}>
              <p className="font-display text-2xl text-accent tabular-nums mb-1">
                {o.value}
              </p>
              <p className="text-xs text-muted leading-snug">{o.label}</p>
            </div>
          ))}
        </div>

        {/* Paket utama */}
        {utama && (
          <article className="border border-ink/25 rounded-sm p-7 md:p-9 mb-6 bg-[#F5F4F0]">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-4">
              <div>
                <p className="small-caps text-[10px] font-medium text-accent tracking-widest mb-2">
                  Mulai dari sini · {utama.durasi} · harga tetap
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-ink">
                  {utama.nama}
                </h2>
              </div>
              <p className="font-display text-2xl text-accent tabular-nums">
                {utama.harga}
              </p>
            </div>

            <p className="text-sm md:text-base text-ink/80 leading-relaxed mb-6 max-w-2xl">
              {utama.ringkas}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-7">
              {utama.isi.map((i) => (
                <p
                  key={i}
                  className="flex gap-2 text-sm text-ink leading-relaxed"
                >
                  <span aria-hidden="true" className="text-accent shrink-0">
                    —
                  </span>
                  <span>{i}</span>
                </p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={booking.url}
                className="inline-block bg-ink text-background text-sm font-medium px-6 py-2.5 rounded hover:bg-accent transition-colors duration-200"
              >
                Pesan slot audit
                <span aria-hidden="true" className="ml-1.5">
                  →
                </span>
              </a>
              <p className="text-xs text-muted">
                Atau kirim satu paragraf soal masalahnya ke{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-ink hover:text-accent transition-colors duration-150"
                >
                  {profile.email}
                </a>
                . Saya balas dalam 48 jam.
              </p>
            </div>
          </article>
        )}

        <p className="small-caps text-[10px] font-medium text-muted tracking-widest mb-4">
          Kalau sudah tahu kebutuhannya
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {lain.map((p, i) => (
            <article
              key={p.slug}
              className="border border-border rounded-sm p-6 flex flex-col bg-background hover:border-ink/40 transition-colors duration-200"
            >
              <div className="mb-5">
                <p className="font-display text-3xl font-bold text-accent/40 leading-none tabular-nums mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="small-caps text-[10px] font-medium text-muted tracking-widest mb-2">
                  {p.durasi}
                </p>
                <h3 className="font-display text-xl text-ink mb-2">{p.nama}</h3>
                <p className="text-xs text-accent font-medium">
                  Mulai {p.harga}
                </p>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-5">
                {p.ringkas}
              </p>

              <ul className="space-y-1.5 mb-5">
                {p.isi.map((d) => (
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

              <div className="mt-auto pt-4 border-t border-border">
                <p className="small-caps text-[10px] font-medium text-muted tracking-widest mb-1">
                  Cocok untuk
                </p>
                <p className="text-xs text-muted leading-relaxed italic">
                  {p.cocokUntuk}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
          Pertanyaan yang biasanya muncul
        </h2>
        <dl className="divide-y divide-border border-t border-b border-border mb-14">
          {hargaId.faq.map((f) => (
            <div key={f.t} className="py-6">
              <dt className="text-base text-ink font-medium mb-2">{f.t}</dt>
              <dd className="text-sm text-muted leading-relaxed max-w-2xl">
                {f.d}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <Link
            href="/"
            className="text-muted hover:text-accent transition-colors duration-150"
          >
            ← Kembali ke beranda
          </Link>
          <a
            href={booking.url}
            className="inline-block bg-ink text-background text-sm font-medium px-6 py-2.5 rounded hover:bg-accent transition-colors duration-200"
          >
            Pesan slot audit
            <span aria-hidden="true" className="ml-1.5">
              →
            </span>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
