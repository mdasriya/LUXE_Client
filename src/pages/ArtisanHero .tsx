
const ArtisanHero = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      
      {/* Image */}
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2LR3WYaJyxyWwVtKwbwIYTDVFPcOLeWTJBuTvDZd1CNBdYfCGfp57Z4YoBX8bIvWluXbVHQOqDyR8jSbDQCFmzMo-CbMtBO6_0KokbHqxGaC8wYa_avf3bLDqsmRl07B5ln50isnc-MTxtmIKfFOlt2I2Cx60WiXnhxvQEXIh5q_dUSPVUfv6bp73QslXWhKMMfLuzMylD4jaeurEV11-crBw-CfoOx4qxqMhmcJCDO7uVwQUctNuHsYn4eovkKwkufil5Mpbawg"
        alt="Artisan Collection"
        className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-3xl text-white">
          <h2 className="font-serif text-5xl md:text-7xl mb-6">
            The Artisan Series
          </h2>

          <p className="text-lg mb-8 opacity-90">
            Discover our collection of handcrafted pieces, where traditional craftsmanship meets modern silhouettes.
          </p>

          <button className="bg-white text-black px-12 py-4 font-bold text-sm tracking-widest hover:bg-[#D4B996] hover:text-white transition-all">
            VIEW COLLECTION
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArtisanHero;