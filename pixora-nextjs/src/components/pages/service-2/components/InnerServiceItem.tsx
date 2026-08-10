"use client";
import { useState } from "react";
import ServiceFaqItem from "@/components/pages/service-1/components/ServiceFaqItem";
import { SmartLink } from "@/components/common";
import { TextArrowIcon } from "@/svg";
import { slugify, SubServiceAccordionItem } from "@/data/sub-services-data";
import Image from "next/image";

interface InnerServiceItemProps {
    id: number;
    title: string;
    descriptions: string[];
    categories: string[];
    accordionItems?: SubServiceAccordionItem[];
    images: string[];
    isLastItem?: boolean;
}

const getSlug = (title: string) => {
    if (title.includes("Temel")) return "temel-hizmetler";
    if (title.includes("Ürün")) return "urun-hizmetleri";
    if (title.includes("Destekleyici")) return "destekleyici-hizmetler";
    return title.toLowerCase().replace(/\s+/g, "-");
};

const InnerServiceItem = ({
    id,
    title,
    descriptions,
    categories,
    accordionItems,
    images,
    isLastItem = false,
}: InnerServiceItemProps) => {
    const [activeFaqId, setActiveFaqId] = useState<number>(1);

    return (
        <div
            id={getSlug(title)}
            className={`tp-inner-service-item ${!isLastItem ? "mb-200" : ""}`}
        >
            <div className="inner-service-1-right">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="inner-service-1-text">
                            <span>{title}</span>
                            {descriptions.map((description, index) => (
                                <p key={`desc-${index}`}>{description}</p>
                            ))}
                        </div>

                        {accordionItems && accordionItems.length > 0 ? (
                            <div className="px-inner-service-2-faq mt-40 mb-60">
                                <div className="px-service-accordion-wrap">
                                    <div className="accordion" id={`subServiceAccordion-${id}`}>
                                        {accordionItems.map((item) => (
                                            <ServiceFaqItem
                                                key={item.id}
                                                id={item.id}
                                                title={item.title}
                                                description={item.description}
                                                items={item.items}
                                                isActive={activeFaqId === item.id}
                                                onClick={() =>
                                                    setActiveFaqId(activeFaqId === item.id ? 0 : item.id)
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="inner-service-1-category">
                                {categories.map((category, index) => {
                                    const parentSlug = getSlug(title);
                                    const subSlug = slugify(category);
                                    return (
                                        <SmartLink
                                            key={`${category}-${index}`}
                                            href={`/hizmetler/${parentSlug}/${subSlug}`}
                                            className="inner-service-1-category-item d-flex justify-content-between align-items-center"
                                        >
                                            <span>{category}</span>
                                            <i>
                                                <TextArrowIcon />
                                            </i>
                                        </SmartLink>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>


        </div>
    );
};
export default InnerServiceItem;