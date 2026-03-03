"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Lab", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0118]/80 backdrop-blur-xl border-b border-purple-500/10 shadow-lg shadow-purple-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        {/* Logo — stylized K-like symbol */}
        <a href="#home" className="relative group flex items-center">
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 5C15 5 10 10 10 15C10 20 12 22 15 25C18 28 20 30 20 35C20 30 22 28 25 25C28 22 30 20 30 15C30 10 25 5 20 5Z"
              stroke="url(#navLogo)"
              strokeWidth="2"
              fill="none"
            />
            <defs>
              <linearGradient id="navLogo" x1="10" y1="5" x2="30" y2="35">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
            </defs>
          </svg>
        </a>

        {/* Desktop links — right aligned like the image */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0118]/95 backdrop-blur-xl border-t border-purple-500/10 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors text-base"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
