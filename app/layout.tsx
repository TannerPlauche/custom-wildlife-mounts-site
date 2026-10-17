import type { Metadata } from "next";
import { Bree_Serif, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const breeSerif = Bree_Serif({
  weight: ["400"],
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Custom Wildlife Mounts | Leitchfield KY Taxidermy",
  description:
    "Custom Wildlife Mounts and Outfitting LLC provides quality taxidermy services in Leitchfield, Kentucky.",
  icons: {
    icon: "/images/cwlm_fav.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${breeSerif.variable} min-h-full antialiased`}>
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
