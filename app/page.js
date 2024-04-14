import HeroSection from "./HeroSection/page";
import Navbar from "./components/Navbar-components/Navbar";
import AboutSection from "./AboutMe/page";
import ProjectSection from "./Projects/page";
import EmailSection from "./Contact/page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
        <hr className="my-8 border-gray-700" />
        <AboutSection />
        <hr className="my-8 border-gray-700" />
        <ProjectSection />
        <hr className="my-8 border-gray-700" />
        <EmailSection />
      </div>
    </main>
  );
}
