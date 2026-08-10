import { ServiceAbout, ServiceBanner, ServiceCapsule, ServiceOfferings, ServiceTextSlider,ServiceTestimonial, ServiceBrand, ServiceStep,ServiceFaq, ServiceSocial } from "@/components/pages/service-1/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Hizmetlerimiz | AI, Mobil, Web ve UI/UX | +90 Ventures",
    },
    description: "AI dönüşümü, mobil/web uygulama geliştirme ve UI/UX tasarım hizmetlerimizle projenizi uçtan uca hayata geçiriyoruz.",
    openGraph: {
        title: "Hizmetlerimiz | AI, Mobil, Web ve UI/UX | +90 Ventures",
        description: "AI dönüşümü, mobil/web uygulama geliştirme ve UI/UX tasarım hizmetlerimizle projenizi uçtan uca hayata geçiriyoruz.",
    },
};
const page = () => {
    return (
        <main>
            <ServiceBanner />
            <ServiceTextSlider />
            <ServiceAbout />
            <ServiceOfferings />
            <ServiceCapsule />
            <ServiceTestimonial/>
            <ServiceBrand/>
            <ServiceStep sectionSpacing="mb-140"/>
            <ServiceFaq/>
            <ServiceSocial/>
        </main>
    );
};

export default page;


