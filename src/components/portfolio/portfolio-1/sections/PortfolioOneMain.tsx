import { portfolioProjects } from "@/data/portfolio-projects";
import PortfolioOneItem from "../components/PortfolioOneItem";

const projects = [
    {
        id: 1,
        slug: "goddess",
        title: "Goddess",
        year: 2026,
        externalUrl: "https://www.goddesswomenapp.com/",
        image: "/assets/img/project/project-1.jpg",
        categories: ["Marka Kimliği", "Web Tasarımı"],
        client: "+90 Ventures",
        role: "Marka Kimliği & Web Tasarımı",
        duration: "2026",
        designer: "+90 Ventures",
    },
    {
        id: 2,
        slug: "glai-glp-1-tracker",
        title: "Glai GLP-1 Tracker",
        year: 2026,
        externalUrl: "https://apps.apple.com/tr/app/glai-glp-1-dose-tracker/id6793043111?l=tr",
        image: "/assets/img/project/project-2.jpg",
        categories: ["Mobil Uygulama", "Sağlık Teknolojisi"],
        client: "+90 Ventures",
        role: "Mobil Uygulama & UI/UX",
        duration: "2026",
        designer: "+90 Ventures",
    },
];

const PortfolioOneMain = () => {
    return (
        <div className="px-project-3-area px-orange-style pt-60 pb-80">
            <div className="container container-1870">
                <div className="row">
                    {projects.map((item) => (
                        <PortfolioOneItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioOneMain;