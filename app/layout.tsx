import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Nimra Rsaheed | Software Engineer • Machine Learning Engineer",
  description:
    "Professional portfolio of Nimra Rsaheed. Software Engineer and Machine Learning Engineer specializing in AI platforms, machine learning systems, and software engineering.",
  keywords: [
    "Nimra Rsaheed",
    "Software Engineer",
    "Machine Learning Engineer",
    "AI Engineer",
    "Nimii Labs",
    "Dhaal",
    "Federated Learning",
    "Next.js",
    "TypeScript",
    "Python"
  ],
  authors: [{ name: "Nimra Rsaheed" }],
  openGraph: {
    title: "Nimra Rsaheed | Software Engineer • Machine Learning Engineer",
    description:
      "Software Engineer and Machine Learning Engineer specializing in AI platforms, machine learning systems, and software engineering.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#061416] text-[#F0FDFA]">
        {children}
      </body>
    </html>
  );
}
