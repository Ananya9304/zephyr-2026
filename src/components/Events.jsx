import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

const events = [
  { name: "Group Dance", imageUrl: "/images/Group-dance-6.png", description: "Energetic crew performances — grace, rhythm, and unity.", icon: "💃" },
  { name: "Drama", imageUrl: "/images/drama.jpg", description: "Compelling stories brought to life with emotion and art.", icon: "🎭" },
  { name: "Ramp Walk", imageUrl: "/images/Ramp-walk-4.jpg", description: "Showcasing style, confidence, and regal elegance.", icon: "👗" },
  { name: "Fitoor", imageUrl: "/images/Fitoor-1.jpg", description: "Raw musical energy, rocking tunes and passion.", icon: "🎵" },
  { name: "Live Music", imageUrl: "/images/band-2.png", description: "Feel the beat of live performance, loud and soulful.", icon: "🎸" },
  { name: "DJ Night", imageUrl: "/images/dj.jpg", description: "Dance till dawn — let the night come alive!", icon: "🎧" },
];

const EventsSection = () => {
  return (
    <section id="events" className="section-events py-20 md:py-28 px-4 overflow-hidden">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "0.9rem",
            letterSpacing: "0.3em",
            color: "var(--color-antique-gold)",
            textTransform: "uppercase",
            marginBottom: "0.4rem",
          }}>
            ✦ The Grand Lineup ✦
          </p>
          <h2 className="section-title">Events</h2>
        </motion.div>

        <div className="ornamental-divider" style={{ marginBottom: "3rem" }}>
          <div className="dot" /><div className="diamond" /><div className="dot" />
        </div>

        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          coverflowEffect={{ rotate: 25, stretch: 0, depth: 120, modifier: 1, slideShadows: true }}
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 12 },
            640: { slidesPerView: 2.3, spaceBetween: 18 },
            1024: { slidesPerView: 3, spaceBetween: 25 },
          }}
          className="!pb-12 !pt-4"
        >
          {events.map((event, index) => (
            <SwiperSlide
              key={index}
              className="group relative rounded-sm overflow-hidden shadow-2xl min-h-[380px] bg-cover bg-center"
              style={{ backgroundImage: `url(${event.imageUrl})` }}
            >
              {/* Dark warm overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(28,8,8,0.88) 0%, rgba(28,8,8,0.4) 50%, rgba(28,8,8,0.2) 100%)",
                transition: "all 0.4s ease",
              }} className="group-hover:opacity-90" />

              {/* Gold border glow on hover */}
              <div style={{
                position: "absolute", inset: 0,
                border: "1px solid rgba(201,150,58,0)",
                transition: "border-color 0.4s ease",
                pointerEvents: "none",
              }} className="group-hover:border-amber-600/40" />

              {/* Content */}
              <div style={{
                position: "relative", zIndex: 1,
                height: "100%", display: "flex", flexDirection: "column",
                justifyContent: "flex-end", padding: "1.5rem",
              }}>
                {/* Icon */}
                <span style={{ fontSize: "1.8rem", marginBottom: "0.4rem", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}>
                  {event.icon}
                </span>

                {/* Gold accent line */}
                <div style={{
                  width: "32px", height: "1px",
                  background: "var(--color-antique-gold)",
                  marginBottom: "0.6rem",
                  transition: "width 0.4s ease",
                }} className="group-hover:w-16" />

                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "var(--color-silk)",
                  marginBottom: "0.4rem",
                }}>
                  {event.name}
                </h3>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.95rem",
                  color: "var(--color-parchment)",
                  opacity: 0.85,
                  lineHeight: 1.6,
                }}>
                  {event.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventsSection;
