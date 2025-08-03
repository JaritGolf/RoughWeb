"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { CSSProperties } from "react";

interface BackgroundImageProps {
  src: string;
  position: string; // e.g., "100vh", "200vh", "300vh"
  parallaxStrength?: number;
  scaleRange?: [number, number];
  opacityRange?: [number, number];
  scrollRange?: [number, number];
  className?: string;
  style?: CSSProperties;
  zIndex?: number;
}

export default function BackgroundImage({
  src,
  position,
  parallaxStrength = 0.5,
  scaleRange = [1, 1.1],
  opacityRange = [1, 1],
  scrollRange = [0, 2000],
  className = "",
  style = {},
  zIndex = -1
}: BackgroundImageProps) {
  const { scrollY } = useScroll();
  
  // Create transformations based on scroll
  const y = useTransform(
    scrollY, 
    scrollRange, 
    [0, -scrollRange[1] * parallaxStrength]
  );
  
  const scale = useTransform(
    scrollY,
    scrollRange,
    scaleRange
  );
  
  const opacity = useTransform(
    scrollY,
    scrollRange,
    opacityRange
  );

  return (
    <motion.div
      className={`absolute w-full h-screen pointer-events-none ${className}`}
      style={{
        backgroundImage: `url('${src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        top: position,
        zIndex,
        y,
        scale,
        opacity,
        ...style
      }}
    />
  );
}