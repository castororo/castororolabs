import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { CosmicStar } from "./ui/CosmicStar";

const ContactSection = () => {
    return (
        <section id="contact" className="min-h-screen flex flex-col justify-between py-24 md:py-32 snap-start bg-zinc-950 text-foreground relative overflow-hidden">

            {/* Background decoration */}
            <div className="absolute inset-0 bg-cosmic-grid opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px] animate-pulse" />
                <CosmicStar className="absolute top-20 right-20 w-8 h-8 text-primary/40" delay={0} />
                <CosmicStar className="absolute bottom-40 left-20 w-12 h-12 text-primary/20" delay={2} />
            </div>

            <div className="container relative z-10 flex-1 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-sm md:text-base font-mono uppercase tracking-widest text-muted-foreground mb-8 block">
                        What's Next?
                    </span>

                    <h2 className="text-6xl md:text-8xl lg:text-[140px] font-bold leading-[0.9] tracking-tighter mb-12">
                        LET'S WORK <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">
                            TOGETHER
                        </span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-6 md:items-center mt-12"
                >
                    <a
                        href="mailto:castoro.business@gmail.com"
                        className="group relative inline-flex items-center gap-4 bg-primary text-primary-foreground px-10 py-6 rounded-full text-xl md:text-2xl font-bold tracking-tight overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Start a Project
                            <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                        </span>
                    </a>

                    <a
                        href="mailto:castoro.business@gmail.com"
                        className="text-muted-foreground hover:text-foreground text-lg md:text-xl font-medium px-6 py-4 flex items-center gap-3 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        castoro.business@gmail.com
                    </a>
                </motion.div>
            </div>

            {/* Footer-ish bottom area */}
            <div className="container relative z-10">
                <div className="w-full h-px bg-border mb-8" />
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 text-muted-foreground text-sm md:text-base">
                    <p>© 2026 Castororo Studio</p>
                    <div className="flex gap-6">
                        {/* <a href="#" className="hover:text-primary transition-colors">LinkedIn</a> */}
                        {/* <a href="#" className="hover:text-primary transition-colors">Twitter</a> */}
                        <a href="https://www.instagram.com/casto_roro/#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
