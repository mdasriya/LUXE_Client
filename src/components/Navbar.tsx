import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-background-dark backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-8xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-12">
          <h5 className="text-2xl font-serif font-bold tracking-widest">
            LUXE
          </h5>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">

            {/* COLLECTIONS */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu(true)}
              onMouseLeave={() => setOpenMenu(false)}
            >
              <a className="text-sm font-medium hover:text-[#D4B996] cursor-pointer">
                Collections
              </a>

              {/* ANIMATED MEGA MENU */}
              <AnimatePresence>
                {openMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 w-[1200px] bg-white dark:bg-backgroundDark shadow-xl border border-slate-100 dark:border-slate-800 p-8 grid grid-cols-3 gap-8"
                  >
                    <div>
                      <h4 className="font-serif font-bold mb-4 border-b pb-2">
                        Seasonal
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li><a href="#">Spring Summer 24</a></li>
                        <li><a href="#">Autumn Winter 23</a></li>
                        <li><a href="#">Resort Wear</a></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-serif font-bold mb-4 border-b pb-2">
                        Featured
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Best Sellers</a></li>
                        <li><a href="#">Limited Edition</a></li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl">
  
  <p className="text-xs italic text-slate-500 mb-4">
    Free worldwide shipping on all orders over $500.
  </p>

  {/* 🔥 GRID IMAGES */}
  <div className="grid grid-cols-2 w-[500px] gap-5">
    
    <img
      src="/images/image1.png"
      alt="product"
      className="w-full h-24 object-cover rounded-lg hover:scale-105 transition duration-300"
    />
    
    <img
      src="/images/img2.jpg"
      alt="product"
      className="w-full h-24 object-cover rounded-lg hover:scale-105 transition duration-300"
    />
    
    <img
      src="/images/img3.jpg"
      alt="product"
      className="w-full h-24 object-cover rounded-lg hover:scale-105 transition duration-300"
    />
    
    <img
      src="/images/img4.jpg"
      alt="product"
      className="w-full h-24 object-cover rounded-lg hover:scale-105 transition duration-300"
    />

  </div>
</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a className="text-sm hover:text-accent">Men</a>
            <a className="text-sm hover:text-accent">Women</a>
            <a className="text-sm hover:text-accent">Accessories</a>
          </nav>
        </div>

        {/* RIGHT ICONS */}
        <div className="hidden lg:flex items-center gap-6">
          <Search className="w-6 h-6 cursor-pointer hover:text-accent" />
          <User className="w-6 h-6 cursor-pointer hover:text-accent" />
          <div className="relative">
            <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-[#D4B996]" />
            <span className="absolute -top-1 -right-1 bg-[##D4B996] text-[10px] text-white w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* 🔥 OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* 📱 DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="lg:hidden fixed top-0 right-0 w-full max-w-sm h-full 
             bg-white dark:bg-background-dark 
             z-50 flex flex-col shadow-2xl"
            >

              {/* HEADER */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-slate-200">
                <h2 className="font-serif text-xl tracking-widest">MENU</h2>
                <button onClick={() => setMobileOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-6 text-lg font-medium">

                  {/* COLLECTION DROPDOWN */}
                  <li>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setOpenMenu(!openMenu)}
                    >
                      Collections
                      <span>{openMenu ? "-" : "+"}</span>
                    </div>

                    <AnimatePresence>
                      {openMenu && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-3 ml-2 space-y-3 text-sm text-slate-500 overflow-hidden"
                        >
                          <li>Spring Summer 24</li>
                          <li>Autumn Winter 23</li>
                          <li>Resort Wear</li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  <li>Men</li>
                  <li>Women</li>
                  <li>Accessories</li>

                </ul>
              </div>

              {/* 🔥 BOTTOM ICONS */}
              <div className="border-t border-slate-200 px-6 py-4 flex justify-around">
                <Search className="w-5 h-5" />
                <User className="w-5 h-5" />
                <div className="relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-1 -right-2 bg-[##D4B996] text-[10px] text-white px-1 rounded-full">
                    2
                  </span>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}