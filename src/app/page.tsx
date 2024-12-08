import CategorySection from "./components/categorysection";
import HeroSection from "./components/herosection";
import ProductSection from "./components/productsection";
import CarouselSection from "./components/carouselsection";
import GellarySection from "./components/gellarysection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <h2 className="text-[32px] text-center mt-8 font-bold">Our Products</h2>
      <ProductSection />
      <CarouselSection />
      <GellarySection />
    </main>
  );
}
