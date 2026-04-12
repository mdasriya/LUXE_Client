
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import "swiper/css";

const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
  // "https://upload.wikimedia.org/wikipedia/commons/0/08/Puma_AG.svg",
  // "https://upload.wikimedia.org/wikipedia/commons/4/44/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",


];

export default function PremiumBrandSlider() {
  return (
    <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      
      <div className="max-w-8xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Our Partners
          </h2>
          <div className="h-[2px] w-16 bg-gray-400 mx-auto"></div>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm">
            Collaborating with industry leaders to redefine modern luxury.
          </p>
        </div>

        {/* FADE EDGES */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24  bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={4000} // ultra smooth
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={2}
          spaceBetween={40}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {[...brands, ...brands].map((logo, i) => (
            <SwiperSlide key={i}>
              
              <div className="flex justify-center   items-center h-24 group">
                
                <img
                  src={logo}
                  alt="brand"
                  className="
                    h-10 object-contain
                    grayscale opacity-50
                    group-hover:grayscale-0 group-hover:opacity-100
                    transition duration-500 cursor-pointer
                  "
                />

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}