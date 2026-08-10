"use client";
import { SmartLink } from "@/components/common";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { footerColumns, socialLinks } from "@/data/footer-data";
import Link from "next/link";

interface footerPropsDt {
    sectionBgClass?: string;
    copyrightClassName?: string;
}

const MainFooter: React.FC<footerPropsDt> = ({ sectionBgClass, copyrightClassName = "" }) => {
    const currentYear = new Date().getFullYear();
    const isDarkTheme = useIsDarkRoute();

    const footerBackground = sectionBgClass || (isDarkTheme ? "#0A0A0A" : "#f7f7f7");

    return (
        <footer>
            <div className="design-footer-area pb-30" style={{ backgroundColor: footerBackground }}>
                <div className="container container-1550">
                    <div className="design-footer-bg pt-100 pb-20">
                        <div className="container container-1830">
                            {/* TOP HERO CALL TO ACTION (Footer B Layout) */}
                            <div className="design-footer-top-wrap pb-50 mb-50 border-bottom-1" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                                <div className="row align-items-end">
                                    <div className="col-lg-8">
                                        <div className="design-footer-top-text mb-20">
                                            <h4 className="px-section-title ff-thunder fs-100 mb-0">
                                                BİRLİKTE SES GETİREN <br /> İŞLER YAPALIM
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="design-footer-top-btn text-start text-lg-end mb-20">
                                            <SmartLink className="px-btn-black hover-orange-bg" href="/iletisim">
                                                İletişime Geçin
                                            </SmartLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 4-COLUMN LINKS BLOCK */}
                            <div className="design-footer-middle pb-40">
                                <div className="row g-4">
                                    {footerColumns.map((col) => (
                                        <div key={col.title} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                            <div className="design-footer-widget">
                                                <h4 className="design-footer-widget-title sm mb-20" style={{ fontSize: "18px", fontWeight: "700" }}>
                                                    {col.title}
                                                </h4>
                                                <ul className="list-unstyled p-0 m-0" style={{ listStyle: "none" }}>
                                                    {col.links.map((link) => (
                                                        <li key={link.label} className="mb-2">
                                                            <Link 
                                                                href={link.href}
                                                                className="px-line-lr"
                                                                style={{ fontSize: "15px", opacity: 0.85 }}
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CONTACT & SOCIAL BAR */}
                            <div className="design-footer-contact-bar pt-25 pb-25 mb-30 border-top-1 border-bottom-1" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center gap-3">
                                            <span style={{ fontSize: "15px", opacity: 0.7 }}>E-posta:</span>
                                            <Link className="px-line-lr fw-bold" href="mailto:hello@90.ventures">
                                                hello@90.ventures
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-start text-md-end mt-3 mt-md-0">
                                        <div className="d-inline-flex align-items-center gap-3">
                                            {socialLinks.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="d-inline-flex align-items-center justify-content-center"
                                                    style={{ 
                                                        width: "48px", 
                                                        height: "48px", 
                                                        borderRadius: "50%", 
                                                        background: "rgba(255,255,255,0.08)",
                                                        transition: "all 0.3s ease" 
                                                    }}
                                                >
                                                    {item.icon}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* COPYRIGHT */}
                            <div className={`design-copyright-area pt-10 ${copyrightClassName}`}>
                                <div className="row align-items-center">
                                    <div className="col-12">
                                        <div className="design-copyright-text text-center text-md-start mb-10">
                                            <p className="m-0" style={{ fontSize: "14px", opacity: 0.7 }}>
                                                © {currentYear} +90 Ventures. Tüm hakları saklıdır.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
