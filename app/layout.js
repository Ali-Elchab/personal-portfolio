import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar-components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const description =
  "Ali Elchab is a Flutter mobile engineer and founder of VisionRise. He builds offline-first, multi-tenant business apps with Flutter and Laravel, released on the App Store and Google Play. Canadian citizen, open to remote roles.";

export const metadata = {
  metadataBase: new URL("https://alielchab.vercel.app"),
  title: {
    default: "Ali Elchab | Flutter Mobile Engineer",
    template: "%s | Ali Elchab",
  },
  description,
  icons: { icon: "/images/logo.png" },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ali Elchab | Flutter Mobile Engineer",
    description,
    type: "website",
    url: "/",
    siteName: "Ali Elchab",
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
