

const Filter = () => {
  return (
       <aside className="w-full lg:w-1/4 lg:sticky lg:top-28 h-fit space-y-8 hidden lg:block">
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
                    <button className="border border-primary/20 py-2 text-xs font-medium cursor-pointer">
                      XS
                    </button>
                    <button className="border border-primary py-2 text-xs font-medium bg-primary text-white">
                      S
                    </button>
                    <button className="border border-primary/20 py-2 text-xs font-medium cursor-pointer">
                      M
                    </button>
                    <button className="border border-primary/20 py-2 text-xs font-medium cursor-pointer">
                      L
                    </button>
                    <button className="border border-primary/20 py-2 text-xs font-medium cursor-pointer">
                      XL
                    </button>
                    <button className="border border-primary/20 py-2 text-xs font-medium cursor-pointer">
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
  )
}

export default Filter
