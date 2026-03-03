"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

/* ---- Two rows of circular tech icons, then orbital visualization ---- */

const topRowIcons = [
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    ring: "ring-green-500/20",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    ring: "ring-red-500/20",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    ring: "ring-blue-500/20",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    ring: "ring-orange-500/20",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    ring: "ring-blue-400/20",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    ring: "ring-orange-600/20",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    ring: "ring-cyan-500/20",
  },
];

const bottomRowIcons = [
  {
    name: "Maven",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
    ring: "ring-red-400/20",
  },
  {
    name: "REST API",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    ring: "ring-emerald-500/20",
  },
  {
    name: "Thymeleaf",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    ring: "ring-green-400/20",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    ring: "ring-red-500/20",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    ring: "ring-yellow-500/20",
  },
  {
    name: "IntelliJ",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
    ring: "ring-pink-500/20",
  },
];

/* Icons scattered on the orbital rings */
const orbitIcons = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    angle: 20,
    orbit: 1,
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    angle: 160,
    orbit: 1,
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    angle: 290,
    orbit: 1,
  },
  {
    name: "Spring",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    angle: 70,
    orbit: 2,
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    angle: 200,
    orbit: 2,
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    angle: 330,
    orbit: 2,
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    angle: 120,
    orbit: 3,
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    angle: 250,
    orbit: 3,
  },
];

/* Orbit configs: rx, ry, rotation for each elliptical ring */
const orbits = [
  { rx: 220, ry: 55, rotate: -8 },
  { rx: 280, ry: 70, rotate: 5 },
  { rx: 340, ry: 85, rotate: -3 },
];

function orbitPos(angle: number, rx: number, ry: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: Math.cos(rad) * rx, y: Math.sin(rad) * ry };
}

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefsTop = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefsBottom = useRef<(HTMLDivElement | null)[]>([]);
  const orbContainerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<
    { x1: number; y1: number; x2: number; y2: number }[]
  >([]);

  const calcLines = useCallback(() => {
    const container = containerRef.current;
    const orbContainer = orbContainerRef.current;
    if (!container || !orbContainer) return;

    const containerRect = container.getBoundingClientRect();
    // Center orb is at 35% top, 50% left of orbContainer
    const orbRect = orbContainerRef.current!.getBoundingClientRect();
    const centerX = orbRect.left + orbRect.width / 2 - containerRect.left;
    const centerY = orbRect.top + orbRect.height * 0.35 - containerRect.top;

    const newLines: { x1: number; y1: number; x2: number; y2: number }[] = [];

    // Lines from each top row icon to center
    iconRefsTop.current.forEach((el) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const iconCx = r.left + r.width / 2 - containerRect.left;
      const iconCy = r.top + r.height / 2 - containerRect.top;
      newLines.push({ x1: iconCx, y1: iconCy, x2: centerX, y2: centerY });
    });

    // Lines from each bottom row icon to center
    iconRefsBottom.current.forEach((el) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const iconCx = r.left + r.width / 2 - containerRect.left;
      const iconCy = r.top + r.height / 2 - containerRect.top;
      newLines.push({ x1: iconCx, y1: iconCy, x2: centerX, y2: centerY });
    });

    setLines(newLines);
  }, []);

  useEffect(() => {
    // Calculate on mount + resize
    const timer = setTimeout(calcLines, 300);
    window.addEventListener("resize", calcLines);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calcLines);
    };
  }, [calcLines]);

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-purple-600/6 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Cross-functional text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I&apos;m currently looking to join a{" "}
            <span className="font-semibold text-white underline decoration-purple-400 decoration-2 underline-offset-4">
              cross-functional
            </span>{" "}
            <span className="font-bold text-white">team</span>
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            that values improving people&apos;s lives through accessible design.
          </p>
        </motion.div>

        {/* Icons + Orbital wrapped in single relative container for SVG lines */}
        <div ref={containerRef} className="relative">
          {/* SVG overlay for connection lines (full container coverage) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ overflow: "visible" }}
          >
            {lines.map((l, i) => (
              <line
                key={i}
                x1={l.x1}
                y1={l.y1}
                x2={l.x2}
                y2={l.y2}
                stroke="rgba(139,92,246,0.1)"
                strokeWidth="1"
              />
            ))}
          </svg>

          {/* Two rows of circular tech icons — z-30 so tooltips appear above */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative z-30 flex flex-col items-center gap-5 mb-16"
          >
            {/* Top row */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {topRowIcons.map((t, i) => (
                <div
                  key={t.name}
                  className="group relative"
                  ref={(el) => {
                    iconRefsTop.current[i] = el;
                  }}
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center bg-[#110a1f] ring-1 ${t.ring} hover:ring-purple-400/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] shadow-[0_0_10px_rgba(139,92,246,0.08)]`}
                  >
                    <img src={t.icon} alt={t.name} className="w-6 h-6" />
                  </div>
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 bg-[#0a0515]/90 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Bottom row */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {bottomRowIcons.map((t, i) => (
                <div
                  key={t.name}
                  className="group relative"
                  ref={(el) => {
                    iconRefsBottom.current[i] = el;
                  }}
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center bg-[#110a1f] ring-1 ${t.ring} hover:ring-purple-400/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] shadow-[0_0_10px_rgba(139,92,246,0.08)]`}
                  >
                    <img src={t.icon} alt={t.name} className="w-6 h-6" />
                  </div>
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 bg-[#0a0515]/90 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center orb + orbital rings visualization */}
          <motion.div
            ref={orbContainerRef}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="relative w-full max-w-3xl mx-auto"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Purple glow behind center */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]" />
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-purple-500/30 rounded-full blur-[60px]" />

            {/* SVG — orbital ellipses */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="-400 -250 800 500"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient id="orbGlow" cx="50%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="rgba(139,92,246,0.12)" />
                  <stop offset="100%" stopColor="rgba(139,92,246,0)" />
                </radialGradient>
              </defs>

              {/* Ambient glow */}
              <circle cx="0" cy="-20" r="180" fill="url(#orbGlow)" />

              {/* Orbital elliptical rings */}
              {orbits.map((orb, i) => (
                <ellipse
                  key={`orbit-${i}`}
                  cx="0"
                  cy="-10"
                  rx={orb.rx}
                  ry={orb.ry}
                  fill="none"
                  stroke="rgba(139,92,246,0.1)"
                  strokeWidth="0.8"
                  transform={`rotate(${orb.rotate})`}
                />
              ))}

              {/* Small decorative dots along orbits */}
              <circle cx="-200" cy="30" r="2" fill="rgba(139,92,246,0.3)" />
              <circle cx="190" cy="-50" r="1.5" fill="rgba(139,92,246,0.2)" />
              <circle cx="80" cy="75" r="1.5" fill="rgba(139,92,246,0.25)" />
              <circle cx="-300" cy="-20" r="1" fill="rgba(139,92,246,0.15)" />
            </svg>

            {/* Center glowing orb with logo */}
            <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                <div className="absolute inset-0 -m-8 rounded-full bg-purple-500/25 blur-2xl animate-pulse-ring" />
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-purple-500/60 to-purple-800/60 border border-purple-400/30 flex items-center justify-center shadow-[0_0_80px_rgba(139,92,246,0.5)]">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M20 5C15 5 10 10 10 15C10 20 12 22 15 25C18 28 20 30 20 35C20 30 22 28 25 25C28 22 30 20 30 15C30 10 25 5 20 5Z"
                      stroke="url(#centerLogoOrb)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <defs>
                      <linearGradient
                        id="centerLogoOrb"
                        x1="10"
                        y1="5"
                        x2="30"
                        y2="35"
                      >
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="100%" stopColor="#f472b6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Tech icons positioned on the orbital rings — GRAYSCALE */}
            {orbitIcons.map((icon) => {
              const orb = orbits[icon.orbit - 1];
              const pos = orbitPos(icon.angle, orb.rx, orb.ry);
              // Apply orbit rotation
              const rotRad = (orb.rotate * Math.PI) / 180;
              const rx = pos.x * Math.cos(rotRad) - pos.y * Math.sin(rotRad);
              const ry =
                pos.x * Math.sin(rotRad) + pos.y * Math.cos(rotRad);
              // Convert SVG coords to percentage position
              const pctX = ((rx + 400) / 800) * 100;
              const pctY = ((ry - 10 + 250) / 500) * 100;

              return (
                <motion.div
                  key={icon.name}
                  className="absolute z-10"
                  style={{
                    left: `${pctX}%`,
                    top: `${pctY}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3 + icon.orbit * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="group relative">
                    <div className="w-8 h-8 rounded-lg bg-[#0c0818]/90 border border-purple-500/20 flex items-center justify-center hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 cursor-pointer p-1.5">
                      <img
                        src={icon.icon}
                        alt={icon.name}
                        className="w-5 h-5 grayscale brightness-75 opacity-60"
                      />
                    </div>
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {icon.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
