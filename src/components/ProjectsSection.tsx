import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { CosmicStar } from "./ui/CosmicStar";

const projects = [
  { id: 1, title: "Brand Ski Training Academy", category: "Web Design" },
  { id: 2, title: "E-Commerce Platform", category: "React App" },
  { id: 3, title: "Portfolio Website", category: "Web Design" },
  { id: 4, title: "Dashboard Interface", category: "UI/UX" },
  { id: 5, title: "Mobile App Landing", category: "Web Design" },
  { id: 6, title: "SaaS Platform", category: "React App" },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" ref={ref} className="min-h-screen flex flex-col justify-center py-24 md:py-32 snap-start">
      <div className="container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Projects
          </span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          Projects we're proud of
        </motion.h2>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.03 }}
              className={`
                relative overflow-hidden rounded-[2rem] bg-zinc-950 border border-white/10
                ${index === 0 ? "col-span-2 md:col-span-2 row-span-2" : ""}
                ${index === 0 ? "aspect-[16/9] md:aspect-[4/3]" : "aspect-square"}
                cursor-pointer group
              `}
            >
              {/* Dotted Grid Pattern */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-cosmic-grid" />

              {/* Pink Glow on Hover */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Star Decoration */}
              <CosmicStar className="absolute top-4 right-4 w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" delay={0.1} />

              {/* Content */}
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end z-10">
                <span className="text-xs font-mono text-primary/80 mb-2">{project.category}</span>
                <h3 className="text-sm md:text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors group"
          >
            START PROJECT WITH US
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
