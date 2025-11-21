import React, { useState } from "react";
import { Menu, X, Rocket } from "lucide-react"; // Lucide Icons থেকে প্রয়োজনীয় আইকন
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
// নেভিগেশন লিংক ডেটা (আপনার প্রয়োজন অনুযায়ী পরিবর্তন করুন)
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনুর স্টেট

  // Framer Motion Variants for Mobile Menu
  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.nav
      // Navbar এনিমেশন: শুরুতে উপর থেকে ফেড-ইন
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-dark/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* লোগো/নাম */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Rocket className="text-primary w-6 h-6" />
              <span className="font-display text-xl font-bold text-white">
                Dhananjoy
              </span>
            </a>
          </div>

          {/* ডেস্কটপ নেভিগেশন লিংক */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:text-primary"
                  whileHover={{ scale: 1.05 }} // হোভার এনিমেশন
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* মোবাইল মেনু টগল বাটন */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* মোবাইল মেনু ড্রয়ার (Framer Motion দিয়ে এনিমেটেড) */}
      <motion.div
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={menuVariants}
        className="md:hidden absolute top-16 left-0 w-full bg-background-dark/95 backdrop-blur-lg border-t border-primary/20 shadow-xl"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // ক্লিক করলে মেনু বন্ধ হবে
              className="block rounded-md px-3 py-2 text-base font-medium text-white/80 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-bold text-primary transition-colors hover:bg-primary/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
