import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Dyllan Mutsereketa — IT Student & Software Developer",
  description:
    "Portfolio of Dyllan Mutsereketa, a Zimbabwean IT student, software developer and data enthusiast building practical digital solutions.",
  metadataBase: new URL("https://dyllanmutsereketa.vercel.app"),
  openGraph: {
    title: "Dyllan Mutsereketa — IT Student & Software Developer",
    description:
      "Portfolio of Dyllan Mutsereketa, a Zimbabwean IT student, software developer and data enthusiast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
