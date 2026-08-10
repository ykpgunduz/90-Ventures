import Image from "next/image";

const ServiceTwoBanner = () => {
    return (
        <div className="studio-hero-banner-area pb-100">
            <div className="studio-hero-banner fix mb-20">
                <Image className="w-100" data-speed="0.1" src="/assets/img/banner/space-banner.png" alt="Space galaxy banner" width={1920} height={903} style={{ objectFit: "cover", width: "100%", height: "auto" }} />
            </div>
            <div className="px-text-inner-studio">
                <div className="container container-1830">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="studio-hero-banner-text d-flex justify-content-start justify-content-md-between align-items-center">
                                <span>Girişimlerin</span>
                                <span>ölçeklenmesine</span>
                                <span>ve</span>
                                <span>büyümesine</span>
                                <span>yardımcı</span>
                                <span>olan</span>
                                <span>yenilik</span>
                                <span>merkezi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceTwoBanner;