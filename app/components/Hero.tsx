"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "BE Developer.",
  "Spring Boot Engineer.",
  // "Problem Solver.",
  "Full-Stack Learner.",
];

function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 2000,
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text;
}

export default function Hero() {
  const typedText = useTypewriter(roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pb-16 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-200 h-150 bg-purple-600/7 rounded-full blur-[150px]" />
        <div className="absolute top-[20%] left-[15%] w-75 h-75 bg-pink-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-start max-w-3xl w-full mx-auto">
        {/* Top section — avatar + text side by side like image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-6 mb-6"
        >
          {/* Avatar with glowing orb */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 -m-4 rounded-full bg-purple-500/20 blur-xl animate-pulse-ring" />
            <div className="light-avatar-bg relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#1a0a2e] border border-purple-500/30 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.3)]">
              <img src="/avatar.jpg" alt="Hieu Nguyen" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right of avatar */}
          <div className="pt-1">
            <p className="text-sm text-gray-400 mb-1">
              Hello! I'm{" "}
              <span className="text-purple-400 font-medium">
                Hieu Nguyen
              </span>
            </p>
            <p className="text-xs text-gray-500 mb-1">A developer who</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
              Judges a book
              <br />
              by its{" "}
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  cover
                </span>
                <svg
                  className="absolute -inset-x-2 -inset-y-1 w-[calc(100%+16px)] h-[calc(100%+8px)] md:-inset-x-4 md:-inset-y-2.5 md:w-[calc(100%+32px)] md:h-[calc(100%+20px)] pointer-events-none"
                  viewBox="0 0 120 50"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <ellipse
                    cx="60"
                    cy="25"
                    rx="55"
                    ry="20"
                    stroke="url(#circleGrad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="300"
                    strokeDashoffset="300"
                    transform="rotate(-2 60 25)"
                    style={{
                      animation: "draw-circle 1.2s ease-out 0.8s forwards",
                    }}
                  />
                  <defs>
                    <linearGradient id="circleGrad" x1="0" y1="0" x2="120" y2="50">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              ...
            </h1>
            <p className="text-[10px] text-gray-600 mt-1.5">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </motion.div>

        {/* Typewriter role section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 w-full"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            I&apos;m a{" "}
            <span className="typewriter-cursor bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {typedText}
            </span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Currently, I&apos;m a BE Developer (Spring Boot) studying at{" "}
            <span className="text-purple-400">
              Hanoi University of Natural Resources and Environment
            </span>
            .
          </p>
        </motion.div>

        {/* Bio paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 max-w-xl text-gray-400 text-sm leading-relaxed"
        >
          A passionate backend developer graduated from FPT Aptech and currently
          in third year at Hanoi University of Natural Resources and
          Environment. I build robust, scalable applications using Spring Boot
          and love creating meaningful digital products that solve real
          problems.
        </motion.p>
      </div>
    </section>
  );
}
