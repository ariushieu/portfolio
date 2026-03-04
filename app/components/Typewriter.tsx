"use client";

import { useEffect, useState } from "react";

const roles = ["BE Developer.", "Spring Boot Engineer.", "Full-Stack Learner."];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 3000);
          }
        } else {
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % roles.length);
          } else {
            setText(currentWord.slice(0, text.length - 1));
          }
        }
      },
      isDeleting ? 80 : 140,
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="typewriter-cursor bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      {text}
    </span>
  );
}
