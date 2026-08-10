import { DigitalStudioAbout, DigitalStudioAward, DigitalStudioContact, DigitalStudioHero, DigitalStudioProject, DigitalStudioService, DigitalStudioTextSlider,DigitalStudioInstagram } from "@/components/home/digital-studio/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dijital Stüdyo | +90 Ventures",
};
const page = () => {
    return (
        <main>
            <DigitalStudioHero />
            <DigitalStudioAbout />
            <DigitalStudioService />
            <DigitalStudioProject />
            <DigitalStudioTextSlider sectionSpacing="pt-0" />
            <DigitalStudioAward />
            <DigitalStudioContact />
            <DigitalStudioInstagram />
        </main>
    );
};

export default page;