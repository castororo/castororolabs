import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { CosmicStar } from "./ui/CosmicStar";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const projects = [
  {
    id: 1,
    title: "Stranger Things Theme UI",
    category: "Web Design",
    video: "/recordings/Theme based UI.mp4",
    tags: ["HTML", "CSS", "GSAP"],
    description: "Immersive landing page featuring scroll-triggered GSAP animations and thematic interactive elements."
  },
  {
    id: 2,
    title: "Magical 3D Interface",
    category: "React App",
    video: "/recordings/Magical Interface.mp4",
    tags: ["React", "Three.js", "Framer Motion"],
    description: "Interactive 3D product showcase utilizing Three.js for real-time rendering and manipulation."
  },
  {
    id: 3,
    title: "ShoeLuxe - Premium Store",
    category: "React App",
    video: "/recordings/shoeluxe.mp4",
    tags: ["React", "Tailwind", "Stripe"],
    description: "Modern e-commerce platform with seamless cart functionality and premium visual design."
  },
  {
    id: 4,
    title: "Tracklify - Project Management OS",
    category: "SaaS Platform",
    video: "/recordings/Tracklify.mp4",
    tags: ["React", "TypeScript", "Supabase"],
    description: "Comprehensive project management dashboard for agile teams with real-time analytics."
  },
  {
    id: 5,
    title: "Maison Éclat - Luxury Fashion",
    category: "E-Commerce",
    video: "/recordings/Maison eclat.mp4",
    tags: ["Next.js", "Framer Motion", "Shopify"],
    description: "Luxury fashion marketplace focused on editorial aesthetics and smooth user experience."
  },
];

const ProjectCard = ({ project, index, onClick }: { project: typeof projects[0], index: number, onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  // Trigger earlier (margin: "200px") so it starts loading before it's fully on screen
  const isInView = useInView(cardRef, { once: true, margin: "200px" });
  const [shouldLoad, setShouldLoad] = useState(false);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (isInView) {
      setShouldLoad(true);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: 0.2 + (index % 2) * 0.1, // Stagger based on column index for smoother feel
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`
        relative overflow-hidden rounded-[2rem] bg-zinc-950 border border-white/10
        aspect-video
        ${index % 2 === 1 ? "md:translate-y-24" : ""}
        cursor-pointer group
      `}
    >
      <div
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-0 z-0"
      >
        {/* Video Background or Pattern */}
        {project.video && shouldLoad ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          />
        ) : (
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-cosmic-grid" />
        )}
      </div>

      {/* Pink Glow on Hover */}
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />

      {/* Star Decoration */}
      <div style={{ transform: "translateZ(100px)" }} className="absolute top-4 right-4 z-20">
        <CosmicStar className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" delay={0.1} />
      </div>

      {/* Content */}
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end z-10"
      >
        <span className="text-xs font-mono text-primary/80 mb-2">{project.category}</span>
        <h3 className="text-sm md:text-lg font-bold text-white group-hover:text-primary transition-colors mb-2">
          {project.title}
        </h3>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-white/90 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
          Projects we&apos;re proud of
        </motion.h2>

        {/* Standard Grid with Perspective */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: "2000px" }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
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

      {/* Project Lightbox */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl w-[95vw] h-[80vh] md:h-auto bg-zinc-950/95 border-white/10 backdrop-blur-xl p-0 overflow-hidden flex flex-col md:block">
          <VisuallyHidden.Root>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
          </VisuallyHidden.Root>

          <div className="relative w-full h-full md:aspect-video bg-black flex items-center justify-center">
            {selectedProject?.video ? (
              <video
                src={selectedProject.video}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-4">
                  <CosmicStar className="w-12 h-12 text-primary/50" />
                </div>
                <p className="text-zinc-500">Preview not available for this project yet.</p>
              </div>
            )}

            {/* Overlay Info (Optional) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{selectedProject?.title}</h3>
              <p className="text-base text-zinc-300 max-w-2xl mb-6 line-clamp-2 md:line-clamp-none">
                {selectedProject?.description}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-primary font-mono text-sm uppercase tracking-widest">{selectedProject?.category}</span>
                <div className="h-4 w-px bg-white/20"></div>
                <div className="flex gap-2">
                  {selectedProject?.tags?.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[10px] uppercase font-bold text-white/90 bg-white/10 border border-white/10 rounded-full backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </DialogContent>
      </Dialog>

    </section>
  );
};

export default ProjectsSection;
