import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { site } from "@/content/site";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Zeoli Realty — Southeast Michigan Real Estate Team",
    template: "%s — Zeoli Realty",
  },
  description:
    "A premier group of real estate professionals serving Southeast Michigan. 800+ closings, $200M+ sold. Expert guidance. A seamless experience.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/app-icon-180.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Zeoli Realty",
    title: "Zeoli Realty — Southeast Michigan Real Estate Team",
    description:
      "Sell for more. Sell with a team. 800+ closings, $200M+ sold across Southeast Michigan.",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeoli Realty — Southeast Michigan Real Estate Team",
    description:
      "Sell for more. Sell with a team. 800+ closings, $200M+ sold across Southeast Michigan.",
    images: ["/og.jpg"],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Zeoli Realty",
  url: site.url,
  logo: `${site.url}/app-icon-512.png`,
  image: `${site.url}/images/team-full.jpg`,
  telephone: "+1-248-860-3268",
  email: site.email,
  slogan: site.tagline,
  foundingDate: "2021",
  address: {
    "@type": "PostalAddress",
    streetAddress: "404 E 4th St",
    addressLocality: "Royal Oak",
    addressRegion: "MI",
    postalCode: "48067",
    addressCountry: "US",
  },
  areaServed: site.counties.map((c) => `${c} County, MI`),
  parentOrganization: { "@type": "Organization", name: site.brokerage },
  sameAs: Object.values(site.social).filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
