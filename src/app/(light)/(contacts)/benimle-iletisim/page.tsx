
import { ContactMeArea, ContactMeTopIntro } from "@/components/contact/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Benimle İletişime Geçin | +90 Ventures",
};
const page = () => {
    return (
        <main>
            <ContactMeTopIntro />
            <ContactMeArea/>
        </main>
    );
};

export default page;