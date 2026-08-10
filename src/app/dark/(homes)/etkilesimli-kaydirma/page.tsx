import PortfolioInteractiveScroll from "@/components/home/portfolio-interactive-with-scroll/PortfolioInteractiveScroll";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Etkileşimli Portfolyo | +90 Ventures",
};

const page = () => {
    return (
        <main>
            <PortfolioInteractiveScroll />
        </main>
    );
};

export default page;