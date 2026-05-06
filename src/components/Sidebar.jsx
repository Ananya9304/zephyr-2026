import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import logo from "../assets/zephyr w.png";

const Sidebar = ({ isOpen, onMenuToggle }) => {
  const sidebarVariants = {
    open: { x: 0, transition: { type: "tween", duration: 0.4, ease: [0.25,0.1,0.25,1] } },
    closed: { x: "-100%", transition: { type: "tween", duration: 0.4, ease: [0.25,0.1,0.25,1] } },
  };

  const navItems = ["Home","About","Merchandise","Gallery","Events"];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          style={{ background: "rgba(13,3,3,0.7)", backdropFilter: "blur(4px)" }}
          onClick={onMenuToggle}
        />
      )}

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="sidebar-royal fixed top-0 left-0 h-full w-64 text-white p-6 z-40 shadow-2xl md:hidden"
      >
        {/* Gold rope top */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "4px",
          background: "linear-gradient(90deg, #3D0F0F, #C9963A, #E8C97A, #C9963A, #3D0F0F)"
        }} />

        <div className="flex justify-between items-center mb-8 pt-2">
          <img className="h-12 w-auto" src={logo} alt="Zephyr" />
          <button
            onClick={onMenuToggle}
            className="focus:outline-none transition-colors"
            style={{ color: "var(--color-parchment)" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--color-antique-gold)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--color-parchment)"}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Divider */}
        <div className="ornamental-divider mb-6">
          <div className="dot" /><div className="diamond" /><div className="dot" />
        </div>

        <nav className="flex flex-col space-y-1">
          {navItems.map((item, idx) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={onMenuToggle}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-parchment)",
                padding: "0.75rem 0.5rem",
                borderBottom: "1px solid rgba(201,150,58,0.1)",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--color-antique-gold)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--color-parchment)"}
            >
              <span style={{ color: "var(--color-antique-gold)", fontSize: "0.6rem" }}>✦</span>
              {item}
            </a>
          ))}
        </nav>

        {/* Bottom ornament */}
        <div style={{ position: "absolute", bottom: "2rem", left: "1.5rem", right: "1.5rem", textAlign: "center" }}>
          <div className="ornamental-divider">
            <div className="dot" /><div className="diamond" /><div className="dot" />
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "0.8rem", color: "rgba(212,180,131,0.5)" }}>
            Pritilata Chhatrinibas
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
