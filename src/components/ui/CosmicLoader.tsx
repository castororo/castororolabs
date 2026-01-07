import { motion } from "framer-motion";

const CosmicLoader = () => {
    return (
        <div className="w-full h-screen bg-zinc-950 flex flex-col items-center justify-center snap-start relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-cosmic-grid opacity-20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />

            {/* Central Core */}
            <div className="relative w-24 h-24 flex items-center justify-center mb-12">
                {/* Core - Pulsing */}
                <motion.div
                    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-12 h-12 bg-primary rounded-full blur-[2px] shadow-[0_0_30px_#db2777] z-10"
                />
                <div className="absolute w-8 h-8 bg-white rounded-full blur-[1px] opacity-80" />

                {/* Inner Ring - Rotating fast */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-t-primary border-r-transparent border-b-primary/30 border-l-transparent rounded-full w-24 h-24"
                />

                {/* Outer Ring - Rotating slow & counter */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 border border-t-white/20 border-r-white/5 border-b-white/20 border-l-white/5 rounded-full w-32 h-32 dashed-border"
                />
            </div>

            {/* Text Loading */}
            <div className="flex flex-col items-center gap-2 z-10">
                <h3 className="text-xl font-bold font-mono tracking-[0.2em] text-white">
                    INITIALIZING
                </h3>
                <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                            className="w-2 h-2 bg-primary rounded-full"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CosmicLoader;
