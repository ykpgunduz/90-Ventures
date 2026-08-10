import { MinimalPortfolio, MinimalPortfolioAbout, MinimalPortfolioAward, MinimalPortfolioBlog, MinimalPortfolioBrand, MinimalPortfolioHero, MinimalPortfolioService, MinimalPortfolioTextSlider } from "@/components/home/minimal-portfolio/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Minimal Portfolyo | +90 Ventures",
};
const page = () => {
    return (
        <main>
            <MinimalPortfolioHero />
            <MinimalPortfolioAbout/>
            <MinimalPortfolioBrand/>
            <MinimalPortfolio/>
            <MinimalPortfolioService/>
            <MinimalPortfolioTextSlider/>
            <MinimalPortfolioAward/>
            <MinimalPortfolioBlog/>
        </main>
    );
};

export default page;