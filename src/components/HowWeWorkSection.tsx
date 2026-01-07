import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    description: "We start by understanding your goals, audience, and vision through focused conversation.",
  },
  {
    number: "02",
    title: "DESIGN",
    description: "Creating beautiful mockups and prototypes that bring your vision to life.",
  },
  {
    number: "03",
    title: "BUILD",
    description: "Developing clean, performant code with attention to every detail.",
  },
  {
    number: "04",
    title: "DELIVER",
    description: "Launching your project and ensuring everything runs smoothly.",
  },
];

interface HowWeWorkSectionProps {
  scrollContainerRef?: React.RefObject<HTMLElement>;
}

const CosmicStar = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    initial={{ opacity: 0.5, scale: 0.8 }}
    animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8], rotate: [0, 90, 0] }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
  </motion.svg>
);

const HowWeWorkSection = ({ scrollContainerRef }: HowWeWorkSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] snap-start bg-black"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Ambient Background Stars for the whole section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <CosmicStar className="absolute top-20 left-[10%] w-8 h-8 text-primary/20" delay={0} />
          <CosmicStar className="absolute bottom-40 right-[20%] w-12 h-12 text-primary/10" delay={2} />
          <CosmicStar className="absolute top-1/2 left-[50%] w-6 h-6 text-white/10" delay={1} />
        </div>

        <div className="container relative h-full flex flex-col justify-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8 pl-4 md:pl-0"
          >
            <span className="text-xs uppercase tracking-widest text-primary font-mono">
              // THE PROCESS
            </span>
            <div className="w-12 h-[1px] bg-primary/50" />
          </motion.div>

          <div className="mb-12 pl-4 md:pl-0">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-white">
              HOW WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">WORK</span>.
            </h2>
          </div>

          <motion.div style={{ x }} className="flex gap-8 pl-4 md:pl-0 w-max">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative w-[85vw] md:w-[600px] h-[50vh] md:h-[600px] rounded-[2rem] p-8 md:p-16 overflow-hidden flex-shrink-0 group bg-zinc-950 border border-white/10"
              >
                {/* Dotted Grid Pattern Background */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}
                />

                {/* Pink "Nebula" Glow - subtle dithered feel via noise (simulated with opacity) */}
                <div
                  className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-[120px] group-hover:bg-primary/30 transition-colors duration-500"
                />

                {/* Corner Stars */}
                <CosmicStar className="absolute top-8 right-8 w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" delay={0.5} />
                <div className="absolute top-12 right-12 w-1 h-1 bg-white rounded-full opacity-50" />
                <div className="absolute top-4 right-20 w-1 h-1 bg-white rounded-full opacity-30" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Digital Number */}
                  <div className="flex justify-between items-start">
                    <span
                      className="text-6xl md:text-8xl font-bold tracking-tighter text-white/10 group-hover:text-white/20 transition-colors select-none font-mono"
                    >
                      {step.number}
                    </span>
                  </div>

                  <div>
                    {/* Title with decoration */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-2 bg-primary rotate-45" />
                      <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300 uppercase">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-md font-light">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-[2rem] transition-colors duration-300 pointer-events-none" />
              </div>
            ))}
            <div className="w-[10vw] flex-shrink-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
