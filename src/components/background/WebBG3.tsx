"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function WebBG3() {
  const { scrollY } = useScroll();
  
  // Minimal parallax effect - reduced movement to prevent gaps
  const y = useTransform(scrollY, [2000, 4000], [0, -50]);
  
  return (
    <motion.div
      className="absolute w-full pointer-events-none webBG3-layer"
      style={{
        backgroundImage: "url('/webBG3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        top: "300vh",
        zIndex: -1,
        y
      }}
    />
  );
}