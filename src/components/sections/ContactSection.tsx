"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import NumberedLabel from "@/components/ui/NumberedLabel";

export default function ContactSection() {
  const { scrollY } = useScroll();
  
  // Enhanced parallax effects with staggered movement
  const headingY = useTransform(scrollY, [0, 1200], [0, -60]);
  const headingOpacity = useTransform(scrollY, [0, 600], [1, 0.9]);
  const formY = useTransform(scrollY, [0, 1200], [0, -30]);
  const formScale = useTransform(scrollY, [0, 1200], [1, 0.99]);
  const infoY = useTransform(scrollY, [0, 1200], [0, -15]);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Overlay for better text readability */}

      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/85 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/40 shadow-[var(--global-shadow)] max-w-4xl mx-auto relative z-20"
              style={{ 
                y: headingY,
                opacity: headingOpacity
              }}
            >
              <div className="relative">
                <NumberedLabel number={10} />
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
                >
                  Get in Touch
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg lg:text-xl text-gray-600"
                >
                  Have questions about our products or want to learn more? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </motion.p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Enhanced Contact Form with Parallax */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              style={{ 
                y: formY,
                scale: formScale
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-[var(--global-shadow)] border border-gray-100 relative z-20"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h3>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <NumberedLabel number={11} />
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 text-base"
                      placeholder="Enter your first name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <NumberedLabel number={12} />
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 text-base"
                      placeholder="Enter your last name"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <NumberedLabel number={13} />
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 text-base"
                    placeholder="Enter your email address"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <NumberedLabel number={14} />
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 resize-none text-base"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center shadow-lg text-base sm:text-lg"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Enhanced Contact Information with Parallax */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              style={{ y: infoY }}
              className="space-y-8"
            >
              <div className="relative">
                <NumberedLabel number={15} />
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <p className="text-gray-600 mb-8">
                  We&apos;re here to help and answer any questions you might have. We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    details: ["hello@findyourfeel.com", "support@findyourfeel.com"]
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    details: ["+1 (555) 123-4567", "Mon-Fri 9AM-6PM EST"]
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    details: ["123 Design Street", "Creative District, NY 10001", "United States"]
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    className="flex items-start space-x-4 relative"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, transition: { duration: 0.3 } }}
                  >
                    <NumberedLabel number={16 + index} />
                    <motion.div 
                      className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#e0e7ff",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <contact.icon className="w-6 h-6 text-indigo-600" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{contact.title}</h4>
                      {contact.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 