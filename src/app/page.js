import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SoftwaresSection from "@/components/SoftwaresSection";
import WorksSection from "@/components/WorksSection";
import ReelsSection from "@/components/ReelsSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SoftwaresSection />
      <WorksSection />
      <ReelsSection />
      <ProjectsSection />
      <Footer />
      <BackToTop />
    </>
  );
}
