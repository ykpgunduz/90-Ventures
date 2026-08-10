import { PortfolioTwoHero, PortfolioTwoMain } from "@/components/portfolio/portfolio-2/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projelerimiz - Grid | +90 Ventures",
};
const page = () => {
    return (
        <main>
            <PortfolioTwoHero/>
            <PortfolioTwoMain/>
        </main>
    );
};

export default page;