import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import MegaMenu from "./component/MegaMenu";

type NavLink = {
  label: string;
  href?: string;
  submenu?: string[];
};

const navLinks: NavLink[] = [
  {
    label: "Collections",
    submenu: ["Spring Summer 24", "Autumn Winter 23", "Resort Wear"],
  },
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Accessories", href: "/accessories" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);
  const cartItemCount = 2;

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-xl border-b border-neutral-200">
      <div className="max-w-8xl mx-auto px-6 h-[10vh] flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-12 h-full">
          <Link to="/" className="text-2xl font-serif font-bold tracking-widest">
            LUXE
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 h-full justify-center">
            {navLinks.map((item) => (
              item.submenu ? (
                <div
                  key={item.label}
                  className="relative h-full flex items-center px-3"
                  onMouseEnter={() => setOpenMenu(true)}
                  onMouseLeave={() => setOpenMenu(false)}
                >
                  <a className="text-sm font-medium hover:text-[#D4B996] cursor-pointer">
                    {item.label}
                  </a>
                  <MegaMenu openMenu={openMenu} />
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium hover:text-[#D4B996] transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>
        </div>

        {/* RIGHT ICONS */}
        <div className="hidden lg:flex items-center gap-6">
          <Search className="w-6 h-6 cursor-pointer hover:text-accent" />
          <User className="w-6 h-6 cursor-pointer hover:text-accent" />
          <div className="relative">
            <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-[#D4B996]" />
            <span className="absolute -top-1 -right-1 bg-[#D4B996] text-[10px] text-white w-4 h-4 flex items-center justify-center rounded-full">
              {cartItemCount}
            </span>
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button className="lg:hidden" onClick={() => setMobileOpen((prev) => !prev)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="lg:hidden fixed top-0 right-0 w-full h-screen bg-white z-50 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center px-6 py-5 border-b border-slate-200">
                <h2 className="font-serif text-xl tracking-widest">MENU</h2>
                <button onClick={() => setMobileOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-6 text-lg font-medium">
                  {navLinks.map((item) =>
                    item.submenu ? (
                      <li key={item.label}>
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => setMobileCollectionsOpen((prev) => !prev)}
                        >
                          {item.label}
                          <span>{mobileCollectionsOpen ? "-" : "+"}</span>
                        </div>

                        <AnimatePresence>
                          {mobileCollectionsOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mt-3 ml-2 space-y-3 text-sm text-slate-500 overflow-hidden"
                            >
                              {item.submenu.map((child) => (
                                <li
                                  key={child}
                                  className="cursor-pointer hover:text-[#D4B996] transition-colors duration-200"
                                >
                                  {child}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : (
                      <li
                        key={item.label}
                        className="cursor-pointer hover:text-[#D4B996] transition-colors duration-200"
                      >
                        {item.label}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="border-t border-slate-200 px-6 py-4 flex justify-around">
                <Search className="w-5 h-5" />
                <User className="w-5 h-5" />
                <div className="relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-1 -right-2 bg-[#D4B996] text-[10px] text-white px-1 rounded-full">
                    {cartItemCount}
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
