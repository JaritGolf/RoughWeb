"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function SeamlessBackground() {
  const { scrollY } = useScroll();
  
  // Strong parallax effect - background moves dramatically relative to content
  const y = useTransform(scrollY, [0, 4000], [0, 800]);
  
  return (
    <motion.div
      className="absolute w-full pointer-events-none seamless-background"
      style={{
        height: "calc(100vh * 6)", // Ensures coverage all the way to footer
        top: "0", // Starts from beginning of this positioned element
        zIndex: -5, // Behind all content including footer
        y,
        backgroundImage: "url('/webBG5.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "0 0"
      }}
    />
  );
}