import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "PROJECTS", href: "#projects" },
  { name: "PROCESS", href: "#process" },
  { name: "CONTACT", href: "#contact" },
];

const CommandBar = ({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement> }) => {
  const [active, setActive] = useState("HOME");

  // Handle scroll spy
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return; // If container not mounted yet

    const handleScroll = () => {
      // Using container's scrolling
      const visibleHeight = container.clientHeight;
      // The "middle" of the viewport for detection purposes
      const detectionPoint = container.scrollTop + (visibleHeight / 3);

      // We need to calculate based on children of the scroll container
      links.forEach((link) => {
        const id = link.href.substring(1); // remove #
        const element = document.getElementById(id);

        if (element) {
          // Since the element is inside the container, we can check relative offset
          // But `element.offsetTop` is relative to closest positioned ancestor. 
          // If sections are direct children of the scroll container (which they are in Index.tsx), 
          // then element.offsetTop is correct relative to the container TOP (0).

          const top = element.offsetTop;
          const height = element.offsetHeight;

          // Check if detection point is inside the section
          if (detectionPoint >= top && detectionPoint < top + height) {
            setActive(link.name);
          }
        }
      });
    };

    container.addEventListener("scroll", handleScroll);
    // Initial detection
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  const scrollTo = (href: string) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[95vw] md:w-auto overflow-x-auto no-scrollbar">
      <nav className="relative flex items-center gap-1 p-2 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/50 min-w-max mx-auto">
        {/* Tech Deco Lines */}
        <div className="absolute -top-1 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -bottom-1 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => {
              setActive(link.name);
              scrollTo(link.href);
            }}
            className={`
                            relative px-3 py-2 md:px-4 text-xs md:text-sm font-mono tracking-widest transition-colors duration-300
                            ${active === link.name ? "text-primary text-shadow-glow" : "text-zinc-500 hover:text-zinc-200"}
                        `}
          >
            {active === link.name && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white/5 border border-white/10 rounded-md"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              >
                {/* Scanline active indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary shadow-[0_0_8px_var(--primary)]" />
              </motion.div>
            )}

            <span className="relative z-10 flex items-center gap-1">
              {/* Brackets for active state */}
              {active === link.name && <span className="opacity-50 text-white hidden md:inline">[</span>}
              {link.name}
              {active === link.name && <span className="opacity-50 text-white hidden md:inline">]</span>}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CommandBar;
