import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto max-w-screen-xl pt-16 sm:pt-20 px-6 sm:px-8 lg:px-10 xl:px-0 w-full">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Home;
