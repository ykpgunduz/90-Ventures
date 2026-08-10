import ContactUsForm from "../forms/ContactUsForm";
import Image from "next/image";

const ContactUsArea = () => {
    return (
        <div id="down" className="tp-contact-us-form-ptb pt-60 pb-120">
            <div className="container container-1750">
                <div className="tp-contact-us-form-wrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-contact-us-map p-relative">
                                <div className="tp-contact-map-icon-box">
                                    <div className="tp-contact-map-icon">
                                        <span><Image width={24} height={34} src="/assets/img/contact/map-icon.svg" alt="map icon" /></span>
                                    </div>
                                </div>
                                <iframe src="https://www.google.com/maps?q=Ba%C4%9Fdat%20Caddesi%2C%20M%C3%BCcahit%20Sokak%2C%20Suadiye%2C%20Kad%C4%B1k%C3%B6y%2FIstanbul&hl=tr&output=embed" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-contact-us-wrap">
                                <h4 className="tp-contact-us-title mb-55">Bize Mesaj Gönderin</h4>
                                <ContactUsForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsArea;