import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CosmicCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position state
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for the trailing ring
    const springConfig = { damping: 25, stiffness: 400 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.style.cursor === "pointer";

            setIsHovering(!!isInteractive);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    // Hide system cursor
    useEffect(() => {
        document.body.style.cursor = "none";
        return () => {
            document.body.style.cursor = "auto";
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden mix-blend-difference">
            {/* Main Dot - Follows perfectly */}
            <motion.div
                className="absolute w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
                animate={{
                    scale: isHovering ? 0.5 : 1,
                }}
            />

            {/* Trailing Ring - Has physics */}
            <motion.div
                className="absolute rounded-full border-[2px] border-white -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white/5"
                style={{
                    x: cursorX,
                    y: cursorY
                }}
                animate={{
                    width: isHovering ? 60 : 40,
                    height: isHovering ? 60 : 40,
                    backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
            />
        </div>
    );
};

export default CosmicCursor;
