import { motion, AnimatePresence } from "framer-motion";

let collectionMenu = [
  {
    id: 1,
    category: "Seasonal",
    subCategory: [
      { subtitle: "Spring Summer 24", link: "#" },
      { subtitle: "Autumn Winter 23", link: "#" },
      { subtitle: "Resort Wear", link: "#" },
    ],
  },
  {
    id: 2,
    category: "Featured",
    subCategory: [
      { subtitle: "New Arrivals", link: "#" },
      { subtitle: "Best Sellers", link: "#" },
      { subtitle: "Limited Edition", link: "#" },
    ],
  },
];

const MegaMenu = ({ openMenu }: { openMenu: boolean }) => {
  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-[1200px] bg-white dark:bg-backgroundDark shadow-xl border border-slate-100 dark:border-slate-800 p-8 grid grid-cols-3 gap-8"
        >
          {collectionMenu.map((collection) => (
            <div key={collection.id}>
              <h4 className="font-serif font-bold mb-4 border-b pb-2">
                {collection.category}
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {collection.subCategory.map((sub) => (
                  <li key={sub.subtitle}>
                    <a href={sub.link}>{sub.subtitle}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-serif font-bold mb-4 border-b pb-2">
              Featured
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">Limited Edition</a>
              </li>
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
  );
};

export default MegaMenu;
