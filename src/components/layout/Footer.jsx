/* eslint-disable no-unused-vars */
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  // দ্রুত নেভিগেশন লিংক
  const quickLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.footer
      className="bg-background-dark/90 border-t border-white/10 py-10 px-4 sm:px-6 lg:px-8 relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* লোগো এবং কপিরাইট */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <a href="#" className="flex items-center space-x-2 mb-2">
            <Rocket className="text-primary w-6 h-6" />
            <span className="font-display text-xl font-bold text-white">
              Dhananjoy
            </span>
          </a>
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Dhananjoy. All rights reserved.
          </p>
          <p className="text-white/40 text-xs mt-1">
            Built with React, Vite, and Tailwind CSS.
          </p>
        </div>

        {/* নেভিগেশন লিংক */}
        <div className="flex gap-4 sm:gap-6 text-white/70 text-sm font-medium">
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
