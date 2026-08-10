import TeamCard from "@/components/shared/components/TeamCard";
import { SmartLink } from "@/components/common";
import { team_members } from "@/data/team-data";
import { TeamItemDT } from "@/types";

const AboutUsTeam = () => {
    // Hakkımızda sayfasında gösterilecek 4 ekip üyesi (belirli sırayla)
    const aboutUsOrder = [7, 6, 8, 4]; // Volkan Kırtok, Sarp Kaan Keskin, Volkan Sinar, Miray Arda
    const teamItems = aboutUsOrder
        .map((id) => team_members.find((m) => m.id === id))
        .filter((m): m is TeamItemDT => !!m);

    return (
        <div className="px-team-area px-team-inner-ptb pt-130 px-fade-anim">
            <div className="container container-1550">
                {/* TOP SECTION */}
                <div className="px-team-top mb-60">
                    <div className="row align-items-end">

                        <div className="col-xl-8 col-lg-8 col-md-9">
                            <div className="px-team-title-box">
                                <h3 className="px-section-title ff-thunder fs-100 mb-0">
                                    ekibimizle tanışın
                                </h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-3">
                            <div className="px-team-link text-md-end pb-15">
                                <SmartLink
                                    className="px-about-4-link text-black px-doubble-effect d-inline-flex align-items-center"
                                    href="/ekibimiz"
                                >
                                    <span>Tümünü Gör</span>
                                    <i>
                                        {/* icons unchanged */}
                                        <svg width="10" height="10" viewBox="0 0 10 10">
                                            <path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentcolor" />
                                        </svg>
                                        <svg width="10" height="10" viewBox="0 0 10 10">
                                            <path d="M1 9L9 1M9 1H1M9 1V9" stroke="currentcolor" />
                                        </svg>
                                    </i>
                                </SmartLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TEAM GRID */}
                <div className="row">
                    {teamItems.map((member) => (
                        <TeamCard key={member.id} {...member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUsTeam;