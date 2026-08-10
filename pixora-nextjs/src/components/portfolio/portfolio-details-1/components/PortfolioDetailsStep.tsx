import { PortfolioProjectDT } from "@/types/portfolio-dt";

interface Props {
    portfolio?: PortfolioProjectDT;
}

const PortfolioDetailsStep = ({ portfolio }: Props) => {
    const steps = portfolio?.steps;

    if (!steps || steps.length === 0) return null;

    return (
        <div className="px-pd-2-step-ptb px-pd-style pb-70">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="px-pd-2-step-heading pb-60 tp_fade_anim"
                            data-delay=".3"
                        >
                            <h3 className="px-pd-2-step-title">
                                Şık ve işlevsel dijital ürünlere <br />
                                duyduğumuz sevgi ve size destek <br />
                                olmaktan duyduğumuz gururla.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {steps.map((step) => (
                        <div className="col-lg-4 col-md-6" key={step.title}>
                            <div className="px-pd-2-step-item mb-30">
                                <h4 className="px-pd-2-step-item-title">{step.title}</h4>
                                <span>{step.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsStep;