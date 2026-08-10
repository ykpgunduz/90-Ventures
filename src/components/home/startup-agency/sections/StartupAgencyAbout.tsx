"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { brand_slider_params } from "@/constant";
import { PlusIcon, TextArrowIcon } from "@/svg";
import Link from "next/link";
import Image from "next/image";

const aboutStats = [
    {
        id: 1,
        value: "16+",
        index: "01",
        title: "Yıllık Sektör Deneyimi",
        desc: "16 yılı aşkın süredir dijital ürün geliştiriyoruz.",
        delay: ".3",
    },
    {
        id: 2,
        value: "100+",
        index: "02",
        title: "Başarıyla Tamamlanan Proje",
        desc: "Şirketlerin gerçek sonuçlar elde etmesine yardımcı olan 100+ proje teslim ettik.",
        delay: ".5",
    },
    {
        id: 3,
        value: "80+",
        index: "03",
        title: "Memnun Müşteri",
        isBrandSlider: true,
        delay: ".7",
    },
];

const brandImages = [
    { id: 1, img: "/assets/img/brand/clients/abdi-ibrahim.png", width: 225, height: 48 },
    { id: 3, img: "/assets/img/brand/clients/puttikao-health.jpeg", width: 150, height: 57 },
    { id: 7, img: "/assets/img/brand/clients/fokur-logo.png", width: 165, height: 42 },
    { id: 8, img: "/assets/img/brand/clients/gent-logo.png", width: 135, height: 48 },
    { id: 9, img: "/assets/img/brand/clients/goddess-logo.png", width: 180, height: 70 },
    { id: 10, img: "/assets/img/brand/clients/obur-logo.png", width: 200, height: 75 },
];

const StartupAgencyAbout = () => {
    return (
        <section className="px-about-area about-skew-anim pb-75">
            <div className="container container-1550">
                <div className="row">
                    {/* LEFT */}
                    <div className="col-xl-3">
                        <span className="px-section-subtitle px-about-subtitle-box">
                            <i>
                                <PlusIcon />
                            </i>
                            Ne yapıyoruz
                        </span>
                    </div>

                    {/* RIGHT */}
                    <div className="col-xl-9">
                        {/* CONTENT */}
                        <div className="px-about-content-wrap">
                            <h4 className="px-about-title mb-55">
                                <span>AI destekli ürünlerden</span> mobil ve <br />
                                web uygulama geliştirmeye <br />
                                uzmanlaşmış bir dijital stüdyoyuz.
                            </h4>

                            <div className="row">
                                <div className="offset-xxl-4 col-xxl-6 offset-xl-4 col-xl-8">
                                    <div className="px-about-content mb-70">
                                        <p>
                                            <span>Odağımız işlevsel, hızlı</span> ve <br />
                                            gereksiz karmaşıklıktan uzak, iş hedeflerinize
                                            hizmet eden ürünler üretmek.
                                        </p>

                                        <Link
                                            href="/hakkimizda"
                                            className="px-about-link px-doubble-effect"
                                        >
                                            <span>Daha fazla keşfet</span>
                                            <i>
                                                <TextArrowIcon />
                                                <TextArrowIcon />
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* STATS */}
                        <div className="px-about-info-wrap">
                            <div className="row gx-5">
                                {aboutStats.map((item) => (
                                    <div
                                        key={item.id}
                                        className="col-xl-4 col-lg-4 col-md-6"
                                    >
                                        <div
                                            className="px-about-info mb-5 px-fade-anim"
                                            data-delay={item.delay}
                                        >
                                            <div className="px-about-info-head d-flex justify-content-between">
                                                <h4>
                                                    <span>{item.value.replace(/\D/g, "")}</span>
                                                    {item.value.replace(/\d/g, "")}
                                                </h4>
                                                <em>{item.index}</em>
                                            </div>

                                            <div className="px-about-info-body d-flex flex-column justify-content-between">
                                                <h4>
                                                    {item.title.split(" ").map((word, idx) => (
                                                        <span key={idx}>
                                                            {word} {idx === 1 && <br />}
                                                        </span>
                                                    ))}
                                                </h4>

                                                {!item.isBrandSlider ? (
                                                    <p>{item.desc}</p>
                                                ) : (
                                                    <div className="px-about-brand-slider fix pb-25">
                                                        <div className="px-about-brand-active">
                                                            <div className="slide-transtion">
                                                                <Swiper
                                                                    modules={[FreeMode, Autoplay]}
                                                                    {...brand_slider_params}>
                                                                    {brandImages.map((brand) => (
                                                                         <SwiperSlide key={brand.id} style={{ width: "auto", minWidth: "160px" }}>
                                                                             <div className="px-about-brand" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "45px", padding: "0 10px" }}>
                                                                                 <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%" }}>
                                                                                     <Image width={brand.width} height={brand.height} style={{ width: "auto", height: "auto", maxWidth: `${brand.width}px`, maxHeight: `${brand.height}px`, objectFit: "contain" }} src={brand.img} alt="brand logo" />
                                                                                 </span>
                                                                             </div>
                                                                         </SwiperSlide>
                                                                    ))}
                                                                </Swiper>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartupAgencyAbout;
