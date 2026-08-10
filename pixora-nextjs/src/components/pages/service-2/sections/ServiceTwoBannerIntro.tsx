"use client";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";

interface ServiceTwoBannerIntroProps {
    title?: string;
    bigText?: string;
    hideButton?: boolean;
}

const ServiceTwoBannerIntro = ({ title, bigText, hideButton = false }: ServiceTwoBannerIntroProps) => {
    const isDarkTheme = useIsDarkRoute();
    // Apply dark background color for dark theme routes
    const sectionBackground = isDarkTheme ? "#000" : "";

    return (
        <div id="top" className="px-inner-service-ptb pt-180 pb-60" style={{ backgroundColor: sectionBackground }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="px-inner-service-video">
                            <video loop muted autoPlay playsInline>
                                <source src="https://html.aqlova.com/videos/pixora/step-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="px-inner-service-heading">
                            <h4 className="px-inner-service-title">{title || <>Doğru Ürünlerle <br /> Dijital Dünyada Öne Çıkın.</>}</h4>
                            {!hideButton && (
                                <div className="px-inner-service-btn">
                                    <SmartLink className="px-btn-slide" href="/projeler">Projeleri Keşfedin <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                            <path d="M11 11L6 6L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    </SmartLink>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {bigText && (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="px-inner-service-bottom text-center">
                                <h3 className="px-inner-service-big-text">
                                    {bigText}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceTwoBannerIntro;