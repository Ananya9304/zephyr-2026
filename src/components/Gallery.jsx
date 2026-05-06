import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/band-1.jpg",
  "/images/ramp_2022.jpg",
  "/images/Group-dance-2.jpg",
  "/images/groupfie.jpg",
  "/images/inaug.jpg",
];

const GallerySection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-20 px-4 text-center bg-[#0f0a07]">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl mb-12 text-yellow-500 tracking-wide">
        Glimpses & Memories
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        
        {/* Big Featured Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="md:col-span-2 row-span-2 overflow-hidden rounded-2xl cursor-pointer"
          onClick={() => setSelected(images[0])}
        >
          <img
            src={images[0]}
            className="w-full h-full object-cover transition duration-500 hover:scale-105 brightness-75 hover:brightness-100"
          />
        </motion.div>

        {/* Small Images */}
        {images.slice(1).map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl cursor-pointer"
            onClick={() => setSelected(img)}
          >
            <img
              src={img}
              className="w-full h-full object-cover transition duration-500 hover:scale-110 brightness-75 hover:brightness-100"
            />
          </motion.div>
        ))}
      </div>

      {/* 🔍 Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-[90%] max-h-[80%] rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;