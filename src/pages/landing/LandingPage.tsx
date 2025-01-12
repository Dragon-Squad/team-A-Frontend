import "../../App.css";
import NavigationBar from "../../components/ui/navigation-bar";
import Footer from "../../components/ui/footer";
import HeroSection from "@/components/ui/HeroSection";
import IntroductionSection from "@/components/ui/IntroductionSection";
import ImpactAreasSection from "@/components/ui/ImpactAreasSection";
import LatestProjectsSection from "@/components/ui/LatestProjectsSection";
import ProjectsByRegionSection from "@/components/ui/ProjectsByRegionSection";
import GallerySection from "@/components/ui/GallerySection";
import TestimonialSection from "@/components/ui/TestimonialSection";
import LatestNewsAndBlogSection from "@/components/ui/LatestNewsAndBlogSection";
function LandingPage() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <IntroductionSection />
      <ImpactAreasSection />
      <LatestProjectsSection />
      <ProjectsByRegionSection />
      <GallerySection />
      <TestimonialSection />
      <LatestNewsAndBlogSection />
      <Footer />
    </>
  );
}

export default LandingPage;
