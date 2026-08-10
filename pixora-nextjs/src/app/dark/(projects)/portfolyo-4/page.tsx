import { PortfolioFourHero,PortfolioFourMain } from "@/components/portfolio/portfolio-4/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projelerimiz - Showcase | +90 Ventures",
};

const page = () => {
    return (
        <main>
            <PortfolioFourHero />
            <PortfolioFourMain/>
        </main>
    );
};

export default page;