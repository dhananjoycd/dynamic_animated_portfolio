/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

// আপনার নেভিগেশন লিংক ডেটা (প্রয়োজন অনুসারে পরিবর্তন করুন)
const navLinks = [
  { name: "Home", href: "#top" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// Framer Motion Variants
const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, delay: 0.1 },
  },
};

const mobileMenuVariants = {
  open: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.3 } },
  closed: {
    opacity: 0,
    x: "100%",
    transition: { type: "tween", duration: 0.3 },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // মেনু টগল ফাংশন
  const toggleMenu = () => setIsOpen(!isOpen);

  // মেনু আইটেম ক্লিক হ্যান্ডলার (মোবাইলে মেনু বন্ধ করার জন্য)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    // ফিক্সড পজিশন, টপে থাকবে এবং স্ক্রল করলে আংশিক স্বচ্ছ দেখাবে
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-md shadow-lg shadow-primary/10"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* লোগো/নেম */}
          <a
            href="#top"
            className="flex items-center text-2xl font-display font-bold text-white hover:text-primary transition duration-300"
          >
            D.J.
          </a>

          {/* ডেস্কটপ মেনু (Hidden on small screens) */}
          <div className="hidden lg:flex lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 font-medium hover:text-primary relative transition duration-300 group"
              >
                {link.name}
                {/* Underline Hover Effect */}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* মোবাইল মেনু টগল বাটন (Hamburger Icon) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition duration-300"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =================================== 
          মোবাইল মেনু কন্টেইনার (Animated)
          =================================== */}
      <motion.div
        className="lg:hidden absolute top-16 left-0 w-full bg-background-dark/95 backdrop-blur-sm shadow-xl"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        // অ্যানিমেশনের সময় স্ক্রল করা বন্ধ করার জন্য
        style={{ overflow: "hidden" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:bg-primary/20 hover:text-primary transition duration-300 border-l-4 border-transparent hover:border-primary"
              // মোবাইল মেনুর ভেতরের আইটেম অ্যানিমেশন
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * navLinks.indexOf(link) }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
