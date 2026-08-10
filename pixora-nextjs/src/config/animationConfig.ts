// Create a central animation configuration object
// Each key represents a route (page path)
// Each value is an array of animation functions to run on that route

import { initFlowImageDistortion } from "@/hooks/useFlowImageDistortion";
import { aboutSkewAnimation, brandSkewAnimation, headerLogoAnimAnimation, initAwardAnimation, initButtonAnimations, initHeroScrollMarqueeAnimation, initHoverImageAnimation, initInnerServiceAnimation, initInstagramAnimation, initPortfolioAnimation, initPortfolioStickyAnimation, initProjectPerspectiveAnimation, initRevealImageAnimation, initRevealTextSplitAnimation, initScrollSkewParallaxSections, initTextRightScrollAnimation, portfolioPanelAnimation, stepScrollPinAnimation, textEffectAnimation } from "@/hooks/useGsapAnimation";


export const animationConfig: Record<string, (() => void)[]> = {
    // Light page animation
    "/": [aboutSkewAnimation, brandSkewAnimation, initScrollSkewParallaxSections, textEffectAnimation],
    "/startup-agency": [aboutSkewAnimation, brandSkewAnimation, initScrollSkewParallaxSections, textEffectAnimation],

    "/tasarim-studyosu": [portfolioPanelAnimation, textEffectAnimation],
    "/design-studio": [portfolioPanelAnimation, textEffectAnimation],

    "/modern-ajans": [textEffectAnimation],
    "/modern-agency": [textEffectAnimation],

    "/kreatif-ajans": [headerLogoAnimAnimation, textEffectAnimation, stepScrollPinAnimation],
    "/creative-agency": [headerLogoAnimAnimation, textEffectAnimation, stepScrollPinAnimation],

    "/kisisel-portfolyo": [initHoverImageAnimation],
    "/personal-portfolio": [initHoverImageAnimation],

    "/minimal-portfolyo": [initRevealTextSplitAnimation, initProjectPerspectiveAnimation, initPortfolioStickyAnimation, initRevealImageAnimation, initAwardAnimation, initFlowImageDistortion],
    "/minimal-portfolio": [initRevealTextSplitAnimation, initProjectPerspectiveAnimation, initPortfolioStickyAnimation, initRevealImageAnimation, initAwardAnimation, initFlowImageDistortion],

    "/dijital-studyo": [initRevealTextSplitAnimation, initHeroScrollMarqueeAnimation, initTextRightScrollAnimation, initPortfolioAnimation, initAwardAnimation, initRevealImageAnimation, initInstagramAnimation, initButtonAnimations],
    "/digital-studio": [initRevealTextSplitAnimation, initHeroScrollMarqueeAnimation, initTextRightScrollAnimation, initPortfolioAnimation, initAwardAnimation, initRevealImageAnimation, initInstagramAnimation, initButtonAnimations],

    "/hizmetler": [stepScrollPinAnimation],
    "/hizmet-1": [stepScrollPinAnimation],

    "/hizmet-detaylari": [initInnerServiceAnimation],
    "/service-2": [initInnerServiceAnimation],

    "/projeler": [headerLogoAnimAnimation],
    "/portfolio-1": [headerLogoAnimAnimation],

    "/portfolyo-3": [initHoverImageAnimation],
    "/portfolio-3": [initHoverImageAnimation],

    "/portfolyo-6": [portfolioPanelAnimation],
    "/portfolio-6": [portfolioPanelAnimation],

    "/proje-detayi-2": [initRevealImageAnimation],
    "/portfolio-details-2": [initRevealImageAnimation],

    // Dark page animation
    "/dark": [aboutSkewAnimation, brandSkewAnimation, initScrollSkewParallaxSections],
    "/dark/girisim-ajansi": [aboutSkewAnimation, brandSkewAnimation, initScrollSkewParallaxSections],
    "/dark/startup-agency": [aboutSkewAnimation, brandSkewAnimation, initScrollSkewParallaxSections],

    "/dark/tasarim-studyosu": [portfolioPanelAnimation, textEffectAnimation],
    "/dark/design-studio": [portfolioPanelAnimation, textEffectAnimation],

    "/dark/modern-ajans": [textEffectAnimation],
    "/dark/modern-agency": [textEffectAnimation],

    "/dark/kreatif-ajans": [headerLogoAnimAnimation, textEffectAnimation, stepScrollPinAnimation],
    "/dark/creative-agency": [headerLogoAnimAnimation, textEffectAnimation, stepScrollPinAnimation],

    "/dark/kisisel-portfolyo": [initHoverImageAnimation],
    "/dark/personal-portfolio": [initHoverImageAnimation],

    "/dark/minimal-portfolyo": [initRevealTextSplitAnimation, initProjectPerspectiveAnimation, initPortfolioStickyAnimation, initRevealImageAnimation, initAwardAnimation],
    "/dark/minimal-portfolio": [initRevealTextSplitAnimation, initProjectPerspectiveAnimation, initPortfolioStickyAnimation, initRevealImageAnimation, initAwardAnimation],

    "/dark/dijital-studyo": [initRevealTextSplitAnimation, initHeroScrollMarqueeAnimation, initTextRightScrollAnimation, initPortfolioAnimation, initAwardAnimation, initRevealImageAnimation, initInstagramAnimation, initButtonAnimations],
    "/dark/digital-studio": [initRevealTextSplitAnimation, initHeroScrollMarqueeAnimation, initTextRightScrollAnimation, initPortfolioAnimation, initAwardAnimation, initRevealImageAnimation, initInstagramAnimation, initButtonAnimations],

    "/dark/hizmetler": [stepScrollPinAnimation],
    "/dark/hizmet-1": [stepScrollPinAnimation],
    "/dark/service-1": [stepScrollPinAnimation],

    "/dark/hizmet-detaylari": [initInnerServiceAnimation],
    "/dark/service-2": [initInnerServiceAnimation],

    "/dark/projeler": [headerLogoAnimAnimation],
    "/dark/portfolio-1": [headerLogoAnimAnimation],

    "/dark/portfolyo-3": [initHoverImageAnimation],
    "/dark/portfolio-3": [initHoverImageAnimation],

    "/dark/portfolyo-6": [portfolioPanelAnimation],
    "/dark/portfolio-6": [portfolioPanelAnimation],

    "/dark/proje-detayi-2": [initRevealImageAnimation],
    "/dark/portfolio-details-2": [initRevealImageAnimation],
};