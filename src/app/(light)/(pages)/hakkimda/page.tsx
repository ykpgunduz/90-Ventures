import { AboutMeAbout, AboutMeAward, AboutMeHero, AboutMeService, AboutMeSkill, AboutMeTextSlide } from "@/components/pages/about-me/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımda | +90 Ventures",
};
const page = () => {
    return (
        <main>
            <AboutMeHero />
            <AboutMeTextSlide/>
            <AboutMeAbout/>
            <AboutMeSkill/>
            <AboutMeService/>
            <AboutMeAward/>
        </main>
    );
};

export default page;