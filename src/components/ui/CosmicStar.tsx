import { motion } from "framer-motion";

export const CosmicStar = ({
    className,
    delay = 0,
    duration = 4
}: {
    className?: string;
    delay?: number;
    duration?: number;
}) => (
    <motion.svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        style={{ willChange: "transform, opacity" }}
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 90, 0]
        }}
        transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
    </motion.svg>
);
