interface OffcanvasMenuItem {
    id: number;
    title: string;
    link: string;
    submenu?: OffcanvasMenuItem[];
}

export const offcanvasMenu: OffcanvasMenuItem[] = [
    {
        id: 1,
        title: "Ana Sayfa",
        link: "/",
    },
    {
        id: 2,
        title: "Hizmetler",
        link: "/hizmetler",
        submenu: [
            {
                id: 20,
                title: "Tüm Hizmetler",
                link: "/hizmetler",
            },
            {
                id: 21,
                title: "Temel Hizmetler",
                link: "/hizmetler/temel-hizmetler",
            },
            {
                id: 22,
                title: "Ürün Hizmetleri",
                link: "/hizmetler/urun-hizmetleri",
            },
        ],
    },
    {
        id: 3,
        title: "Kurumsal",
        link: "#",
        submenu: [
            {
                id: 31,
                title: "Hakkımızda",
                link: "/hakkimizda",
            },
            {
                id: 32,
                title: "Ekibimiz",
                link: "/ekibimiz",
            },
        ],
    },
    {
        id: 4,
        title: "Projeler",
        link: "/projeler",
    },
    {
        id: 5,
        title: "İletişim",
        link: "/iletisim",
    },
];