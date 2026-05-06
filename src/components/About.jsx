import React from "react";
import { motion } from "framer-motion";

const aboutImageUrl = "/images/about.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-about py-20 md:py-28 px-4 overflow-hidden relative"
      style={{ isolation: "isolate" }}
    >
      {/* ── Full-cover background image ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/c.png')",
          backgroundSize: "contain",
          backgroundPosition: "85% center",
          backgroundRepeat: "no-repeat",
          zIndex: -2,
        }}
      />

      {/* ── Dark overlay so text stays readable ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10, 5, 2, 0.72)",
          zIndex: -1,
        }}
      />

      {/* Subtle decorative circles (kept above overlay, below content) */}
      <div style={{
        position: "absolute", top: "10%", right: "-5%",
        width: "400px", height: "400px",
        borderRadius: "50%",
        border: "1px solid rgba(201,150,58,0.04)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", left: "-8%",
        width: "300px", height: "300px",
        borderRadius: "50%",
        border: "1px solid rgba(201,150,58,0.03)",
        pointerEvents: "none",
      }} />

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative">
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div style={{
            position: "relative",
            padding: "8px",
            background: "linear-gradient(135deg, rgba(201,150,58,0.3), rgba(92,26,26,0.2), rgba(201,150,58,0.15))",
            borderRadius: "4px",
          }}>
            {/* Corner ornaments */}
            {["top-0 left-0","top-0 right-0","bottom-0 left-0","bottom-0 right-0"].map((pos, i) => (
              <div key={i} style={{
                position: "absolute",
                width: "20px", height: "20px",
                borderTop: i < 2 ? "2px solid rgba(201,150,58,0.6)" : "none",
                borderBottom: i >= 2 ? "2px solid rgba(201,150,58,0.6)" : "none",
                borderLeft: i % 2 === 0 ? "2px solid rgba(201,150,58,0.6)" : "none",
                borderRight: i % 2 !== 0 ? "2px solid rgba(201,150,58,0.6)" : "none",
                top: i < 2 ? 0 : "auto",
                bottom: i >= 2 ? 0 : "auto",
                left: i % 2 === 0 ? 0 : "auto",
                right: i % 2 !== 0 ? 0 : "auto",
              }} />
            ))}
            <img
              src={aboutImageUrl}
              alt="About Zephyr Hall Day"
              className="w-full h-auto object-cover"
              style={{ borderRadius: "2px", maxHeight: "460px", display: "block" }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Pre-title */}
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "0.95rem",
            letterSpacing: "0.25em",
            color: "var(--color-antique-gold)",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}>
            ✦ Our Story ✦
          </p>

          <h2 className="section-title mb-2">About</h2>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            color: "var(--color-silk)",
            fontWeight: 400,
            marginBottom: "1rem",
          }}>
            Zephyr
          </h3>

          <div className="ornamental-divider" style={{ justifyContent: "flex-start", marginBottom: "1.5rem" }}>
            <div className="dot" /><div className="diamond" /><div className="dot" />
            <div style={{ height: "1px", flex: 1, maxWidth: "100px", background: "linear-gradient(90deg, rgba(201,150,58,0.5), transparent)" }} />
          </div>

          {[
            "Zephyr marks the much-anticipated Annual Hall Day and Reunion celebration of Pritilata Chhatrinibas, the vibrant girls' hostel at Kalyani Government Engineering College.",
            "It's a cherished tradition where current boarders showcase their incredible talents and alumni return to reconnect, reminisce, and celebrate the enduring bonds forged within our hostel walls.",
          ].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                color: "var(--color-parchment)",
                lineHeight: 1.85,
                marginBottom: "1.1rem",
                opacity: 0.88,
              }}
            >
              {para}
            </motion.p>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.15rem",
              fontStyle: "italic",
              color: "var(--color-silk)",
              lineHeight: 1.85,
              borderLeft: "2px solid rgba(201,150,58,0.4)",
              paddingLeft: "1rem",
              marginTop: "0.5rem",
            }}
          >
            Join us for an unforgettable evening filled with dazzling performances, heartwarming reunions, and the unique spirit that defines Pritilata Chhatrinibas!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;