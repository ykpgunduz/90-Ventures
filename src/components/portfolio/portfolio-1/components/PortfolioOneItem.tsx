import { PortfolioProjectDT } from "@/types/portfolio-dt";
import Image from "next/image";

const PortfolioOneItem: React.FC<PortfolioProjectDT> = ({ type, video, image, title, year, externalUrl }) => {
    const content = (
        <div className="px-project-item mb-20">
            <div className="px-project-content d-flex align-items-center justify-content-between">
                <h4 className="px-project-title" style={{ fontSize: "32px", fontWeight: 700, letterSpacing: "-0.03em" }}>
                    <span>{title}</span>
                </h4>
                {year && <span style={{ fontSize: "16px", fontWeight: 500 }}>/ {year}</span>}
            </div>

            <div className="px-project-thumb">
                {type === "video" ? (
                    <video loop muted autoPlay playsInline style={{ width: "100%", height: "auto" }}>
                        <source src={video} type="video/mp4" />
                    </video>
                ) : (
                    <div className="ripple-image">
                        <Image
                            style={{ width: "100%", height: "auto" }}
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
