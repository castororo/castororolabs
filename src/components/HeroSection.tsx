import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import Antigravity from "./ui/Antigravity";
import { CosmicStar } from "./ui/CosmicStar";

const FloatingCube = () => {
  return (
    <motion.div
      className="relative w-32 h-32 md:w-48 md:h-48"
      animate={{
        y: [0, -20, 0],
        rotateX: [0, 10, 0],
        rotateY: [0, 15, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ perspective: "1000px" }}
    >
      <div
        className="w-full h-full rounded-2xl glow-blue"
        style={{
          transform: "rotateX(15deg) rotateY(-15deg)",
          background: "linear-gradient(135deg, hsl(210, 100%, 55%), hsl(330, 100%, 60%))",
        }}
      />
    </motion.div>
  );
};

const ScrollArrows = () => {
  return (
    <div className="flex flex-col items-center gap-0">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -6, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        >
          <ChevronUp className="w-5 h-5 text-primary" />
        </motion.div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden snap-start bg-zinc-950"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-cosmic-grid opacity-30" />

      {/* Ambient Decoration Stars */}
      <div className="absolute inset-0 pointer-events-none">
        <CosmicStar className="absolute top-[15%] left-[10%] w-6 h-6 text-primary/30" delay={0} duration={5} />
        <CosmicStar className="absolute top-[25%] right-[15%] w-10 h-10 text-primary/20" delay={2} duration={7} />
        <CosmicStar className="absolute bottom-[20%] left-[20%] w-4 h-4 text-white/20" delay={1} duration={4} />
      </div>

      {/* Antigravity Animation Layer */}
      <div className="absolute inset-0 z-0">
        <Antigravity
          count={150} // Reduced for performance
          magnetRadius={15}
          ringRadius={12}
          color="#FF007F" // using hot pink
          particleSize={3}
          rotationSpeed={0.5}
          autoAnimate={true}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Floating cube behind logo */}
        <div className="absolute -top-16 md:-top-8 opacity-90">
          <FloatingCube />
        </div>


        {/* Logo Text */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter relative z-20"
        >
          <span className="relative">
            CASTORORO
            <motion.span
              className="absolute -right-4 top-0 text-primary"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              .
            </motion.span>
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground text-center max-w-xl"
        >
          Boutique development studio crafting digital experiences
        </motion.p>
      </div>

      {/* Scroll indicator - right side */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2"
      >
        <ScrollArrows />
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
