import Link from "next/link";
import { slugify } from "@/data/sub-services-data";

interface ServiceFaqItemProps {
    id: number;
    title: string;
    description: string;
    items: string[];
    isActive: boolean;
    onClick: () => void;
}

const ServiceFaqItem = ({
    id,
    title,
    description,
    items,
    isActive,
    onClick,
}: ServiceFaqItemProps) => {
    const collapseId = `collapse-${id}`;

    return (
        <div className={`accordion-items ${isActive ? "faq-active" : ""}`}>
            <h2 className="accordion-header">
                <button
                    className={`accordion-buttons ${!isActive ? "collapsed" : ""}`}
                    onClick={onClick}
                    aria-expanded={isActive}
                    type="button"
                >
                    {title}
                    <span className="accordion-icon"></span>
                </button>
            </h2>

            <div
                id={collapseId}
                className={`accordion-body-wrapper ${isActive ? "open" : ""}`}
            >
                <div className="accordion-body">
                    <p>{description}</p>

                    <ul className="px-inner-service-2-list">
                        {items.map((item, index) => (
                            <li key={`${item}-${index}`}>{item}</li>
                        ))}
                    </ul>

                    <div className="mt-3">
                        <Link
                            href={`/hizmetler/destekleyici-hizmetler/${slugify(title)}`}
                            className="d-inline-flex align-items-center gap-2 text-decoration-underline fw-bold"
                            style={{ color: "var(--tp-common-px-orange)", fontSize: "15px" }}
                        >
                            Hizmet Detayını İnceleyin →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFaqItem;