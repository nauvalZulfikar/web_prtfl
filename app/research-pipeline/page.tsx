import { OpsDashboardShell } from "@/components/OpsDashboardShell";

export const metadata = { title: "research-pipeline — Nauval" };

export default function ResearchPipelinePage() {
  return (
    <OpsDashboardShell
      title="research-pipeline"
      description="Pabrik paper riset otomatis: discover topic, scope, scaffold, data → analysis → draft → export."
      macsProject="research-pipeline"
    />
  );
}
