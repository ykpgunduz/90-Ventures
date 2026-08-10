import { ServiceItemDT } from "@/types/service-dt";

export const servicesData: ServiceItemDT[] = [
    {
        id: 1,
        keyValue: "01",
        title: "AI Dönüşümü",
        image: "/assets/img/service/ai-donusum.jpg",
        description: "Mevcut ürünlerinize yapay zekâ entegre ediyor, sıfırdan AI destekli dijital ürünler geliştiriyoruz.",
        categories: [
            "Mevcut Ürünlere AI Entegrasyonu",
            "Sıfırdan AI Ürün Geliştirme",
            "LLM ve RAG Mimarileri",
            "4+",
        ],
    },
    {
        id: 2,
        keyValue: "02",
        title: "Mobil Uygulama Geliştirme",
        image: "/assets/img/service/mobile-gelistirme.jpg",
        description: "iOS ve Android için native ve cross-platform mobil uygulamalar tasarlıyor, geliştiriyor ve yayınlıyoruz.",
        categories: [
            "iOS & Android Native Geliştirme",
            "Cross-Platform Çözümler",
            "App Store & Play Store Yayınlama",
            "4+",
        ],
    },
    {
        id: 3,
        keyValue: "03",
        title: "Web Uygulaması Geliştirme",
        image: "/assets/img/service/web-gelistirme.jpg",
        description: "Modern, ölçeklenebilir ve hızlı web uygulamaları ile dijital ürünlerinizi hayata geçiriyoruz.",
        categories: [
            "Modern Frontend Mimarisi",
            "Ölçeklenebilir Backend & API'ler",
            "Bulut Altyapısı & DevOps",
            "4+",
        ],
    },
    {
        id: 4,
        keyValue: "04",
        title: "UI / UX Tasarımı",
        image: "/assets/img/service/ui-ux.jpg",
        description: "Kullanıcı araştırmasından yüksek dönüşüm sağlayan arayüzlere kadar uçtan uca tasarım hizmeti sunuyoruz.",
        categories: [
            "Kullanıcı Araştırması & Analizi",
            "Wireframe & Prototipleme",
            "Arayüz (UI) Tasarımı",
            "4+",
        ],
    },

    //design studio service data start
    {
        id: 5,
        title: "Branding",
        image: "/assets/img/service/service-2-1.jpg",
        description: `We create impactful brand
identities that differentiate your
business and connect with
your audience.`,
        active: false,
    },
    {
        id: 6,
        title: "Development",
        image: "/assets/img/project/project-1.jpg",
        description: `We create impactful brand
identities that differentiate your
business and connect with
your audience.`,
        active: true,
    },
    {
        id: 7,
        title: "Design support",
        image: "/assets/img/project/project-2.jpg",
        description: `We create impactful brand
identities that differentiate your
business and connect with
your audience.`,
        active: false,
    },
    {
        id: 8,
        title: "Websites",
        image: "/assets/img/project/project-3.jpg",
        description: `We create impactful brand
identities that differentiate your
business and connect with
your audience.`,
        active: false,
    },
    //design studio service data end
    //digital studio service data start
    {
        id: 9,
        title: "Development",
        image: "/assets/img/update/service/service-3/st-service-1.jpg",
        description: "Building scalable, high-performance web and mobile applications.",
        categories: [
            "UX Design",
            "User Testing",
            "Product Prototype",
            "Mobile UI",
            "Web app design",
        ],
    },
    {
        id: 10,
        title: "Marketing",
        image: "/assets/img/update/service/service-3/st-service-2.jpg",
        description: "Driving growth through strategic digital marketing and branding.",
        categories: [
            "UX Design",
            "User Testing",
            "Product Prototype",
            "Mobile UI",
            "Web app design",
        ],
    },
    {
        id: 11,
        title: "Graphics",
        image: "/assets/img/update/service/service-3/st-service-3.jpg",
        description: "Creating visually compelling designs that elevate brand identity.",
        categories: [
            "UX Design",
            "User Testing",
            "Product Prototype",
            "Mobile UI",
            "Web app design",
        ],
    },
    {
        id: 12,
        title: "Technology",
        image: "/assets/img/update/service/service-3/st-service-4.jpg",
        description: "Leveraging modern technologies to deliver innovative solutions.",
        categories: [
            "UX Design",
            "User Testing",
            "Product Prototype",
            "Mobile UI",
            "Web app design",
        ],
    },
    //digital studio service data end
];

// service-2 inner service data start
export const servicesNavItems = [
    "Temel Hizmetler",
    "Ürün Hizmetleri",
];

export const innerServices = [
    {
        id: 1,
        slug: "temel-hizmetler",
        title: "Temel Hizmetler",
        descriptions: [
            "Ana gelir kalemlerimiz — odaklandığımız çekirdek yetkinlikler.",
            "AI dönüşümünden mobil ve web uygulamalarına, kullanıcı odaklı arayüz tasarımlarına kadar işletmenize değer katan temel dijital çözümler sunuyoruz."
        ],
        categories: [
            "AI Dönüşümü",
            "Mobil Uygulama Geliştirme",
            "Web Uygulaması Geliştirme",
            "UI / UX Tasarımı",
        ],
        images: [
            "/assets/img/service/inner-service/service-1.jpg",
            "/assets/img/service/inner-service/service-2.jpg",
        ],
    },
    {
        id: 2,
        slug: "urun-hizmetleri",
        title: "Ürün Hizmetleri",
        descriptions: [
            "Fikirden büyümeye, ürününüzü uçtan uca teslim ediyoruz.",
            "Pazara hızlı giriş yapmak isteyen girişimler için MVP geliştirmeden SaaS platformlarına ve büyüme danışmanlığına kadar stratejik çözümler."
        ],
        categories: [
            "MVP Geliştirme",
            "Ürün Stratejisi ve Danışmanlığı",
            "SaaS Platformu Geliştirme",
            "Özel Yazılım Geliştirme",
            "Uygulama Büyüme Danışmanlığı",
        ],
        images: [
            "/assets/img/service/inner-service/service-3.jpg",
            "/assets/img/service/inner-service/service-4.jpg",
        ],
    },
    {
        id: 3,
        slug: "destekleyici-hizmetler",
        title: "Destekleyici Hizmetler",
        descriptions: [
            "Sürdürülebilirlik, yüksek performans ve sürekli gelişim için tamamlayıcı çözümler.",
            "Ürününüzün ömrü boyunca yüksek performans, teknik mükemmellik ve 7/24 kesintisiz destek sunuyoruz."
        ],
        categories: [
            "Özel Geliştirme Ekipleri",
            "Yeni Özellik Geliştirme & Entegrasyon",
            "Uygulama Bakım, Destek ve Güvenlik",
            "Kod İnceleme, Denetim ve Optimizasyon",
        ],
        images: [
            "/assets/img/service/inner-service/service-2.jpg",
            "/assets/img/service/inner-service/service-3.jpg",
        ],
    },
];