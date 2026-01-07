import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { CosmicStar } from "@/components/ui/CosmicStar";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-950 text-foreground overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-cosmic-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <CosmicStar className="absolute top-[20%] left-[20%] w-8 h-8 text-primary/40" delay={0} duration={6} />
        <CosmicStar className="absolute bottom-[20%] right-[20%] w-12 h-12 text-primary/20" delay={2} duration={8} />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-2 text-9xl font-bold font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-2xl font-light text-muted-foreground"
        >
          Lost in the Void
        </motion.p>

        <motion.a
          href="/"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-primary hover:text-white transition-colors border border-primary/20 hover:border-primary px-6 py-3 rounded-full hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Base
        </motion.a>
      </div>
    </div>
  );
};

export default NotFound;
