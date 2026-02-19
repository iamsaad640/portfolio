import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saad.run"),
  icons: {
    icon: "/icon.svg",
  },
  title: "Saad Ahmed | Software Engineer",
  description:
    "Software Engineer building AI-native products and scalable full-stack systems. Specializing in Next.js, TypeScript, Python, LangChain, and production-grade AI platforms.",
  keywords: [
    "Saad Ahmed",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "LangChain",
    "Portfolio",
  ],
  authors: [{ name: "Saad Ahmed", url: "https://saad.run" }],
  creator: "Saad Ahmed",
  openGraph: {
    title: "Saad Ahmed — Software Engineer",
    description:
      "Shipping AI-native products & scalable full-stack systems. Next.js, TypeScript, Python, LangChain.",
    url: "https://saad.run",
    siteName: "Saad Ahmed",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Ahmed — Software Engineer",
    description:
      "Shipping AI-native products & scalable full-stack systems.",
    creator: "@saadsolves",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
