import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Globe, Clock, Instagram } from "lucide-react";
import { CosmicStar } from "./ui/CosmicStar";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const TimeDisplay = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return <span className="font-mono">{time}</span>;
};

const ContactSection = () => {
    const [open, setOpen] = useState(false);

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-between py-24 md:py-32 snap-start bg-zinc-950 text-foreground relative overflow-hidden">

            {/* Background decoration */}
            <div className="absolute inset-0 bg-cosmic-grid opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* Pink Nebula */}
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px] animate-pulse" />
                <CosmicStar className="absolute top-20 right-20 w-8 h-8 text-primary/40" delay={0} />
                <CosmicStar className="absolute bottom-40 left-20 w-12 h-12 text-primary/20" delay={2} />
            </div>

            <div className="container relative z-10 flex-1 flex flex-col justify-center">

                {/* Header Area */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <span className="text-sm md:text-base font-mono uppercase tracking-widest text-muted-foreground mb-8 block">
                        // INITIALIZE COMMUNICATION
                    </span>

                    <h2 className="text-5xl md:text-8xl lg:text-[120px] font-bold leading-[0.9] tracking-tighter">
                        LET'S WORK <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600 animate-text-shimmer bg-[length:200%_auto]">
                            TOGETHER
                        </span>
                    </h2>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">

                    {/* 1. Main CTA (Large) - Dialog Trigger */}
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="col-span-1 md:col-span-8 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between group hover:border-primary/50 transition-colors cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-4 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                                        <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                                    </div>
                                    <span className="font-mono text-xs md:text-sm text-zinc-500 uppercase tracking-widest">Start Project</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Start a Project</h3>
                                    <p className="text-zinc-400 text-lg">Have an idea? Let's build it together.</p>
                                </div>
                            </motion.div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-xl bg-zinc-950/90 border-white/10 backdrop-blur-xl p-8 rounded-3xl max-h-[85vh] overflow-y-auto">
                            <VisuallyHidden.Root>
                                <DialogTitle>Start a Project</DialogTitle>
                            </VisuallyHidden.Root>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    Open Channel
                                </h3>
                                <p className="text-zinc-400">Fill out the coordinates below to initiate contact.</p>
                            </div>
                            <ContactForm onSuccess={() => setOpen(false)} />
                        </DialogContent>
                    </Dialog>

                    {/* 2. Email Copy (Small) - Spans 4 cols */}
                    <motion.a
                        href="mailto:castoro.business@gmail.com"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="col-span-1 md:col-span-4 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center gap-4 group hover:bg-zinc-800/50 transition-colors"
                    >
                        <Mail className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors" />
                        <span className="text-zinc-300 font-mono text-sm md:text-base break-all text-center">castoro.business@gmail.com</span>
                    </motion.a>

                    {/* 3. Location (Small) - Spans 4 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1 md:col-span-4 bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex flex-col justify-between h-48 md:h-auto"
                    >
                        <Globe className="w-6 h-6 text-zinc-500" />
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-zinc-600 mb-1">Location</span>
                            <span className="text-xl font-bold text-zinc-200">Remote / Earth</span>
                        </div>
                    </motion.div>

                    {/* 4. Time (Small) - Spans 4 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="col-span-1 md:col-span-4 bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex flex-col justify-between h-48 md:h-auto"
                    >
                        <Clock className="w-6 h-6 text-pink-500 animate-pulse" />
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-zinc-600 mb-1">Local Time</span>
                            <span className="text-2xl font-bold text-white"><TimeDisplay /></span>
                        </div>
                    </motion.div>

                    {/* 5. Socials (Small) - Spans 4 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="col-span-1 md:col-span-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col justify-between h-48 md:h-auto group hover:border-pink-500/50 transition-colors"
                    >
                        <div className="flex gap-2">
                            <a href="https://www.instagram.com/casto_roro/#" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-1">Social</span>
                            <a href="https://www.instagram.com/casto_roro/#" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors flex items-center gap-2">
                                @casto_roro <ArrowUpRight className="w-4 h-4 opacity-50" />
                            </a>
                        </div>
                    </motion.div>

                </div>

            </div>

            {/* Footer Bottom */}
            <div className="container relative z-10 mt-16 md:mt-24 pb-8">
                <div className="w-full h-px bg-white/10 mb-8" />
                <div className="flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
                    <p>© 2026 CASTORORO STUDIO. All Systems Nominal.</p>
                    <p className="font-mono text-xs">DESIGNED IN THE VOID</p>
                </div>
            </div>

        </section>
    );
};

export default ContactSection;
