import { SmartLink } from "@/components/common";
import { TextArrowIcon } from "@/svg";

const ServiceAbout = () => {
    return (
        <div className="px-about-4-area px-about-5-style px-inner-service-2-style pt-120 pb-70">
            <div className="container container-1550">
                <div className="row">
                    <div className="col-xl-10">
                        <div className="px-about-4-title-box mb-55">
                            <h3 className="px-section-title ff-inter px-fade-anim">
                                FİKİRDEN BÜYÜMEYE, <br />
                                UÇTAN UCA DİJİTAL ÜRÜN <br />
                                GELİŞTİRME VE DÖNÜŞÜM <br />
                                ÇÖZÜMLERİ.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-xl-5 col-xl-5">
                        <div className="px-about-4-content">
                            <div className="px-fade-anim">
                                <p>
                                    <span>+90 Ventures olarak</span> AI destekli ürünlerden mobil ve web <br />
                                    uygulamalarına, MVP&apos;den büyüme danışmanlığına kadar <br />
                                    dijital ürününüzün her aşamasında yanınızdayız.
                                </p>
                            </div>
                            <div className="px-fade-anim">
                                <SmartLink className="px-about-4-link px-doubble-effect" href="/hakkimizda">
                                    <span>Daha Fazla Keşfet</span>
                                    <i>
                                        <TextArrowIcon />
                                        <TextArrowIcon />
                                    </i>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAbout;