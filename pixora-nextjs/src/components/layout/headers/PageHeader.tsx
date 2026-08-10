"use client";
import PrimaryOffCanvas from '@/components/offcanvas/PrimaryOffCanvas';
import useStickyHeader from '@/hooks/useStickyHeader';
import HeaderMenu from './subComponents/HeaderMenu';
import useGlobalContext from '@/hooks/useContext';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useIsDarkRoute } from '@/hooks/useIsDarkRoute';

interface headerPropsDt {
   containerSize?: string;
   stickyClass?: string;
   headerFixed?: boolean;
   logoClassName?: string;
}

const PageHeader: React.FC<headerPropsDt> = ({ containerSize = "container-1870", stickyClass, headerFixed, logoClassName }) => {
   const { toggleMainSidebar } = useGlobalContext();
   const isSticky = useStickyHeader(20);
   const isDarkTheme = useIsDarkRoute();
   const pathName = usePathname();

   //header class
   const headerClasses = [
      "px-header-area",
      "px-header-style-black",
      "px-header-ptb",

      headerFixed ? "header-fixed" : "header-transparent",

      isSticky ? stickyClass : "",
   ].filter(Boolean).join(" ");

   // Apply theme-specific dropdown background styles (light or dark)
   const dropdownBackgroundCls = isDarkTheme
      ? "dropdown-black-bg"
      : "dropdown-white-bg";

   // Logo switching: white logo for dark theme or transparent navbar with white text, black logo for light theme / sticky header
   const logoSrc = isDarkTheme
      ? "/assets/img/logo/beyaz-logo.png"
      : (isSticky ? "/assets/img/logo/logo-black.png" : (pathName === "/" ? "/assets/img/logo/beyaz-logo.png" : "/assets/img/logo/logo-black.png"));

   return (
      <>
         <header>
            <div className={headerClasses}>
               <div className={`container ${containerSize}`}>
                  <div className="row align-items-center">
                     <div className="col-lg-4 col-md-3 col-6">
                        <div className={`px-header-logo ${logoClassName}`}>
                           <Link href="/">
                              <Image width={208} height={52} style={{ width: "auto", height: "52px", maxWidth: "230px" }} src={logoSrc} alt="+90 Ventures Logo" priority />
                           </Link>
                        </div>
                     </div>
                     <div className="col-lg-8 col-md-9 col-6">
                        <div className="px-header-box d-flex justify-content-end align-items-center">
                           <div className={`px-header-menu tp-header-dropdown px-megamenu-style ${dropdownBackgroundCls} d-none d-xl-block`}>
                              <nav className="tp-mobile-menu-active">
                                 <HeaderMenu />
                              </nav>
                           </div>
                           <div className="px-header-action">
                              <button
                                 type="button"
                                 onClick={toggleMainSidebar}
                                 className="px-header-bar tp-offcanvas-open-btn"
                                 aria-label="Open sidebar menu"
                                 aria-expanded={false}
                                 aria-controls="primary-offcanvas"
                              >
                                 <span aria-hidden="true"></span>
                                 <span aria-hidden="true"></span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         {/* Mobile Offcanvas area */}
         <PrimaryOffCanvas />
      </>
   );
};

export default PageHeader;