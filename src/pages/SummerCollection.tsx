// import React from "react";



// const products = [
//   {
//     name: "Linen Blend Dress",
//     price: "$245.00",
//     rating: "4.8",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuDQMF2AQyIJU3KYdhajbbwpQDRrhNj632unfZx0sxpUT-ZAP6tfBKJgtMPCdJ8s3Ow5dQZVsucRG4MNyNthQyY9_abisJtM7WNrqCXWSKSuTqKoitZY3PohlzEbQB2lYdMWykfPgAm9zmp3YsT0qjOy5zx1lyUFtlcLrUN1FO5EAfcag50y06hwf5LiMZm6vPc_EzBkCYzWQtjPkYdxd9t4PIxyI2enj2kBkRyVsepsRjhdo-jIc5qiju-lvR1_vImgHCrfyyQt4O4",
//   },
//   {
//     name: "Cotton Relaxed Shirt",
//     price: "$180.00",
//     rating: "4.5",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuA-bE_woAjVzyDgzwwlHo_6sDgE512CXs4WAH7y_UXarTkJxhG-46omNT3Gxih-WSl7M1nHSVHtPP60hr-KnBzjafZqk1OjGmutykUa3vLYn9rgeKlb9Lu0yuFZuLh6LSqjT8B-Jgeb7ipGt2eClAOl-QO1akU-VfZmpqRi7sD1WvInDaFgX0uW_AzRh1N4sNUPOgHv1BIUo0QNYPXHbF8lqe1ltdQAHY7AqgAVGRjf1omPAgZGEJe9YBjrREsrnLbNkWE8d-3OuqQ",
//   },
//   {
//     name: "Tan Leather Tote",
//     price: "$420.00",
//     rating: "4.9",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuDr3vHrdbfwwFozBvYC2z0dFCHuj_awxxlvgdeooMbousCKpV4q_BD0XCHaXhm-UzDOEn8fj2PZAjBaOsBrG05eVfl2EG9Fdb8qeIlVqCWmGGyOhJU4M0ECeutX9ewPdQ5pjuiyeU3F1Vgs1EGwN6a3CiriucTDJbmXQB2IEybkL-avW4bQJRQPNCvGRmdIxD2BayqtLCYu81R8LLck_rYR0OLgUP91MAwJAuhP-WJ4kZUjS0mk34gglaIPCE5DUOCuRdA6kGyS3_4",
//   },
//   {
//     name: "Nude Stiletto Pump",
//     price: "$310.00",
//     rating: "4.7",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCqy94ZhiIQov1VPpCP8brYqYG63peY-APDi2KtD1evYf-jsRpk1l508bd96iq6eML-S_ViBY6uGJX1S_AuyNahACtD6WYNhY3iVfrvwjDJTDB-xhk_gR9OT4eGzOUpFRHoOm_0OBQrcdUbCOMPVBOYi0mxPMvlERj7Jg3Jgq0SantcWfwA8rXqQkN513dKYIC0HZiXMU2XIBmfh3-DokvLxQW6vJX_TiMWt_Eqk331wCLRUv8hULLHuA-LUTxNIpbSuy7eDxMMfr4",
//   },
//   {
//     name: "Satin Midi Skirt",
//     price: "$195.00",
//     rating: "4.6",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCC0xL_onaau3BE_tx5igMkVCjG2ZPjT_5d_zvT-eQSfuFwZDzG9clVg3grPD3eBHCmafI_fER6hqWtHJDAKrwXgglDNU36rOt2Gg8KRKYuBjcCwGRqfxcJiZ8vnqC13ZfCXWFPHKwYOmwBKVDaDDd5oopmyDEwN_djjvUrDLAiVjsg9LHVxgNfmHKBAFe5h6o5ev1FxLqM27sQkuhlYodu-TUoGtAwipYiqp6AXq20mfzbkTMgvQAulgW3ShfLf8n6OwwxFLvSvfw",
//   },
//   {
//     name: "Modern Fit Blazer",
//     price: "$550.00",
//     rating: "4.8",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuA2sI9FL31YVOzZueh2-Nipj1i_Cr7uVDhHVBFHoTH6xJrFXtlL7NlyEfed0ThTQOKZqKzVm598hzbZ3bPfR5ns9ffubrpj6eKYl0Tn-SRXWfNgnNeMQ8l7-3Pq0iGBF7LKVOEqWSAtosvLNWcZ6-J0Cv1cq1hmp33tkOO-zsKNUmHVOX-GQBJUHObMzq7_JW7ezSYqcFgEmOog0YQF99blN5-tQLYvdnc0aop-oLrS8bpuylsPweUuw1_5OTl8XiZrkhwbgniI7fk",
//   },
//   {
//     name: "Aviator Sunglasses",
//     price: "$125.00",
//     rating: "4.9",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuA2LR3WYaJyxyWwVtKwbwIYTDVFPcOLeWTJBuTvDZd1CNBdYfCGfp57Z4YoBX8bIvWluXbVHQOqDyR8jSbDQCFmzMo-CbMtBO6_0KokbHqxGaC8wYa_avf3bLDqsmRl07B5ln50isnc-MTxtmIKfFOlt2I2Cx60WiXnhxvQEXIh5q_dUSPVUfv6bp73QslXWhKMMfLuzMylD4jaeurEV11-crBw-CfoOx4qxqMhmcJCDO7uVwQUctNuHsYn4eovkKwkufil5Mpbawg",
//   },
//   {
//     name: "Cashmere Polo Knit",
//     price: "$290.00",
//     rating: "4.7",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCX6KGY03eHT14kqFslmPuA4_94oKN3xB1N6JrR275Qen65yT5CkZnzrywxPzcsj1PCnu2Yx0U_iujGqy9EdIJXlEEmaJ4x9jR-zyfn1UA6cl9ns33psarj1A1LQtxIY5bf6eI8ys-YKtA43WUtlTlnhNyVPC6NtDI6r6t-jdqZC09LU9dgQyPA4OOCVmSf7g_bsPua-ZU1Huv6TDTn5V4xd1XWLnS2Oy6HpT93MQAcFPQe7biGnGFR0seUrMaz8BZqr2bFYgWYUU",
//   },
// ];

// const SummerCollection = () => {
//   return (
//     <section className="py-24 bg-white dark:bg-background-dark">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="font-serif text-4xl mb-4">Summer Collection</h2>
//           <p className="text-slate-500 max-w-2xl mx-auto">
//             Experience the intersection of comfort and couture with our curated summer essentials.
//           </p>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
//           {products.map((product, index) => (
//             <div key={index} className="product-card group relative">
//               <div className="aspect-[4/5] overflow-hidden bg-slate-100 relative">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 {/* Cart Overlay */}
//                 <div className="cart-overlay absolute bottom-4 left-4 right-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
//                   <button className="w-full bg-primary text-white py-3 text-xs font-bold tracking-widest hover:bg-accent">
//                     ADD TO CART
//                   </button>
//                 </div>
//                 {/* Favorite Button */}
//                 <button className="absolute top-4 right-4 material-symbols-outlined text-slate-400 hover:text-red-500 transition-colors">
//                   favorite
//                 </button>
//               </div>
//               {/* Product Info */}
//               <div className="mt-4 flex justify-between items-start">
//                 <div>
//                   <h3 className="text-sm font-medium">{product.name}</h3>
//                   <div className="flex items-center gap-1 mt-1">
//                     <span className="material-symbols-outlined text-xs fill-accent text-accent">
//                       star
//                     </span>
//                     <span className="text-[10px] text-slate-500">({product.rating})</span>
//                   </div>
//                 </div>
//                 <p className="text-sm font-bold">{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SummerCollection;


// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
// import "swiper/css"
// ;
// import "swiper/css/pagination";

const products = [
  {
    name: "Linen Blend Dress",
    price: "$245.00",
    rating: "4.8",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQMF2AQyIJU3KYdhajbbwpQDRrhNj632unfZx0sxpUT-ZAP6tfBKJgtMPCdJ8s3Ow5dQZVsucRG4MNyNthQyY9_abisJtM7WNrqCXWSKSuTqKoitZY3PohlzEbQB2lYdMWykfPgAm9zmp3YsT0qjOy5zx1lyUFtlcLrUN1FO5EAfcag50y06hwf5LiMZm6vPc_EzBkCYzWQtjPkYdxd9t4PIxyI2enj2kBkRyVsepsRjhdo-jIc5qiju-lvR1_vImgHCrfyyQt4O4",
  },
  {
    name: "Cotton Relaxed Shirt",
    price: "$180.00",
    rating: "4.5",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-bE_woAjVzyDgzwwlHo_6sDgE512CXs4WAH7y_UXarTkJxhG-46omNT3Gxih-WSl7M1nHSVHtPP60hr-KnBzjafZqk1OjGmutykUa3vLYn9rgeKlb9Lu0yuFZuLh6LSqjT8B-Jgeb7ipGt2eClAOl-QO1akU-VfZmpqRi7sD1WvInDaFgX0uW_AzRh1N4sNUPOgHv1BIUo0QNYPXHbF8lqe1ltdQAHY7AqgAVGRjf1omPAgZGEJe9YBjrREsrnLbNkWE8d-3OuqQ",
  },
  {
    name: "Tan Leather Tote",
    price: "$420.00",
    rating: "4.9",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDr3vHrdbfwwFozBvYC2z0dFCHuj_awxxlvgdeooMbousCKpV4q_BD0XCHaXhm-UzDOEn8fj2PZAjBaOsBrG05eVfl2EG9Fdb8qeIlVqCWmGGyOhJU4M0ECeutX9ewPdQ5pjuiyeU3F1Vgs1EGwN6a3CiriucTDJbmXQB2IEybkL-avW4bQJRQPNCvGRmdIxD2BayqtLCYu81R8LLck_rYR0OLgUP91MAwJAuhP-WJ4kZUjS0mk34gglaIPCE5DUOCuRdA6kGyS3_4",
  },
  {
    name: "Nude Stiletto Pump",
    price: "$310.00",
    rating: "4.7",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqy94ZhiIQov1VPpCP8brYqYG63peY-APDi2KtD1evYf-jsRpk1l508bd96iq6eML-S_ViBY6uGJX1S_AuyNahACtD6WYNhY3iVfrvwjDJTDB-xhk_gR9OT4eGzOUpFRHoOm_0OBQrcdUbCOMPVBOYi0mxPMvlERj7Jg3Jgq0SantcWfwA8rXqQkN513dKYIC0HZiXMU2XIBmfh3-DokvLxQW6vJX_TiMWt_Eqk331wCLRUv8hULLHuA-LUTxNIpbSuy7eDxMMfr4",
  },
  {
    name: "Satin Midi Skirt",
    price: "$195.00",
    rating: "4.6",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCC0xL_onaau3BE_tx5igMkVCjG2ZPjT_5d_zvT-eQSfuFwZDzG9clVg3grPD3eBHCmafI_fER6hqWtHJDAKrwXgglDNU36rOt2Gg8KRKYuBjcCwGRqfxcJiZ8vnqC13ZfCXWFPHKwYOmwBKVDaDDd5oopmyDEwN_djjvUrDLAiVjsg9LHVxgNfmHKBAFe5h6o5ev1FxLqM27sQkuhlYodu-TUoGtAwipYiqp6AXq20mfzbkTMgvQAulgW3ShfLf8n6OwwxFLvSvfw",
  },
  {
    name: "Modern Fit Blazer",
    price: "$550.00",
    rating: "4.8",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2sI9FL31YVOzZueh2-Nipj1i_Cr7uVDhHVBFHoTH6xJrFXtlL7NlyEfed0ThTQOKZqKzVm598hzbZ3bPfR5ns9ffubrpj6eKYl0Tn-SRXWfNgnNeMQ8l7-3Pq0iGBF7LKVOEqWSAtosvLNWcZ6-J0Cv1cq1hmp33tkOO-zsKNUmHVOX-GQBJUHObMzq7_JW7ezSYqcFgEmOog0YQF99blN5-tQLYvdnc0aop-oLrS8bpuylsPweUuw1_5OTl8XiZrkhwbgniI7fk",
  },
  {
    name: "Aviator Sunglasses",
    price: "$125.00",
    rating: "4.9",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2LR3WYaJyxyWwVtKwbwIYTDVFPcOLeWTJBuTvDZd1CNBdYfCGfp57Z4YoBX8bIvWluXbVHQOqDyR8jSbDQCFmzMo-CbMtBO6_0KokbHqxGaC8wYa_avf3bLDqsmRl07B5ln50isnc-MTxtmIKfFOlt2I2Cx60WiXnhxvQEXIh5q_dUSPVUfv6bp73QslXWhKMMfLuzMylD4jaeurEV11-crBw-CfoOx4qxqMhmcJCDO7uVwQUctNuHsYn4eovkKwkufil5Mpbawg",
  },
  
];

const SummerCollection = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Summer Collection</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Experience the intersection of comfort and couture with our curated summer essentials.
          </p>
        </div>

        {/* Swiper Carousel for Mobile / Grid for Desktop */}
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          modules={[Autoplay, Pagination]}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="group relative bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Cart Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button className="w-full cursor-pointer bg-primary text-white py-3 text-xs font-bold tracking-widest hover:bg-accent">
                      ADD TO CART
                    </button>
                  </div>
                  {/* Favorite Button */}
                  <button className="absolute top-4 right-4 material-symbols-outlined text-slate-400 hover:text-red-500 transition-colors">
                    favorite
                  </button>
                </div>

                {/* Product Info */}
                <div className="mt-4 flex justify-between items-start px-4 pb-4">
                  <div>
                    <h3 className="text-sm font-medium">{product.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-xs fill-accent text-accent">
                        star
                      </span>
                      <span className="text-[10px] text-slate-500">({product.rating})</span>
                    </div>
                  </div>
                  <p className="text-sm font-bold">{product.price}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SummerCollection;