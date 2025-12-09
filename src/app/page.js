import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import Footer from "../components/Footer/Footer";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import CategoryGrid from "../components/CategoryGrid/CategoryGrid";
import TrendingCarousel from "../components/TrendingCarousel/TrendingCarousel";
import Lookbook from "../components/Lookbook/Lookbook";

import Newsletter from "../components/Newsletter/Newsletter";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrendingCarousel />
      <CategoryGrid />
      <Lookbook />
      <PromoBanner />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </main>
  );
}
