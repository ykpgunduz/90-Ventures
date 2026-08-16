export interface SubServiceAccordionItem {
    id: number;
    title: string;
    description: string;
    items: string[];
}

export interface SubService {
    parentSlug: string;
    parentTitle: string;
    slug: string;
    title: string;
    metaTitle?: string;
    subtitle: string;
    description: string;
    longDescription: string;
    features: string[];
    accordionItems: SubServiceAccordionItem[];
    processSteps: { title: string; desc: string }[];
    heroImage: string;
    images: string[];
}

export const slugify = (text: string): string => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ı/g, "i")
        .replace(/i̇/g, "i")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
};

export const subServicesData: SubService[] = [
    // TEMEL HİZMETLER
    {
        parentSlug: "temel-hizmetler",
        parentTitle: "Temel Hizmetler",
        slug: "ai-donusumu",
        title: "AI Dönüşümü",
        metaTitle: "AI Dönüşümü Hizmetleri | +90 Ventures",
        subtitle: "Yapay Zeka Yetenekleri ile İşletmenizi Geleceğe Taşıyın",
        description: "LLM, RAG ve akıllı chatbot çözümleriyle işletmenize özel AI dönüşümü gerçekleştiriyoruz.",
        longDescription: "İşletmenizin mevcut verilerini ve operasyonel süreçlerini analiz ederek özel yapay zeka çözümleri entegre ediyoruz. LLM modellerinden doğal dil işlemeye, veri tahminleme modellerinden akıllı iş akışlarına kadar uçtan uca AI dönüşümü gerçekleştiriyoruz.",
        features: [
            "Özel LLM ve GPT Model Entegrasyonları",
            "Otomatik Veri Analitiği ve Tahminleme Sistemleri",
            "Akıllı Müşteri Asistanı ve Chatbot Çözümleri",
            "İş Akışı ve Operasyonel Süreç Otomasyonu",
        ],
        accordionItems: [
            {
                id: 1,
                title: "Özel LLM ve GPT Model Entegrasyonları",
                description: "İşletmenizin özel veri havuzuyla eğitilmiş ya da RAG (Retrieval-Augmented Generation) altyapısıyla güçlendirilmiş güvenli LLM çözümleri sunuyoruz.",
                items: [
                    "OpenAI, Anthropic & Llama 3 entegrasyonu",
                    "Özel RAG ve Vektör Veritabanı Mimarisi",
                    "Kurumsal Veri Gizliliği Güvencesi",
                ],
            },
            {
                id: 2,
                title: "Otomatik Veri Analitiği ve Tahminleme Sistemleri",
                description: "Geçmiş verilerinizi işleyerek gelecekteki eğilimleri, müşteri davranışlarını ve pazar fırsatlarını yüksek doğrulukla tahmin edin.",
                items: [
                    "Zaman Serisi Analizleri",
                    "Müşteri Kayıp (Churn) Tahmini",
                    "Otomatik Raporlama ve Görselleştirme",
                ],
            },
            {
                id: 3,
                title: "Akıllı Müşteri Asistanı ve Chatbot Çözümleri",
                description: "7/24 kesintisiz hizmet veren, doğal dil anlama yeteneğine sahip akıllı müşteri temsilcileri kurguluyoruz.",
                items: [
                    "Çoklu Kanal (Web, WhatsApp, Mobil) Desteği",
                    "Canlı Destek Sistemiyle Tam Entegrasyon",
                    "Kişiselleştirilmiş Yanıt Mekanizmaları",
                ],
            },
            {
                id: 4,
                title: "İş Akışı ve Operasyonel Süreç Otomasyonu",
                description: "Tekrarlayan operasyonel işleri yapay zeka ajanları ile otomatize ederek ekibinizin verimliliğini artırıyoruz.",
                items: [
                    "Doküman ve Fatura Analizi",
                    "Otomatik İçerik ve E-posta Üretimi",
                    "Süreç Verimlilik Metrikleri",
                ],
            },
        ],
        processSteps: [
            { title: "Veri ve İhtiyaç Analizi", desc: "Mevcut altyapınızı ve AI potansiyelinizi değerlendiriyoruz." },
            { title: "Model ve Mimari Tasarımı", desc: "İş hedeflerinize uygun en verimli yapay zeka modelini seçip tasarlıyoruz." },
            { title: "Entegrasyon ve Test", desc: "AI sistemlerini güvenli şekilde mevcut yazılımlarınıza entegre ediyoruz." },
            { title: "Sürekli Öğrenme ve Optimizasyon", desc: "Sistemin canlıdaki performansını takip edip modelleri güncelliyoruz." },
        ],
        heroImage: "/assets/img/service/ai-donusumu.jpg",
        images: [
            "/assets/img/service/inner-service/service-1.jpg",
            "/assets/img/service/inner-service/service-2.jpg",
        ],
    },
    {
        parentSlug: "temel-hizmetler",
        parentTitle: "Temel Hizmetler",
        slug: "mobil-uygulama-gelistirme",
        title: "Mobil Uygulama Geliştirme",
        metaTitle: "Mobil Uygulama Geliştirme (iOS & Android) | +90 Ventures",
        subtitle: "iOS ve Android Platformlarında Yüksek Performanslı Deneyimler",
        description: "iOS ve Android için native ve cross-platform, kullanıcı dostu mobil uygulamalar geliştiriyoruz.",
        longDescription: "Mobil öncelikli dünyada hedef kitlenize doğrudan ulaşmanızı sağlayan ölçeklenebilir ve yüksek performanslı mobil uygulamalar üretiyoruz. Native ve Cross-platform (React Native / Flutter) teknolojileriyle en pürüzsüz deneyimi sunuyoruz.",
        features: [
            "iOS & Android Native / Cross-Platform Geliştirme",
            "Yüksek Performanslı ve Akıcı Arayüz Mimarisi",
            "Güvenli RESTful & GraphQL API Entegrasyonları",
            "Anlık Bildirim (Push Notification) & Analiz Altyapısı",
        ],
        accordionItems: [
            {
                id: 1,
                title: "iOS & Android Native / Cross-Platform Geliştirme",
                description: "React Native, Flutter, Swift ve Kotlin ile her platformun standartlarına uygun üst düzey mobil uygulamalar inşa ediyoruz.",
                items: [
                    "Swift & Kotlin ile Native Geliştirme",
                    "React Native & Flutter Cross-Platform",
                    "Tek Kod Tabanı ile Hızlı Pazara Giriş",
                ],
            },
            {
                id: 2,
                title: "Yüksek Performanslı ve Akıcı Arayüz Mimarisi",
                description: "Cihaz kaynaklarını en verimli kullanan, 60 FPS akıcılıkta animasyonlar ve sezgisel kullanıcı deneyimleri sunuyoruz.",
                items: [
                    "Düşük Pil ve RAM Tüketimi",
                    "Offline-First Çalışma Desteği",
                    "Ergonomik Dokunmatik Navigasyon",
                ],
            },
            {
                id: 3,
                title: "Güvenli RESTful & GraphQL API Entegrasyonları",
                description: "Uygulamanızın arka plan servisleriyle şifreli ve hızlı iletişim kurmasını sağlayan mimariler tasarlıyoruz.",
                items: [
                    "JWT & OAuth2 Güvenli Kimlik Doğrulama",
                    "WebSocket ile Real-time Veri Akışı",
                    "Önbellekleme (Caching) ve Hızlandırma",
                ],
            },
            {
                id: 4,
                title: "Anlık Bildirim (Push Notification) & Analiz Altyapısı",
                description: "Kullanıcı etkileşimini zirvede tutan bildirim kurguları ve kullanım verilerini izleyen analitik entegrasyonları yapıyoruz.",
                items: [
                    "Firebase & OneSignal Bildirim Kurulumu",
                    "Segmentasyon ve Hedefli Bildirimler",
                    "Kullanıcı Yolculuğu Analizi",
                ],
            },
        ],
        processSteps: [
            { title: "UX ve Ekran Tasarımları", desc: "Kullanıcı odaklı mobil arayüzler tasarlıyoruz." },
            { title: "Mobil Kodlama", desc: "En güncel teknolojilerle mobil uygulamayı geliştiriyoruz." },
            { title: "Test ve Performans", desc: "Cihaz çeşitliliğine uygun testler ve optimizasyon yapıyoruz." },
            { title: "Mağaza Yayını", desc: "Uygulamanızı mağazalarda sorunsuz bir şekilde canlıya alıyoruz." },
        ],
        heroImage: "/assets/img/service/mobile-gelistirme.jpg",
        images: [
            "/assets/img/service/inner-service/service-2.jpg",
            "/assets/img/service/inner-service/service-3.jpg",
        ],
    },
    {
        parentSlug: "temel-hizmetler",
        parentTitle: "Temel Hizmetler",
        slug: "web-uygulamasi-gelistirme",
        title: "Web Uygulaması Geliştirme",
        metaTitle: "Web Uygulaması Geliştirme | Next.js & React | +90 Ventures",
        subtitle: "Hızlı, Ölçeklenebilir ve Güvenli Web Sistemleri",
        description: "Next.js ve React ile hızlı, ölçeklenebilir ve işletmenize özel web uygulamaları geliştiriyoruz.",
        longDescription: "Arama motoru dostu (SEO), ultra hızlı yüklenen ve yüksek güvenlik standartlarına sahip modern web uygulamaları inşa ediyoruz. İster karmaşık SaaS platformları ister yüksek trafikli portal yapıları olsun, terzi usulü çözümler sunuyoruz.",
        features: [
            "Next.js, React & Node.js ile Modern Mimari",
            "SEO ve Core Web Vitals Odaklı Performans",
            "Ölçeklenebilir Bulut ve Sunucu Altyapısı (AWS / Vercel)",
            "Özel Yönetim ve Dashboard Panelleri",
        ],
        accordionItems: [
            {
                id: 1,
                title: "Next.js, React & Node.js ile Modern Mimari",
                description: "En güncel JavaScript/TypeScript ekosistemini kullanarak hızlı, modüler ve sürdürülebilir web uygulamaları kodluyoruz.",
                items: [
                    "Server-Side Rendering (SSR) ve Static Generation (SSG)",
                    "TypeScript ile Tip Güvenliği",
                    "Modüler ve Temiz Kod Standartları",
                ],
            },
            {
                id: 2,
                title: "SEO ve Core Web Vitals Odaklı Performans",
                description: "Arama motorlarında üst sıralara çıkan, Google Core Web Vitals kriterlerinden 90+ puan alan web siteleri inşa ediyoruz.",
                items: [
                    "Otomatik Semantik HTML ve Meta Etiketleri",
                    "Ultra Hızlı Resim ve Varlık Optimizasyonu",
                    "Düşük İlk Yüklenme Süresi (TTFB)",
                ],
            },
            {
                id: 3,
                title: "Ölçeklenebilir Bulut ve Sunucu Altyapısı (AWS / Vercel)",
                description: "Yüksek trafik anlarında dahi kesintisiz hizmet veren sunucusuz (serverless) ve bulut mimarileri kuruyoruz.",
                items: [
                    "AWS, Vercel & Cloudflare CDN Kurulumu",
                    "Otomatik Ölçeklenme (Auto-scaling)",
                    "7/24 Sunucu Sağlık İzleme",
                ],
            },
            {
                id: 4,
                title: "Özel Yönetim ve Dashboard Panelleri",
                description: "İşletmenizin verilerini anlık olarak yönetebileceğiniz, rol tabanlı kullanıcı panelleri geliştiriyoruz.",
                items: [
                    "Gelişmiş Filtreleme ve Veri Dışa Aktarımı",
                    "Rol ve Yetki Yönetimi",
                    "Grafikli Raporlama Ekranları",
                ],
            },
        ],
        processSteps: [
            { title: "Mimari Planlama", desc: "Ölçeklenebilir ve güvenli web mimarisini kurguluyoruz." },
            { title: "Frontend & Backend Geliştirme", desc: "Modern web standartlarıyla kodlama yapıyoruz." },
            { title: "Güvenlik & Hız Testleri", desc: "Sayfa yüklenme hızlarını ve güvenlik katmanlarını doğruluyoruz." },
            { title: "Canlıya Alım & Yayın", desc: "Sistemi yüksek erişilebilirlikle canlı ortama taşıyoruz." },
        ],
        heroImage: "/assets/img/service/web-gelistirme.jpg",
        images: [
            "/assets/img/service/inner-service/service-1.jpg",
            "/assets/img/service/inner-service/service-4.jpg",
        ],
    },
    {
        parentSlug: "temel-hizmetler",
        parentTitle: "Temel Hizmetler",
        slug: "ui-ux-tasarimi",
        title: "UI / UX Tasarımı",
        metaTitle: "UI/UX Tasarım Hizmetleri | +90 Ventures",
        subtitle: "Kullanıcı Odaklı ve Estetik Arayüz Tasarımları",
        description: "Kullanıcı araştırmasından prototipe, dönüşüm odaklı uçtan uca UI/UX tasarım hizmeti sunuyoruz.",
        longDescription: "Ürününüzün başarısını belirleyen en önemli unsur kullanıcı deneyimidir. Markanızın kimliğini yansıtan, anlaşılır, erişilebilir ve estetik dijital arayüzler tasarlayarak dönüşüm oranlarınızı artırıyoruz.",
        features: [
            "Kullanıcı Deneyimi (UX) Araştırması ve Persona Analizi",
            "Wireframe ve Etkileşimli Prototipler (Figma)",
            "Ölçeklenebilir Marka Tasarım Sistemleri (Design Systems)",
            "Dönüşüm Oranı Optimizasyonu (CRO) Tasarımları",
        ],
        accordionItems: [
            {
                id: 1,
                title: "Kullanıcı Deneyimi (UX) Araştırması ve Persona Analizi",
                description: "Hedef kitlenizin ihtiyaçlarını ve davranışlarını analiz ederek ürünü doğru temeller üzerine inşa ediyoruz.",
                items: [
                    "Kullanıcı Mülakatları ve Saha Araştırması",
                    "Kullanıcı Yolculuk Haritaları (User Journey)",
                    "Hedef Persona Tanımlamaları",
                ],
            },
            {
                id: 2,
                title: "Wireframe ve Etkileşimli Prototipler (Figma)",
                description: "Fikirlerinizi kodlamaya başlamadan önce test edebileceğiniz çalışan prototiplere dönüştürüyoruz.",
                items: [
                    "Düşük ve Yüksek Sadakatli Wireframe'ler",
                    "Tıklanabilir Figma Prototipleri",
                    "Geri Bildirim Döngüleri",
                ],
            },
            {
                id: 3,
                title: "Ölçeklenebilir Marka Tasarım Sistemleri (Design Systems)",
                description: "Tüm dijital varlıklarınızda görsel bütünlük sağlayan, geliştiriciler için hazır bileşen kütüphaneleri oluşturuyoruz.",
                items: [
                    "Tipografi ve Renk Paleti Standartları",
                    "Tekrar Kullanılabilir UI Bileşenleri",
                    "Design Tokens ve Dokümantasyon",
                ],
            },
            {
                id: 4,
                title: "Dönüşüm Oranı Optimizasyonu (CRO) Tasarımları",
                description: "Ziyaretçileri müşteriye dönüştüren, dikkat dağıtıcı ögelerden arındırılmış dönüşüm odaklı arayüzler kurguluyoruz.",
                items: [
                    "A/B Test Tasarım Çeşitleri",
                    "Stratejik CTA (Call-to-Action) Konumlandırma",
                    "Form ve Satın Alma Akışı İyileştirmeleri",
                ],
            },
        ],
        processSteps: [
            { title: "Araştırma ve Keşif", desc: "Hedef kitleyi ve kullanıcı alışkanlıklarını analiz ediyoruz." },
            { title: "Wireframe & Akışlar", desc: "Kullanıcı yolculuklarını ve sayfa mimarilerini çiziyoruz." },
            { title: "Görsel UI Tasarımı", desc: "Markanıza özel modern görünüm ve hissi oluşturuyoruz." },
            { title: "Tasarım Sistemi & Teslim", desc: "Yazılımcılar için piksel hassasiyetinde bileşen kütüphanesi hazırlıyoruz." },
        ],
        heroImage: "/assets/img/service/ui-ux.jpg",
        images: [
            "/assets/img/service/inner-service/service-3.jpg",
            "/assets/img/service/inner-service/service-4.jpg",
        ],
    },

    // ÜRÜN HİZMETLERİ
    {
        parentSlug: "urun-hizmetleri",
        parentTitle: "Ürün Hizmetleri",
        slug: "mvp-gelistirme",
        title: "MVP Geliştirme",
        subtitle: "Fikirlerinizi Hızla Pazara Sunun ve Doğrulayın",
        description: "Girişimciler ve yenilikçi şirketler için fikirleri hızla prototipleyip işlevsel bir Minimum Viable Product (MVP) haline getiriyoruz.",
        longDescription: "Zaman ve kaynak israfını önlemek için ürün fikrinizin çekirdek değer önerisine odaklanarak en hızlı sürede canlıya alıyoruz. Kullanıcılardan gerçek veriler toplayarak yatırım süreçlerinizi hızlandırıyoruz.",
        features: [
            "Hızlı Pazara Giriş (Rapid Go-to-Market)",
            "Çekirdek Özellik Odaklı Yalın Ürün Mimarisi",
            "Kullanıcı Analitiği ve Ölçüm Sistemleri Entegrasyonu",
            "Yatırımcı Sunumları İçin Çalışır Demo Üretimi",
        ],
        accordionItems: [
            {
                id: 1,
                title: "Hızlı Pazara Giriş (Rapid Go-to-Market)",
                description: "Haftalar içinde çalışan bir MVP geliştirerek ürününüzü gerçek kullanıcılarla buluşturuyoruz.",
                items: [
                    "Zaman ve Kaynak Tasarrufu",
                    "Çevik (Agile) Sprint Yönetimi",
                    "Erken Kullanıcı Verisi Edinimi",
                ],
            },
            {
                id: 2,
                title: "Çekirdek Özellik Odaklı Yalın Ürün Mimarisi",
                description: "Gereksiz karmaşıklıktan uzak, temel değer önerinizi mükemmel sunan yalın sistemler inşa ediyoruz.",
                items: [
                    "Kritik Özellik Önceliklendirme",
                    "Hafif ve Esnek Kod Temeli",
                    "Gelecekte Genişletilebilir Mimari",
                ],
            },
            {
                id: 3,
                title: "Kullanıcı Analitiği ve Ölçüm Sistemleri Entegrasyonu",
                description: "Kullanıcıların MVP içerisindeki hareketlerini takip eden analitik araçları kuruyoruz.",
                items: [
                    "Dönüşüm Hunisi (Funnel) Takibi",
                    "Isı Haritaları (Heatmap)",
                    "Kullanıcı Davranış Raporları",
                ],
            },
            {
                id: 4,
                title: "Yatırımcı Sunumları İçin Çalışır Demo Üretimi",
                description: "Yatırım süreçlerinizde sunabileceğiniz, yüksek çözünürlüklü ve işlevsel demo sürümleri hazırlıyoruz.",
                items: [
                    "Yatırımcı Odaklı Değer Sunumu",
                    "Tıklanabilir Canlı Demo",
                    "Hızlı Özelleştirme İmkânı",
                ],
            },
        ],
        processSteps: [
            { title: "Kapsam Belirleme", desc: "MVP kapsamına girecek Kritik Özellikleri (Must-Haves) belirliyoruz." },
            { title: "Çevik Geliştirme", desc: "Kısa sprintlerle hızlıca çalışan bir prototip üretiyoruz." },
            { title: "Lansman & Veri Toplama", desc: "Ürünü ilk kullanıcılarla buluşturup metrikleri izliyoruz." },
            { title: "İterasyon Planı", desc: "Geri bildirimlere göre sonraki sürüm yol haritasını çiziyoruz." },
        ],
        heroImage: "/assets/img/service/inner-service/service-3.jpg",
        images: [
            "/assets/img/service/inner-service/service-3.jpg",
            "/assets/img/service/inner-service/service-4.jpg",
        ],
    },
    {
        parentSlug: "urun-hizmetleri",
        parentTitle: "Ürün Hizmetleri",
        slug: "urun-stratejisi-ve-danismanligi",
        title: "Ürün Stratejisi ve Danışmanlığı",
        subtitle: "Veri ve Pazar Odaklı Ürün Yol Haritaları",
        description: "Ürününüzün pazar uyumunu (Product-Market Fit) yakalaması için rakip analizlerinden yol haritası (roadmap) planlamasına kadar stratejik danışmanlık sunuyoruz.",
        longDescription: "Yalnızca kod yazmıyor, ürünün stratejik geleceğini inşa ediyoruz. Pazar fırsatlarını belirlemek, kullanıcı kitlelerini doğru konumlandırmak ve sürdürülebilir büyüme hedefleri koymak için yanınızdayız.",
        features: [
            "Pazar ve Rakip Analizi",
            "Product-Market Fit (Ürün-Pazar Uyumu) Çalışmaları",
            "Önceliklendirilmiş Ürün Yol Haritası (Roadmap)",
            "Gelir Modeli ve Fiyatlandırma Stratejisi",
        ],
        accordionItems: [
            {
                id: 1,
                title: "Pazar ve Rakip Analizi",
                description: "Rakiplerinizin güçlü ve zayıf yönlerini inceleyerek pazardaki boşlukları tespit ediyoruz.",
                items: [
                    "SWOT ve Rakip Matrisi",
                    "Trend ve Pazar Hacmi Değerlendirmesi",
                    "Farklılaşma Stratejisi",
                ],
            },
            {
                id: 2,
                title: "Product-Market Fit (Ürün-Pazar Uyumu) Çalışmaları",
                description: "Ürününüzün pazarın gerçek bir ihtiyacına yanıt vermesini sağlayan konumlandırma stratejileri kurguluyoruz.",
                items: [
                    "Hedef Kitle Segmentasyonu",
                    "Değer Önerisi Testleri",
                    "Kullanıcı Memnuniyet Metrikleri",
                ],
            },
            {
                id: 3,
                title: "Önceliklendirilmiş Ürün Yol Haritası (Roadmap)",
                description: "Geliştirme ekibinizin odaklanacağı vizyoner ve uygulanabilir yol haritaları çıkarıyoruz.",
                items: [
                    "Kısa, Orta ve Uzun Vadeli Hedefler",
                    "Feature Matrix ve Skorlama",
                    "Kaynak ve Zaman Planlaması",
                ],
            },
            {
                id: 4,
                title: "Gelir Modeli ve Fiyatlandırma Stratejisi",
                description: "Sürdürülebilir nakit akışı sağlayan abonelik, komisyon veya freemium modelleri kurguluyoruz.",
                items: [
                    "Tiered (Kademeli) Fiyatlandırma",
                    "Müşteri Edinme Maliyeti (CAC) Dengesi",
                    "Müşteri Yaşam Boyu Değeri (LTV) Optimizasyonu",
                ],
            },
        ],
        processSteps: [
            { title: "Mevcut Durum Analizi", desc: "Ürününüzün güçlü ve zayıf yönlerini saptıyoruz." },
            { title: "Pazar Fırsatları", desc: "Büyüme potansiyeli olan alanları keşfediyoruz." },
            { title: "Yol Haritası Oluşturma", desc: "Adım adım önceliklendirilmiş aksiyon planı hazırlıyoruz." },
            { title: "Uygulama Takibi", desc: "Stratejinin sahada doğru uygulanmasını denetliyoruz." },
        ],
        heroImage: "/assets/img/service/inner-service/service-4.jpg",
        images: [
            "/assets/img/service/inner-service/service-4.jpg",
            "/assets/img/service/inner-service/service-1.jpg",
        ],
    },
    {
        parentSlug: "urun-hizmetleri",
        parentTitle: "Ürün Hizmetleri",
        slug: "saas-platformu-gelistirme",
        title: "SaaS Platformu Geliştirme",
        subtitle: "Çok Kiracılı (Multi-tenant) ve Abonelik Odaklı Platformlar",
        description: "Ölçeklenebilir, güvenli ve abonelik modeliyle çalışan bulut tabanlı SaaS platformları tasarlıyor ve geliştiriyoruz.",
        longDescription: "Abonelik tabanlı iş modelleriniz için multi-tenant mimariye sahip, otomatik faturalandırma ve yetkilendirme altyapısı sunan güçlü SaaS yazılımları geliştiriyoruz.",
        features: [
            "Multi-tenant (Çok Kiracılı) Bulut Mimarisi",
            "Stripe / Ödeme Kuruluşları Entegrasyonu ve Abonelik Yönetimi",
            "Rol ve Yetki Tabanlı Güvenlik Katmanı (RBAC)",
            "Otomatik Ölçeklenebilir Sunucu Yapısı",
        ],
        accordionItems: [
            {
                id: 1,
                title: "Multi-tenant (Çok Kiracılı) Bulut Mimarisi",
                description: "Tüm müşterilerinizin tek altyapı üzerinde güvenle ayrıştırıldığı ölçeklenebilir SaaS mimarisi kuruyoruz.",
                items: [
                    "Veritabanı İzolasyonu ve Güvenlik",
                    "Tenant Odaklı Yapılandırma",
                    "Yüksek Erişilebilirlik",
                ],
            },
            {
                id: 2,
                title: "Stripe / Ödeme Kuruluşları Entegrasyonu ve Abonelik Yönetimi",
                description: "Aylık/yıllık tekrarlayan ödemeleri, faturalandırmayı ve paket geçişlerini otomatikleştiriyoruz.",
                items: [
                    "Otomatik Kredi Kartı Çekimi ve Fatura Üretimi",
                    "Deneme Süreci (Trial) Yönetimi",
                    "Paket Yükseltme/Düşürme Akışları",
                ],
            },
            {
                id: 3,
                title: "Rol ve Yetki Tabanlı Güvenlik Katmanı (RBAC)",
                description: "Kurumsal müşterilerinizin kendi ekiplerini ve yetkilerini yönetebileceği gelişmiş yetki sistemleri tasarlıyoruz.",
                items: [
                    "Admin, Manager, User Rolleri",
                    "Granüler İzin Kurguları",
                    "Güvenlik Günlükleri (Audit Logs)",
                ],
            },
            {
                id: 4,
                title: "Otomatik Ölçeklenebilir Sunucu Yapısı",
                description: "Kullanıcı sayınız arttıkça sunucu kaynaklarının otomatik büyümesini sağlayan bulut sistemleri kuruyoruz.",
                items: [
                    "Auto-scaling ve Load Balancing",
                    "Düşük Gecikme Süreleri (Low Latency)",
                    "Kesintisiz Güncelleme (Zero-downtime)",
                ],
            },
        ],
        processSteps: [
            { title: "SaaS Mimarisi Tasarımı", desc: "Güvenli ve izolasyonlu veri altyapısı kuruyoruz." },
            { title: "Abonelik ve Ödeme Kurulumu", desc: "Esnek paket ve faturalandırma sistemlerini entegre ediyoruz." },
            { title: "Platform Geliştirme", desc: "Ölçeklenebilir frontend ve backend sistemlerini inşa ediyoruz." },
            { title: "Yayın ve Kesintisiz Destek", desc: "Yüksek erişilebilirlik garantisiyle canlıya alıyoruz." },
        ],
        heroImage: "/assets/img/service/inner-service/service-1.jpg",
        images: [
            "/assets/img/service/inner-service/service-1.jpg",
            "/assets/img/service/inner-service/service-2.jpg",
        ],
    },
    {
        parentSlug: "urun-hizmetleri",
        parentTitle: "Ürün Hizmetleri",
        slug: "ozel-yazilim-gelistirme",
        title: "Özel Yazılım Geliştirme",
        subtitle: "Şirketinize Özel Terzi Usulü Yazılım Çözümleri",
        description: "Karmaşık iş süreçlerinizi dijitalleştiren, mevcut sistemlerinizle tam entegre çalışan özel yazılım mimarileri inşa ediyoruz.",
        longDescription: "Hazır yazılımların yetersiz kaldığı noktalarda, şirketinizin operasyonel ihtiyaçlarına tam uyum sağlayan özel yazılım çözümleri üretiyoruz. Yüksek güvenlik, esneklik ve performans odaklı çalışıyoruz.",
        features: [
            "Kurumsal Süreç Otomasyonları ve ERP/CRM Çözümleri",
            "Mikroservis Mimarisi ve Yüksek Performans",
            "Mevcut Veritabanı ve Legacy Sistem Entegrasyonları",
            "Yüksek Veri Güvenliği ve Şifreleme Standartları",
        ],
        accordionItems: [
            {
                id: 1,
                title: "Kurumsal Süreç Otomasyonları ve ERP/CRM Çözümleri",
                description: "Şirket içi operasyonlarınızı tek merkezden yönetmenizi sağlayan web tabanlı yazılımlar geliştiriyoruz.",
                items: [
                    "Sipariş ve Stok Yönetimi",
                    "Müşteri İlişkileri ve Destek Süreçleri",
                    "Otomatik E-posta ve SMS Bildirimleri",
                ],
            },
            {
                id: 2,
                title: "Mikroservis Mimarisi ve Yüksek Performans",
                description: "Birbirinden bağımsız çalışan, esnek ve kolay bakımı yapılan modern mikroservis mimarileri tasarlıyoruz.",
                items: [
                    "Docker & Kubernetes Konteyner Yönetimi",
                    "API Gateway ve Servis Ağı",
                    "Bileşen Bazlı Ölçeklenme",
                ],
            },
            {
                id: 3,
                title: "Mevcut Veritabanı ve Legacy Sistem Entegrasyonları",
                description: "Eski yazılımlarınızdaki verileri kayıpsız bir şekilde yeni nesil sistemlere taşıyoruz.",
                items: [
                    "Güvenli Veri Taşıma (Migration)",
                    "ETL Süreçleri",
                    "Çift Yönlü Veri Senkronizasyonu",
                ],
            },
            {
                id: 4,
                title: "Yüksek Veri Güvenliği ve Şifreleme Standartları",
                description: "KVKK ve GDPR uyumlu, uçtan uca şifreli güvenlik protokolleri entegre ediyoruz.",
                items: [
                    "Uçtan Uca Şifreleme (SSL/TLS)",
                    "Veri Sızıntısı Önleme Tedbirleri",
                    "Düzenli Penetrasyon Testleri",
                ],
            },
        ],
        processSteps: [
            { title: "İş Analizi", desc: "Kurumsal süreçlerinizi detaylıca inceliyoruz." },
            { title: "Özel Mimari Tasarım", desc: "İhtiyacınıza tam uyan yazılım mimarisini tasarlıyoruz." },
            { title: "Geliştirme ve Test", desc: "Hatasız ve güvenli kodlama prensipleriyle geliştiriyoruz." },
            { title: "Entegrasyon & Eğitim", desc: "Sistemi kurumunuza entegre edip ekibinize eğitim veriyoruz." },
        ],
        heroImage: "/assets/img/service/inner-service/service-2.jpg",
        images: [
            "/assets/img/service/inner-service/service-2.jpg",
            "/assets/img/service/inner-service/service-3.jpg",
        ],
    },
    {
        parentSlug: "urun-hizmetleri",
        parentTitle: "Ürün Hizmetleri",
        slug: "uygulama-buyume-danismanligi",
        title: "Uygulama Büyüme Danışmanlığı",
        subtitle: "Kullanıcı Edinimi ve Dönüşüm Optimizasyonu",
        description: "Dijital ürününüzün organik ve performans odaklı kanallarla büyümesini destekleyen veri tabanlı stratejiler kurguluyoruz.",
        longDescription: "Ürününüz canlıya alındıktan sonra da büyümesini sürdürmesi için tutundurma (retention), dönüşüm oranı optimizasyonu (CRO) ve kullanıcı edinimi (acquisition) süreçlerini optimize ediyoruz.",
        features: [
            "Dönüşüm Oranı Optimizasyonu (CRO)",
            "A/B Test Yönetimi ve Kullanıcı Deneyi",
            "Kullanıcı Tutundurma (Retention) ve Churn Önleme",
            "Veri Analitiği (Google Analytics, Mixpanel, Hotjar) Kurguları",
            "Büyüme (Growth) Yol Haritası Planlaması",
        ],
        accordionItems: [
            {
                id: 1,
                title: "Dönüşüm Oranı Optimizasyonu (CRO)",
                description: "Mevcut trafiğinizi daha fazla satış ve üye kaydına dönüştüren kullanıcı deneyimi hamleleri yapıyoruz.",
                items: [
                    "Form ve Ödeme Sayfası İyileştirmeleri",
                    "Açılış Sayfası (Landing Page) Optimizasyonu",
                    "Sürtünmesiz Kullanıcı Akışları",
                ],
            },
            {
                id: 2,
                title: "A/B Test Yönetimi ve Kullanıcı Deneyi",
                description: "Farklı tasarım ve metin alternatiflerini gerçek kullanıcılar üzerinde test ederek en yüksek performanslı ürünü seçiyoruz.",
                items: [
                    "Hipotez Testleri ve İstatistiksel Analiz",
                    "Visual Editor ve VWO/Optimizely Kurulumu",
                    "Kazanım Raporlaması",
                ],
            },
            {
                id: 3,
                title: "Kullanıcı Tutundurma (Retention) ve Churn Önleme",
                description: "Kullanıcıların uygulamanızı terk etmesini önleyen otomatik etkileşim senaryoları kurguluyoruz.",
                items: [
                    "Onboarding Yolculuğu İyileştirmesi",
                    "Otomatik E-posta & Push Bildirim Akışları",
                    "Sadakat Programları",
                ],
            },
            {
                id: 4,
                title: "Veri Analitiği (Google Analytics, Mixpanel, Hotjar) Kurguları",
                description: "Kullanıcı davranışlarını anlık izlemenizi sağlayan gelişmiş analitik altyapıları kurulumu yapıyoruz.",
                items: [
                    "Özel Etkinlik (Custom Event) Takibi",
                    "Kullanıcı Oturum Kayıtları (Session Replay)",
                    "Özel Dashboard Tasarımları",
                ],
            },
            {
                id: 5,
                title: "Büyüme (Growth) Yol Haritası Planlaması",
                description: "Ürününüzün sürekli büyümesini sağlayan veri tabanlı ve deneysel büyüme stratejileri oluşturuyoruz.",
                items: [
                    "Haftalık Büyüme Sprintleri",
                    "Geri Bildirim Döngüleri",
                    "Sürdürülebilir Büyüme Metrikleri",
                ],
            },
        ],
        processSteps: [
            { title: "Veri ve Funnel Analizi", desc: "Kullanıcıların nerede ayrıldığını tespit ediyoruz." },
            { title: "Hipotez Oluşturma", desc: "Büyümeyi artıracak iyileştirme fikirleri üretiyoruz." },
            { title: "A/B Test ve Uygulama", desc: "İyileştirmeleri test edip en yüksek dönüşümlü versiyonu seçiyoruz." },
            { title: "Ölçekleme", desc: "Başarılı stratejileri geniş kitlelere uyguluyoruz." },
        ],
        heroImage: "/assets/img/service/inner-service/service-4.jpg",
        images: [
            "/assets/img/service/inner-service/service-4.jpg",
            "/assets/img/service/inner-service/service-1.jpg",
        ],
    },
    // DESTEKLEYİCİ HİZMETLER
    {
        parentSlug: "destekleyici-hizmetler",
        parentTitle: "Destekleyici Hizmetler",
        slug: "ozel-gelistirme-ekipleri",
        title: "Özel Geliştirme Ekipleri",
        metaTitle: "Özel Geliştirme Ekipleri | Dedicated Software Teams | +90 Ventures",
        subtitle: "Dedicated Yazılım ve Tasarım Ekipleri",
        description: "Projelerinize özel dedicated mühendis, tasarımcı ve ürün yöneticisi ekipleri sağlıyoruz.",
        longDescription: "Projenizin ihtiyaç duyduğu yetkinliklere sahip uzman kadromuz ile ekibinizi hızla ölçeklendiriyoruz. Çevik yönetim süreçleriyle entegre çalışarak kesintisiz teslimat sağlıyoruz.",
        features: [
            "Dedicated Mühendislik ve Tasarım Ekipleri",
            "Çevik (Agile) Proje Yönetimi",
            "Şeffaf İletişim ve Süreç Takibi",
            "Hızlı Ekip Kurulumu ve Uyum",
        ],
        accordionItems: [
            {
                id: 1,
                title: "Dedicated Mühendislik ve Tasarım Ekipleri",
                description: "Projenize %100 odaklanan yazılımcı ve tasarımcı kadroları kurguluyoruz.",
                items: ["Senior Geliştirici Kadrosu", "UI/UX Tasarım Desteği", "Tam Zamanlı Odaklanma"],
            },
            {
                id: 2,
                title: "Çevik (Agile) Proje Yönetimi",
                description: "Haftalık sprintler ve şeffaf raporlama sistemleriyle projenizi yönetiyoruz.",
                items: ["Sprint Planlama & Review", "Jira / Linear Takibi", "Düzenli Demo Sunumları"],
            },
        ],
        processSteps: [
            { title: "İhtiyaç Analizi", desc: "Aranan teknik yetkinlikleri ve ekip yapısını belirliyoruz." },
            { title: "Ekip Eşleşmesi", desc: "Projenize en uygun uzman kadroyu bir araya getiriyoruz." },
            { title: "Entegrasyon", desc: "Ekiplerinizi hızla ortak çalışma düzenine alıyoruz." },
            { title: "Sürekli Teslimat", desc: "Haftalık sprintlerle ürün gelişimini sürdürüyoruz." },
        ],
        heroImage: "/assets/img/service/inner-service/service-2.jpg",
        images: [
            "/assets/img/service/inner-service/service-2.jpg",
            "/assets/img/service/inner-service/service-3.jpg",
        ],
    },
    {
        parentSlug: "destekleyici-hizmetler",
        parentTitle: "Destekleyici Hizmetler",
        slug: "yeni-ozellik-gelistirme-entegrasyon",
        title: "Yeni Özellik Geliştirme & Entegrasyon",
        metaTitle: "Yeni Özellik Geliştirme & API Entegrasyonu | +90 Ventures",
        subtitle: "Mevcut Ürünlerinizi Yeni Yeteneklerle Güçlendirin",
        description: "Mevcut uygulamalarınıza yeni modüller, 3. parti API ve sistem entegrasyonları ekliyoruz.",
        longDescription: "Sistem mimarinizi bozmadan yeni özellikleri pürüzsüzce entegre ediyoruz. Ödeme sistemlerinden AI servislerine kadar her türlü API ve mikroservis entegrasyonunu tamamlıyoruz.",
        features: [
            "API ve Mikroservis Entegrasyonları",
            "Modüler Özellik Geliştirme",
            "Gerçek Zamanlı Veri Senkronizasyonu",
            "Geriye Dönük Uyumluluk Güvencesi",
        ],
        accordionItems: [
            {
                id: 1,
                title: "API ve Mikroservis Entegrasyonları",
                description: "3. parti ödeme, analitik ve AI servislerini mevcut altyapınıza entegre ediyoruz.",
                items: ["Stripe / izyco Ödeme Sistemleri", "LLM & OpenAI API Entegrasyonları", "CRM & ERP Bağlantıları"],
            },
        ],
        processSteps: [
            { title: "Mimari İnceleme", desc: "Mevcut kod tabanını ve entegrasyon noktalarını inceliyoruz." },
            { title: "Modül Tasarımı", desc: "Yeni özelliğin mimari ve arayüz tasarımını hazırlıyoruz." },
            { title: "Kodlama & Entegrasyon", desc: "Geriye dönük uyumluluğu koruyarak entegre ediyoruz." },
            { title: "Yayına Alma", desc: "Test sonrası yeni özelliği sorunsuz canlıya alıyoruz." },
        ],
        heroImage: "/assets/img/service/inner-service/service-3.jpg",
        images: [
            "/assets/img/service/inner-service/service-3.jpg",
            "/assets/img/service/inner-service/service-1.jpg",
        ],
    },
    {
        parentSlug: "destekleyici-hizmetler",
        parentTitle: "Destekleyici Hizmetler",
        slug: "uygulama-bakim-destek-ve-guvenlik",
        title: "Uygulama Bakım, Destek ve Güvenlik",
        metaTitle: "Uygulama Bakım, Destek ve Güvenlik Hizmetleri | +90 Ventures",
        subtitle: "7/24 Kesintisiz Çalışan Güvenli Sistemler",
        description: "Uygulamalarınızın güvenliğini, güncelliğini ve yüksek performansını 7/24 garanti altına alıyoruz.",
        longDescription: "Düzenli güvenlik yamaları, altyapı güncellemeleri ve 7/24 sistem izleme servislerimizle ürününüzün her zaman yüksek erişilebilirlikte çalışmasını sağlıyoruz.",
        features: [
            "7/24 Sistem İzleme ve Alarm Yönetimi",
            "Düzenli Güvenlik Güncellemeleri",
            "Veritabanı Yedekleme ve Kurtarma",
            "Performans İyileştirme ve Hata Düzeltme",
        ],
        accordionItems: [
            {
                id: 1,
                title: "7/24 Sistem İzleme ve Alarm Yönetimi",
                description: "Sunucu ve servis durumlarını anlık izleyerek olası kesintilere anında müdahale ediyoruz.",
                items: ["SLA Garantili Müdahale", "Uptime & Performans İzleme", "Otomatik Alarm Sistemleri"],
            },
        ],
        processSteps: [
            { title: "Sistem Auditi", desc: "Altyapının mevcut güvenlik ve performans durumunu çıkarıyoruz." },
            { title: "İzleme Kurulumu", desc: "7/24 takip ve alarm altyapılarını aktif hale getiriyoruz." },
            { title: "Periyodik Bakım", desc: "Haftalık ve aylık güvenlik güncellemelerini uyguluyoruz." },
            { title: "Anlık Destek", desc: "Olası problemlerde SLA süreleri içinde müdahale ediyoruz." },
        ],
        heroImage: "/assets/img/service/inner-service/service-1.jpg",
        images: [
            "/assets/img/service/inner-service/service-1.jpg",
            "/assets/img/service/inner-service/service-4.jpg",
        ],
    },
    {
        parentSlug: "destekleyici-hizmetler",
        parentTitle: "Destekleyici Hizmetler",
        slug: "kod-inceleme-denetim-ve-optimizasyon",
        title: "Kod İnceleme, Denetim ve Optimizasyon",
        metaTitle: "Kod İnceleme, Audit ve Performans Optimizasyonu | +90 Ventures",
        subtitle: "Teknik Borçları Temizleyin, Performansı Artırın",
        description: "Mevcut kod tabanınızı analiz ediyor, güvenlik açıklarını ve performans darboğazlarını gideriyoruz.",
        longDescription: "Derinlemesine kod analizi ve mimari inceleme yaparak uygulamanızın yüklenme sürelerini düşürüyor, teknik borçları ortadan kaldırıyoruz.",
        features: [
            "Kapsamlı Kod İncelemesi (Code Review)",
            "Core Web Vitals ve Hız Optimizasyonu",
            "Güvenlik Açığı Analizi (Vulnerability Assessment)",
            "Mimari Modernizasyon ve Refactoring",
        ],
        accordionItems: [
            {
                id: 1,
                title: "Kapsamlı Kod İncelemesi (Code Review)",
                description: "Projenizin kod mimarisini, güvenlik standartlarını ve performans açıklarını raporluyoruz.",
                items: ["Güvenlik Açığı Tespiti", "Performans Darboğazı Analizi", "Mimari İyileştirme Raporu"],
            },
        ],
        processSteps: [
            { title: "Statik & Dinamik Analiz", desc: "Kod tabanını otomatik ve manuel testlerden geçiriyoruz." },
            { title: "Raporlama", desc: "Teknik borçları ve riskleri derecelendirerek raporluyoruz." },
            { title: "Refactoring", desc: "Kritik performans ve güvenlik noktalarını yeniden kodluyoruz." },
            { title: "Doğrulama", desc: "Hız ve güvenlik testleriyle performansı doğruluyoruz." },
        ],
        heroImage: "/assets/img/service/inner-service/service-4.jpg",
        images: [
            "/assets/img/service/inner-service/service-4.jpg",
            "/assets/img/service/inner-service/service-2.jpg",
        ],
    },
];

export const getSubService = (parentSlug: string, subSlug: string): SubService | undefined => {
    const normalizedSub = subSlug
        .replace(/^urun-stratejisi$/, "urun-stratejisi-ve-danismanligi")
        .replace(/^saas-platformu$/, "saas-platformu-gelistirme")
        .replace(/^ozel-yazilim$/, "ozel-yazilim-gelistirme")
        .replace(/^buyume-danismanligi$/, "uygulama-buyume-danismanligi")
        .replace(/^yeni-ozellik-gelistirme-ve-entegrasyon$/, "yeni-ozellik-gelistirme-entegrasyon");

    return (
        subServicesData.find(
            (item) =>
                (item.parentSlug === parentSlug || !parentSlug) &&
                (item.slug === subSlug || item.slug === normalizedSub)
        ) ||
        subServicesData.find(
            (item) => item.slug === subSlug || item.slug === normalizedSub
        )
    );
};
