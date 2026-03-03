"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    label: "Featured Project",
    title: "TopPhimDinh",
    description:
      "A full-featured movie streaming website built with Spring Boot. Browse, search, and watch movies with a responsive UI, user authentication, content management, and a powerful admin panel for managing the movie database.",
    tags: ["Spring Boot", "Thymeleaf", "MySQL", "REST API"],
    github: "https://github.com/ariushieu/",
    live: "https://topphimdinh.site/",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    ],
    // Browser mockup content
    mockup: {
      title: "This headline reflects my personality (blog)",
      subtitle: "WHO AM I?",
      body: "I'm a passionate developer who loves building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces.",
      footerText: "Want to headhunt10 in (day)?",
    },
  },
  {
    label: "Featured Project",
    title: "iSocials — IELTS Learning",
    description:
      "An interactive IELTS learning platform featuring practice exercises for all four skills, progress tracking, leaderboards, and a Spring Boot powered REST API backend. Designed to help students improve their English proficiency.",
    tags: ["Spring Boot", "React", "PostgreSQL", "Docker"],
    github: "https://github.com/ariushieu/",
    live: "https://www.isocials.site/",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    ],
    mockup: {
      title: "Interactive IELTS Platform",
      subtitle: "omnitonicity (Alex)",
      body: "Practice all four IELTS skills — Listening, Reading, Writing, and Speaking — with instant feedback and progress analytics to track your improvement journey.",
      footerText: "Start learning today",
    },
  },
];

/* Browser mockup component matching the image's wireframe style */
function BrowserMockup({
  mockup,
  live,
}: {
  mockup: (typeof projects)[0]["mockup"];
  live: string;
}) {
  return (
    <motion.a
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="block group"
    >
      <div className="relative rounded-xl overflow-hidden border border-purple-500/25 bg-[#0c0818] shadow-2xl shadow-purple-900/30">
        {/* Browser chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#110a20] border-b border-purple-500/15">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <div className="flex-1 ml-3">
            <div className="w-40 h-4 rounded bg-purple-500/8 mx-auto" />
          </div>
        </div>

        {/* Browser content — wireframe style matching image */}
        <div className="p-6 sm:p-8 relative min-h-60">
          {/* Grid background */}
          <div className="absolute inset-0 opacity-[0.08]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(139,92,246,0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(139,92,246,0.4) 1px, transparent 1px)
                `,
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="relative z-10 space-y-4">
            {/* Mock header */}
            <div className="flex items-start gap-4">
              {/* Placeholder image area */}
              <div className="w-16 h-16 rounded-lg bg-purple-500/10 border border-purple-500/15 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-purple-500/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="text-sm font-medium text-gray-300 leading-tight">
                  {mockup.title}
                </h4>
                <div className="w-3/4 h-2 rounded bg-purple-500/10" />
              </div>
            </div>

            {/* Subtitle */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-purple-400/70 uppercase tracking-wider">
                {mockup.subtitle}
              </p>
            </div>

            {/* Body text lines */}
            <div className="space-y-2">
              <p className="text-[11px] text-gray-500 leading-relaxed">
                {mockup.body}
              </p>
            </div>

            {/* Wireframe bars */}
            <div className="space-y-1.5 pt-2">
              <div className="w-full h-1.5 rounded bg-purple-500/6" />
              <div className="w-4/5 h-1.5 rounded bg-purple-500/6" />
              <div className="w-3/5 h-1.5 rounded bg-purple-500/6" />
            </div>

            {/* Footer text */}
            <p className="text-[10px] text-gray-600 pt-1">
              {mockup.footerText}
            </p>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>
    </motion.a>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-14 px-6">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-125 h-125 bg-purple-700/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 left-1/4 w-100 h-100 bg-pink-600/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col gap-36">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className={`relative flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-start gap-8 lg:gap-12`}
              >
                {/* Text side */}
                <div
                  className={`flex-1 ${
                    isEven ? "lg:text-left" : "lg:text-right"
                  } pt-4`}
                >
                  <p className="text-purple-400 text-xs font-medium tracking-wider uppercase mb-2">
                    {project.label}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    {project.title}
                  </h3>

                  {/* Description glass card */}
                  <div className="relative p-5 mb-5 rounded-2xl overflow-hidden">
                    {/* Gradient border */}
                    <div
                      className="absolute -inset-px rounded-2xl bg-linear-to-br from-purple-500/40 via-purple-600/10 to-indigo-500/30"
                      style={{ zIndex: 0 }}
                    />
                    <div
                      className="absolute inset-0 rounded-2xl bg-[#0d0620]/95 backdrop-blur-xl"
                      style={{ zIndex: 1 }}
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-br from-purple-500/6 via-transparent to-purple-600/4 pointer-events-none"
                      style={{ zIndex: 2 }}
                    />
                    <p
                      className="relative text-gray-400 text-sm leading-relaxed"
                      style={{ zIndex: 3 }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tech icons — matching image style (small circular icons) */}
                  <div
                    className={`flex gap-3 ${isEven ? "" : "lg:justify-end"}`}
                  >
                    {project.techIcons.map((src, idx) => (
                      <a
                        key={idx}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#110a1f] ring-1 ring-purple-500/25 flex items-center justify-center hover:bg-purple-500/15 hover:ring-purple-400/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300 shadow-[0_0_8px_rgba(139,92,246,0.08)]"
                      >
                        <img src={src} alt="tech" className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Browser mockup side — matching the image exactly */}
                <div className="flex-1 w-full">
                  <BrowserMockup mockup={project.mockup} live={project.live} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
