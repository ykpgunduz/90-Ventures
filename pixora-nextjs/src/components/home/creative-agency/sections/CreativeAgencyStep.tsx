"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import CAStepItem from "../components/CAStepItem";

const STEPS = [
    {
        number: "01",
        title: "Keşfet \n Ve Tanımla",
        bg: "#FFCF68",
        desc: `Vizyonunuzu ve hedeflerinizi 
derinlemesine dinliyor, 
ihtiyaçlarınızı analiz ediyoruz.`,
    },
    {
        number: "02",
        title: "Strateji \n Ve Mimari",
        bg: "#FF6E4D",
        desc: `Verileri analiz edip 
net ve ölçeklenebilir 
ürün yol haritasını çiziyoruz.`,
    },
    {
        number: "03",
        title: "Tasarım Ve Geliştirme",
        bg: "#FFBAE3",
        desc: `Kullanıcı deneyimini tasarlıyor 
ve mükemmel bir ürün 
için geliştiriyoruz.`,
    },
    {
        number: "04",
        title: "Teslimat \n Ve Büyüme",
        bg: "#A9E6FF",
        desc: `Ürününüzü yayınlıyor, 
büyüme ve bakım 
desteği sağlıyoruz.`,
    },
];

const CreativeAgencyStep = ({ sectionSpacing = "" }) => {
    const isDarkTheme = useIsDarkRoute();
    const sectionBackground = isDarkTheme ? "#1C1D20" : "#F7F7F7";

    return (
        <div className={`px-step-area p-relative ${sectionSpacing}`}>

            {/* TOP SECTION */}
            <div
                className="px-step-item d-flex flex-column justify-content-end p-relative"
                style={{ backgroundColor: sectionBackground }}
            >
                <div className="px-step-video">
                    <video loop muted autoPlay playsInline>
                        <source
                            src="https://html.aqlova.com/videos/pixora/step-video.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="px-step-num-box">
                    <div className="px-step-num">
                        <span className="p-relative">Süreç</span>
                    </div>
                </div>

                <div className="container-fluid">
                    <div
                        className="px-step-bottom z-index-10"
                        style={{ backgroundColor: sectionBackground }}
                    >
                        <div className="row">
                            <div className="col-xl-8 col-lg-6">
                                <div className="px-step-bottom-text">
                                    <span>Nasıl Çalışıyoruz</span>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="px-step-bottom-text">
                                    <span className="text-2">
                                        Girişimler için benzersiz dijital çözümler üretiyoruz
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* STEP CARDS */}
            <div className="px-step-card-wrap mr-60">
                <div className="container-fluid">
                    <div className="row">
                        {STEPS.map((step) => (
                            <CAStepItem key={step.number}  {...step} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAgencyStep;