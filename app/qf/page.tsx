import { OpsDashboardShell } from "@/components/OpsDashboardShell";

export const metadata = { title: "qf — Nauval" };

export default function QfPage() {
  return (
    <OpsDashboardShell
      title="qf"
      description="Quant finance: riset otomatis tradeable asset (equity, ETF, FX, crypto) + signal generation + paper trading."
      macsProject="qf"
    />
  );
}
