"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { 
  Twitter, 
  Instagram, 
  Facebook,
  Mail
} from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" }
  ]
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/findyourfeel" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/findyourfeel/" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/findyourfeel" }
];

export default function Footer() {
  const { scrollY } = useScroll();
  
  // Parallax effects for footer elements
  const backgroundY = useTransform(scrollY, [0, 1500], [0, -30]);
  const contentY = useTransform(scrollY, [0, 1500], [0, -10]);

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden z-50">
      {/* Solid Background - No transparency */}
      <div className="absolute inset-0 bg-gray-900 z-10" />
      
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 z-20"
        style={{ y: backgroundY }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-30">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          style={{ y: contentY }}
        >
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                FeelBrand
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Find Your Feel - Where comfort meets style. Discover the perfect balance of design and functionality for your lifestyle.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>hello@findyourfeel.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-indigo-600 transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-4">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-gray-600 rounded-l-md text-sm bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-r-md hover:bg-indigo-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8"
          style={{ y: contentY }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 FeelBrand. All rights reserved.
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 