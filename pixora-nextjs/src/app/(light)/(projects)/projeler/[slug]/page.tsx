import { PortfolioDetailsVarientOne } from '@/components/portfolio/portfolio-details-1/sections';
import { portfolioProjects } from '@/data/portfolio-projects';
import { PageParamsProps } from '@/types/custom-dt';

export async function generateMetadata(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { slug } = resolvedParams;
    const project = portfolioProjects.find((item) => item.slug === slug || item.id === Number(slug));
    return {
        title: project?.title ? `${project.title} | +90 Ventures` : "Proje Detayı | +90 Ventures",
    };
}

export default async function ProjectDetailPage(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { slug } = resolvedParams;

    return (
        <main>
            <PortfolioDetailsVarientOne id={slug} />
        </main>
    );
}
