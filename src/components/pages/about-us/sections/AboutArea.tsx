import { SmartLink } from "@/components/common";

const AboutArea = () => {
    return (
        <div className="px-about-3-area px-inner-about-style pt-120 pb-150">
            <div className="container container-1750">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="px-about-3-text text-center">
                            <h2 className="px-about-3-bigtext">+90 Ventures Hakkında</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container-1550">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="px-about-3-subtitle-box">
                            <span className="px-section-subtitle">Hakkımızda</span>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="px-about-3-content">
                            <p>
                                +90 Ventures, İstanbul merkezli <br />
                                bir dijital ürün stüdyosu. <br />
                                Bir <span>danışman</span> gibi düşünüyor, <span>bir mühendislik</span> <br />
                                ekibi gibi üretiyoruz.
                            </p>
                            <SmartLink className="px-btn-black" href="/hakkimizda">
                                Daha Fazla Bilgi
                            </SmartLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutArea;