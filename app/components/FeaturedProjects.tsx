"use client";

import { motion } from "framer-motion";

const projects = [
  {
    label: "Featured Project",
    title: "iSocials — IELTS Learning",
    description:
      "An interactive IELTS learning platform built with React and TypeScript. Features practice exercises for all four skills, progress tracking, and leaderboards. Powered by a Node.js backend with MongoDB Cloud for data storage.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/ariushieu/",
    live: "https://www.isocials.site/",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    ],
    previewImage: "/preview/isocials.PNG",
  },
  {
    label: "Featured Project",
    title: "TopPhimDinh",
    description:
      "A movie streaming website built with React and TypeScript. The frontend calls directly to third-party movie APIs to fetch and display content — no backend needed. Features include browsing, searching, and watching movies with a fully responsive UI.",
    tags: ["React", "TypeScript", "REST API"],
    github: "https://github.com/ariushieu/",
    live: "https://topphimdinh.site/",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    ],
    previewImage: "/preview/topphimdinh.PNG",
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-14 px-6">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-125 h-125 bg-purple-700/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 left-1/4 w-100 h-100 bg-pink-600/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col gap-28">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" as const }}
                className="relative"
              >
                {/* Grid layout — both columns overlap in the middle */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  {/* Preview image — spans 7 columns, positioned on one side */}
                  <div
                    className={`lg:row-start-1 ${
                      isEven
                        ? "lg:col-start-6 lg:col-end-13"
                        : "lg:col-start-1 lg:col-end-8"
                    }`}
                  >
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="block group"
                    >
                      <div className="relative rounded-lg overflow-hidden border border-purple-500/15 shadow-2xl shadow-purple-900/20">
                        {/* Browser chrome bar */}
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#110a20] border-b border-purple-500/15">
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500/40" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                            <div className="w-2 h-2 rounded-full bg-green-500/40" />
                          </div>
                          <div className="flex-1 ml-3">
                            <div className="w-32 h-3 rounded bg-purple-500/8 mx-auto" />
                          </div>
                        </div>

                        {/* Screenshot or placeholder */}
                        <div className="relative">
                          <img
                            src={
                              project.previewImage || "/project_placeholder.png"
                            }
                            alt={project.title}
                            className="w-full h-auto max-h-80 object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-[#0a0515]/60 to-transparent pointer-events-none" />
                        </div>
                      </div>
                    </motion.a>
                  </div>

                  {/* Text side — spans 7 columns, overlaps the image */}
                  <div
                    className={`lg:row-start-1 relative z-10 mt-6 lg:mt-0 ${
                      isEven
                        ? "lg:col-start-1 lg:col-end-7 lg:text-left"
                        : "lg:col-start-7 lg:col-end-13 lg:text-right"
                    }`}
                  >
                    <p className="text-purple-400 text-xs font-medium tracking-wider uppercase mb-2">
                      {project.label}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                      {project.title}
                    </h3>

                    {/* Description glass card — semi-transparent, sits ON TOP of the image */}
                    <div className="relative p-5 mb-5 rounded-xl overflow-hidden shadow-xl">
                      <div className="absolute inset-0 rounded-xl bg-[#0d0620]/20 backdrop-blur-md border border-purple-500/20" />
                      <div className="absolute inset-0 bg-linear-to-br from-purple-500/8 via-transparent to-purple-600/5 pointer-events-none" />
                      <p className="relative text-gray-400 text-sm leading-relaxed z-10">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech icons */}
                    <div
                      className={`flex gap-3 ${
                        isEven ? "" : "lg:justify-end"
                      }`}
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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
