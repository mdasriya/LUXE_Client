import './App.css'
import Navbar from './components/Navbar'
import CategorySection from './pages/CategorySection'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import JoinSection from './pages/JoinSection'
import SummerSaleBanner from './pages/SummerSaleBanner'
import Testimonials from './pages/Testimonials '
import PremiumBrandSlider from './pages/PremiumBrandSlider'
import ArtisanHero from './pages/ArtisanHero '
import SummerCollection from './pages/SummerCollection '

function App() {
  

  return (
    <>
   <Navbar />
   <Hero />
   <CategorySection />
   <SummerCollection />
   <ArtisanHero />
   <PremiumBrandSlider />
   <Testimonials />
   <SummerSaleBanner />
   <JoinSection />
   <Footer />
     
    </>
  )
}

export default App
