"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import Image from "next/image";

const brandLogosDark = [
	"/assets/img/brand/clients/abdi-ibrahim.png",
	"/assets/img/brand/clients/abdi-ibrahim-otsuka.png",
	"/assets/img/brand/clients/puttikao-health.jpeg",
];
const brandLogosWhite = [
	"/assets/img/brand/clients/abdi-ibrahim.png",
	"/assets/img/brand/clients/abdi-ibrahim-otsuka.png",
	"/assets/img/brand/clients/puttikao-health.jpeg",
];

const CreativeAgencyBrand = () => {
	const isDarkTheme = useIsDarkRoute();
	const brands = isDarkTheme ? brandLogosWhite : brandLogosDark

	return (
		<div className="px-brand-area px-brand-style-5 pt-120 pb-120">
			<div className="container container-1550">
				<div className="row gx-0">
					{brands.map((img, index) => (
						<div
							key={img}
							className="col-xl-2 col-lg-4 col-md-6 col-sm-6"
						>
							<div className="px-brand-item">
								<Image className="img-fluid" width={160} height={50} style={{ width: "auto", height: "auto" }} src={img} alt={`brand-${index + 1}`} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CreativeAgencyBrand;