interface toolboxDt {
    id: string;
    label: string;
    width?: number;
    height?: number;
    bg?: string
}

export const SERVICE_CAPSULE_ITEMS : toolboxDt[] = [
    {id: "mvp-1", label: "MVP Geliştirme", width: 240, height: 240, bg: "#FFBAE3" },
    {id: "strateji-2", label: "Ürün Stratejisi", width: 230, height: 230, bg: "#FFCF68" },
    {id: "saas-3", label: "SaaS Platformu", width: 230, height: 230, bg: "#A9E6FF" },
    {id: "yazilim-4", label: "Özel Yazılım", width: 220, height: 220, bg: "#FFCF68" },
    {id: "buyume-5", label: "Büyüme Danışmanlığı", bg: "#FFBAE3" },
    {id: "danismanlik-6", label: "Teknoloji Danışmanlığı", bg: "#A9E6FF" },
    {id: "dijital-7", label: "Dijital Dönüşüm", bg: "#A9E6FF" },
    {id: "analiz-8", label: "Pazar Analizi", bg: "#FFCF68"},
];