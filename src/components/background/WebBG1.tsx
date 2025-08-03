"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function WebBG1() {
  const { scrollY } = useScroll();
  
  // Minimal parallax effect - reduced movement to prevent gaps
  const y = useTransform(scrollY, [0, 1500], [0, -50]);
  
  return (
    <motion.div
      className="absolute w-full pointer-events-none webBG1-layer"
      style={{
        backgroundImage: "url('/webBG1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        top: "100vh",
        zIndex: -3,
        y
      }}
    />
  );
}