import { OpsDashboardShell } from "@/components/OpsDashboardShell";

export const metadata = { title: "career-ops — Nauval" };

export default function CareerOpsPage() {
  return (
    <OpsDashboardShell
      title="career-ops"
      description="Otomasi pipeline lamaran kerja: discovery role, kustomisasi CV/CL, kirim, follow-up, status tracking."
      macsProject="career-ops"
    />
  );
}
