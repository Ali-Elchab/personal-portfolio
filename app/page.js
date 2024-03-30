import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar-components/Navbar";
import AboutSection from "./components/AboutSection-components/AboutSection";
import ProjectSection from "./components/ProjectSection-components/ProjectSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
    </main>
  );
}
