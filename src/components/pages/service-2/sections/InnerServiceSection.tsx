import { innerServices } from "@/data/services-data";
import { getSubService, slugify } from "@/data/sub-services-data";
import InnerServiceItem from "../components/InnerServiceItem";
import Link from "next/link";

interface InnerServiceSectionProps {
    slug?: string;
    subSlug?: string;
}

const InnerServiceSection: React.FC<InnerServiceSectionProps> = ({ slug, subSlug }) => {
    const targetSubService = subSlug ? getSubService(slug || "", subSlug) : null;

    const displayServices = targetSubService
        ? [
              {
                  id: 1,
                  title: targetSubService.title,
                  descriptions: [
                      targetSubService.subtitle,
                      targetSubService.description,
                      targetSubService.longDescription,
                  ],
                  categories: targetSubService.features,
                  accordionItems: targetSubService.accordionItems,
                  images: targetSubService.images,
              },
          ]
        : slug
        ? innerServices.filter((s) => s.slug === slug)
        : innerServices;

    return (
        <div className="tp-inner-service-area px-inner-service-style pt-120 pb-120">
            <div className="container container-1830">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="inner-service-1-left mb-40 mb-lg-0">
                            <span>Hizmetlerimiz</span>
                            <ul>
                                {innerServices.map((item, index) => {
                                    const isActiveCategory = item.slug === slug;
                                    return (
                                        <li key={item.id} className="mb-4">
                                            <Link
                                                href={`/hizmetler/${item.slug}`}
                                                style={{
                                                    fontWeight: isActiveCategory ? "700" : "500",
                                                    color: isActiveCategory ? "var(--tp-common-px-orange)" : "inherit",
                                                    display: "block",
                                                    marginBottom: "8px",
                                                }}
                                            >
                                                {index + 1}. {item.title}
                                            </Link>

                                            <ul className="ms-3 style-none">
                                                {item.categories.map((cat) => {
                                                    const catSubSlug = slugify(cat);
                                                    const isSubActive = catSubSlug === subSlug;
                                                    return (
                                                        <li key={cat} className="mb-2" style={{ fontSize: "15px" }}>
                                                            <Link
                                                                href={`/hizmetler/${item.slug}/${catSubSlug}`}
                                                                style={{
                                                                    color: isSubActive ? "var(--tp-common-px-orange)" : "#6d6868",
                                                                    fontWeight: isSubActive ? "700" : "400",
                                                                }}
                                                            >
                                                                • {cat}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        {displayServices.map((service, index) => (
                            <InnerServiceItem
                                key={service.id}
                                id={service.id}
                                title={service.title}
                                descriptions={service.descriptions}
                                categories={service.categories}
                                accordionItems={"accordionItems" in service ? service.accordionItems : undefined}
                                images={service.images}
                                isLastItem={index === displayServices.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnerServiceSection;