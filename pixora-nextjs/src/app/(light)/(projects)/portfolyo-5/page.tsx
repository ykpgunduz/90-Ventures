import { PortfolioFiveHero,PortfolioFiveMain } from "@/components/portfolio/portfolio-5/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projelerimiz - Slicer | +90 Ventures",
};
const page = () => {
    return (
        <main>
            <PortfolioFiveHero />
            <PortfolioFiveMain />
        </main>
    );
};

export default page;