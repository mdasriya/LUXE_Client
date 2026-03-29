const categories = [
  {
    name: "Men",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-bE_woAjVzyDgzwwlHo_6sDgE512CXs4WAH7y_UXarTkJxhG-46omNT3Gxih-WSl7M1nHSVHtPP60hr-KnBzjafZqk1OjGmutykUa3vLYn9rgeKlb9Lu0yuFZuLh6LSqjT8B-Jgeb7ipGt2eClAOl-QO1akU-VfZmpqRi7sD1WvInDaFgX0uW_AzRh1N4sNUPOgHv1BIUo0QNYPXHbF8lqe1ltdQAHY7AqgAVGRjf1omPAgZGEJe9YBjrREsrnLbNkWE8d-3OuqQ",
  },
  {
    name: "Women",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr3vHrdbfwwFozBvYC2z0dFCHuj_awxxlvgdeooMbousCKpV4q_BD0XCHaXhm-UzDOEn8fj2PZAjBaOsBrG05eVfl2EG9Fdb8qeIlVqCWmGGyOhJU4M0ECeutX9ewPdQ5pjuiyeU3F1Vgs1EGwN6a3CiriucTDJbmXQB2IEybkL-avW4bQJRQPNCvGRmdIxD2BayqtLCYu81R8LLck_rYR0OLgUP91MAwJAuhP-WJ4kZUjS0mk34gglaIPCE5DUOCuRdA6kGyS3_4",
  },
  {
    name: "Accessories",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACxptphcJ1yGvmVQWNvHa3nSbqEVAjLPgyV7Uby_kKy-b5lg9ujs2rtc7XNDQ447P079MI60bJn-XuRRB0X3E4cxL0QcgDb8ynj8x5cNl6OF8UQ_QZeXhf-H-50LXjJv7ThyupmYnOOcn8ZaLZ-etuqKsGfYffQeA7TQ-hZU93tHvqn0mSR97yWNTK4E8dl5wVd15UXaOpEDfVZRa2SUPfWWyr7iurQRNlfx3UcikwC1V_y_VjaqYZVrGqF_IRCq4dWiONWpsiyGE",
  },
  {
    name: "Shoes",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8w22hVgN3-YLvJTNj5CiizNUaB-nofV7Qx8oNIVrH3UJ7Fh4cj9MPlsSHcC_a0WydVpqRxhjRSBe707FVE-8sgayXtEhviS9Ak9kpHaeoBSTtFovKI_S1A2-Ur6gyl0pjYAvTld8iumDXm-zpcOLPmIwVbtNRdwW2ZqqpDnDJp5S5nmfrtDS2PEXstoWuiFtSxEaJ04CBurwEJS3KeLnPs3i74w5aQwzELUIrb-LKSlr21yiiWSATbfgnLop_x_YrlJoOV7rxyV8",
  },
];

export default function CategorySection() {
  return (
    <section className="py-20 md:py-24 max-w-8xl mx-auto px-6 bg-[#f8f8f8]">
      
      {/* HEADER */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl mb-2">
            Shop by Category
          </h2>
          <div className="h-1 w-20 bg-accent"></div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {categories.map((cat, i) => (
          <div
            key={i}
            className="group relative aspect-[3/4] overflow-hidden bg-slate-100 cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>

            {/* CONTENT */}
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white font-serif text-xl md:text-2xl mb-2">
                {cat.name}
              </h3>

              <span className="text-white text-xs tracking-widest border-b border-white pb-1 group-hover:text-accent group-hover:border-accent transition-all">
                EXPLORE
              </span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}