
import { PortfolioDetailsVarientOne } from "@/components/portfolio/portfolio-details-1/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Proje Detayı | +90 Ventures",
};
const page = () => {
    return (
        <main>
           <PortfolioDetailsVarientOne id={1} />
        </main>
    );
};

export default page;