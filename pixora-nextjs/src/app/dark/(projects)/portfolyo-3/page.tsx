import { PortfolioThreeHero,PortfolioThreeMain } from "@/components/portfolio/portfolio-3/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projelerimiz - Galeri | +90 Ventures",
};
const page = () => {
    return (
        <main>
            <PortfolioThreeHero />
            <PortfolioThreeMain/>
        </main>
    );
};

export default page;