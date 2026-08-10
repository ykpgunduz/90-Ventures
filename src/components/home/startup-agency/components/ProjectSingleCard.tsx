import { PortfolioProjectDT } from "@/types/portfolio-dt";
import Image from "next/image";

const ProjectSingleCard: React.FC<PortfolioProjectDT> = ({ title, year, image }) => {
    return (
        <div className="col-lg-6">
            <div className="px-project-item mb-20">
                <div className="px-project-content d-flex align-items-center justify-content-between">
                    <h4 className="px-project-title">
                        <span>{title}</span>
                    </h4>
                    <span>/ {year}</span>
                </div>

                <div className="px-project-thumb">
                    <div className="ripple-image">
                        <Image style={{ width: "100%", height: "auto" }} width={905} height={680} src={image} alt={title} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSingleCard;