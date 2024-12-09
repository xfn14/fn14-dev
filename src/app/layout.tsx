import "@/styles/globals.css";
import localFont from "next/font/local";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "fn14",
  description: "Developed by fn14",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const birdy = localFont({
  src: "../../public/fonts/Birdy.woff",
  display: "swap",
  variable: "--font-birdy",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={birdy.variable}>
      <body className="text-text dark font-birdy">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
