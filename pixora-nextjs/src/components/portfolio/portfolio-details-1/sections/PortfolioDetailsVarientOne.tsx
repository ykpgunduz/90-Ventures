"use client";
import PortfolioDetailsThumbTwo from "../components/PortfolioDetailsThumbTwo";
import PortfolioBrandOverview from "../components/PortfolioBrandOverview";
import PortfolioDetailsBanner from "../components/PortfolioDetailsBanner";
import PortfolioDetailsStep from "../components/PortfolioDetailsStep";
import PortfolioDetailsThumb from "../components/PortfolioDetailsThumb";
import PortfolioNavigation from "../components/PortfolioNavigation";
import { portfolioProjects } from "@/data/portfolio-projects";
import { IdProps } from "@/types/custom-dt";
import { useEffect } from "react";

const PortfolioDetailsVarientOne = ({ id }: IdProps) => {
    const portfolio = portfolioProjects.find((item) => item.slug === String(id) || item.id === Number(id)) || portfolioProjects[0];

     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="px-pd-2-ptb px-pd-style pt-200 pb-80">
                <div className="container container-1230">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/* Categories + Title */}
                            <div className="px-pd-2-top pb-70 text-center">
                                <div
                                    className="px-pd-2-categories mb-30 tp_fade_anim"
                                    data-delay=".3"
                                >
                                    {portfolio?.categories?.map((cat, i) => (
                                        <span key={`${cat}-${i}`}>{cat}</span>
                                    ))}
                                </div>

                                <h3 className="px-pd-2-title tp_fade_anim" data-delay=".5">
                                    {portfolio?.title}
                                </h3>
                            </div>
                            {/* Meta Info */}
                            <div
                                className="px-pd-2-bottom d-flex justify-content-between tp_fade_anim"
                                data-delay=".7"
                            >
                                <div className="px-pd-2-bottom-item text-center">
                                    <span>Müşteri</span>
                                    <h6>{portfolio?.client}</h6>
                                </div>
                                <div className="px-pd-2-bottom-item text-center">
                                    <span>Rol</span>
                                    <h6>{portfolio?.role}</h6>
                                </div>
                                <div className="px-pd-2-bottom-item text-center">
                                    <span>Süre</span>
                                    <h6>{portfolio?.duration}</h6>
                                </div>
                                <div className="px-pd-2-bottom-item text-center">
                                    <span>Geliştirici</span>
                                    <h6>{portfolio?.designer}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PortfolioDetailsBanner />
            <PortfolioBrandOverview portfolio={portfolio} />
            <PortfolioDetailsThumb />
            <PortfolioDetailsStep portfolio={portfolio} />
            <PortfolioDetailsThumbTwo />
            <PortfolioNavigation />
        </>
    );
};

export default PortfolioDetailsVarientOne;