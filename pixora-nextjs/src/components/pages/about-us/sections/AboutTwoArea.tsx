import { SmartLink } from "@/components/common";

const AboutTwoArea = () => {
    return (
        <div className="px-inner-about-1-style pt-120 pb-80">
            <div className="container container-1550">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="px-inner-about-1-top mb-70 px-fade-anim">
                            <p>
                                +90 Ventures olarak{" "}
                                <span>
                                    yaratıcı, yenilikçi ve size özel dijital ürün çözümleri sunuyoruz.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="px-inner-about-1-video">
                            <video loop muted autoPlay playsInline>
                                <source src="https://html.aqlova.com/videos/pixora/step-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="px-inner-about-1-content">
                            <div className="px-fade-anim">
                                <p className="mb-20">
                                    Yaklaşımımız basit: işlevsellik, hız ve netliğe
                                    odaklanarak her projenin gereksiz karmaşıklık olmadan
                                    net bir amaca hizmet etmesini sağlıyoruz.
                                </p>
                            </div>
                            <div className="px-fade-anim">
                                <p className="fw-400 mb-40">
                                    İhtiyaçlarınızı anlamak ve fikirlerinizi karmaşıklık olmadan
                                    hayata geçirmek yaklaşımımızın özü. Yaratıcı fikirleri kullanıcı
                                    dostu dijital çözümlere dönüştürmekten keyif alıyoruz. İster sade bir
                                    web sitesi, ister kullanıcı dostu bir uygulama olsun, kalıcı değer
                                    üreten ürünler tasarlamaya odaklanıyoruz.
                                </p>
                            </div>
                            <div className="px-fade-anim">
                                <SmartLink className="px-btn-black" href="/projeler">Projelerimiz</SmartLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTwoArea;