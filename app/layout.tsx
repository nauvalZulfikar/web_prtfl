import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Playfair_Display } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SessionProvider } from "@/components/SessionProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nauval Zulfikar — Process & Analytics Automation Specialist",
  description:
    "I turn manual reporting, reconciliation, and decision workflows into measurable, AI-augmented systems. 5+ years across regulated finance, government, and multi-tenant SaaS. Available for UK, EU, and remote contracts.",
  openGraph: {
    title: "Nauval Zulfikar — Process & Analytics Automation Specialist",
    description:
      "AI implementation & development for operational teams. Production work, not prototypes.",
    url: "https://nauvalzulfikar.vercel.app",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className={`${GeistSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-ink">
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
