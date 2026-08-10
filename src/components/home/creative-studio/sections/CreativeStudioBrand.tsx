/* eslint-disable @next/next/no-img-element */
"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { brand_slider_two_params } from "@/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const lightBrandLogos = [
    { id: 1, logo: "/assets/img/brand/clients/abdi-ibrahim.png", alt: "Abdi İbrahim", width: 270, height: 64 },
    { id: 3, logo: "/assets/img/brand/clients/puttikao-health.jpeg", alt: "Puttikao Health", width: 175, height: 70 },
    { id: 7, logo: "/assets/img/brand/clients/fokur-logo.png", alt: "Fokur", width: 190, height: 55 },
    { id: 8, logo: "/assets/img/brand/clients/gent-logo.png", alt: "Gent", width: 160, height: 65 },
    { id: 9, logo: "/assets/img/brand/clients/goddess-logo.png", alt: "Goddess", width: 230, height: 85 },
    { id: 10, logo: "/assets/img/brand/clients/obur-logo.png", alt: "Obur", width: 200, height: 55 },
];
const darkBrandLogos = [
    { id: 1, logo: "/assets/img/brand/clients/abdi-ibrahim.png", alt: "Abdi İbrahim", width: 270, height: 64 },
    { id: 3, logo: "/assets/img/brand/clients/puttikao-health.jpeg", alt: "Puttikao Health", width: 175, height: 70 },
    { id: 7, logo: "/assets/img/brand/clients/fokur-logo.png", alt: "Fokur", width: 190, height: 55 },
    { id: 8, logo: "/assets/img/brand/clients/gent-logo.png", alt: "Gent", width: 160, height: 65 },
    { id: 9, logo: "/assets/img/brand/clients/goddess-logo.png", alt: "Goddess", width: 230, height: 85 },
    { id: 10, logo: "/assets/img/brand/clients/obur-logo.png", alt: "Obur", width: 200, height: 55 },
];

const Brand = () => {
    const isDark = useIsDarkRoute();
    const brands = isDark ? darkBrandLogos : lightBrandLogos;

    return (
        <div className="px-brand-area px-brand-style-3 pb-110 px-fade-anim">
            <div className="container container-1750">
                {/* Subtitle */}
                <div className="row">
                    <div className="col-xl-3">
                        <div className="px-brand-subtitle-box mb-20">
                            <span className="px-section-subtitle">Our Clients</span>
                        </div>
                    </div>
                </div>
                {/* Slider */}
                <div className={`px-brand-slider-wrap mb-10 tp ${!isDark ? "brand-light-bg" : ""}`}>
                    <div className="px-brand-3-active tp-slider-transtion">
                        <Swiper modules={[FreeMode, Autoplay]} {...brand_slider_two_params}>
                            {brands.map((brand) => (
                                <SwiperSlide key={brand.id}>
                                    <div className="px-brand-item" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80px", padding: "10px" }}>
                                        <img
                                            src={brand.logo}
                                            alt={brand.alt}
                                            style={{ width: "auto", height: "auto", maxWidth: `${brand.width}px`, maxHeight: `${brand.height}px`, objectFit: "contain" }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;