"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Github, Linkedin, Mail, Facebook, Sun, Moon } from "lucide-react";

const dockItems = [
  { icon: Home, href: "#home", label: "Home", isLink: true },
  {
    icon: Facebook,
    href: "https://web.facebook.com/nq.hie.05",
    label: "Facebook",
    isLink: true,
    external: true,
  },
  {
    icon: Github,
    href: "https://github.com/ariushieu/",
    label: "GitHub",
    isLink: true,
    external: true,
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/qhie/",
    label: "LinkedIn",
    isLink: true,
    external: true,
  },
  {
    icon: Mail,
    href: "mailto:hieunguyen2005q@gmail.com",
    label: "Email",
    isLink: true,
    external: true,
  },
];

export default function FloatingDock() {
  const [isDark, setIsDark] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
    }
  }, [isDark]);

  const allItems = [
    ...dockItems,
    {
      icon: isDark ? Sun : Moon,
      label: isDark ? "Light Mode" : "Dark Mode",
      isLink: false,
      onClick: () => setIsDark(!isDark),
    },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="light-dock flex items-center gap-0.5 px-2 py-1.5 rounded-full bg-[#1a1a2e]/90 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {allItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const Icon = item.icon;

          const content = (
            <motion.div
              key={item.label}
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.8 }}
                    animate={{ opacity: 1, y: -4, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="light-dock-tooltip absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#2a2a3e] border border-white/[0.08] text-[11px] text-gray-300 whitespace-nowrap shadow-lg"
                  >
                    {item.label}
                    <div className="light-dock-tooltip-arrow absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#2a2a3e]" />
                  </motion.div>
                )}
              </AnimatePresence>

              {item.isLink ? (
                <a
                  href={(item as { href: string }).href}
                  target={(item as { external?: boolean }).external ? "_blank" : undefined}
                  rel={
                    (item as { external?: boolean }).external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="dock-icon-btn"
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.25 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Icon size={17} />
                  </motion.div>
                </a>
              ) : (
                <button
                  onClick={(item as { onClick: () => void }).onClick}
                  className="dock-icon-btn"
                  aria-label={item.label}
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.25 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Icon size={17} />
                  </motion.div>
                </button>
              )}
            </motion.div>
          );

          return content;
        })}
      </div>
    </motion.div>
  );
}
