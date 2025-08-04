"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Shield, Sparkles } from "lucide-react";
import NumberedLabel from "@/components/ui/NumberedLabel";

export default function AboutSection() {
  const { scrollY } = useScroll();
  
  // Enhanced parallax effects with staggered movement
  const headingY = useTransform(scrollY, [0, 1000], [0, -80]);
  const headingOpacity = useTransform(scrollY, [0, 500], [1, 0.9]);
  const cardsY = useTransform(scrollY, [0, 1000], [0, -50]);
  const cardsScale = useTransform(scrollY, [0, 1000], [1, 0.98]);

  const features = [
    {
      icon: Heart,
      title: "Easiest way to practice Putting",
      description: "Every piece is thoughtfully designed and carefully crafted to bring you the perfect balance of comfort and style."
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Learn to control distance with your putter like never before"
    },
    {
      icon: Sparkles,
      title: "Timeless Design",
      description: "Our designs are built to last, combining contemporary aesthetics with classic principles that never go out of style."
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Overlay for better text readability */}

      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Box 6 - Aligned with the grid below */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/85 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/40 shadow-[var(--global-shadow)] relative z-20 mb-12 sm:mb-16 text-center"
            style={{ 
              y: headingY,
              opacity: headingOpacity
            }}
          >
            <div className="relative">
              <NumberedLabel number={6} />
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-6xl lg:text-8xl xl:text-[110px] font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
              >
                Practice Distance Control at Home
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
              >
                We believe that great design should make you feel amazing. Our mission is to create products that not only look beautiful but also enhance your daily life with comfort and functionality.
              </motion.p>
            </div>
          </motion.div>

          {/* Grid container for boxes 7, 8, 9 */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            style={{ 
              y: cardsY,
              scale: cardsScale
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="text-center p-6 sm:p-8 rounded-2xl bg-white hover:bg-gray-50 transition-colors duration-300 shadow-[var(--global-shadow)] hover:shadow-[0_80px_160px_rgba(0,0,0,0.9),0_40px_80px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.3)] border border-gray-100 relative"
              >
                <NumberedLabel number={7 + index} />
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            style={{ y: cardsY }}
            className="text-center mt-12 sm:mt-16"
          >
            <motion.button 
              className="bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 