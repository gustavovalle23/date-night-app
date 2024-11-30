"use client";

import { motion } from "framer-motion";

export default function FloatingHearts() {
  if (typeof window === "undefined") return null;

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-500"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: "2rem",
          }}
          animate={{
            y: -500,
            x: Math.random() * 200 - 100,
            opacity: 0,
          }}
          transition={{ duration: 4, delay: Math.random() * 2 }}
        >
          ❤️
        </motion.div>
      ))}
    </motion.div>
  );
}
