import { TextArrowIcon } from "@/svg";
import Image from "next/image";
import SmartLink from "@/components/common/SmartLink";

const serviceData = [
    {
        id: 1,
        icon: "/assets/img/service/icon/icon-1.png",
        title: "AI Dönüşümü",
        desc: `Mevcut ürünlerinize yapay zekâ entegre ediyor, sıfırdan AI destekli dijital ürünler geliştiriyoruz.`,
        link: "/hizmetler/temel-hizmetler/ai-donusumu",
    },
    {
        id: 2,
        icon: "/assets/img/service/icon/icon-2.png",
        title: "Mobil Uygulama Geliştirme",
        desc: `iOS ve Android için native ve cross-platform mobil uygulamalar tasarlıyor, geliştiriyor ve yayınlıyoruz.`,
        link: "/hizmetler/temel-hizmetler/mobil-uygulama-gelistirme",
    },
    {
        id: 3,
        icon: "/assets/img/service/icon/icon-3.png",
        title: "Web Uygulaması Geliştirme",
        desc: `Modern, ölçeklenebilir ve hızlı web uygulamaları ile dijital ürünlerinizi hayata geçiriyoruz.`,
        link: "/hizmetler/temel-hizmetler/web-uygulamasi-gelistirme",
    },
    {
        id: 4,
        icon: "/assets/img/service/icon/icon-4.png",
        title: "UI / UX Tasarımı",
        desc: `Kullanıcı araştırmasından yüksek dönüşüm sağlayan arayüzlere kadar uçtan uca tasarım hizmeti sunuyoruz.`,
        link: "/hizmetler/temel-hizmetler/ui-ux-tasarimi",
    },
];

const ServiceOfferings = () => {
    return (
        <div id="temel-hizmetler" className="px-service-5-area pt-60">
            <div className="container container-1550">
                <div className="row">
                    {serviceData.map((item) => (
                        <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 d-flex align-items-stretch mb-25">
                            <div className="px-service-5-item w-100">
                                <div className="px-service-5-icon">
                                    <Image className="img-fluid w-auto h-auto" width={90} height={60} src={item.icon} alt="Service icon" />
                                </div>

                                <div className="px-service-5-content">
                                    <h4 className="px-service-5-title">
                                        <SmartLink className="px-line-lr" href={item.link}>
                                            {item.title}
                                        </SmartLink>
                                    </h4>

                                    <p>{item.desc}</p>
                                </div>

                                <div className="px-service-5-link">
                                    <SmartLink className="px-doubble-effect" href={item.link}>
                                        Detayları Gör
                                        <i>
                                            <TextArrowIcon />
                                            <TextArrowIcon />
                                        </i>
                                    </SmartLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceOfferings;