import { DynamicIsland } from "@/components/dynamic-island";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import {
  PersonJsonLd,
  ProfilePageJsonLd,
  ProfessionalServiceJsonLd,
  ReviewsJsonLd,
} from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <ProfilePageJsonLd />
      <ProfessionalServiceJsonLd />
      <ReviewsJsonLd />

      {/* Animated Mesh Background */}
      <div className="mesh-gradient" />

      {/* Dynamic Island Navigation */}
      <DynamicIsland />

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  );
}
