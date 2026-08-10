"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
    className?: string;
    href: string;
    onClick?: () => void;
    children: React.ReactNode;
};

export default function SmartLink({ className, href, children, onClick }: Props) {
    const pathname = usePathname() || "";
    const isDark = pathname.startsWith("/dark");

    if (href.startsWith("http")) {
        return <a href={href}>{children}</a>;
    }

    const cleanHref = href.startsWith("/") ? href : `/${href}`;

    const finalHref = isDark
        ? cleanHref.startsWith("/dark")
            ? cleanHref
            : `/dark${cleanHref}`
        : cleanHref.replace(/^\/dark/, "");

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        try {
            const { ScrollSmoother } = require("gsap/ScrollSmoother");
            const smoother = ScrollSmoother?.get();
            if (smoother) {
                smoother.scrollTo(0, false);
                smoother.scrollTop(0);
            }
        } catch (err) {}

        if (onClick) onClick();
    };

    return <Link className={className} href={finalHref} scroll={true} onClick={handleClick}>{children}</Link>;
}
