import Hero from "@/components/hero";
import Profile from "@/components/profile";
// import { AboutSection } from "@/components/about-section";
// import { ExperienceSection } from "@/components/experience-section";
// import { ProjectsSection } from "@/components/projects-section";
// import { ContactSection } from "@/components/contact-section";
// import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
          <Hero />
      </div>
    </div>

  );
}
