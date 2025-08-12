import { createFileRoute } from "@tanstack/react-router";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import BestSellersSection from "@/components/BestSellersSection";
import CategoryCarousel from "@/components/CategoryCarousel";
import ReviewCarousel from "@/components/ReviewCarousel";
import HeroSection from "@/components/HeroSection";
export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex flex-col gap-20 items-center pt-[100vh] justify-start">
      <HeroSection />
      <BestSellersSection />
      <FeaturedCarousel />
      <CategoryCarousel />
      <ReviewCarousel />
    </div>
  );
}
