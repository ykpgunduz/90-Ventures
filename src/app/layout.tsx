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
  alternates: {
    canonical: "https://90.ventures",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "+90 Ventures",
    alternateName: "90 Ventures",
    url: "https://90.ventures",
    logo: "https://90.ventures/assets/img/logo/logo.png",
    description:
      "+90 Ventures; AI, mobil, web ve UI/UX alanında hizmet veren İstanbul merkezli dijital ürün ajansıdır.",
    foundingDate: "2009",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    areaServed: [
      { "@type": "Country", name: "Turkey" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@90.ventures",
      contactType: "customer service",
      availableLanguage: ["Turkish", "English"],
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Mobile App Development",
      "Web Application Development",
      "UI/UX Design",
      "Digital Product Development",
      "Machine Learning",
      "Software Engineering",
    ],
    sameAs: [
      "https://90.ventures",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "+90 Ventures",
    url: "https://90.ventures",
    inLanguage: "tr-TR",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://90.ventures/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "+90 Ventures",
    url: "https://90.ventures",
    image: "https://90.ventures/assets/img/hero/space.jpg",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dijital Ürün Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Dönüşümü",
            description: "Yapay zekâ entegrasyonu ve AI destekli ürün geliştirme.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobil Uygulama Geliştirme",
            description: "iOS ve Android için yüksek performanslı mobil uygulama geliştirme.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Uygulaması Geliştirme",
            description: "Modern web teknolojileriyle ölçeklenebilir web uygulaması geliştirme.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Tasarımı",
            description: "Kullanıcı odaklı arayüz ve deneyim tasarımı.",
          },
        },
      ],
    },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" data-scroll-behavior="smooth">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5VX7CKS4');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.variable}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VX7CKS4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
