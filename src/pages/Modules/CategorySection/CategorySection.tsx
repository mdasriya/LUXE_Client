import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";

const products = [
  {
    title: "Classic Men’s Jacket",
    category: "Men",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-bE_woAjVzyDgzwwlHo_6sDgE512CXs4WAH7y_UXarTkJxhG-46omNT3Gxih-WSl7M1nHSVHtPP60hr-KnBzjafZqk1OjGmutykUa3vLYn9rgeKlb9Lu0yuFZuLh6LSqjT8B-Jgeb7ipGt2eClAOl-QO1akU-VfZmpqRi7sD1WvInDaFgX0uW_AzRh1N4sNUPOgHv1BIUo0QNYPXHbF8lqe1ltdQAHY7AqgAVGRjf1omPAgZGEJe9YBjrREsrnLbNkWE8d-3OuqQ",
    price: "$249",
    cutPrice: "$349",
  },
  {
    title: "Elegant Women’s Dress",
    category: "Women",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr3vHrdbfwwFozBvYC2z0dFCHuj_awxxlvgdeooMbousCKpV4q_BD0XCHaXhm-UzDOEn8fj2PZAjBaOsBrG05eVfl2EG9Fdb8qeIlVqCWmGGyOhJU4M0ECeutX9ewPdQ5pjuiyeU3F1Vgs1EGwN6a3CiriucTDJbmXQB2IEybkL-avW4bQJRQPNCvGRmdIxD2BayqtLCYu81R8LLck_rYR0OLgUP91MAwJAuhP-WJ4kZUjS0mk34gglaIPCE5DUOCuRdA6kGyS3_4",
    price: "$199",
    cutPrice: "$279",
  },
  {
    title: "Leather Accessory Set",
    category: "Accessories",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACxptphcJ1yGvmVQWNvHa3nSbqEVAjLPgyV7Uby_kKy-b5lg9ujs2rtc7XNDQ447P079MI60bJn-XuRRB0X3E4cxL0QcgDb8ynj8x5cNl6OF8UQ_QZeXhf-H-50LXjJv7ThyupmYnOOcn8ZaLZ-etuqKsGfYffQeA7TQ-hZU93tHvqn0mSR97yWNTK4E8dl5wVd15UXaOpEDfVZRa2SUPfWWyr7iurQRNlfx3UcikwC1V_y_VjaqYZVrGqF_IRCq4dWiONWpsiyGE",
    price: "$79",
    cutPrice: "$119",
  },
  {
    title: "Premium Leather Shoes",
    category: "Shoes",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8w22hVgN3-YLvJTNj5CiizNUaB-nofV7Qx8oNIVrH3UJ7Fh4cj9MPlsSHcC_a0WydVpqRxhjRSBe707FVE-8sgayXtEhviS9Ak9kpHaeoBSTtFovKI_S1A2-Ur6gyl0pjYAvTld8iumDXm-zpcOLPmIwVbtNRdwW2ZqqpDnDJp5S5nmfrtDS2PEXstoWuiFtSxEaJ04CBurwEJS3KeLnPs3i74w5aQwzELUIrb-LKSlr21yiiWSATbfgnLop_x_YrlJoOV7rxyV8",
    price: "$189",
    cutPrice: "$249",
  },
];

const tabs = ["FOR WOMEN", "FOR MEN"];
const filters = ["T-SHIRT", "SHIRT", "SHOES", "WATCH", "SUNGLASSES", "BAGPACKS"];

export default function CategorySection() {
  const [activeTab, setActiveTab] = useState("FOR WOMEN");
  const [activeFilter, setActiveFilter] = useState("T-SHIRT");

  return (
    <section className="py-20 md:py-10 max-w-8xl mx-auto px-6 bg-[#f8f8f8]">
      
      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl md:text-4xl mb-2">
          Shop by Category
        </h2>
        <div className="h-1 w-20 bg-accent mx-auto"></div>
      </div>

      {/* CATEGORY CONTROLS */}
      <div className="mb-12 flex flex-col items-center gap-6">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm uppercase tracking-[0.25em] font-semibold text-slate-500">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative z-10 pb-2 transition ${activeTab === tab ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
            >
              {tab}
              {activeTab === tab && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-slate-900"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="w-full max-w-3xl overflow-x-auto px-2">
          <div className="flex gap-3 min-w-[680px]">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setActiveFilter(item)}
                className="relative min-w-[100px] whitespace-nowrap rounded-[5px] px-4 py-2 text-xs tracking-[0.25em] uppercase transition overflow-hidden"
              >
                {activeFilter === item && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-black rounded-[5px]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 font-semibold ${activeFilter === item ? "text-white" : "text-slate-400 hover:text-slate-900"}`}>
                  {item}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GRID */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-72 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-slate-700 shadow-md transition hover:bg-white">
                  <Heart className="h-4 w-4" />
                </button>
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-3">
                  {product.category}
                </p>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{product.title}</h3>
                <div className="mb-4 flex items-center gap-3 justify-between">
                  <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-slate-900">{product.price}</span>
                  <span className="text-sm text-slate-400 line-through">{product.cutPrice}</span>
                  </div>
                  <button className="inline-flex items-center justify-center rounded-xl bg-slate-900 p-3 text-white transition hover:bg-slate-800">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}