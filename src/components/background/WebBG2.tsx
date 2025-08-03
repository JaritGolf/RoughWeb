"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function WebBG2() {
  const { scrollY } = useScroll();
  
  // Minimal parallax effect - reduced movement to prevent gaps
  const y = useTransform(scrollY, [1000, 2500], [0, -50]);
  
  return (
    <motion.div
      className="absolute w-full pointer-events-none webBG2-layer"
      style={{
        backgroundImage: "url('/webBG2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        top: "200vh",
        zIndex: -2,
        y
      }}
    />
  );
}