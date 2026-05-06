// Maharani Curtain Loader
import React, { useEffect, useRef } from "react";

const Loader = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Open curtains after a short delay
    const timer = setTimeout(() => {
      if (leftRef.current) leftRef.current.classList.add("open");
      if (rightRef.current) rightRef.current.classList.add("open");
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="maharani-loader">
      {/* Left Curtain */}
      <div ref={leftRef} className="curtain-left">
        <div className="curtain-rope" />
      </div>

      {/* Right Curtain */}
      <div ref={rightRef} className="curtain-right">
        <div className="curtain-rope" />
      </div>

      {/* Center Emblem */}
      <div className="loader-emblem">
        {/* Decorative mandala rings */}
        <svg
          width="200" height="200"
          viewBox="0 0 200 200"
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            opacity: 0.15,
            animation: "spin 20s linear infinite",
            pointerEvents: "none",
          }}
        >
          <defs>
            <style>{`@keyframes spin { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }`}</style>
          </defs>
          <circle cx="100" cy="100" r="95" fill="none" stroke="#C9963A" strokeWidth="0.5" strokeDasharray="4 6"/>
          <circle cx="100" cy="100" r="75" fill="none" stroke="#C9963A" strokeWidth="0.5" strokeDasharray="2 4"/>
          {/* Petal pattern */}
          {[0,45,90,135,180,225,270,315].map((a, i) => (
            <ellipse
              key={i}
              cx={100 + 55 * Math.cos((a * Math.PI) / 180)}
              cy={100 + 55 * Math.sin((a * Math.PI) / 180)}
              rx="12" ry="20"
              fill="none" stroke="#C9963A" strokeWidth="0.5"
              transform={`rotate(${a}, ${100 + 55 * Math.cos((a * Math.PI) / 180)}, ${100 + 55 * Math.sin((a * Math.PI) / 180)})`}
            />
          ))}
          <circle cx="100" cy="100" r="15" fill="none" stroke="#C9963A" strokeWidth="0.8"/>
        </svg>

        <span className="loader-crown" role="img" aria-label="crown">👑</span>

        <div className="loader-line" />
        <div className="loader-welcome">Welcome to</div>
        <div className="loader-name">Zephyr 2026</div>
        <div className="loader-line" style={{ animationDelay: "1.1s" }} />

        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "0.8rem",
          letterSpacing: "0.2em",
          color: "rgba(212,180,131,0.7)",
          marginTop: "0.6rem",
          opacity: 0,
          animation: "fadeInText 0.8s ease-out 1.2s forwards",
        }}>
          Pritilata Chhatrinibas
        </div>
      </div>

      <style>{`
        @keyframes fadeInText {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
