const Products = () => {
  return (
    <div className="bg-white p-2">
      <h1 className="font-serif text-3xl md:text-5xl text-primary font-semibold mb-4">
        Men's Collection
      </h1>
      <p className="text-primary/60 max-w-2xl text-lg leading-relaxed">
        Elevate your everyday wardrobe with our curated selection of premium
        essentials. From Italian-milled fabrics to bespoke tailoring
        silhouettes.
      </p>
      <main className="max-w-8xl sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-28 h-fit space-y-8">
            <div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-4">
                Price Range
              </h3>
              <div className="px-2">
                <input
                  className="w-full accent-primary"
                  max="1000"
                  min="0"
                  type="range"
                />
                <div className="flex justify-between mt-2 text-sm text-primary/60">
                  <span>$0</span>
                  <span>$1000+</span>
                </div>
              </div>
            </div>
            <div className="border-t border-primary/10 pt-6">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-4">
                Size
              </h3>
              <div className="grid grid-cols-4 gap-2">
                <button className="border border-primary/20 py-2 text-xs font-medium hover:bg-primary hover:text-white transition-all">
                  XS
                </button>
                <button className="border border-primary py-2 text-xs font-medium bg-primary text-white">
                  S
                </button>
                <button className="border border-primary/20 py-2 text-xs font-medium hover:bg-primary hover:text-white transition-all">
                  M
                </button>
                <button className="border border-primary/20 py-2 text-xs font-medium hover:bg-primary hover:text-white transition-all">
                  L
                </button>
                <button className="border border-primary/20 py-2 text-xs font-medium hover:bg-primary hover:text-white transition-all">
                  XL
                </button>
                <button className="border border-primary/20 py-2 text-xs font-medium hover:bg-primary hover:text-white transition-all">
                  XXL
                </button>
              </div>
            </div>
            <div className="border-t border-primary/10 pt-6">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-4">
                Color
              </h3>
              <div className="flex flex-wrap gap-3">
                <button className="w-6 h-6 rounded-full bg-black ring-2 ring-offset-2 ring-primary"></button>
                <button className="w-6 h-6 rounded-full bg-slate-200 ring-1 ring-primary/10"></button>
                <button className="w-6 h-6 rounded-full bg-stone-500 ring-1 ring-primary/10"></button>
                <button className="w-6 h-6 rounded-full bg-navy-900 bg-[#1e293b] ring-1 ring-primary/10"></button>
                <button className="w-6 h-6 rounded-full bg-[#D4B996] ring-1 ring-primary/10"></button>
              </div>
            </div>
            <div className="border-t border-primary/10 pt-6">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-4">
                Brand
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="rounded-none border-primary/30 text-primary focus:ring-0"
                    type="checkbox"
                  />
                  <span className="text-sm group-hover:text-accent transition-colors">
                    Luxe Essentials
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="rounded-none border-primary/30 text-primary focus:ring-0"
                    type="checkbox"
                  />
                  <span className="text-sm group-hover:text-accent transition-colors">
                    Artisan Lab
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="rounded-none border-primary/30 text-primary focus:ring-0"
                    type="checkbox"
                  />
                  <span className="text-sm group-hover:text-accent transition-colors">
                    Urban Tailor
                  </span>
                </label>
              </div>
            </div>
            <div className="border-t border-primary/10 pt-6">
              <h3 className="font-bold text-sm uppercase tracking-widest mb-4">
                Rating
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    className="text-primary focus:ring-0"
                    name="rating"
                    type="radio"
                  />
                  <div className="flex text-accent text-sm">
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm fill-current">
                      star
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      star
                    </span>
                    <span className="ml-2 text-primary/60">&amp; Up</span>
                  </div>
                </label>
              </div>
            </div>
          </aside>
          <div className="w-full lg:w-3/4">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-primary/5">
              <span className="text-sm text-primary/60 font-medium">
                Showing <span className="text-primary">24</span> of 158 products
              </span>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-tighter font-bold">
                    Sort By:
                  </span>
                  <select className="border-none bg-transparent text-sm focus:ring-0 cursor-pointer pr-8">
                    <option>Newest Arrivals</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Selling</option>
                  </select>
                </div>
                <div className="flex items-center border-l border-primary/10 pl-6 gap-2">
                  <button className="p-1.5 bg-primary text-white rounded-sm">
                    <span className="material-symbols-outlined text-xl">
                      grid_view
                    </span>
                  </button>
                  <button className="p-1.5 hover:bg-primary/5 rounded-sm">
                    <span className="material-symbols-outlined text-xl">
                      view_list
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
              <div className="group product-card relative">
                <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Model wearing a minimalist navy wool blazer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAManiftuzP5Eg5Bron1d0PgNXnqbE-_3DZ_nkcW0Br59k624GQ9qTrbkY0GbgTP97yFFIbPL_tjXZTkoRUNEP7marZQ7Yvcu3H5rVUdGoDrTGZWs-GcwS-xibGAdYPpy8j2QeMzjIauv-dJ7RfObHlcoBrAffxKpCLEHI7Xsdb0Od3fqJtb_ovoKahyWTfF8Il9T7q6o0Fb9_8sH4Ixai7SF1_n7d4bN4NILYqGG5hKpnSfDQmoycNEyg_J2iBWFXJQvP-UAy7tw"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur hover:bg-white rounded-full transition-all">
                    <span className="material-symbols-outlined text-lg">
                      favorite
                    </span>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-primary text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary/90">
                      Add to Cart
                    </button>
                    <button className="w-full mt-2 bg-white/90 backdrop-blur text-primary py-2 text-[10px] font-bold uppercase tracking-widest border border-primary/10">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-sm font-medium tracking-tight">
                    Structured Wool Blazer
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">$285.00</span>
                    <div className="flex text-accent">
                      <span className="material-symbols-outlined text-xs fill-current">
                        star
                      </span>
                      <span className="text-[10px] text-primary/40 font-bold ml-1">
                        (42)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group product-card relative">
                <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Premium cashmere turtleneck sweater in charcoal"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP_UT-c1tX1PjDeSPbX6DphskFDVvlvxzpl0tOEJtNkUgJwjmg-3YOe7tcjJofTkc5bHXvvdFeimarZiQEpkPj3ZCkWEF3onQ9xTY5c-sPEYQe4Fn3u5v7WqCPDAtQmHttUkbCZyG1XOCovlVUHrtGIJrZuhlRlLIWx8yzaB-t804NSxJM2DSHwIWXpeDdEELQBU8xUBmM4hD3dAWpucDI_wWQIJg0Sx2XW3-Sy4slKfIcb-F9F-NMETZ67i9XpagBeScodYkb_WM"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur hover:bg-white rounded-full transition-all">
                    <span className="material-symbols-outlined text-lg">
                      favorite
                    </span>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-primary text-white py-3 text-xs font-bold uppercase tracking-widest">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-sm font-medium tracking-tight">
                    Cashmere Turtleneck
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">$195.00</span>
                    <div className="flex text-accent">
                      <span className="material-symbols-outlined text-xs fill-current">
                        star
                      </span>
                      <span className="text-[10px] text-primary/40 font-bold ml-1">
                        (18)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group product-card relative">
                <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Off-white linen button down shirt"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3TzY__N8nV5aCS79reL_uDasfYBo5s1ez7YMYN50A643ldnDZ9ZITVuMwtLv9t7Y_miUjl1Ypx_iAvwr6ym2YrtQtS1USTGoFG-MuegdLKN21BNegQR5KFgO-NBQ6TyPEh0TeU20Qois6WuPGGsXKpd2WnVNLZMAl8_l9U0lpC6dGTSQjpgDHXfRskVWgY_qZ3X-xZ4OpDQK-zPSu4nX-ipaQqGRDCd173UTQ3c4tvLAPUF48h0lXycSpB4awemWfOEgpQs-ZvQ8"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur hover:bg-white rounded-full transition-all">
                    <span className="material-symbols-outlined text-lg">
                      favorite
                    </span>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-primary text-white py-3 text-xs font-bold uppercase tracking-widest">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-sm font-medium tracking-tight">
                    Essential Linen Shirt
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">$89.00</span>
                    <div className="flex text-accent">
                      <span className="material-symbols-outlined text-xs fill-current">
                        star
                      </span>
                      <span className="text-[10px] text-primary/40 font-bold ml-1">
                        (56)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group product-card relative">
                <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="classNameic indigo denim jeans slim fit"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcZDULpM-yDGL7fnwO3VsYVBOIUkxB0OifuziHaDf7nPUNneIJlHc3nigC7BAk_mB61aRkhADNdjRt84f4pVzpG-feMIAJR4xsA69NaOEtNK8goaim-IqTazDmDqodAdOXdE6bypvnyj7ZgriKudHbXU2BQS6azlhvlBLf0nqyYXBOp228Iq3rXrmt_bEEAYBx5X5CHe7voa7jy7Q5PWTVUtUBG7LyCxu2rO0ASoKwGx6Pt-tJ882HdnGUgNfmYefCZG3-t1DpNY0"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur hover:bg-white rounded-full transition-all">
                    <span className="material-symbols-outlined text-lg">
                      favorite
                    </span>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-primary text-white py-3 text-xs font-bold uppercase tracking-widest">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-sm font-medium tracking-tight">
                    Selvedge Denim Slim
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">$145.00</span>
                    <div className="flex text-accent">
                      <span className="material-symbols-outlined text-xs fill-current">
                        star
                      </span>
                      <span className="text-[10px] text-primary/40 font-bold ml-1">
                        (29)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="group product-card relative">
                <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Italian leather chelsea boots in tan"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc9LtROMGDQt8kIMFtGEtYuVwjft3A15ly34ImAJyJvC9gct9aM3T3vksRgzS_Pe6QSwi8F0QM5BeAyEJJN0YTNUPOkFnU4zRr1zEBR8pXM-tqw2jqbaxy3Trfv55YxLSyaLdIsZ_usfxpkjpH_X23fzw__cFL8exdUIN-YGFOyZcx1XSO1UcqFlTvvVumtjo2pZEhkT8o3aKeTOdWjyCRFeQNxPrnGpBgoVlJ7oOj2G3WChwl8V6g9_JCFuQS5t-WC891Haoo0R0"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    New
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur hover:bg-white rounded-full transition-all">
                    <span className="material-symbols-outlined text-lg">
                      favorite
                    </span>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-primary text-white py-3 text-xs font-bold uppercase tracking-widest">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-sm font-medium tracking-tight">
                    Leather Chelsea Boots
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">$320.00</span>
                    <div className="flex text-accent">
                      <span className="material-symbols-outlined text-xs fill-current">
                        star
                      </span>
                      <span className="text-[10px] text-primary/40 font-bold ml-1">
                        (12)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group product-card relative">
                <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="classNameic trench coat in beige"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpUPpbWaKp1ZouMmLLdV1l314pQ4vb8c63j77eAZgSk56So9wPST_y1zvqQBo6bJWw2XTVGrB_wFg0PtqwSpaROxpsp2A63WrhmyAfvDiGFx3cit37uz3W4J-y0HW9hnLHWuVoSF7ooZXCQAkMgWZwjz1g0zVkxmD5bl3l6rEN4KaxzBbKDIFzLGbrKVgN2VAdLn2vbcDIAPlFyuzoxW9ZVTl534ihNPXxq-2gm0lSiZLngVCkx40a88-Jlnh69Dfne9XzSaAwpvI"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur hover:bg-white rounded-full transition-all">
                    <span className="material-symbols-outlined text-lg">
                      favorite
                    </span>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-primary text-white py-3 text-xs font-bold uppercase tracking-widest">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-sm font-medium tracking-tight">
                    Heritage Trench Coat
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-red-600">
                      $395.00{" "}
                      <span className="text-primary/40 line-through ml-2 font-normal">
                        $550.00
                      </span>
                    </span>
                    <div className="flex text-accent">
                      <span className="material-symbols-outlined text-xs fill-current">
                        star
                      </span>
                      <span className="text-[10px] text-primary/40 font-bold ml-1">
                        (31)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group product-card relative">
                <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Premium oversized white cotton tee"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOn4hdelNfQDwU4ncFOVK66dPMV8zHCkbMO4fYAJH8AfESYI--rx2bhvL8UlhY6v0oYkicsdnHw_tYi4BGkaqTBckhUd76BD3TNMO1VaecxQu3B-c9d2nRK1Zf1kiq_FYst-KrkFMVFP_I5oOZnBuQjrZqPooLXoeNAW9vAnx-qelXJN4s0qBR63taVXyLaRUVYYcK5lbTSAqj89-r491YJE9SrdRa2zTJGt4mzrOWppxcepaNhpYvJaeJdJJd-FZR8feGylhM3Fk"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur hover:bg-white rounded-full transition-all">
                    <span className="material-symbols-outlined text-lg">
                      favorite
                    </span>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-primary text-white py-3 text-xs font-bold uppercase tracking-widest">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-sm font-medium tracking-tight">
                    Heavyweight Box Tee
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">$55.00</span>
                    <div className="flex text-accent">
                      <span className="material-symbols-outlined text-xs fill-current">
                        star
                      </span>
                      <span className="text-[10px] text-primary/40 font-bold ml-1">
                        (89)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group product-card relative">
                <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-alt="Modern black silk tie and accessory set"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi_ZetczDSgAYtrK6bMvO9hyW-lr8sLAH54L2DVLMDm5rYROiWK-J40wv3PU_fvHSMy7EyEe9ERfY7U2bXXwKJIoMUrdSTg4GTITWPRdg_l6KwzPz9vVi3L-PLR0o5GSLnZp9KWdv6JH4T4PbknAWiWvADR-h5W3KGZ8JmHPTfqbJquBFnRa2kq4e919rgsyJxAwyAdVkjq1buwG7hC0tfOV4wU_R8e8l4o0X1j8ra7PBe9V3ONxDTmuEu5TE1dHFbTzR1MpgQ4U4"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur hover:bg-white rounded-full transition-all">
                    <span className="material-symbols-outlined text-lg">
                      favorite
                    </span>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-primary text-white py-3 text-xs font-bold uppercase tracking-widest">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-sm font-medium tracking-tight">
                    Silk Evening Tie
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">$75.00</span>
                    <div className="flex text-accent">
                      <span className="material-symbols-outlined text-xs fill-current">
                        star
                      </span>
                      <span className="text-[10px] text-primary/40 font-bold ml-1">
                        (22)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 flex items-center justify-center gap-2">
              <button className="p-2 border border-primary/10 hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-lg">
                  chevron_left
                </span>
              </button>
              <div className="flex items-center gap-1">
                <button className="w-10 h-10 bg-primary text-white text-sm font-bold">
                  1
                </button>
                <button className="w-10 h-10 hover:bg-primary/5 text-sm font-medium">
                  2
                </button>
                <button className="w-10 h-10 hover:bg-primary/5 text-sm font-medium">
                  3
                </button>
                <span className="px-2 text-primary/40">...</span>
                <button className="w-10 h-10 hover:bg-primary/5 text-sm font-medium">
                  8
                </button>
              </div>
              <button className="p-2 border border-primary/10 hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
