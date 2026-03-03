"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "FPT Aptech",
    role: "Software Engineering Student (Graduated)",
    description:
      "Completed an international software engineering program focused on Java, Spring Boot, databases, and full-stack development practices.",
    period: "Graduated",
    iconUrl: "/logo_aptech.png",
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    company: "Hanoi University of Natural Resources",
    role: "Third Year Student",
    description:
      "Currently pursuing a degree focused on information technology, software architecture, and enterprise application development.",
    period: "3rd Year",
    iconUrl: "/logo_hunre.jpg",
    color: "from-pink-500/20 to-purple-500/20",
  }
  // {
  //   company: "TopPhimDinh.site",
  //   role: "Full-Stack Developer",
  //   description:
  //     "Built a full movie streaming website with Spring Boot backend, responsive UI, user authentication, and content management system.",
  //   period: "2024",
  //   iconUrl:
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  //   color: "from-blue-500/20 to-purple-500/20",
  // },
  // {
  //   company: "iSocials.site",
  //   role: "Full-Stack Developer",
  //   description:
  //     "Developed an IELTS learning platform with interactive exercises, progress tracking, and a Spring Boot powered REST API backend.",
  //   period: "2024",
  //   iconUrl:
  //     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  //   color: "from-emerald-500/20 to-purple-500/20",
  // },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WorkExperience() {
  return (
    <section id="about" className="relative py-24 px-6">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-125 h-125 bg-purple-700/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-pink-600/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold neon-text">
            Education
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mt-4" />
        </motion.div>

        {/* 2x2 Grid — glassmorphism cards matching the image */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative cursor-pointer"
            >
              {/* Gradient border */}
              <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-purple-500/50 via-purple-600/15 to-indigo-500/40 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative rounded-2xl bg-[#0a0515]/95 backdrop-blur-xl p-6 overflow-hidden">
                {/* Inner subtle gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/[0.04] via-transparent to-indigo-500/[0.04] pointer-events-none" />
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-3">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-full bg-linear-to-br ${exp.color} flex items-center justify-center border border-purple-500/20 shrink-0 overflow-hidden`}
                    >
                      <img
                        src={exp.iconUrl}
                        alt={exp.company}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm leading-tight">
                        {exp.company}
                      </h3>
                      <p className="text-purple-300/80 text-xs mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <button className="px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider bg-purple-500/10 border border-purple-500/25 rounded text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
