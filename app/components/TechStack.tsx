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

/* Icons on the orbital rings */
const orbitIcons = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", startAngle: 20, orbit: 1 },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", startAngle: 160, orbit: 1 },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", startAngle: 290, orbit: 1 },
  { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", startAngle: 70, orbit: 2 },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", startAngle: 200, orbit: 2 },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", startAngle: 330, orbit: 2 },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", startAngle: 120, orbit: 3 },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", startAngle: 250, orbit: 3 },
];

/* Orbit configs: rx, ry, tilt angle, speed (deg/s), direction */
const orbits = [
  { rx: 220, ry: 55, rotate: -8, speed: 9, dir: 1 },    // 40s full rotation
  { rx: 280, ry: 70, rotate: 5, speed: 7.2, dir: -1 },   // 50s, reverse
  { rx: 340, ry: 85, rotate: -3, speed: 6, dir: 1 },     // 60s full rotation
];

function ellipsePos(angle: number, rx: number, ry: number, tiltDeg: number) {
  const rad = (angle * Math.PI) / 180;
  const x0 = Math.cos(rad) * rx;
  const y0 = Math.sin(rad) * ry;
  // Apply tilt rotation
  const tiltRad = (tiltDeg * Math.PI) / 180;
  const x = x0 * Math.cos(tiltRad) - y0 * Math.sin(tiltRad);
  const y = x0 * Math.sin(tiltRad) + y0 * Math.cos(tiltRad);
  return { x, y };
}

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefsTop = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefsBottom = useRef<(HTMLDivElement | null)[]>([]);
  const orbContainerRef = useRef<HTMLDivElement>(null);
  const orbitIconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lines, setLines] = useState<
    { x1: number; y1: number; x2: number; y2: number }[]
  >([]);

  const calcLines = useCallback(() => {
    const container = containerRef.current;
    const orbContainer = orbContainerRef.current;
    if (!container || !orbContainer) return;

    const containerRect = container.getBoundingClientRect();
    const orbRect = orbContainer.getBoundingClientRect();
    const centerX = orbRect.left + orbRect.width / 2 - containerRect.left;
    const centerY = orbRect.top + orbRect.height * 0.35 - containerRect.top;

    const newLines: { x1: number; y1: number; x2: number; y2: number }[] = [];

    iconRefsTop.current.forEach((el) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const iconCx = r.left + r.width / 2 - containerRect.left;
      const iconCy = r.top + r.height / 2 - containerRect.top;
      newLines.push({ x1: iconCx, y1: iconCy, x2: centerX, y2: centerY });
    });

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
    const timer = setTimeout(calcLines, 300);
    window.addEventListener("resize", calcLines);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calcLines);
    };
  }, [calcLines]);

  // Animate orbit icons along elliptical paths
  useEffect(() => {
    let raf: number;
    let lastTime = performance.now();

    // Track current angle for each orbit icon
    const angles = orbitIcons.map((ic) => ic.startAngle);

    const animate = (now: number) => {
      const dt = (now - lastTime) / 1000; // seconds elapsed
      lastTime = now;

      orbitIcons.forEach((ic, i) => {
        const orb = orbits[ic.orbit - 1];
        // Increment angle based on orbit speed and direction
        angles[i] = (angles[i] + orb.speed * orb.dir * dt) % 360;

        const pos = ellipsePos(angles[i], orb.rx, orb.ry, orb.rotate);

        // Convert SVG coords to percentage
        // viewBox: -400 -250 800 500, center offset -10 on Y
        const pctX = ((pos.x + 400) / 800) * 100;
        const pctY = ((pos.y - 10 + 250) / 500) * 100;

        const el = orbitIconRefs.current[i];
        if (el) {
          el.style.left = `${pctX}%`;
          el.style.top = `${pctY}%`;
        }
      });

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative py-14 px-6 overflow-hidden">
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
            I&apos;m a{" "}
            <span className="font-semibold text-white underline decoration-purple-400 decoration-2 underline-offset-4">
              passionate developer
            </span>{" "}
            <span className="font-bold text-white">who loves building things that live on the internet</span>
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            with clean code and beautiful UI.
          </p>
        </motion.div>

        {/* Icons + Orbital wrapped in single relative container */}
        <div ref={containerRef} className="relative">
          {/* SVG overlay for connection lines — hidden on mobile */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden sm:block"
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

          {/* Two rows of circular tech icons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative z-30 flex flex-col items-center gap-3 sm:gap-5 mb-8 sm:mb-16"
          >
            {/* Top row */}
            <div className="flex items-center gap-2.5 sm:gap-4 flex-wrap justify-center">
              {topRowIcons.map((t, i) => (
                <div
                  key={t.name}
                  className="group relative"
                  ref={(el) => { iconRefsTop.current[i] = el; }}
                >
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-[#110a1f] ring-1 ${t.ring} hover:ring-purple-400/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] shadow-[0_0_10px_rgba(139,92,246,0.08)]`}
                  >
                    <img src={t.icon} alt={t.name} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 bg-[#0a0515]/90 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Bottom row */}
            <div className="flex items-center gap-2.5 sm:gap-4 flex-wrap justify-center">
              {bottomRowIcons.map((t, i) => (
                <div
                  key={t.name}
                  className="group relative"
                  ref={(el) => { iconRefsBottom.current[i] = el; }}
                >
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-[#110a1f] ring-1 ${t.ring} hover:ring-purple-400/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] shadow-[0_0_10px_rgba(139,92,246,0.08)]`}
                  >
                    <img src={t.icon} alt={t.name} className="w-5 h-5 sm:w-6 sm:h-6" />
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
            className="relative w-full max-w-3xl mx-auto scale-[0.55] sm:scale-75 md:scale-100 origin-top"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Purple glow behind center */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]" />
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-purple-500/30 rounded-full blur-[60px]" />

            {/* SVG — static orbital ellipses */}
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

              {/* Orbital elliptical rings (static visual guides) */}
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

              {/* Small decorative dots */}
              <circle cx="-200" cy="30" r="2" fill="rgba(139,92,246,0.3)" />
              <circle cx="190" cy="-50" r="1.5" fill="rgba(139,92,246,0.2)" />
              <circle cx="80" cy="75" r="1.5" fill="rgba(139,92,246,0.25)" />
              <circle cx="-300" cy="-20" r="1" fill="rgba(139,92,246,0.15)" />
            </svg>

            {/* Center glowing orb with logo */}
            <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                <div className="absolute inset-0 -m-8 rounded-full bg-purple-500/25 blur-2xl animate-pulse-ring" />
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-linear-to-br from-purple-500/60 to-purple-800/60 border border-purple-400/30 flex items-center justify-center shadow-[0_0_80px_rgba(139,92,246,0.5)]">
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

            {/* Orbit icons — animated along elliptical paths */}
            {orbitIcons.map((icon, i) => {
              // Initial position (will be updated by rAF)
              const orb = orbits[icon.orbit - 1];
              const initPos = ellipsePos(icon.startAngle, orb.rx, orb.ry, orb.rotate);
              const initPctX = ((initPos.x + 400) / 800) * 100;
              const initPctY = ((initPos.y - 10 + 250) / 500) * 100;

              return (
                <div
                  key={icon.name}
                  ref={(el) => { orbitIconRefs.current[i] = el; }}
                  className="absolute z-10"
                  style={{
                    left: `${initPctX}%`,
                    top: `${initPctY}%`,
                    transform: "translate(-50%, -50%)",
                    transition: "none",
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
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
