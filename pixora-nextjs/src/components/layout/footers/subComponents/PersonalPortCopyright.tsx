import { ScrollLink } from '@/components/common';
import { FooterBackToTopArrow } from '@/svg/ArrowIcons';
import { getCurrentYear } from '@/utils/getCurrentYear';
import Link from 'next/link';

const PersonalPortCopyright = () => {
    return (
        <div className="px-copyright-3-wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-4">
                        <div className="px-copyright-3-text text-center text-lg-start">
                            <p>© {getCurrentYear()} <Link href="/">+90 Ventures.</Link> Tüm Hakları Saklıdır.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8">
                        <div className="px-copyright-3-menu text-center">
                            <ul className="d-flex align-items-center flex-nowrap justify-content-center mb-0">
                                <li><Link href="/">Ana Sayfa</Link></li>
                                <li><Link href="/hakkimizda">Hakkımızda</Link></li>
                                <li><Link href="/projeler">Projeler</Link></li>
                                <li><Link href="/hizmetler">Hizmetler</Link></li>
                                <li><Link href="/iletisim">İletişim</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-12">
                        <div className="px-copyright-3-backtop smooth text-center text-lg-end">
                            <ScrollLink target='#top'>
                                Yukarı çık{" "}
                                <span>
                                    <FooterBackToTopArrow />
                                </span>
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalPortCopyright;