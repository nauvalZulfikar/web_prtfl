import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nauval Zulfikar — Senior Data Scientist",
  description:
    "Senior Data Scientist with 5+ years in ML, credit risk, and NLP. MSc Business Analytics (Aston, 1:1). Available to work in the UK.",
  openGraph: {
    title: "Nauval Zulfikar — Senior Data Scientist",
    description:
      "Building ML models, credit risk systems, and NLP pipelines in regulated financial environments.",
    url: "https://nauvalzulfikar.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-ink">
        {children}
      </body>
    </html>
  );
}
