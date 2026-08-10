"use client";
import { BehanceIcon, CroseIcon, DribbleIcon, InstragramIcon, LinkedinIcon, YoutubeIcon } from "@/svg";
import useGlobalContext from "@/hooks/useContext";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import MobileMenus from "../layout/headers/subComponents/MobileMenus";

const PrimaryOffCanvas = () => {
    const { isMainSidebarOpen, toggleMainSidebar } = useGlobalContext();
    const pathname = usePathname();

    // Detect dark version route
    const isDark = pathname?.startsWith("/dark") ?? false;

    return (
        <>
            <div className={`tp-offcanvas-area ${isMainSidebarOpen ? "opened" : ""}`}>
                <div className={`tp-offcanvas-wrapper ${isDark ? "offcanvas-black-bg" : "offcanvas-white-bg"}`}>
                    <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
                        <div className="tp-offcanvas-logo">
                            <Link href="/">
                                <Image width={192} height={48} style={{ width: "auto", height: "48px", maxWidth: "210px" }} className="logo-1" src="/assets/img/logo/logo.png" alt="+90 Ventures Logo" />
                            </Link>
                        </div>
                        <div className="tp-offcanvas-close">
                            <button
                                type="button"
                                onClick={toggleMainSidebar}
                                className="tp-offcanvas-close-btn"
                                aria-label="Close sidebar"
                            >
                                <span aria-hidden="true">
                                    <CroseIcon />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-main">
                        <div className="tp-offcanvas-content d-none d-xl-block">
                            <h3 className="tp-offcanvas-title">Merhaba!</h3>
                            <p>Yenilikçi dijital çözümler ve kreatif projeler üretiyoruz.</p>
                        </div>
                        <div className="tp-offcanvas-menu d-xl-none">
                            <nav><MobileMenus /></nav>
                        </div>
                        <div className="tp-offcanvas-contact">
                            <h3 className="tp-offcanvas-title sm">İletişim Bilgileri</h3>
                            <ul>
                                <li><Link href="mailto:hello@90.ventures">hello@90.ventures</Link></li>
                                <li><Link href="https://www.google.com/maps?q=Ba%C4%9Fdat+Caddesi%2C+M%C3%BCcahit+Sokak%2C+Suadiye%2C+Kad%C4%B1k%C3%B6y%2FIstanbul" target="_blank">Bağdat Cad, Mücahit Sk. Ark399 Plz<br />Kadıköy / İstanbul</Link></li>
                            </ul>
                        </div>
                        <div className="tp-offcanvas-social">
                            <h3 className="tp-offcanvas-title sm">Bizi Takip Edin</h3>
                            <ul>
                                <li>
                                    <Link href="https://www.linkedin.com/company/plus90ventures" target="_blank" aria-label="LinkedIn"><LinkedinIcon /></Link>
                                </li>
                                {/* 
                                <li>
                                    <Link href="#"><InstragramIcon /></Link>
                                </li>
                                <li>
                                    <Link href="#"><DribbleIcon /></Link>
                                </li>
                                <li>
                                    <Link href="#"><BehanceIcon /></Link>
                                </li>
                                <li>
                                    <Link href="#"><YoutubeIcon /></Link>
                                </li>
                                */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* overlay */}
            <button
                type="button"
                onClick={toggleMainSidebar}
                className={`body-overlay ${isMainSidebarOpen ? "opened" : ""}`}
                aria-label="Close sidebar overlay"
            />
        </>
    );
};

export default PrimaryOffCanvas;