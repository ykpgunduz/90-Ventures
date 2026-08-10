"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";

const ServiceBanner = () => {
    const isDarkTheme = useIsDarkRoute();

    // Light theme background for service banner section
    const sectionBackground = isDarkTheme ? "" : "#ffffff";

    return (
        <div id="top" className="px-inner-service-2-ptb pt-200 pb-80" style={{ backgroundColor: sectionBackground }}>
            <div className="container container-1870">
                <div className="row align-items-end">
                    <div className="col-12">
                        <div className="px-inner-service-2-heading">
                            <h3 className="px-inner-service-2-title">
                                Doğru Ürünlerle <br /> <span>Dijital Dünyada Öne Çıkın</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;