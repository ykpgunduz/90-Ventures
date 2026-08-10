"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { PlusIcon } from "@/svg";
import Image from "next/image";

const brandImages = [
    { img: "/assets/img/brand/clients/abdi-ibrahim.png", width: 300, height: 65 },
    { img: "/assets/img/brand/clients/puttikao-health.jpeg", width: 190, height: 70 },
    { img: "/assets/img/brand/clients/fokur-logo.png", width: 210, height: 55 },
    { img: "/assets/img/brand/clients/gent-logo.png", width: 175, height: 65 },
    { img: "/assets/img/brand/clients/goddess-logo.png", width: 230, height: 85 },
    { img: "/assets/img/brand/clients/obur-logo.png", width: 250, height: 75 },
];
const brandDarkImages = [
    { img: "/assets/img/brand/clients/abdi-ibrahim.png", width: 300, height: 65 },
    { img: "/assets/img/brand/clients/puttikao-health.jpeg", width: 190, height: 70 },
    { img: "/assets/img/brand/clients/fokur-logo.png", width: 210, height: 55 },
    { img: "/assets/img/brand/clients/gent-logo.png", width: 175, height: 65 },
    { img: "/assets/img/brand/clients/goddess-logo.png", width: 230, height: 85 },
    { img: "/assets/img/brand/clients/obur-logo.png", width: 250, height: 75 },
];

interface BrandProps {
    paddingBottom?: string;
}

const Brand = ({ paddingBottom = "pb-60" }: BrandProps) => {
    const isDarkTheme = useIsDarkRoute();
    const brandImagesItems = isDarkTheme ? brandDarkImages : brandImages;

    return (
        <section className={`px-brand-area brand-skew-anim ${paddingBottom}`}>
            <div className="container container-1550">

                {/* Section Title */}
                <div className="row">
                    <div className="col-xl-3">
                        <div className="px-brand-subtitle-box mb-40">
                            <span className="px-section-subtitle">
                                <i>
                                    <PlusIcon />
                                </i>
                                Çalıştığımız Markalar
                            </span>
                        </div>
                    </div>
                </div>

                {/* Brand List */}
                <div className="row align-items-center justify-content-between">
                    {brandImagesItems.map((brand, index) => (
                        <div
                            key={`${brand.img}-${index}`}
                            className="col-lg-4 col-md-4 col-sm-12 text-center"
                        >
                            <div className="px-brand-item" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80px", padding: "10px" }}>
                                <Image
                                    src={brand.img}
                                    width={brand.width}
                                    height={brand.height}
                                    alt={`Brand ${index + 1}`}
                                    style={{ width: "auto", height: "auto", maxWidth: `${brand.width}px`, maxHeight: `${brand.height}px`, objectFit: "contain" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brand;
