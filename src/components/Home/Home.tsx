import ArtisanHero from "../../pages/Modules/ArtisanHero/ArtisanHero";
import CategorySection from "../../pages/Modules/CategorySection/CategorySection";
import Hero from "../../pages/Modules/Hero/Hero";
import JoinSection from "../../pages/Modules/JoinSection/JoinSection";
import PremiumBrandSlider from "../../pages/Modules/PremiumBrandSlider/PremiumBrandSlider";
import SummerCollection from "../../pages/Modules/SummerCollection/SummerCollection";
import SummerSaleBanner from "../../pages/Modules/SummerSaleBanner/SummerSaleBanner";
import Testimonials from "../../pages/Modules/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategorySection />
      <SummerCollection />
      <ArtisanHero />
      <PremiumBrandSlider />
      <Testimonials />
      <SummerSaleBanner />
      <JoinSection />
    </div>
  );
};

export default Home;
