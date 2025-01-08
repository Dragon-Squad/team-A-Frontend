import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/ui/footer";
import StatsSection from "@/components/ui/AboutUs/StatsSection";
import HeroSection from "@/components/ui/AboutUs/HeroSection";
import MainContentSection from "@/components/ui/AboutUs/MainContentSection";
import AboutOrganization from "@/components/ui/AboutUs/AboutOrganization";
const AboutUsPage: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <StatsSection />
      <MainContentSection />
      <AboutOrganization />
      <Footer />
    </>
  );
};

export default AboutUsPage;
