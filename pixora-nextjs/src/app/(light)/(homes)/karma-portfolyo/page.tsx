import PortfolioMixSlicerMain from "@/components/home/portfolio-mix-slicer/PortfolioMixSlicerMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Karma Portfolyo | +90 Ventures",
};
const page = () => {
    return (
        <main>
            <PortfolioMixSlicerMain />
        </main>
    );
};

export default page;