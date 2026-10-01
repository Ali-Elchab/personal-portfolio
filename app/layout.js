import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar-components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const description =
  "Flutter mobile engineer building production apps for business systems: warehouse management, CRM, ecommerce and SaaS, with Laravel backends and App Store / Play Store releases.";

export const metadata = {
  metadataBase: new URL("https://alielchab.vercel.app"),
  title: {
    default: "Ali Elchab | Flutter Mobile Engineer",
    template: "%s | Ali Elchab",
  },
  description,
  icons: { icon: "/images/logo.png" },
  openGraph: {
    title: "Ali Elchab | Flutter Mobile Engineer",
    description,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
