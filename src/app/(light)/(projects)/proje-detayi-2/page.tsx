import { PortfolioDetailsVarientTwo } from "@/components/portfolio/portfolio-details-2/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Proje Detayı | +90 Ventures",
};
const page = () => {
    return (
        <main>
            <PortfolioDetailsVarientTwo id={1}/>
        </main>
    );
};

export default page;