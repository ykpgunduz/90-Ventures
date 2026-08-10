"use client";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import Image from "next/image";

const brandLogos = [
    { img: "/assets/img/brand/clients/abdi-ibrahim.png", name: "Abdi İbrahim" },
    { img: "/assets/img/brand/clients/puttikao-health.jpeg", name: "Puttikao Health" },
    { img: "/assets/img/brand/clients/fokur-logo.png", name: "Fokur" },
    { img: "/assets/img/brand/clients/gent-logo.png", name: "Gent" },
    { img: "/assets/img/brand/clients/goddess-logo.png", name: "Goddess" },
    { img: "/assets/img/brand/clients/obur-logo.png", name: "Obur" },
];

const CreativeAgencyBrand = () => {
	const isDarkTheme = useIsDarkRoute();

	return (
		<div className="px-brand-area px-brand-style-5 pt-120 pb-120">
			<div className="container container-1550">
				<div className="row gx-0 align-items-stretch text-center">
					{brandLogos.map((brand, index) => (
						<div
							key={brand.img}
							className="col-xl-2 col-lg-4 col-md-6 col-sm-6"
						>
							<div
								className="px-brand-item"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									height: "100%",
									minHeight: "100px",
									padding: "20px 25px",
								}}
							>
								<Image
									width={200}
									height={60}
									src={brand.img}
									alt={brand.name}
									style={{
										width: "100%",
										height: "auto",
										maxWidth: "140px",
										maxHeight: "45px",
										objectFit: "contain",
									}}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CreativeAgencyBrand;