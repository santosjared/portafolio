import { AboutSection } from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
// import { AboutSection } from "@/components/about-section";
// import { ExperienceSection } from "@/components/experience-section";
// import { ProjectsSection } from "@/components/projects-section";
// import { ContactSection } from "@/components/contact-section";
// import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          <Hero />
          <AboutSection />
          <Experience />
    </main>
  );
}
