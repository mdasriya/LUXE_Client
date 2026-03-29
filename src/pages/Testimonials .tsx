// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophia Martinez",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The quality of the linen dress I ordered exceeded my expectations. It's truly a timeless piece that I'll cherish for years.",
  },
  {
    name: "James Thompson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Exceptional service and beautiful packaging. The blazer fits like it was custom-made.",
  },
  {
    name: "Elena Rossi",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "I'm obsessed with my new tote. It's the perfect size for work.",
  },
  {
    name: "Ava Brown",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Amazing quality and fast delivery. Loved it!",
  },

];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
          Kind Words
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 shadow-sm border border-slate-100 h-full"
              >
                
                {/* Stars */}
                <div className="flex gap-1 mb-4 text-[#D4B996]">
                  ⭐⭐⭐⭐⭐
                </div>

                {/* Text */}
                <p className="text-slate-600 italic mb-6">
                  "{item.text}"
                </p>

                {/* User */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">
                      Verified Buyer
                    </p>
                  </div>
                </div>

              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;