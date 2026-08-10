"use client";
import { FooterSocialArrowIcon } from "@/svg/ArrowIcons";
import NiceSelect from "@/ui/NiceSelect";

const FooterContactForm = () => {
    return (
        <form method="POST">
            <div className="px-footer-3-input-box">
                <div className="row">

                    {/* Select */}
                    <div className="col-xl-4">
                        <div className="px-footer-3-select mb-10">
                            <NiceSelect
                                className="nice-select px-select current"
                                defaultCurrent={0}
                                options={[
                                    { value: "Ürün Hizmetleri", text: "Ürün Hizmetleri" },
                                    { value: "Temel Hizmetler", text: "Temel Hizmetler" },
                                    { value: "Destekleyici Hizmetler", text: "Destekleyici Hizmetler" },
                                    { value: "AI Dönüşümü", text: "AI Dönüşümü" },
                                    { value: "Diğer", text: "Diğer" }
                                ]}
                                onChange={() => { }}
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <div className="col-xl-4">
                        <div className="px-footer-3-input mb-15">
                            <input type="text" placeholder="Adınız Soyadınız" />
                        </div>
                    </div>{" "}

                    {/* Email */}
                    <div className="col-xl-4">
                        <div className="px-footer-3-input mb-15">
                            <input type="email" placeholder="E-posta adresiniz" />
                        </div>
                    </div>{" "}

                    {/* Message */}
                    <div className="col-xl-12">
                        <div className="px-footer-3-input mb-15 position-relative">
                            <input
                                type="text"
                                placeholder="Size nasıl yardımcı olabiliriz?"
                            />
                            <button
                                type="submit"
                                aria-label="Send contact message"    
                                className="px-footer-3-btn"
                            >
                                <span>
                                    <FooterSocialArrowIcon strokeColor="currentColor" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FooterContactForm;