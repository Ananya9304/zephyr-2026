import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timer);
  });

  const allZero = Object.values(timeLeft).every((v) => v === 0);

  return (
    <div className="flex justify-center mt-6 flex-wrap gap-3">
      {allZero ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            color: "var(--color-antique-gold)",
            textShadow: "0 0 20px rgba(201,150,58,0.8)",
            letterSpacing: "0.1em",
          }}
        >
          ✦ The Day Is Here ✦
        </motion.div>
      ) : (
        Object.entries(timeLeft).map(([interval, value], idx) => (
          <motion.div
            key={interval}
            className="countdown-box"
            style={{
              borderRadius: "4px",
              padding: "1rem 1.2rem",
              minWidth: "76px",
              textAlign: "center",
              position: "relative",
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
          >
            {/* Corner ornaments */}
            <span style={{ position: "absolute", top: "3px", left: "4px", color: "rgba(201,150,58,0.4)", fontSize: "8px" }}>✦</span>
            <span style={{ position: "absolute", top: "3px", right: "4px", color: "rgba(201,150,58,0.4)", fontSize: "8px" }}>✦</span>

            <span style={{
              display: "block",
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 700,
              background: "linear-gradient(135deg, var(--color-silk), var(--color-antique-gold))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1.1,
            }}>
              {String(value).padStart(2, "0")}
            </span>
            <span style={{
              display: "block",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-parchment)",
              opacity: 0.7,
              marginTop: "4px",
            }}>
              {interval}
            </span>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default CountdownTimer;
