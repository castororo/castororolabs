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

const CommandBar = () => {
  const [active, setActive] = useState("HOME");

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.querySelector(link.href));
      const scrollPos = window.scrollY + 300; // Offset

      sections.forEach((section) => {
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            const id = section.getAttribute('id');
            const linkName = links.find(l => l.href === `#${id}`)?.name;
            if (linkName) setActive(linkName);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
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
