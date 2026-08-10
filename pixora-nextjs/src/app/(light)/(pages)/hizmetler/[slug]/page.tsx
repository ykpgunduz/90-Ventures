import { ServiceTwoBanner, ServiceTwoBannerIntro, InnerServiceSection } from "@/components/pages/service-2/sections";
import { ServiceFaq, ServiceSocial, ServiceStep } from "@/components/pages/service-1/sections";
import { innerServices } from "@/data/services-data";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = innerServices.find((s) => s.slug === slug);
    const title = service ? `${service.title} | +90 Ventures` : "Hizmet Detayı | +90 Ventures";
    return {
        title,
    };
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = innerServices.find((s) => s.slug === slug);
    const bigText = service ? service.title : "Hizmetlerimiz";

    return (
        <main>
            <ServiceTwoBannerIntro bigText={bigText} />
            <ServiceTwoBanner />
            <InnerServiceSection slug={slug} />
            <ServiceStep sectionSpacing="mb-140" />
            <ServiceFaq />
            <ServiceSocial />
        </main>
    );
}
