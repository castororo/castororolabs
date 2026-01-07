import CommandBar from "@/components/CommandBar";
import HeroSection from "@/components/HeroSection";
import CosmicCursor from "@/components/ui/CosmicCursor";
import { useRef, lazy, Suspense } from "react";
import CosmicLoader from "@/components/ui/CosmicLoader";

// Lazy load below-the-fold content for better initial performance
const TaglineSection = lazy(() => import("@/components/TaglineSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const HowWeWorkSection = lazy(() => import("@/components/HowWeWorkSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => {
  const mainScrollRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={mainScrollRef} className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-background text-foreground overflow-x-hidden">
      <CosmicCursor /> {/* Render Custom Cursor */}
      <CommandBar scrollRef={mainScrollRef} />

      {/* Hero loaded instantly */}
      <div className="snap-start w-full">
        <HeroSection />
      </div>

      <Suspense fallback={<CosmicLoader />}>
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
      </Suspense>
    </div>
  );
};

export default Index;
