import { motion, useInView, Easing } from "framer-motion";
import { useRef } from "react";
import { CosmicStar } from "./ui/CosmicStar";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const easeOut: Easing = [0.16, 1, 0.3, 1];

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: easeOut,
      },
    }),
  };

  return (
    <section id="about" ref={ref} className="min-h-screen flex flex-col justify-center py-24 md:py-32 snap-start bg-zinc-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-cosmic-grid opacity-20" />
      <CosmicStar className="absolute top-20 left-10 w-8 h-8 text-primary/20" delay={0.5} />
      <CosmicStar className="absolute bottom-20 right-10 w-12 h-12 text-primary/10" delay={1.5} />

      <div className="container relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            About us
          </span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* Main heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <motion.h2
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Two developers,
            </motion.h2>
            <motion.h2
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-muted-foreground"
            >
              one vision
            </motion.h2>
          </div>

          <motion.div
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a boutique web development studio where design meets interactivity.
              With two heads far better than one, we combine our skills to deliver
              projects that exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every project is handled with care and attention. We believe in small,
              focused teams that truly understand the vision. Our boutique approach
              means you work directly with us—no handoffs, no miscommunication.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
