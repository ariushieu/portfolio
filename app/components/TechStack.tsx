"use client";

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

/* Orbital icons for the center visualization */
const orbitIcons = [
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    angle: 0,
    dist: 140,
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    angle: 51,
    dist: 145,
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    angle: 102,
    dist: 140,
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    angle: 153,
    dist: 145,
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    angle: 204,
    dist: 140,
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    angle: 255,
    dist: 145,
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    angle: 306,
    dist: 140,
  },
];

function polar(angle: number, r: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: Math.cos(rad) * r, y: Math.sin(rad) * r };
}

export default function TechStack() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-purple-600/6 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Cross-functional text — matching image */}
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

        {/* Two rows of circular tech icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col items-center gap-4 mb-16"
        >
          {/* Top row */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {topRowIcons.map((t) => (
              <div key={t.name} className="group relative">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center bg-[#110a1f] ring-1 ${t.ring} hover:ring-purple-400/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] shadow-[0_0_10px_rgba(139,92,246,0.08)]`}
                >
                  <img src={t.icon} alt={t.name} className="w-6 h-6" />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
          {/* Bottom row */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {bottomRowIcons.map((t) => (
              <div key={t.name} className="group relative">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center bg-[#110a1f] ring-1 ${t.ring} hover:ring-purple-400/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] shadow-[0_0_10px_rgba(139,92,246,0.08)]`}
                >
                  <img src={t.icon} alt={t.name} className="w-6 h-6" />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Orbital visualization with center logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="relative w-full max-w-125 mx-auto aspect-square"
        >
          {/* SVG lines + orbit ring */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="-250 -250 500 500"
          >
            <circle
              cx="0"
              cy="0"
              r="142"
              fill="none"
              stroke="rgba(139,92,246,0.08)"
              strokeWidth="1"
            />
            {orbitIcons.map((icon, i) => {
              const p = polar(icon.angle, icon.dist);
              return (
                <line
                  key={i}
                  x1="0"
                  y1="0"
                  x2={p.x}
                  y2={p.y}
                  stroke="rgba(139,92,246,0.12)"
                  strokeWidth="1"
                  className="animate-dash"
                />
              );
            })}
            {/* Decorative small dots along bottom corners */}
            <circle cx="-180" cy="120" r="2" fill="rgba(139,92,246,0.3)" />
            <circle cx="190" cy="-100" r="1.5" fill="rgba(139,92,246,0.2)" />
            {/* Branch-like lines at edges */}
            <line
              x1="-200"
              y1="80"
              x2="-140"
              y2="40"
              stroke="rgba(139,92,246,0.06)"
              strokeWidth="1"
            />
            <line
              x1="200"
              y1="-70"
              x2="140"
              y2="-30"
              stroke="rgba(139,92,246,0.06)"
              strokeWidth="1"
            />
          </svg>

          {/* Center logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="absolute inset-0 -m-6 rounded-full bg-purple-500/20 blur-2xl animate-pulse-ring" />
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-purple-600/60 to-purple-900/60 border border-purple-400/30 flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.4)]">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M20 5C15 5 10 10 10 15C10 20 12 22 15 25C18 28 20 30 20 35C20 30 22 28 25 25C28 22 30 20 30 15C30 10 25 5 20 5Z"
                    stroke="url(#centerLogo)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <defs>
                    <linearGradient
                      id="centerLogo"
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

          {/* Orbiting icons */}
          {orbitIcons.map((icon, i) => {
            const p = polar(icon.angle, icon.dist);
            return (
              <motion.div
                key={icon.name}
                className="absolute top-1/2 left-1/2 z-10"
                style={{
                  x: `calc(${p.x}px - 50%)`,
                  y: `calc(${p.y}px - 50%)`,
                }}
                animate={{
                  y: [
                    `calc(${p.y}px - 50%)`,
                    `calc(${p.y - 6}px - 50%)`,
                    `calc(${p.y}px - 50%)`,
                  ],
                }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="group relative">
                  <div className="w-10 h-10 rounded-xl bg-[#0c0818]/90 border border-purple-500/20 flex items-center justify-center hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 cursor-pointer p-2">
                    <img src={icon.icon} alt={icon.name} className="w-6 h-6" />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {icon.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
