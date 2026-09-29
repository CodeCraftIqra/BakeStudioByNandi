import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bake Studio By Nandi's | Freshly Baked Cakes, Pastries & Snacks in Khatauli",
  description: "Khatauli's premier bakery for fresh custom cakes, pastries, vada pav, dhokla sandwich, patties & breads. Rated 4.3★ on Google. Order online or call 063993 03303.",
  keywords: ["Bake Studio By Nandi's", "Bakery in Khatauli", "Cakes in Khatauli", "Khatauli Bakery", "Custom Cakes Muzaffarnagar", "Zomato Khatauli Bakery"],
  authors: [{ name: "Bake Studio By Nandi's" }],
  openGraph: {
    title: "Bake Studio By Nandi's | Freshly Baked Happiness",
    description: "Trusted bakery in Khatauli near ICICI Bank, Shivpuri. Fresh cakes, pastries, patties & custom designs.",
    images: ["/images/hero.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF6F0] text-[#2C180B] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#2C180B]">
        {children}
      </body>
    </html>
  );
}
