import { TeamHeroSection, TeamMembersSection } from "@/components/pages/team/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ekibimiz | +90 Ventures Dijital Ürün Ekibi",
    description: "Strateji, tasarım, yazılım ve AI alanında uzman +90 Ventures ekibiyle tanışın.",
};
const page = () => {
    return (
        <main>
            <TeamHeroSection />
            <TeamMembersSection />
        </main>
    );
};

export default page;