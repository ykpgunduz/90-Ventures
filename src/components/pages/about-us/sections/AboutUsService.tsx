import AboutServiceItem from "../components/AboutServiceItem";

const services = [
    {
        id: "01",
        title: "AI Dönüşümü",
        desc: "Mevcut ürünlere AI entegrasyonu ve sıfırdan AI destekli ürün geliştirme.",
    },
    {
        id: "02",
        title: "Mobil & Web Geliştirme",
        desc: "iOS, Android ve web için ölçeklenebilir, kullanıcı dostu uygulamalar.",
    },
    {
        id: "03",
        title: "Ürün Danışmanlığı",
        desc: "MVP'den ürün stratejisine, fikrinizi doğru yol haritasıyla hayata geçiriyoruz.",
    },
    {
        id: "04",
        title: "UI / UX Tasarımı",
        desc: "Güçlü, kullanıcı dostu tasarımları geliştirme süreciyle bütünleşik sunuyoruz.",
    },
];

const AboutUsService = () => {
    return (
        <div className="aus-service-area pt-80 px-fade-anim">
            <div className="container container-1550">
                <div className="row">

                    {/* Left Title */}
                    <div className="col-lg-4">
                        <div className="aus-service-subtitle-box">
                            <span className="px-section-subtitle">ÇÖZÜMLERİMİZ</span>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="col-lg-8">
                        <div className="aus-service-content-wrap">

                            {/* Header Row */}
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="aus-service-content">
                                        <label className="pl-20">Hizmet</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="aus-service-content">
                                        <label>Açıklama</label>
                                    </div>
                                </div>
                            </div>

                            {/* Service Items */}
                            {services.map((item) => (
                                <AboutServiceItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsService;