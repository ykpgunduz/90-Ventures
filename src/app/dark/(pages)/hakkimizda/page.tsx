import { AboutArea, AboutTwoArea, AboutUsFunfact, AboutUsService, AboutUsTeam, AboutUsTextSlide, BannerSection } from "@/components/pages/about-us/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda | İstanbul Merkezli Dijital Ürün Ajansı | +90 Ventures",
    description: "16+ yıllık deneyim ve 100+ tamamlanan projeyle +90 Ventures ekibini tanıyın.",
    openGraph: {
        title: "Hakkımızda | İstanbul Merkezli Dijital Ürün Ajansı | +90 Ventures",
        description: "16+ yıllık deneyim ve 100+ tamamlanan projeyle +90 Ventures ekibini tanıyın.",
        url: "https://90.ventures/hakkimizda",
    },
    alternates: {
        canonical: "https://90.ventures/hakkimizda",
    },
};
const page = () => {
    return (
        <main>
            <AboutArea />
            <BannerSection src="/assets/img/banner/bulutlar-yeni.jpg" wrapperClass="px-banner-3-wrap fix" />
            <AboutTwoArea />
            <AboutUsFunfact />
            <AboutUsTextSlide />
            <AboutUsService />
            <AboutUsTeam />
        </main>
    );
};

export default page;