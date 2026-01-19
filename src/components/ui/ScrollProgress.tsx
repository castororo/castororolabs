import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { RefObject } from "react";
import { CosmicStar } from "./CosmicStar";

interface ScrollProgressProps {
    containerRef: RefObject<HTMLElement>;
}

const ScrollProgress = ({ containerRef }: ScrollProgressProps) => {
    const { scrollYProgress } = useScroll({
        container: containerRef,
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform progress (0-1) to percentage string
    const height = useTransform(scaleY, [0, 1], ["0%", "100%"]);

    // Opacity fade in/out at extremes if needed, or just keep always visible
    // For now, let's keep it simple and elegant

    return (
        <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 h-[40vh] z-50 hidden md:flex flex-col items-center gap-4">
            {/* Top Decoration */}
            <div className="w-px h-8 bg-gradient-to-t from-white/20 to-transparent" />

            {/* The Track */}
            <div className="relative w-px h-full bg-white/5 rounded-full overflow-visible">
                {/* The Filled Bar */}
                <motion.div
                    style={{ height }}
                    className="w-full bg-gradient-to-b from-primary via-purple-500 to-pink-500 origin-top rounded-full relative"
                >
                    {/* The Head / Star */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary blur-md" />
                            <CosmicStar className="w-4 h-4 text-white" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Decoration */}
            <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
    );
};

export default ScrollProgress;
