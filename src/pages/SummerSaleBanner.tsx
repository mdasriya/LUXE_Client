import React from "react";
import "swiper/css";

const SummerSaleBanner = () => {
  return (
    <section className="py-12 bg-[#D4B996] text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        <div>
          <h2 className="text-2xl font-bold tracking-widest uppercase mb-1">
            Summer Sale
          </h2>
          <p className="text-sm opacity-90">
            Up to 40% off selected seasonal items. Limited time only.
          </p>
        </div>

        <a
          href="#"
          className="mt-6 md:mt-0 bg-white  text-[#121212] px-8 py-3 text-xs font-bold tracking-widest hover:bg-[#121212] hover:text-white transition-colors"
        >
          SHOP THE SALE
        </a>
        
      </div>
    </section>
  );
};

export default SummerSaleBanner;