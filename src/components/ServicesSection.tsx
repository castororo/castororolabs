import { motion } from "framer-motion";
import { useRef } from "react";
import ScrollStack, { ScrollStackItem } from "./ui/ScrollStack";
import { CosmicStar } from "./ui/CosmicStar";

const services = [
  {
    number: "01",
    title: "Websites for startups",
    description: "Launch ready websites that make a statement and drive growth for your vision.",
  },
  {
    number: "02",
    title: "High-performance React apps",
    description: "Lightning-fast React applications built for scale and user satisfaction.",
  },
  {
    number: "03",
    title: "Clean UI & smooth animations",
    description: "Beautiful interfaces with delightful micro-interactions that users love.",
  },
  {
    number: "04",
    title: "Scalable frontend systems",
    description: "Component libraries and design systems that grow with your product.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);

  return (
    <section id="services" ref={ref} className="h-screen flex flex-col snap-start overflow-hidden bg-background">
      <div className="container h-[15vh] pt-12 shrink-0">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Services
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold">
          What we do best
        </h2>
      </div>

      {/* Scroll Stack Container - Takes remaining height */}
      <div className="flex-1 h-[85vh] w-full">
        <ScrollStack
          itemDistance={50}
          itemStackDistance={30}
          stackPosition="15%" // Cards stack near top
          itemScale={0.05}
          baseScale={0.9}
          useWindowScroll={false} // Nested scroll
          blurAmount={0} // Disabled for better performance
        >
          {services.map((service, index) => (
            <ScrollStackItem key={service.number} itemClassName="w-full flex justify-center py-4">
              {/* Service Card - Cosmic Pixel Theme */}
              <div className="w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">

                {/* Cosmic Dotted Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-cosmic-grid" />

                {/* Pink "Nebula" Glow */}
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner Stars */}
                <CosmicStar className="absolute top-8 right-8 w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" delay={0.2} />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <span className="text-2xl md:text-4xl font-light text-primary/80 font-mono select-none">
                      {service.number}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground md:text-right max-w-sm text-lg font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ServicesSection;
