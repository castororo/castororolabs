import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CosmicStar } from "./ui/CosmicStar";

const TaglineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center py-32 md:py-48 overflow-hidden snap-start bg-zinc-950">
      {/* Grid background */}
      <div className="absolute inset-0 bg-cosmic-grid opacity-20" />
      <CosmicStar className="absolute top-[20%] right-[20%] w-6 h-6 text-white/10" delay={2} />
      <CosmicStar className="absolute bottom-[30%] left-[10%] w-4 h-4 text-primary/30" delay={0} />

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            We design living web experiences.
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 inline-block"
          >
            <div className="px-6 py-3 rounded-full bg-secondary/20 border border-secondary/40 backdrop-blur-sm">
              <p className="text-sm md:text-base text-muted-foreground">
                A creative duo of freelance developers crafting fast, bold, and immersive websites for startups and studios.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute left-10 top-1/3 w-2 h-2 rounded-full bg-primary"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-20 bottom-1/4 w-3 h-3 rounded-full bg-secondary"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
};

export default TaglineSection;
