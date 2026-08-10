
import { LinkedinIcon } from "@/svg/SocialIcons";
import { TeamItemDT } from "@/types";
import Image from "next/image";
import Link from "next/link";

const TeamCard: React.FC<TeamItemDT> = ({ id, image, name, role, bio, social_links, animation }) => {
    const defaultBio = `${name}, +90 Ventures bünyesinde ${role} alanında çalışmakta olup yeni nesil dijital ürünlerin strateji ve geliştirme süreçlerine liderlik etmektedir.`;
    const linkedinUrl = social_links?.linkedin || "#";

    return (
        <div className={`col-xxl-3 col-lg-4 col-md-6 col-sm-6 ${animation}`}>
            <div className="px-team-item mb-30">
                <div className="px-team-thumb p-relative">
                    <div className="ripple-image">
                        <Image className="img-fluid w-100" width={362} height={420} src={image} alt={name} style={{ objectFit: "cover", aspectRatio: "362 / 420" }} />
                        
                        {/* DARK OVERLAY ON HOVER */}
                        <div className="px-team-overlay">
                            <div className="px-team-overlay-inner text-start">
                                <span className="px-team-overlay-role">{role}</span>
                                <h5 className="px-team-overlay-name">{name}</h5>
                                <p className="px-team-overlay-bio">{bio || defaultBio}</p>
                                {linkedinUrl && (
                                    <Link
                                        href={linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-team-overlay-linkedin d-inline-flex align-items-center gap-2 mt-2"
                                    >
                                        <LinkedinIcon />
                                        <span>LinkedIn</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-team-content">
                    <h4 className="px-team-title">
                        <span className="px-line-lr">{name}</span>
                    </h4>
                    <span>{role}</span>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;