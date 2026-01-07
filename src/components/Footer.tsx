import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const footerLinks = {
    pages: ["Home", "About", "Services", "Projects", "Contact"],
    social: ["Twitter", "LinkedIn", "Dribbble", "GitHub"],
  };

  return (
    <footer id="contact" ref={ref} className="py-24 md:py-32 border-t border-border">
      <div className="container">
        {/* Large logo reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-[120px] font-bold tracking-tighter">
            CASTORORO
            <span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-4">
              Let's build something incredible together.
            </p>
            <a
              href="mailto:hello@castororo.dev"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Pages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Pages
            </h4>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © 2024 Castororo. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & built with passion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
