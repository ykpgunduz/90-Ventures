import { StartupAgencyBrand, StartupAgencyHero, StartupAgencyProject, StartupAgencyService, StartupAgencyAbout } from "@/components/home/startup-agency/sections";
import { ServiceTestimonial } from "@/components/pages/service-1/sections";
import { StartupAgencyHeader, MainFooter } from "@/components/layout";
import BackgroundProvider from "@/providers/BackgroundProvider";
import { ClientProviders } from "@/providers";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "+90 Ventures | Yapay Zeka Çağının Dijital Ürün Stüdyosu",
    description: "İstanbul merkezli +90 Ventures; AI entegrasyonu, mobil/web uygulama ve UI/UX tasarım hizmetleriyle fikrinizi ürüne dönüştürür.",
    openGraph: {
        title: "+90 Ventures | Fikrinizi Dijital Ürüne Dönüştürüyoruz",
        description: "İstanbul merkezli +90 Ventures; AI entegrasyonu, mobil/web uygulama ve UI/UX tasarım hizmetleriyle fikrinizi ürüne dönüştürür.",
    },
};

export default function RootPage() {
    return (
        <BackgroundProvider bgColor="#ffffff">
            <ClientProviders>
                <StartupAgencyHeader />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <StartupAgencyHero />
                            <StartupAgencyAbout />
                            <StartupAgencyProject />
                            <StartupAgencyService />
                            <StartupAgencyBrand />
                            <ServiceTestimonial />
                        </main>
                        <MainFooter />
                    </div>
                </div>
            </ClientProviders>
        </BackgroundProvider>
    );
}