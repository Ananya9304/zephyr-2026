import React from "react";
import logo1 from "../assets/logo.png";
import logo2 from "../assets/zephyr w.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-royal py-10 px-4">
      {/* Top ornamental divider */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
        marginBottom: "2.5rem",
      }}>
        <div style={{ height: "1px", flex: 1, maxWidth: "200px", background: "linear-gradient(90deg, transparent, rgba(201,150,58,0.4))" }} />
        <span style={{ color: "var(--color-antique-gold)", fontSize: "0.7rem" }}>✦ ✦ ✦</span>
        <div style={{ height: "1px", flex: 1, maxWidth: "200px", background: "linear-gradient(270deg, transparent, rgba(201,150,58,0.4))" }} />
      </div>

      <div className="container mx-auto text-center">
        {/* Logos */}
        <div className="flex justify-center items-center gap-6 mb-5">
          <img src={logo1} alt="Pritilata Logo" className="h-16 w-16 object-contain" style={{ opacity: 0.85 }} />
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(180deg, transparent, rgba(201,150,58,0.4), transparent)" }} />
          <img src={logo2} alt="Zephyr Logo" className="h-14 w-auto object-contain" style={{ opacity: 0.85 }} />
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "1.1rem",
          letterSpacing: "0.2em",
          background: "linear-gradient(135deg, var(--color-silk), var(--color-antique-gold), var(--color-gold-shimmer))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginBottom: "0.6rem",
        }}>
          Zephyr 2026
        </h2>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "0.85rem",
          color: "rgba(212,180,131,0.55)",
          letterSpacing: "0.08em",
          marginBottom: "0.4rem",
        }}>
          Pritilata Chhatrinibas, Kalyani Government Engineering College
        </p>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "0.82rem",
          color: "rgba(212,180,131,0.4)",
          marginBottom: "1.2rem",
        }}>
          © {currentYear} Pritilata Chhatrinibas. All Rights Reserved.
        </p>

        {/* Social */}
        <div className="flex justify-center items-center gap-4 mb-4">
          <a
            href="https://www.facebook.com/ZephyrPC"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "36px", height: "36px",
              border: "1px solid rgba(201,150,58,0.25)",
              borderRadius: "50%",
              transition: "all 0.3s ease",
              color: "var(--color-parchment)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(201,150,58,0.6)";
              e.currentTarget.style.boxShadow = "0 0 12px rgba(201,150,58,0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(201,150,58,0.25)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
              <path d="M355.7 170.7h-52.5v-35.3c0-12.9 8.5-15.9 14.5-15.9h36.8V73.6l-50.7-.2c-56.2 0-69.3 42.1-69.3 69.2v28.1h-42.6v57.8h42.6v151.5h64.8V228.5h45.1l7.2-57.8z"/>
            </svg>
          </a>
        </div>

        {/* Bottom text */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "0.78rem",
          color: "rgba(212,180,131,0.3)",
          letterSpacing: "0.1em",
        }}>
          Website crafted with ❤️ &amp; a touch of royalty
        </p>
      </div>
    </footer>
  );
};

export default Footer;
