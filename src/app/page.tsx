import { Component as HeroSection } from "@/components/ui/horizon-hero-section";
import { Navbar } from "@/components/navbar";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
