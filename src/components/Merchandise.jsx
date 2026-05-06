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
        className="merch-bg"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/zg.png')",
          backgroundSize: "contain",
          backgroundPosition: "5% center",
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
        {/* LEFT CONTENT */}
        <motion.div
          className="w-full md:w-1/2 order-2 md:order-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "0.95rem",
              letterSpacing: "0.25em",
              color: "var(--color-antique-gold)",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            ✦ Exclusive Collection ✦
          </p>

          <h2 className="section-title mb-1">Grab Your</h2>

          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              color: "var(--color-silk)",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Merchandise
          </h3>

          <div
            className="ornamental-divider"
            style={{
              justifyContent: "flex-start",
              marginBottom: "1.5rem",
            }}
          >
            <div className="dot" />
            <div className="diamond" />
            <div className="dot" />

            <div
              style={{
                height: "1px",
                flex: 1,
                maxWidth: "100px",
                background:
                  "linear-gradient(90deg, rgba(201,150,58,0.5), transparent)",
              }}
            />
          </div>

          {[
            "Get the official Zephyr '25 T-shirt — designed with the unique spirit of Pritilata Chhatrinibas, this limited-edition tee is the perfect way to carry a piece of the celebration with you.",
            'Made with comfortable fabric and featuring an exclusive "Unfiltered" design. Wear your memories and show your support!',
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
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "2rem",
              padding: "0.8rem 1rem",
              background: "rgba(201,150,58,0.06)",
              border: "1px solid rgba(201,150,58,0.2)",
              borderRadius: "2px",
            }}
          ></motion.div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          className="w-full md:w-1/2 order-1 md:order-2"
          style={{
            marginTop: "clamp(2rem, 5vw, 5rem)",
          }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div
            style={{
              position: "relative",
              padding: "8px",
              background:
                "linear-gradient(135deg, rgba(201,150,58,0.25), rgba(92,26,26,0.15), rgba(201,150,58,0.12))",
              borderRadius: "4px",
            }}
          >
            {[
              "top-0 left-0",
              "top-0 right-0",
              "bottom-0 left-0",
              "bottom-0 right-0",
            ].map((pos, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "22px",
                  height: "22px",
                  borderTop:
                    i < 2
                      ? "2px solid rgba(201,150,58,0.55)"
                      : "none",
                  borderBottom:
                    i >= 2
                      ? "2px solid rgba(201,150,58,0.55)"
                      : "none",
                  borderLeft:
                    i % 2 === 0
                      ? "2px solid rgba(201,150,58,0.55)"
                      : "none",
                  borderRight:
                    i % 2 !== 0
                      ? "2px solid rgba(201,150,58,0.55)"
                      : "none",
                  top: i < 2 ? 0 : "auto",
                  bottom: i >= 2 ? 0 : "auto",
                  left: i % 2 === 0 ? 0 : "auto",
                  right: i % 2 !== 0 ? 0 : "auto",
                }}
              />
            ))}

            <img
              src={merchandiseImageUrl}
              alt="Zephyr Merchandise"
              style={{
                borderRadius: "2px",
                maxHeight: "460px",
                display: "block",
                width: "100%",
                objectFit: "contain",
              }}
            />

            {/* PREORDER BOX */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                marginTop: "1.5rem",
                padding: "1.5rem",
                border: "1px solid rgba(201,150,58,0.22)",
                background: "rgba(15, 8, 4, 0.78)",
                backdropFilter: "blur(14px)",
                borderRadius: "6px",
                position: "relative",
                overflow: "hidden",
                boxShadow:
                  "0 0 40px rgba(201,150,58,0.08), 0 0 120px rgba(92,26,26,0.18)",
              }}
            >
              {/* AMBIENT GLOW */}
              <div
                style={{
                  position: "absolute",
                  width: "420px",
                  height: "420px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(201,150,58,0.12) 0%, rgba(201,150,58,0.02) 45%, transparent 75%)",
                  bottom: "-220px",
                  right: "-120px",
                  filter: "blur(40px)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(92,26,26,0.22) 0%, transparent 70%)",
                  top: "-120px",
                  left: "-80px",
                  filter: "blur(30px)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* QR */}
                <div style={{ textAlign: "center" }}>
                  <img
                    src="/images/qr.png"
                    alt="Payment QR"
                    style={{
                      width: "130px",
                      height: "130px",
                      objectFit: "cover",
                      background: "#fff",
                      padding: "5px",
                      border: "1px solid rgba(201,150,58,0.3)",
                    }}
                  />

                  <p
                    style={{
                      marginTop: "0.7rem",
                      color: "var(--color-antique-gold)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    Scan & Pay
                  </p>

                  <p
                    style={{
                      marginTop: "0.55rem",
                      color: "var(--color-silk)",
                      fontSize: "0.82rem",
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.04em",
                      lineHeight: 1.6,
                      textAlign: "center",
                    }}
                  >
                    Price <br />
                    ₹399 • Half Sleeve <br />
                    ₹450 • Full Sleeve
                  </p>
                </div>

                {/* TEXT */}
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--color-silk)",
                      fontSize: "1.4rem",
                      marginBottom: "0.8rem",
                    }}
                  >
                    Reserve Your Zephyr Tee
                  </h4>

                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "var(--color-parchment)",
                      lineHeight: 1.8,
                      opacity: 0.85,
                      marginBottom: "1rem",
                      fontSize: "1.05rem",
                    }}
                  >
                    Scan the QR code to complete your payment and fill the
                    preorder form with your size and details.
                  </p>

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc259GgvZLXAi6F_37xh6CYoYbPfwOWCyVipkKYUFOCFHI_vg/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-maharani"
                    style={{
                      display: "inline-block",
                      textDecoration: "none",
                      marginBottom: "1rem",
                    }}
                  >
                    Fill Preorder Form
                  </a>

                  {/* CONTACT */}
                  <div
                    style={{
                      marginTop: "0.5rem",
                      borderTop: "1px solid rgba(201,150,58,0.15)",
                      paddingTop: "0.8rem",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "var(--color-antique-gold)",
                        fontSize: "1rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      For more queries contact
                    </p>

                    <a
                      href="tel:+919875336211"
                      style={{
                        color: "var(--color-silk)",
                        textDecoration: "none",
                        fontSize: "1.05rem",
                        letterSpacing: "0.08em",
                      }}
                    >
                      +91 98753 36211
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* BOTTOM AMBIENT TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{
                marginTop: "3.5rem",
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Ornamental line */}
              <div
                style={{
                  width: "180px",
                  height: "1px",
                  margin: "0 auto 1.2rem",
                  background:
                    "linear-gradient(to right, transparent, rgba(201,150,58,0.7), transparent)",
                }}
              />

              {/* Quote */}
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  color: "rgba(201,150,58,0.72)",
                  fontSize: "1.15rem",
                  letterSpacing: "0.06em",
                  lineHeight: 1.8,
                  maxWidth: "520px",
                  margin: "0 auto",
                  textShadow: "0 0 20px rgba(201,150,58,0.08)",
                }}
              >
                “Carry the spirit of Zephyr beyond the celebration.”
              </p>

              {/* Soft ambient glow */}
              <div
                style={{
                  position: "absolute",
                  width: "300px",
                  height: "120px",
                  background:
                    "radial-gradient(circle, rgba(201,150,58,0.08) 0%, transparent 70%)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: "-40px",
                  filter: "blur(30px)",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchandiseSection;