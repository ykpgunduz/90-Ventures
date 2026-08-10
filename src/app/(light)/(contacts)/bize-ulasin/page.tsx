
import { ContactArea, OfficeLocationsSection } from "@/components/contact/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bize Ulaşın | +90 Ventures",
};
const page = () => {
    return (
        <main>
            <ContactArea />
            <OfficeLocationsSection sectionBgColor="#F7F7F7"/>
        </main>
    );
};

export default page;