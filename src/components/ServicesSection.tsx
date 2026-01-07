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

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
  <div className="w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-[2rem] p-6 md:p-12 shadow-2xl relative overflow-hidden group">
    {/* Cosmic Dotted Background */}
    <div className="absolute inset-0 opacity-20 pointer-events-none bg-cosmic-grid" />

    {/* Pink "Nebula" Glow */}
    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Corner Stars */}
    <CosmicStar className="absolute top-8 right-8 w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" delay={0.2} />

    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
      <div className="flex items-center gap-4 md:gap-6">
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
);

const ServicesSection = () => {
  const ref = useRef(null);

  return (
    <section id="services" ref={ref} className="h-screen flex flex-col snap-start overflow-hidden bg-background">
      {/* 
          Mobile Header: Flexible height (py-8) so it doesn't get overlapped.
          Desktop Header: Fixed height (15vh) for consistent layout.
      */}
      <div className="container py-8 md:py-12 md:h-[15vh] shrink-0 flex flex-col justify-center">
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

      {/* DESKTOP: Scroll Stack (Hidden on Mobile) */}
      <div className="hidden md:block flex-1 h-[85vh] w-full">
        <ScrollStack
          itemDistance={50}
          itemStackDistance={30}
          stackPosition="15%"
          itemScale={0.05}
          baseScale={0.9}
          useWindowScroll={false}
          blurAmount={0}
        >
          {services.map((service) => (
            <ScrollStackItem key={service.number} itemClassName="w-full flex justify-center py-4">
              <ServiceCard service={service} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* MOBILE: Vertical Scroll List (Visible on Mobile) */}
      <div className="md:hidden flex-1 w-full overflow-y-auto px-4 pb-32 scrollbar-hide">
        <div className="flex flex-col gap-6">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
