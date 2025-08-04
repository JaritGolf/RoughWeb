"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import NumberedLabel from "@/components/ui/NumberedLabel";

export default function ParallaxShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* First Parallax Section */}
      <div className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] py-8 sm:py-12 flex items-center">
        {/* Overlay for better text readability */}

        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 sm:mb-20 lg:mb-[140px] relative"
            >
              <NumberedLabel number={19} />
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6"
              >
                Discover Your Style
              </motion.h2>
            </motion.div>

            {/* Mobile-First Bento Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-4 gap-4 sm:gap-6 lg:gap-4 h-auto lg:h-[780px] relative z-20 lg:scale-[1.2] lg:origin-center">
              {/* Customization Box - Full width on mobile, half on tablet, 6 cols on desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
                className="lg:col-span-6 lg:row-span-2 bg-white/75 hover:bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl transition-colors duration-300 p-6 sm:p-8 flex flex-col justify-between text-gray-900 border border-white/40 relative z-20 shadow-[var(--global-shadow)] hover:shadow-[0_80px_160px_rgba(0,0,0,0.9),0_40px_80px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.3)] min-h-[200px] sm:min-h-[250px] lg:min-h-0"
              >
                <div className="relative">
                  <NumberedLabel number={20} />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Customization</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">Design your perfect piece with our interactive customization tools</p>
                </div>
                <div className="bg-gray-100/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300/70 rounded-lg"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300/70 rounded-lg"></div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300/70 rounded-lg"></div>
                  </div>
                </div>
              </motion.div>

              {/* Virtual Appointments Box - Full width on mobile, half on tablet, 6 cols on desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
                className="lg:col-span-6 lg:row-span-2 bg-white/75 hover:bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl transition-colors duration-300 p-6 sm:p-8 flex flex-col justify-center text-gray-900 border border-white/40 relative z-20 shadow-[var(--global-shadow)] hover:shadow-[0_80px_160px_rgba(0,0,0,0.9),0_40px_80px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.3)] min-h-[200px] sm:min-h-[250px] lg:min-h-0"
              >
                <div className="relative">
                  <NumberedLabel number={21} />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Virtual Appointments</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">Schedule personalized consultations with our design experts</p>
                  <motion.button 
                    whileHover={{ 
                      y: -5,
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors w-fit text-sm sm:text-base"
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>

              {/* Rewards Box - Full width on mobile, half on tablet, 4 cols on desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
                className="lg:col-span-4 lg:row-span-2 bg-white/75 hover:bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl transition-colors duration-300 p-6 sm:p-8 flex flex-col justify-center text-gray-900 border border-white/40 relative z-20 shadow-[var(--global-shadow)] hover:shadow-[0_80px_160px_rgba(0,0,0,0.9),0_40px_80px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.3)] min-h-[180px] sm:min-h-[200px] lg:min-h-0"
              >
                <div className="relative">
                  <NumberedLabel number={22} />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">Rewards</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">Earn points with every purchase</p>
                  <div className="bg-gray-100/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">$132.00</div>
                    <div className="text-xs sm:text-sm text-gray-600">Available Balance</div>
                  </div>
                </div>
              </motion.div>

              {/* Orders Box - Full width on mobile, half on tablet, 4 cols on desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
                className="lg:col-span-4 lg:row-span-2 bg-white/75 hover:bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl transition-colors duration-300 p-6 sm:p-8 flex flex-col justify-center text-gray-900 border border-white/40 relative z-20 shadow-[var(--global-shadow)] hover:shadow-[0_80px_160px_rgba(0,0,0,0.9),0_40px_80px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.3)] min-h-[180px] sm:min-h-[200px] lg:min-h-0"
              >
                <div className="relative">
                  <NumberedLabel number={23} />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">Orders</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">Track your jewelry orders</p>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-gray-300/70 rounded-full"></div>
                    <div className="w-3/4 h-2 bg-gray-300/70 rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              {/* Gift Cards Box - Full width on mobile, half on tablet, 4 cols on desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
                className="lg:col-span-4 lg:row-span-2 bg-white/75 hover:bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl transition-colors duration-300 p-6 sm:p-8 flex flex-col justify-center text-gray-900 border border-white/40 relative z-20 shadow-[var(--global-shadow)] hover:shadow-[0_80px_160px_rgba(0,0,0,0.9),0_40px_80px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.3)] min-h-[180px] sm:min-h-[200px] lg:min-h-0"
              >
                <div className="relative">
                  <NumberedLabel number={24} />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">Gift Cards</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">Send beautiful gift cards to loved ones</p>
                  <div className="bg-gray-100/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                    <div className="text-xs sm:text-sm text-gray-600">Available Cards</div>
                    <div className="text-lg sm:text-xl font-bold text-gray-900">12</div>
                  </div>
                </div>
              </motion.div>

              {/* Care Guide Box - Full width on mobile, half on tablet, 4 cols on desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
                className="lg:col-span-4 lg:row-span-2 bg-white/75 hover:bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl transition-colors duration-300 p-6 sm:p-8 flex flex-col justify-center text-gray-900 border border-white/40 relative z-20 shadow-[var(--global-shadow)] hover:shadow-[0_80px_160px_rgba(0,0,0,0.9),0_40px_80px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.3)] min-h-[180px] sm:min-h-[200px] lg:min-h-0"
              >
                <div className="relative">
                  <NumberedLabel number={25} />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">Care Guide</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">Tips to keep your jewelry pristine</p>
                  <div className="bg-gray-100/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                    <div className="text-xs sm:text-sm text-gray-600">Weekly Tips</div>
                    <div className="text-lg sm:text-xl font-bold text-gray-900">5 New</div>
                  </div>
                </div>
              </motion.div>

              {/* New Arrivals Box - Full width on mobile, full width on tablet, 8 cols on desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
                className="sm:col-span-2 lg:col-span-8 lg:row-span-2 bg-white/75 hover:bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl transition-colors duration-300 p-6 sm:p-8 flex flex-col justify-center text-gray-900 border border-white/40 relative z-20 shadow-[var(--global-shadow)] hover:shadow-[0_80px_160px_rgba(0,0,0,0.9),0_40px_80px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.3)] min-h-[180px] sm:min-h-[200px] lg:min-h-0"
              >
                <div className="relative">
                  <NumberedLabel number={26} />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">New Arrivals</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">Discover our latest collection</p>
                  <div className="bg-gray-100/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                    <div className="text-xs sm:text-sm text-gray-600">This Month</div>
                    <div className="text-lg sm:text-xl font-bold text-gray-900">24 Items</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Second Parallax Section */}
      <div className="relative min-h-[60vh] py-8 flex items-center">
        {/* Overlay for better text readability */}

        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/40 shadow-[var(--global-shadow)] hover:shadow-[0_80px_160px_rgba(0,0,0,0.9),0_40px_80px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.3)] relative z-20"
            >
              <div className="relative">
                <NumberedLabel number={27} />
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                >
                  Crafted with Passion
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-gray-700 mb-8"
                >
                  Each piece tells a story of artistry and dedication
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="group bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors inline-flex items-center shadow-lg"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Third Parallax Section */}
      <div className="relative min-h-[60vh] py-8 flex items-center">
        {/* Overlay for better text readability */}

        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/40 shadow-[var(--global-shadow)] hover:shadow-[0_80px_160px_rgba(0,0,0,0.9),0_40px_80px_rgba(0,0,0,0.5),0_20px_40px_rgba(0,0,0,0.3)] relative z-20"
            >
              <div className="relative">
                <NumberedLabel number={28} />
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                >
                  Timeless Elegance
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl text-gray-700 mb-8"
                >
                  Create lasting memories with our exceptional pieces
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="group bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors inline-flex items-center shadow-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 