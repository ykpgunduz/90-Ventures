import { ServiceTwoBanner, ServiceTwoBannerIntro, InnerServiceSection } from "@/components/pages/service-2/sections";
import { ServiceFaq, ServiceSocial, ServiceStep } from "@/components/pages/service-1/sections";
import { getSubService } from "@/data/sub-services-data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        slug: string;
        subSlug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug, subSlug } = await params;
    const subService = getSubService(slug, subSlug);
    const title = subService
        ? subService.metaTitle ?? `${subService.title} Hizmetleri | +90 Ventures`
        : "Hizmet Detayı | +90 Ventures";
    return {
        title,
        description: subService?.description,
    };
}

export default async function SubServicePage({ params }: PageProps) {
    const { slug, subSlug } = await params;
    const subService = getSubService(slug, subSlug);

    if (!subService) {
        notFound();
    }

    return (
        <main>
            <ServiceTwoBannerIntro title={subService.title} hideButton={true} />
            <InnerServiceSection slug={slug} subSlug={subSlug} />
            <ServiceStep sectionSpacing="mb-140" />
            <ServiceFaq />
            <ServiceSocial />
        </main>
    );
}
