"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-14 px-6 pb-28">
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
            I&apos;m currently open to new opportunities — whether it&apos;s a
            full-time position, freelance project, or just a chat about tech.
            Let&apos;s connect.
          </p>

          {/* Email */}
          <motion.a
            href="mailto:hieunguyen2005q@gmail.com"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm group"
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
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-20 border-t border-purple-500/10 pt-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>
            Designed & Built by{" "}
            <span className="text-purple-400">Hieu Nguyen</span>
          </p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
