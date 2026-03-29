import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    title: "Elevate Your Style",
    subtitle: "Spring / Summer 2024",
  },
  {
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    title: "Luxury Redefined",
    subtitle: "Exclusive Collection",
  },
  {
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    title: "Timeless Fashion",
    subtitle: "Minimal Elegance",
  },
  {
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    title: "Bold & Beautiful",
    subtitle: "New Arrivals",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      
      {/* SLIDER */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image */}
          <img
            src={slides[index].img}
            className="w-full h-full object-cover"
            alt=""
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
        
        <motion.span
          key={slides[index].subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-90"
        >
          {slides[index].subtitle}
        </motion.span>

        <motion.h1
          key={slides[index].title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
        >
          {slides[index].title}
        </motion.h1>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 flex-wrap"
        >
          <button className="bg-white text-black px-6 sm:px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm tracking-widest hover:bg-accent hover:text-white transition-all duration-300">
            SHOP WOMEN
          </button>

          <button className="border border-white px-6 sm:px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm tracking-widest hover:bg-white hover:text-primary transition-all duration-300">
            SHOP MEN
          </button>
        </motion.div>
      </div>

      {/* DOT NAVIGATION */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
              i === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}