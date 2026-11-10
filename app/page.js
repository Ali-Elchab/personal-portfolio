import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import VisionRiseSection from "./components/sections/VisionRiseSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto max-w-6xl pt-14 sm:pt-16 px-4 sm:px-8 lg:px-10 xl:px-0 w-full">
        <HeroSection />
        <AboutSection />
        <VisionRiseSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Home;
