import React from "react";
import NavigationBar from "@/components/ui/navigation-bar";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/ProjectsPage/HeroSection";
import CategoryCardsSection from "@/components/ui/ProjectsPage/CategoryCardsSection";
import ProjectsGrid from "@/components/ui/ProjectsPage/ProjectGrid";

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-auto">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50">
        <NavigationBar />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Category Cards Section */}
      <CategoryCardsSection />

      {/* Projects Grid */}
      <ProjectsGrid />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;
