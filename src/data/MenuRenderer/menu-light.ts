import { MenuItem } from "@/types/menu-dt";

export const lightMenu: MenuItem[] = [
  {
    id: 1,
    type: "dropdown",
    label: "Ana Sayfa",
    href: "/",
  },
  {
    id: 2,
    type: "dropdown",
    label: "Hizmetler",
    href: "/hizmetler",
    links: [
      { label: "Tüm Hizmetler", href: "/hizmetler" },
      { label: "Temel Hizmetler", href: "/hizmetler/temel-hizmetler" },
      { label: "Ürün Hizmetleri", href: "/hizmetler/urun-hizmetleri" },
    ],
  },
  {
    id: 3,
    type: "dropdown",
    label: "Kurumsal",
    href: "#",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Ekibimiz", href: "/ekibimiz" },
    ],
  },
  {
    id: 4,
    type: "dropdown",
    label: "Projeler",
    href: "/projeler",
  },
  {
    id: 5,
    type: "dropdown",
    label: "İletişim",
    isLastMenu: true,
    href: "/iletisim",
  },
];
