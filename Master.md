# Project: Sunan Jibril Portfolio - Liquid Glass Edition

## 1. Profile Summary: Sunan Jibril
- **Name & Tagline:** Sunan Jibril | IT Enthusiast | *Solum Secundum Data et Veritas*
- **Location:** Kota Tangerang, Banten, Indonesia
- **Education:** Information Systems at Universitas Pamulang
- **Experience:** 2+ years in IT Helpdesk Coordination & Desktop-as-a-Service (DaaS) operations. Previously worked at Macro Trend Technology and PT Nusantara Kreasi Mandiri (Operations Manager).
- **Core Skills:** Network Engineering, Software Engineering, System Administration, Web Development, DevOps, Infrastructure, Production Support, Machine Learning, Web3 & Crypto.
- **Certifications:** DCNP Wireless (D-Link Certified Network Professional).

---

## 2. Product Requirements Document (PRD)

### 2.1. Objective
Build a highly professional, modern, and minimalist portfolio website for Sunan Jibril. The site must highlight his extensive IT, DevOps, and Web Development expertise using a cutting-edge "Liquid Glass" UI aesthetic powered by React Bits.

### 2.2. Tech Stack & Environment
- **Runtime & Package Manager:** **Bun** (Strictly use `bun` for all scripts, installations, and executions. Do NOT use npm, yarn, or pnpm).
- **Framework:** Next.js 14+ (App Router, TypeScript).
- **Styling:** Tailwind CSS.
- **Animation:** Framer Motion (for smooth, liquid-like hover and scroll effects).
- **UI Components:** React Bits (Specifically the `GlassSurface` component).

### 2.3. Design System & Aesthetic
- **Visual Style:** Modern, Minimalist, Professional, Liquid Glass / Glassmorphism.
- **Background:** An animated mesh gradient or fluid noise background (adaptive to Dark/Light mode). The background must be dynamic so the glass refraction/displacement effects of the `GlassSurface` are visible and "alive".
- **Typography:** Clean, geometric sans-serif (e.g., Inter, Geist, or SF Pro) with high contrast and clear hierarchy.
- **Interactions:** Subtle, smooth animations. Content cards should have a "liquid" feel when hovered (using Framer Motion combined with `GlassSurface` props).

### 2.4. Core Sections
1. **Floating Navbar:** Sticky navigation bar wrapped in `GlassSurface`.
2. **Hero Section:** Large `GlassSurface` container featuring the introduction, profile title, tagline, and CTA buttons.
3. **About Me:** Glass card summarizing his background, philosophy, and education.
4. **Experience & Education:** A vertical timeline where each node/entry is an interactive `GlassSurface` card.
5. **Skills & Tech Stack:** Categorized glass pills/tags (DevOps, Network, Web3, etc.).
6. **Certifications:** Highlight section for the DCNP Wireless certification.
7. **Contact / Footer:** Glass surface containing social links (LinkedIn, GitHub, Email).

---

## 3. Master Prompt for AI Coding Assistant

**Copy the prompt below and feed it to your AI coding assistant (Cursor, v0, Copilot, etc.) to generate the codebase:**

```text
# Role
You are an expert Frontend Engineer and UI/UX Designer specializing in modern, minimalist, and "Liquid Glass" web experiences. You are highly proficient in Next.js, TypeScript, Tailwind CSS, Framer Motion, and Bun.

# Project Context
Build a professional portfolio website for **Sunan Jibril**.
**Profile Summary:**
- **Title:** IT Enthusiast | Solum Secundum Data et Veritas
- **Location:** Kota Tangerang, Indonesia
- **Education:** Information Systems at Universitas Pamulang
- **Experience:** 2+ years in IT Helpdesk Coordination & DaaS operations. Worked at Macro Trend Technology and PT Nusantara Kreasi Mandiri.
- **Skills:** Network Engineering, Software Engineering, System Administration, Web Development, DevOps, Infrastructure, Machine Learning, Crypto, Web3.
- **Certifications:** DCNP Wireless (D-Link Certified Network Professional).

# Tech Stack & Environment Rules
- **Runtime:** **Bun**. You MUST use `bun` for all terminal commands. Do not use npm, yarn, or pnpm.
- **Framework:** Next.js (App Router, TypeScript).
- **Styling:** Tailwind CSS.
- **Animation:** Framer Motion.
- **UI Library:** React Bits (specifically the `GlassSurface` component).

# Design Requirements (PRD)
- **Theme:** Modern, Minimalist, Professional.
- **Core Aesthetic:** "Liquid Glass" / Glassmorphism.
- **Background:** Implement a subtle, animated mesh gradient or fluid abstract background (dark/light mode adaptive) to make the glass refraction/displacement effects pop.
- **Typography:** Clean sans-serif (e.g., Inter or Geist), high contrast for readability.
- **Animations:** Smooth, subtle hover effects using Framer Motion. Wrap `GlassSurface` components in `motion.div` to add subtle scale or y-axis transitions on hover to enhance the "liquid" feel.

# Page Sections
1. **Floating Navbar:** A sticky, liquid glass navigation bar.
2. **Hero Section:** Large `GlassSurface` container with a brief introduction, profile title, and CTA buttons.
3. **About Me:** Glass card summarizing his background and education.
4. **Experience & Education:** A vertical timeline where each node/entry is a `GlassSurface` card.
5. **Skills & Tech Stack:** Categorized glass pills/tags (e.g., DevOps, Network, Web3).
6. **Certifications:** Highlight for DCNP Wireless.
7. **Contact / Footer:** Glass surface containing social links (LinkedIn, GitHub, Email).

# Component Integration: GlassSurface (from React Bits)
I am providing the full source code for the `GlassSurface` component from React Bits below. 
**Integration Rules:**
1. Save the component as `components/ui/GlassSurface.tsx`.
2. Use it as the primary wrapper for all content cards, the navbar, and the hero section.
3. **Props Tuning for Portfolio:**
   - Use `borderRadius={24}` or `32` for a softer, modern look.
   - Adjust `backgroundOpacity` (e.g., 0.05 to 0.1) and `blur` to ensure text readability over the mesh gradient.
   - For interactive cards, use subtle `distortionScale`, `redOffset`, `greenOffset`, and `blueOffset` to create a chromatic aberration "liquid" effect on hover.
   - Ensure `width="100%"` and `height="auto"` (or min-height) so cards are responsive.

### Component Source: GlassSurface (TypeScript + Tailwind)
```tsx
import React, { useEffect, useRef, useState, useId } from 'react';

export interface GlassSurfaceProps {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  brightness?: number;
  opacity?: number;
  blur?: number;
  displace?: number;
  backgroundOpacity?: number;
  saturation?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  xChannel?: 'R' | 'G' | 'B';
  yChannel?: 'R' | 'G' | 'B';
  mixBlendMode?:
    | 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten'
    | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference'
    | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity' | 'plus-darker' | 'plus-lighter';
  className?: string;
  style?: React.CSSProperties;
}

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  return isDark;
};

const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children, width = 200, height = 80, borderRadius = 20, borderWidth = 0.07,
  brightness = 50, opacity = 0.93, blur = 11, displace = 0, backgroundOpacity = 0,
  saturation = 1, distortionScale = -180, redOffset = 0, greenOffset = 10, blueOffset = 20,
  xChannel = 'R', yChannel = 'G', mixBlendMode = 'difference', className = '', style = {}
}) => {
  const uniqueId = useId().replace(/:/g, '-');
  const filterId = `glass-filter-${uniqueId}`;
  const redGradId = `red-grad-${uniqueId}`;
  const blueGradId = `blue-grad-${uniqueId}`;
  const [svgSupported, setSvgSupported] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const feImageRef = useRef<SVGFEImageElement>(null);
  const redChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const greenChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const blueChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const gaussianBlurRef = useRef<SVGFEGaussianBlurElement>(null);
  const isDarkMode = useDarkMode();

  const generateDisplacementMap = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);
    const svgContent = `
      <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/><stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/><stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${mixBlendMode}" />
        <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${borderRadius}" fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)" />
      </svg>
    `;
    return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  };

  const updateDisplacementMap = () => { feImageRef.current?.setAttribute('href', generateDisplacementMap()); };

  useEffect(() => {
    updateDisplacementMap();
    [{ ref: redChannelRef, offset: redOffset }, { ref: greenChannelRef, offset: greenOffset }, { ref: blueChannelRef, offset: blueOffset }].forEach(({ ref, offset }) => {
      if (ref.current) {
        ref.current.setAttribute('scale', (distortionScale + offset).toString());
        ref.current.setAttribute('xChannelSelector', xChannel);
        ref.current.setAttribute('yChannelSelector', yChannel);
      }
    });
    gaussianBlurRef.current?.setAttribute('stdDeviation', displace.toString());
  }, [width, height, borderRadius, borderWidth, brightness, opacity, blur, displace, distortionScale, redOffset, greenOffset, blueOffset, xChannel, yChannel, mixBlendMode]);

  useEffect(() => { setSvgSupported(supportsSVGFilters()); }, []);
  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver(() => { setTimeout(updateDisplacementMap, 0); });
    resizeObserver.observe(containerRef.current);
    return () => { resizeObserver.disconnect(); };
  }, []);
  useEffect(() => { setTimeout(updateDisplacementMap, 0); }, [width, height]);

  const supportsSVGFilters = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return false;
    const isWebkit = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);
    if (isWebkit || isFirefox) return false;
    const div = document.createElement('div');
    div.style.backdropFilter = `url(#${filterId})`;
    return div.style.backdropFilter !== '';
  };

  const supportsBackdropFilter = () => {
    if (typeof window === 'undefined') return false;
    return CSS.supports('backdrop-filter', 'blur(10px)');
  };

  const getContainerStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      ...style, width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      borderRadius: `${borderRadius}px`, '--glass-frost': backgroundOpacity, '--glass-saturation': saturation
    } as React.CSSProperties;
    const backdropFilterSupported = supportsBackdropFilter();
    if (svgSupported) {
      return {
        ...baseStyles,
        background: isDarkMode ? `hsl(0 0% 0% / ${backgroundOpacity})` : `hsl(0 0% 100% / ${backgroundOpacity})`,
        backdropFilter: `url(#${filterId}) saturate(${saturation})`,
        boxShadow: isDarkMode
          ? `0 0 2px 1px color-mix(in oklch, white, transparent 65%) inset, 0 0 10px 4px color-mix(in oklch, white, transparent 85%) inset, 0px 4px 16px rgba(17, 17, 26, 0.05), 0px 8px 24px rgba(17, 17, 26, 0.05), 0px 16px 56px rgba(17, 17, 26, 0.05), 0px 4px 16px rgba(17, 17, 26, 0.05) inset, 0px 8px 24px rgba(17, 17, 26, 0.05) inset, 0px 16px 56px rgba(17, 17, 26, 0.05) inset`
          : `0 0 2px 1px color-mix(in oklch, black, transparent 85%) inset, 0 0 10px 4px color-mix(in oklch, black, transparent 90%) inset, 0px 4px 16px rgba(17, 17, 26, 0.05), 0px 8px 24px rgba(17, 17, 26, 0.05), 0px 16px 56px rgba(17, 17, 26, 0.05), 0px 4px 16px rgba(17, 17, 26, 0.05) inset, 0px 8px 24px rgba(17, 17, 26, 0.05) inset, 0px 16px 56px rgba(17, 17, 26, 0.05) inset`
      };
    } else {
      if (isDarkMode) {
        if (!backdropFilterSupported) return { ...baseStyles, background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)` };
        else return { ...baseStyles, background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(12px) saturate(1.8) brightness(1.2)', WebkitBackdropFilter: 'blur(12px) saturate(1.8) brightness(1.2)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)` };
      } else {
        if (!backdropFilterSupported) return { ...baseStyles, background: 'rgba(255, 255, 255, 0.4)', border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 0 rgba(255, 255, 255, 0.3)` };
        else return { ...baseStyles, background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(12px) saturate(1.8) brightness(1.1)', WebkitBackdropFilter: 'blur(12px) saturate(1.8) brightness(1.1)', border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.2), 0 2px 16px 0 rgba(31, 38, 135, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)` };
      }
    }
  };

  const glassSurfaceClasses = 'relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out';
  const focusVisibleClasses = isDarkMode ? 'focus-visible:outline-2 focus-visible:outline-[#0A84FF] focus-visible:outline-offset-2' : 'focus-visible:outline-2 focus-visible:outline-[#007AFF] focus-visible:outline-offset-2';

  return (
    <div ref={containerRef} className={`${glassSurfaceClasses} ${focusVisibleClasses} ${className}`} style={getContainerStyles()}>
      <svg className="w-full h-full pointer-events-none absolute inset-0 opacity-0 -z-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
            <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />
            <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" id="redchannel" result="dispRed" />
            <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />
            <feDisplacementMap ref={greenChannelRef} in="SourceGraphic" in2="map" id="greenchannel" result="dispGreen" />
            <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />
            <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" id="bluechannel" result="dispBlue" />
            <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 1 0  0 0 0 1 0" result="blue" />
            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0.7" />
          </filter>
        </defs>
      </svg>
      <div className="w-full h-full flex items-center justify-center p-2 rounded-[inherit] relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;