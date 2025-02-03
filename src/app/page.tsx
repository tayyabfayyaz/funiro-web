import CategorySection from "@/app/components/categorysection";
import HeroSection from "@/app/components/herosection";
import ProductsSection from "@/app/components/productsection";
import GellarySection from "@/app/components/gellarysection";
import CarouselSection from "@/app/components/carouselsection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <h2 className="text-[32px] text-center mt-8 font-bold">Our Products</h2>
      <ProductsSection />
      <CarouselSection />
      <GellarySection />
    </main>
  );
}
