import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "swiper/css/bundle";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://90.ventures"),
  title: {
    default: "+90 Ventures | Yapay Zeka Çağının Dijital Ürün Stüdyosu",
    template: "%s",
  },
  description:
    "İstanbul merkezli +90 Ventures; AI entegrasyonu, mobil/web uygulama ve UI/UX tasarım hizmetleriyle fikrinizi ürüne dönüştürür.",
  keywords: [
    "+90 Ventures",
    "girişim stüdyosu",
    "dijital ürün stüdyosu",
    "yapay zekâ çağı",
    "AI dönüşümü",
    "yapay zekâ entegrasyonu",
    "mobil uygulama geliştirme",
    "web tasarımı",
    "yazılım ajansı",
    "ürün stüdyosu",
    "startup builder",
    "dijital ürün geliştirme",
    "İstanbul yazılım ajansı",
  ],
  authors: [{ name: "+90 Ventures", url: "https://90.ventures" }],
  creator: "+90 Ventures",
  publisher: "+90 Ventures",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "+90 Ventures | Fikrinizi Dijital Ürüne Dönüştürüyoruz",
    description:
      "İstanbul merkezli +90 Ventures; AI entegrasyonu, mobil/web uygulama ve UI/UX tasarım hizmetleriyle fikrinizi ürüne dönüştürür.",
    url: "https://90.ventures",
    siteName: "+90 Ventures",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/assets/img/hero/space.jpg",
        width: 1920,
        height: 1080,
        alt: "+90 Ventures Yapay Zekâ Çağının Dijital Ürün Stüdyosu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "+90 Ventures | Fikrinizi Dijital Ürüne Dönüştürüyoruz",
    description:
      "İstanbul merkezli +90 Ventures; AI entegrasyonu, mobil/web uygulama ve UI/UX tasarım hizmetleriyle fikrinizi ürüne dönüştürür.",
    images: ["/assets/img/hero/space.jpg"],
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
  icons: {
    icon: [
      { url: "/favicon.png?v=2", type: "image/png" },
      { url: "/favicon.ico?v=2", type: "image/x-icon" },
      { url: "/assets/img/logo/favicon.png?v=2", type: "image/png" },
    ],
    shortcut: "/favicon.png?v=2",
    apple: "/apple-icon.png?v=2",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "+90 Ventures",
  url: "https://90.ventures",
  logo: "https://90.ventures/assets/img/logo/logo.png",
  description:
    "+90 Ventures; AI, mobil, web ve UI/UX alanında hizmet veren dijital ürün ajansıdır.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@90.ventures",
    contactType: "customer service",
    availableLanguage: ["Turkish", "English"],
  },
  sameAs: [
    "https://90.ventures",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.variable}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
