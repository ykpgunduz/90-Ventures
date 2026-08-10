"use client";
import { animationConfig } from "@/config/animationConfig";
import { fadeAnimation } from "@/hooks/useGsapAnimation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    useEffect(() => {
        if (!pathname) return;
        const cleanups: (() => void)[] = [];

        // Delay animation until DOM fully rendered + hydrated
        const runAnimations = () => {
            // Global animations
            fadeAnimation();

            //Route-based animations
            Object.entries(animationConfig).forEach(([route, animations]) => {
                const isMatch = pathname === route || (route !== "/" && pathname.startsWith(`${route}/`));
                if (isMatch) {
                    animations.forEach((fn) => {
                        const cleanup = fn();
                        if (typeof cleanup === "function") {
                            cleanups.push(cleanup);
                        }
                    });
                }
            });

            //Refresh ScrollTrigger
            ScrollTrigger.refresh();
        };

        const timer1 = setTimeout(runAnimations, 100);
        const timer2 = setTimeout(() => ScrollTrigger.refresh(), 500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);

            // CLEAN ALL ROUTE CLEANUPS
            cleanups.forEach((fn) => fn());

            // kill GSAP scroll triggers
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [pathname]);

    return <>{children}</>;
};

export default AnimationWrapper;