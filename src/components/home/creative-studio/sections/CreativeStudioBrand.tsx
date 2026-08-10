/* eslint-disable @next/next/no-img-element */
"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { brand_slider_two_params } from "@/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const lightBrandLogos = [
    { id: 1, logo: "/assets/img/brand/clients/abdi-ibrahim.png", alt: "Abdi İbrahim" },
    { id: 2, logo: "/assets/img/brand/clients/abdi-ibrahim-otsuka.png", alt: "Abdi İbrahim Otsuka" },
    { id: 3, logo: "/assets/img/brand/clients/puttikao-health.jpeg", alt: "Puttikao Health" },
    { id: 4, logo: "/assets/img/brand/clients/abdi-ibrahim.png", alt: "Abdi İbrahim" },
    { id: 5, logo: "/assets/img/brand/clients/abdi-ibrahim-otsuka.png", alt: "Abdi İbrahim Otsuka" },
    { id: 6, logo: "/assets/img/brand/clients/puttikao-health.jpeg", alt: "Puttikao Health" },
];
const darkBrandLogos = [
    { id: 1, logo: "/assets/img/brand/clients/abdi-ibrahim.png", alt: "Abdi İbrahim" },
    { id: 2, logo: "/assets/img/brand/clients/abdi-ibrahim-otsuka.png", alt: "Abdi İbrahim Otsuka" },
    { id: 3, logo: "/assets/img/brand/clients/puttikao-health.jpeg", alt: "Puttikao Health" },
    { id: 4, logo: "/assets/img/brand/clients/abdi-ibrahim.png", alt: "Abdi İbrahim" },
    { id: 5, logo: "/assets/img/brand/clients/abdi-ibrahim-otsuka.png", alt: "Abdi İbrahim Otsuka" },
    { id: 6, logo: "/assets/img/brand/clients/puttikao-health.jpeg", alt: "Puttikao Health" },
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
                                    <div className="px-brand-item">
                                        <img
                                            src={brand.logo}
                                            alt={brand.alt}
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