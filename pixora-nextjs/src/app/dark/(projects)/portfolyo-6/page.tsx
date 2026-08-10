import { PortfolioSixHero, PortfolioSixMain } from "@/components/portfolio/portfolio-6/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projelerimiz - Slider | +90 Ventures",
};
const page = () => {
    return (
        <main>
            <PortfolioSixHero />
            <PortfolioSixMain />
        </main>
    );
};

export default page;