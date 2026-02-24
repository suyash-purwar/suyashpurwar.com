import Navigation from "@/components/base/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArticlesSection from "@/components/ArticlesSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />

      <ProjectsSection />
      <ArticlesSection />
    </>
  );
}
