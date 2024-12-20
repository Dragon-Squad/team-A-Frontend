import "../../App.css";
import Hero from "../../components/ui/hero";
import NavigationBar from "../../components/ui/navigation-bar";
import Footer from "../../components/ui/footer";
import HeroSection from "@/components/ui/HeroSection";
function LandingPage() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <Hero />
      <Footer />
    </>
  );
}

export default LandingPage;
