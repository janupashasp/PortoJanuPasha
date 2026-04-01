import Hero from "./components/Hero";
import AboutMe from "./components/aboutme";
import Exper from "./components/Experience";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Work from "./components/work"
import Achive from "./components/achivement"
import { BlurFade } from "@/components/ui/blur-fade"

export default function Home() {
  return (
    <main>

      <Hero />
      <AboutMe />
      <Skills />
      <Exper />
      <Work />
      <Achive />
      <Contact />

    </main>
  );
}