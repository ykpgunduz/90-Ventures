import { PortfolioProjectDT } from "@/types/portfolio-dt";
import Image from "next/image";

const PortfolioOneItem: React.FC<PortfolioProjectDT> = ({ type, video, image, title, year, externalUrl }) => {
    const content = (
        <div className="px-project-3-item mb-55">
            <div className="px-project-3-content d-flex justify-content-between align-items-center mb-25">
                <h4 className="px-project-3-title m-0">
                    <span>{title}</span>
                </h4>
                {year && <span style={{ fontSize: "16px", fontWeight: 500 }}>/ {year}</span>}
            </div>
            <div className="px-project-3-thumb">
                {type === "video" ? (
                    <video loop muted autoPlay playsInline style={{ width: "100%", height: "auto" }}>
                        <source src={video} type="video/mp4" />
                    </video>
                ) : (
                    <div className="ripple-image">
                        <Image
                            className="img-fluid w-100 h-auto"
                            width={905}
                            height={680}
                            src={image}
                            alt={title}
                        />
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="col-lg-6">
            {externalUrl ? (
                <a href={externalUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                    {content}
                </a>
            ) : (
                content
            )}
        </div>
    );
};

export default PortfolioOneItem;

