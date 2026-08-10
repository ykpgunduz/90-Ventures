
import { ContactUsAbout, ContactUsArea, ContactUsTopIntro } from "@/components/contact/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "İletişim | Projenizi Konuşalım | +90 Ventures",
    description: "Dijital ürün projeniz için +90 Ventures ekibiyle iletişime geçin, ücretsiz ön görüşme talep edin.",
};
const page = () => {
    return (
        <main>
            <ContactUsTopIntro />
            <ContactUsArea/>
            <ContactUsAbout/>
        </main>
    );
};

export default page;