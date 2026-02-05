import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "GoldenPlate Catering | Premium Full-Service Catering in Houston, TX",
  description:
    "GoldenPlate Catering delivers exceptional full-service catering for weddings, corporate events, private parties, and more in Houston, TX. Elegant cuisine crafted with passion. Request your free quote today.",
  keywords: [
    "catering Houston TX",
    "wedding catering Houston",
    "corporate event catering",
    "private party catering",
    "BBQ catering Houston",
    "brunch catering",
    "holiday catering",
    "full-service catering Houston",
    "GoldenPlate Catering",
    "event catering near me",
  ],
  authors: [{ name: "GoldenPlate Catering" }],
  creator: "GoldenPlate Catering",
  openGraph: {
    title: "GoldenPlate Catering | Premium Full-Service Catering in Houston, TX",
    description:
      "Exceptional full-service catering for weddings, corporate events, and private parties in Houston, TX. Request your free quote today.",
    url: "https://goldenplatecatering.com",
    siteName: "GoldenPlate Catering",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoldenPlate Catering | Premium Catering in Houston, TX",
    description:
      "Exceptional full-service catering for weddings, corporate events, and private parties in Houston, TX.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://goldenplatecatering.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1c1c1c" />
      </head>
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
