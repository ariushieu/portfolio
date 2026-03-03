import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import TechStack from "./components/TechStack";
import FeaturedProjects from "./components/FeaturedProjects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <WorkExperience />
        <TechStack />
        <FeaturedProjects />
        <Contact />
      </main>
    </>
  );
}
