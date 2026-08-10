
import { PortfolioDetailsVarientOne } from '@/components/portfolio/portfolio-details-1/sections';
import { portfolioProjects } from '@/data/portfolio-projects';
import { PageParamsProps } from '@/types/custom-dt';

export async function generateMetadata(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const project = portfolioProjects.find((item) => item.id === Number(id));
    return {
        title: project?.title ? `${project.title} | +90 Ventures` : "Proje Detayı | +90 Ventures",
    };
}

export default async function BlogDetails(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;

    return (
        <main>
            <PortfolioDetailsVarientOne id={id} />
        </main>
    );
}