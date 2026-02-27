import Navigation from "@/components/base/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArticlesSection from "@/components/ArticlesSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/base/Footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <HeroSection />

        <ProjectsSection />
        <ArticlesSection />
        <ExperienceSection />
      </main>

      <div className="pt-20 md:pt-30">
        <Footer />
      </div>
    </>
  );
}
