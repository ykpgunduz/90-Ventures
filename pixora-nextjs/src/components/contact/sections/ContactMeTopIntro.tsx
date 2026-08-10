import Image from "next/image";

const ContactMeTopIntro = () => {
    return (
        <div className="in-team-hero-area px-contact-me-style pt-150 pb-100">
            <div className="container container-1550">
                <div className="row justify-content-center">
                    <div className="col-xl-9">
                        <div className="in-team-hero-content">
                            <span className="px-section-subtitle mb-30">İLETİŞİME GEÇİN</span>
                            <h2 className="in-team-hero-title">Fikrinizi <span>Birlikte</span> <br />
                                <Image width={140} height={140} style={{ borderRadius: "50%", objectFit: "cover", display: "inline-block", verticalAlign: "middle" }} src="/assets/img/logo/favicon.png" alt="+90 Ventures" /> Geliştirelim!</h2>
                            <p>
                                İletişime geçin! Formu doldurun, <br />
                                en kısa sürede sizinle bağlantıya kuralım.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactMeTopIntro;