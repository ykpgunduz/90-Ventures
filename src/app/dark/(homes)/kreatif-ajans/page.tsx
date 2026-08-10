import { CreativeAgencyAward, CreativeAgencyBrand, CreativeAgencyFunfact, CreativeAgencyHero, CreativeAgencyProject, CreativeAgencySocial, CreativeAgencyStep, CreativeAgencyTeam, CreativeAgencyTestimonial, CreativeAgencyAbout, CreativeAgencyService, CreativeAgencyTextSlider, CreativeAgencyCapsule } from "@/components/home/creative-agency/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kreatif Ajans | +90 Ventures",
};
const page = () => {
    return (
        <main>
            <CreativeAgencyHero />
            <CreativeAgencyTextSlider/>
            <CreativeAgencyAbout/>
            <CreativeAgencyService/>
            <CreativeAgencyCapsule/>
            <CreativeAgencyProject/>
            <CreativeAgencyFunfact/>
            <CreativeAgencyTestimonial/>
            <CreativeAgencyBrand/>
            <CreativeAgencyStep/>
            <CreativeAgencyTeam/>
            <CreativeAgencyAward/>
            <CreativeAgencySocial/>
        </main>
    );
};

export default page;