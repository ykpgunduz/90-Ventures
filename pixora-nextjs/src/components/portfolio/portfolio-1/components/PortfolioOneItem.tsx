import { PortfolioProjectDT } from "@/types/portfolio-dt";
import { SmartLink } from "@/components/common";
import Image from "next/image";

const PortfolioOneItem: React.FC<PortfolioProjectDT> = ({ id, slug, type, video, image, title, categories, year }) => {
    const projectLink = `/projeler/${slug || id}`;
    return (
        <div className="col-lg-6">
            <div className="px-project-3-item mb-55">
                <div className="px-project-3-content d-flex justify-content-between align-items-center mb-25">
                    <h4 className="px-project-3-title m-0">
                        <SmartLink href={projectLink}>
                            {title}
                        </SmartLink>
                    </h4>
                    <div className="d-flex align-items-center gap-3">
                        <div className="px-project-3-category d-flex align-items-center">
                            {categories?.map((category: string, index: number) => (
                                <span key={`${category}-${index}`}>{category}</span>
                            ))}
                        </div>
                        {year && <span style={{ fontSize: "14px", opacity: 0.7 }}>/ {year}</span>}
                    </div>
                </div>
                <SmartLink href={projectLink}>
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
                </SmartLink>
            </div>
        </div>
    );
};

export default PortfolioOneItem;
