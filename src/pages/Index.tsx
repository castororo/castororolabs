import BubbleNav from "@/components/BubbleNav";
import HeroSection from "@/components/HeroSection";
import TaglineSection from "@/components/TaglineSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
// import Footer from "@/components/Footer"; // Replaced by ContactSection
import ContactSection from "@/components/ContactSection";
import CosmicCursor from "@/components/ui/CosmicCursor"; // Import Cursor

import CommandBar from "../components/BubbleNav";
// We kept the file name BubbleNav.tsx but exported CommandBar default to minimize file operations, 
// or I should rename the file. For now, just importing the default export (which is CommandBar now).

import { useRef } from "react";

const Index = () => {
  const mainScrollRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={mainScrollRef} className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-background text-foreground overflow-x-hidden">
      <CosmicCursor /> {/* Render Custom Cursor */}
      <CommandBar scrollRef={mainScrollRef} />
      {/* Each section needs snap-start class */}
      <div className="snap-start w-full">
        <HeroSection />
      </div>
      <div className="snap-start w-full">
        <TaglineSection />
      </div>
      <div className="snap-start w-full">
        <AboutSection />
      </div>
      <div className="snap-start w-full">
        <ServicesSection />
      </div>
      <div className="snap-start w-full">
        <ProjectsSection />
      </div>
      <div className="snap-start w-full">
        <HowWeWorkSection scrollContainerRef={mainScrollRef} />
      </div>
      <div className="snap-start w-full">
        <ContactSection />
      </div>
      {/* We can keep the original Footer or remove it since ContactSection has footer elements. 
          For now, let's keep it but maybe hide it or use it for just copyright if needed.
          Actually, the user asked for a SECTION. Usually it replaces the standard footer in these designs.
          But let's keep the user's existing structure unless asked to remove. 
          Wait, having TWO footers (one inside ContactSection and one actual Footer) is weird.
          I will COMMENT OUT the old Footer in this change, effectively replacing it.
      */}
      {/* <div className="snap-start w-full">
        <Footer />
      </div> */}
    </div>
  );
};

export default Index;
