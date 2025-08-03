"use client";

import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ParallaxShowcase from "@/components/sections/ParallaxShowcase";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import BackgroundLayers from "@/components/background/BackgroundLayers";

export default function Home() {
  
  return (
    <div className="relative overflow-hidden">
      <main className="relative">
        <Navigation />
        <HeroSection />
        
        {/* Background starts after hero */}
        <div className="relative">
          <BackgroundLayers />
          <AboutSection />
          <ParallaxShowcase />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
