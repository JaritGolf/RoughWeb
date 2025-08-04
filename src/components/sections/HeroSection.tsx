"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import NumberedLabel from "@/components/ui/NumberedLabel";

export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Static Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
        </video>
        
        {/* No overlay - video is fully visible */}
      </div>

      {/* Content Overlay with Enhanced Parallax */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <NumberedLabel number={1} />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight">
              Find Your Feel
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <NumberedLabel number={2} />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4">
              GRAB PUTTER - CONTROL DISTANCE
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <motion.button 
              className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 group shadow-lg hover:shadow-xl w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline" />
              Watch Story
            </motion.button>
            <motion.button 
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 group w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collection
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-4"
          >
            {[
              { title: "Premium", subtitle: "Quality Materials" },
              { title: "Comfort", subtitle: "Designed for You" },
              { title: "Style", subtitle: "Timeless Design" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <NumberedLabel number={3 + index} />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{feature.title}</div>
                <div className="text-sm sm:text-base text-white/80">{feature.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
} 