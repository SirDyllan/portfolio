import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-archivo",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const title = "Dyllan Mutsereketa — Software Developer, Designer & IT Intern";
const description =
  "Portfolio of Dyllan Mutsereketa, a Zimbabwean software developer and graphic designer currently working as an IT Intern at Prevsol Digital. Web, mobile, data and design projects.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://dyllanmutsereketa.vercel.app"),
  authors: [{ name: "Dyllan Mutsereketa" }],
  keywords: [
    "Dyllan Mutsereketa",
    "Software Developer",
    "Graphic Designer",
    "IT Intern",
    "Zimbabwe",
    "Portfolio",
    "Next.js",
    "Flutter",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/images/dyllan-profile.jpg", width: 1200, height: 959 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/dyllan-profile.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f1e7",
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
