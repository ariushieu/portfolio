"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Facebook } from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://web.facebook.com/nq.hie.05",
    label: "Facebook",
  },
  {
    icon: Github,
    href: "https://github.com/ariushieu/",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/qhie/",
    label: "LinkedIn",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-14 px-6">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-purple-700/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold neon-text mb-6">
            Contact
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mb-8" />

          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
            I&apos;m currently looking to join a cross-functional team that
            values improving people&apos;s lives through accessible design, or
            have a project in mind? Let&apos;s connect.
          </p>

          {/* Email */}
          <motion.a
            href="mailto:hieunguyen2005q@gmail.com"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm group mb-10"
          >
            <Mail size={18} />
            <span className="underline decoration-purple-500/40 underline-offset-4 group-hover:decoration-purple-400/80 transition-all">
              hieunguyen2005q@gmail.com
            </span>
            <ArrowUpRight
              size={14}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </motion.a>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="w-10 h-10 rounded-full border border-purple-500/20 bg-purple-500/5 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400/40 hover:bg-purple-500/10 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-20 border-t border-purple-500/10 pt-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>
            Designed & Built by{" "}
            <span className="text-purple-400">Hieu Quoc Nguyen</span>
          </p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
