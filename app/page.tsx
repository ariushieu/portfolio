import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import TechStack from "./components/TechStack";
import FeaturedProjects from "./components/FeaturedProjects";
import Contact from "./components/Contact";
import FloatingDock from "./components/FloatingDock";

export default function Home() {
  return (
    <>
      <main className="relative">
        <Hero />
        <WorkExperience />
        <TechStack />
        <FeaturedProjects />
        <Contact />
      </main>
      <FloatingDock />
    </>
  );
}
