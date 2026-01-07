import { motion } from "framer-motion";
import { CosmicStar } from "./ui/CosmicStar";

const TaglineSection = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden snap-start bg-zinc-950">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cosmic-grid opacity-20 pointer-events-none" />

      {/* Ambient Background Animation to fill space */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large breathing nebula pulse - Pink/Magenta */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Secondary orbiting glow ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] border border-white/5 rounded-full"
          style={{ x: "-50%", y: "-50%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-pink-500 rounded-full blur-[2px] shadow-[0_0_10px_#db2777]" />
        </motion.div>

        {/* Counter-orbiting glow ring (smaller) */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] border border-white/5 rounded-full dashed-border"
          style={{ x: "-50%", y: "-50%" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full blur-[2px] shadow-[0_0_10px_#3b82f6]" />
        </motion.div>

        {/* Floating Stars */}
        <CosmicStar className="absolute top-[20%] right-[20%] w-8 h-8 text-primary/40" delay={0} />
        <CosmicStar className="absolute bottom-[20%] left-[20%] w-6 h-6 text-white/30" delay={2} />
        <CosmicStar className="absolute top-[15%] left-[15%] w-4 h-4 text-primary/20" delay={1} />
      </div>

      {/* Gradient Masks (Fade to Black) - Fixes squared edges */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />

      <div className="container relative z-10 flex flex-col items-center text-center px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-12 text-white drop-shadow-2xl"
        >
          We design <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-white animate-text-shimmer bg-[length:200%_auto]">living</span><br />
          web experiences.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-2xl"
        >
          {/* Glass Container - High Visibility */}
          <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-6 md:px-12 md:py-8 shadow-2xl shadow-black/50 hover:border-primary/30 transition-colors duration-500">
            <p className="text-xl md:text-2xl text-zinc-100 font-light leading-relaxed">
              A creative duo of freelance developers crafting fast, bold, and immersive websites for startups and studios.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TaglineSection;
