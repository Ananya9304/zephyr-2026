import React from "react";
import CountdownTimer from "./Countdown";
import { motion } from "framer-motion";

const HeroSection = () => {
  const eventDate = "2025-05-10T18:00:00";

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* 🌌 Background (dark + subtle zoom animation) */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          zIndex: 0,
          background: `
            linear-gradient(to bottom, rgba(8,4,2,0.9), rgba(20,10,5,0.95)),
            url('/images/royal-bg.jpg') center/cover no-repeat
          `,
        }}
      />

      {/* 🌑 Extra dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.3), rgba(0,0,0,0.85))",
        }}
      />

      {/* ✨ Mandala / glow overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          backgroundImage: `
            radial-gradient(circle at 50% 50%, transparent 30%, rgba(44,24,16,0.3) 70%),
            radial-gradient(circle at 20% 80%, rgba(201,150,58,0.06) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(114,47,55,0.08) 0%, transparent 40%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* 🌟 Content */}
      <div className="relative text-center px-4 z-10">

        {/* 👑 Crown */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.6 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="text-4xl mb-2"
          style={{ filter: "drop-shadow(0 0 12px rgba(201,150,58,0.8))" }}
        >
          👑
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="tracking-[0.3em] text-sm md:text-base italic uppercase mb-3"
          style={{ color: "var(--color-parchment)" }}
        >
          Pritilata Chhatrinibas Presents
        </motion.p>

        {/* Title */}
        <motion.h1
  initial={{ opacity: 0, y: 40, letterSpacing: "0.5em" }}
  animate={{ opacity: 1, y: 0, letterSpacing: "0.1em" }}
  transition={{ duration: 1.2, delay: 0.4 }}
  className="text-[clamp(4rem,12vw,9rem)] font-extrabold mb-2 shine-text"
  style={{
    fontFamily: "'Cinzel', serif",
    background:
      "linear-gradient(120deg, #EDD9A3 0%, #C9963A 30%, #ffffff 45%, #C9963A 60%, #EDD9A3 100%)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    filter: "drop-shadow(0 6px 25px rgba(201,150,58,0.4))",
  }}
>
  Zephyr
</motion.h1>
<style>{`
  .shine-text {
    animation: shineMove 3s linear infinite;
  }

  @keyframes shineMove {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }
`}</style>

        {/* Year */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-yellow-500" />
          <span className="tracking-[0.5em] text-sm text-[var(--color-silk)]">
            2026
          </span>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-yellow-500" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-xl mx-auto mb-8 leading-relaxed"
          style={{ color: "var(--color-parchment)" }}
        >
          Feel the energy of Zephyr 2026 — where talent, grace, and
          unforgettable memories come alive.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <CountdownTimer targetDate={eventDate} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-yellow-400/60">
          <span className="text-xs tracking-widest">Scroll</span>
          <div className="animate-bounce text-xl">⌄</div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;