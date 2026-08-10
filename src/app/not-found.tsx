import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Sayfa Bulunamadı - 404 | +90 Ventures",
};

const page = () => {
    return (
        <div className="tp-error-area pt-190">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-error-wrapper text-center">
                            <Image className="img-fluid" width={866} height={340} src="/assets/img/error/error.png" alt="error image" />
                            <div className="tp-error-content">
                                <h4 className="tp-error-title-sm mt-30">Bir şeyler yanlış gitti...</h4>
                                <p>Üzgünüz, aradığınız sayfayı bulamadık.</p>
                                <Link className="tp-btn" href="/">Ana Sayfaya Dön</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;