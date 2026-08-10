import { MenuItem } from "@/types/menu-dt";

export const darkMenu: MenuItem[] = [
  {
    id: 1,
    type: "dropdown",
    label: "Ana Sayfa",
    href: "/dark",
  },
  {
    id: 2,
    type: "dropdown",
    label: "Hizmetler",
    href: "/dark/hizmetler",
    links: [
      { label: "Tüm Hizmetler", href: "/dark/hizmetler" },
      { label: "Temel Hizmetler", href: "/dark/hizmetler/temel-hizmetler" },
      { label: "Ürün Hizmetleri", href: "/dark/hizmetler/urun-hizmetleri" },
    ],
  },
  {
    id: 3,
    type: "dropdown",
    label: "Kurumsal",
    href: "#",
    links: [
      { label: "Hakkımızda", href: "/dark/hakkimizda" },
      { label: "Ekibimiz", href: "/dark/ekibimiz" },
    ],
  },
  {
    id: 4,
    type: "dropdown",
    label: "Projeler",
    href: "/dark/projeler",
  },
  {
    id: 5,
    type: "dropdown",
    isLastMenu: true,
    label: "İletişim",
    href: "/dark/iletisim",
  },
];
