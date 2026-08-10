import { PortfolioProjectDT } from "@/types/portfolio-dt";

interface Props {
    portfolio?: PortfolioProjectDT;
}

const PortfolioBrandOverview = ({ portfolio }: Props) => {
    const overview = portfolio?.overview;

    if (!overview) return null;

    return (
        <div className="px-pd-2-overview-ptb px-pd-style pb-70">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="px-pd-2-overview-heading tp_fade_anim" data-delay=".3">
                            <h3 className="px-pd-2-overview-title">Proje Özeti</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="px-pd-2-overview-wrap">
                            {overview.paragraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                            {overview.bullets && overview.bullets.length > 0 && (
                                <ul>
                                    {overview.bullets.map((bullet, i) => (
                                        <li key={i}>{bullet}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioBrandOverview;