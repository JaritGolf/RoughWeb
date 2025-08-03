"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Shield, Sparkles } from "lucide-react";

export default function AboutSection() {
  const { scrollY } = useScroll();
  
  // Enhanced parallax effects with staggered movement
  const backgroundY = useTransform(scrollY, [0, 1200], [0, -150]);
  const backgroundScale = useTransform(scrollY, [0, 1200], [1, 1.05]);
  const headingY = useTransform(scrollY, [0, 1000], [0, -80]);
  const headingOpacity = useTransform(scrollY, [0, 500], [1, 0.9]);
  const cardsY = useTransform(scrollY, [0, 1000], [0, -50]);
  const cardsScale = useTransform(scrollY, [0, 1000], [1, 0.98]);

  const features = [
    {
      icon: Heart,
      title: "Crafted with Love",
      description: "Every piece is thoughtfully designed and carefully crafted to bring you the perfect balance of comfort and style."
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "We use only the finest materials and maintain the highest standards of quality in everything we create."
    },
    {
      icon: Sparkles,
      title: "Timeless Design",
      description: "Our designs are built to last, combining contemporary aesthetics with classic principles that never go out of style."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Overlay for better text readability */}

      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
                          className="bg-white/85 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/40 shadow-[var(--global-shadow)] relative z-20"
            style={{ 
              y: headingY,
              opacity: headingOpacity
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            >
              Why Choose FeelBrand?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              We believe that great design should make you feel amazing. Our mission is to create products that not only look beautiful but also enhance your daily life with comfort and functionality.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
              className="text-center p-8 rounded-2xl bg-white hover:bg-gray-50 transition-colors duration-300 shadow-[var(--global-shadow)] hover:shadow-[0_80px_160px_rgba(0,0,0,0.9),0_40px_80px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.3)] border border-gray-100"
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
          className="text-center mt-16"
        >
          <motion.button 
            className="bg-indigo-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
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
    </section>
  );
} 