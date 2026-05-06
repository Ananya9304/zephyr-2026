import React from "react";
import { motion } from "framer-motion";

const merchandiseImageUrl = "/images/merchandise.png";

const MerchandiseSection = () => {
  return (
   <section
  id="merchandise"
  className="section-merchandise py-20 md:py-28 px-4 overflow-hidden relative"
  style={{ isolation: "isolate" }}
>
  {/* LEFT BACKGROUND IMAGE */}
<div
  style={{
    position: "absolute",
    inset: 0,
    backgroundImage: "url('/images/zg.png')",
    backgroundSize: "contain",
    backgroundPosition: "5% center", // ⭐ LEFT SIDE
    backgroundRepeat: "no-repeat",
    zIndex: -2,
  }}
/>

{/* DARK OVERLAY */}
<div
  style={{
    position: "absolute",
    inset: 0,
    background: "rgba(10, 5, 2, 0.72)",
    zIndex: -1,
  }}
/>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Content */}
        <motion.div
          className="w-full md:w-1/2 order-2 md:order-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.25,0.1,0.25,1] }}
        >
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "0.95rem",
            letterSpacing: "0.25em",
            color: "var(--color-antique-gold)",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}>
            ✦ Exclusive Collection ✦
          </p>

          <h2 className="section-title mb-1">Grab Your</h2>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            color: "var(--color-silk)",
            fontWeight: 400,
            marginBottom: "1rem",
          }}>
            Merchandise
          </h3>

          <div className="ornamental-divider" style={{ justifyContent: "flex-start", marginBottom: "1.5rem" }}>
            <div className="dot" /><div className="diamond" /><div className="dot" />
            <div style={{ height: "1px", flex: 1, maxWidth: "100px", background: "linear-gradient(90deg, rgba(201,150,58,0.5), transparent)" }} />
          </div>

          {[
            "Get the official Zephyr '25 T-shirt — designed with the unique spirit of Pritilata Chhatrinibas, this limited-edition tee is the perfect way to carry a piece of the celebration with you.",
            "Made with comfortable fabric and featuring an exclusive \"Unfiltered\" design. Wear your memories and show your support!",
          ].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                color: "var(--color-parchment)",
                lineHeight: 1.85,
                marginBottom: "1rem",
                opacity: 0.88,
              }}
            >
              {para}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              display: "flex", alignItems: "center", gap: "10px",
              marginBottom: "2rem",
              padding: "0.8rem 1rem",
              background: "rgba(201,150,58,0.06)",
              border: "1px solid rgba(201,150,58,0.2)",
              borderRadius: "2px",
            }}
          >
            <span style={{ color: "var(--color-antique-gold)" }}>✦</span>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1rem",
              color: "var(--color-silk)",
            }}>
              Pre-order: <a href="tel:+919875336211" style={{ color: "var(--color-antique-gold)" }}>+91 98753 36211</a>
            </span>
          </motion.div>

          <motion.button
            className="btn-maharani"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Pre-Order Now
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 order-1 md:order-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25,0.1,0.25,1] }}
        >
          <div style={{
            position: "relative",
            padding: "8px",
            background: "linear-gradient(135deg, rgba(201,150,58,0.25), rgba(92,26,26,0.15), rgba(201,150,58,0.12))",
            borderRadius: "4px",
          }}>
            {["top-0 left-0","top-0 right-0","bottom-0 left-0","bottom-0 right-0"].map((pos, i) => (
              <div key={i} style={{
                position: "absolute",
                width: "22px", height: "22px",
                borderTop: i < 2 ? "2px solid rgba(201,150,58,0.55)" : "none",
                borderBottom: i >= 2 ? "2px solid rgba(201,150,58,0.55)" : "none",
                borderLeft: i % 2 === 0 ? "2px solid rgba(201,150,58,0.55)" : "none",
                borderRight: i % 2 !== 0 ? "2px solid rgba(201,150,58,0.55)" : "none",
                top: i < 2 ? 0 : "auto",
                bottom: i >= 2 ? 0 : "auto",
                left: i % 2 === 0 ? 0 : "auto",
                right: i % 2 !== 0 ? 0 : "auto",
              }} />
            ))}
            <img
              src={merchandiseImageUrl}
              alt="Zephyr Merchandise"
              style={{ borderRadius: "2px", maxHeight: "460px", display: "block", width: "100%", objectFit: "contain" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchandiseSection;
