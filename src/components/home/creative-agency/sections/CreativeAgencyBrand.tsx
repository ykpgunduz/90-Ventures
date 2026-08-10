"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import Image from "next/image";

const brandLogosDark = [
    { img: "/assets/img/brand/clients/abdi-ibrahim.png", width: 270, height: 64 },
    { img: "/assets/img/brand/clients/puttikao-health.jpeg", width: 175, height: 70 },
    { img: "/assets/img/brand/clients/fokur-logo.png", width: 190, height: 55 },
    { img: "/assets/img/brand/clients/gent-logo.png", width: 160, height: 65 },
    { img: "/assets/img/brand/clients/goddess-logo.png", width: 230, height: 85 },
    { img: "/assets/img/brand/clients/obur-logo.png", width: 250, height: 75 },
];
const brandLogosWhite = [
    { img: "/assets/img/brand/clients/abdi-ibrahim.png", width: 270, height: 64 },
    { img: "/assets/img/brand/clients/puttikao-health.jpeg", width: 175, height: 70 },
    { img: "/assets/img/brand/clients/fokur-logo.png", width: 190, height: 55 },
    { img: "/assets/img/brand/clients/gent-logo.png", width: 160, height: 65 },
    { img: "/assets/img/brand/clients/goddess-logo.png", width: 230, height: 85 },
    { img: "/assets/img/brand/clients/obur-logo.png", width: 250, height: 75 },
];

const CreativeAgencyBrand = () => {
	const isDarkTheme = useIsDarkRoute();
	const brands = isDarkTheme ? brandLogosWhite : brandLogosDark

	return (
		<div className="px-brand-area px-brand-style-5 pt-120 pb-120">
			<div className="container container-1550">
				<div className="row gx-0 align-items-center text-center">
					{brands.map((brand, index) => (
						<div
							key={brand.img}
							className="col-xl-2 col-lg-4 col-md-6 col-sm-6"
						>
							<div className="px-brand-item" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80px", padding: "10px" }}>
								<Image className="img-fluid" width={brand.width} height={brand.height} style={{ width: "auto", height: "auto", maxWidth: `${brand.width}px`, maxHeight: `${brand.height}px`, objectFit: "contain" }} src={brand.img} alt={`brand-${index + 1}`} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CreativeAgencyBrand;