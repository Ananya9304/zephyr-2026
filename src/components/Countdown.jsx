import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
  const targetDate = new Date("May 23, 2026 00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerBoxes = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section
      style={{
        minHeight: "70vh",
        background:
          "radial-gradient(circle at center, #3a2b24 0%, #120d0b 60%, #000 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Overlay glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(255,255,255,0.03), transparent, rgba(255,255,255,0.03))",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          zIndex: 2,
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {/* Subtitle */}
        <p
          style={{
            color: "#c9a66b",
            letterSpacing: "0.35em",
            fontSize: "0.8rem",
            marginBottom: "0.8rem",
            textTransform: "uppercase",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          — COUNTING DOWN —
        </p>

        {/* Main heading */}
        <h1
          style={{
            color: "#f4eee4",
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            fontWeight: "700",
            marginBottom: "0.8rem",
            fontFamily: "'Cinzel', serif",
            textShadow: "0 0 25px rgba(255,255,255,0.08)",
          }}
        >
          The Night Awaits
        </h1>

        {/* Date */}
        <p
          style={{
            color: "#b89b6d",
            letterSpacing: "0.3em",
            fontSize: "0.75rem",
            marginBottom: "3rem",
            textTransform: "uppercase",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          23rd May 2026 
        </p>

        {/* Timer */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {timerBoxes.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                width: "100px",
                height: "100px",
                border: "1px solid rgba(201,166,107,0.35)",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(4px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 0 20px rgba(0,0,0,0.3)",
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  color: "#f4eee4",
                  fontWeight: "700",
                  fontFamily: "'Cinzel', serif",
                }}
              >
                {String(item.value).padStart(2, "0")}
              </span>

              <span
                style={{
                  marginTop: "0.4rem",
                  fontSize: "0.65rem",
                  letterSpacing: "0.25em",
                  color: "#c9a66b",
                  textTransform: "uppercase",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Countdown;