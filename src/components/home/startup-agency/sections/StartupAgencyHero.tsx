
import Link from "next/link";

const services = [
  { id: "01", title: "AI & Yazılım Dönüşümü" },
  { id: "02", title: "Mobil Uygulama Geliştirme" },
  { id: "03", title: "Web Tasarım & Geliştirme" },
  { id: "04", title: "UI/UX & Ürün Stratejisi" },
];

const StartupAgencyHero = () => {

  return (
    <div className="px-hero-area px-hero-bg hero-skew-anim z-index-3">
      {/* Background Image */}
      <div className="ripple-image px-hero-bg-img"
        style={{
          backgroundImage: "url(/assets/img/hero/space.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}>
      </div>
      <div className="container container-1550">
        {/* Hero Title */}
        <div className="px-hero-title-wrap pb-110">
          <div className="row align-items-end">
            <div className="col-xl-9">
              <div className="px-hero-title-box">
                <span className="px-hero-subtitle px-fade-anim" data-delay=".3">
                  +90 Ventures — Yapay Zeka Çağının Dijital Ürün Stüdyosu
                </span>

                <h2 className="px-hero-title px-fade-anim" data-delay=".5">
                  Projenizi, dijital ürün<br />
                  yapmayı iyi bilen bir<br />
                  ekiple hayata geçirin.
                </h2>
              </div>
            </div>

            {/* Hero Info */}
            <div className="col-xl-3">
              <div
                className="px-hero-info-wrap d-flex justify-content-md-end px-fade-anim"
                data-delay=".5"
                data-fade-from="left"
              >
                <div className="px-hero-info">
                  <p className="mb-25">
                    İyi tasarım, <br /> göze batmadan iş görür.
                  </p>

                  <div className="px-hero-cta mt-15">
                    <Link
                      href="/iletisim"
                      className="d-inline-flex align-items-center gap-2"
                      style={{
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "rgba(255, 255, 255, 0.85)",
                        textDecoration: "none",
                        padding: "8px 18px",
                        borderRadius: "30px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        backdropFilter: "blur(6px)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span>Projenizi Tartışalım</span>
                      <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 12 12" fill="none">
                          <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="px-hero-service-wrap d-flex justify-content-between align-items-center">
          {services.map(({ id, title }) => (
            <div key={id} className="px-hero-service-item">
              <span># {id}</span>
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartupAgencyHero;
