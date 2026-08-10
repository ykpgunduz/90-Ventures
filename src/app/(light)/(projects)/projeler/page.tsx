import { PortfolioOneHero, PortfolioOneMain } from "@/components/portfolio/portfolio-1/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projelerimiz | Vaka Çalışmaları | +90 Ventures",
    description: "+90 Ventures'in hayata geçirdiği dijital ürün ve marka projelerinden örnekleri inceleyin.",
};
const page = () => {
    return (
        <main>
            <PortfolioOneHero />
            <PortfolioOneMain/>
        </main>
    );
};

export default page;