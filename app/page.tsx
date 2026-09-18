import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/home/Hero";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ResearchSection } from "@/components/home/ResearchSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ResearchSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </SiteShell>
  );
}
