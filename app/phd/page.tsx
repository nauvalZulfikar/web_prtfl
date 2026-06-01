import { OpsDashboardShell } from "@/components/OpsDashboardShell";

export const metadata = { title: "phd — Nauval" };

export default function PhdPage() {
  return (
    <OpsDashboardShell
      title="phd"
      description="Otomasi aplikasi PhD: shortlist program & supervisor, draft SOP per target, jadwal exam, deadline tracker."
      macsProject="phd"
    />
  );
}
