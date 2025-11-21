/* eslint-disable no-unused-vars */
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { Atom, Code, Cpu, FlaskConical } from "lucide-react"; // বৈজ্ঞানিক প্রতীক

// Hero Section-এর জন্য স্ট্যাগার কন্টেইনার
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

// Typing Effect: ফিক্সড সেন্টারে রাখার জন্য width চেইঞ্জ
const typingVariants = {
  initial: {
    width: "5ch",
  },
  animate: {
    width: "15ch", // "Hi, I'm Dhananjoy" এর সঠিক অক্ষর সংখ্যা
    transition: {
      duration: 2.5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
    },
  },
};

// বৈজ্ঞানিক প্রতীক ডেটা
const scientificSymbols = [
  {
    Icon: Atom,
    top: "7%",
    left: "5%",
    size: "w-50 h-50",
    color: "text-primary/10",
  },
  {
    Icon: Cpu,
    top: "25%",
    right: "10%",
    size: "w-30 h-30",
    color: "text-secondary/15",
  },
  {
    Icon: Code,
    bottom: "2%",
    left: "40%",
    size: "w-28 h-28",
    color: "text-secondary/30",
  },
  {
    Icon: FlaskConical,
    bottom: "33%",
    right: "18%",
    size: "w-20 h-20",
    color: "text-primary/15",
  },
];

const Hero = () => {
  return (
    <div className="relative z-10 flex h-auto min-h-screen w-full flex-col overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background-dark"></div>

        {/* Blur Circles */}
        <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-primary/20 blur-[150px]"></div>
        <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-secondary/20 blur-[150px]"></div>

        {/* ✅ ফিক্স: বৈজ্ঞানিক প্রতীক ব্যাকগ্রাউন্ড */}
        {scientificSymbols.map((s, i) => (
          <motion.div
            key={i}
            // ✅ opacity-20 থেকে opacity-40 করা হলো যাতে দেখা যায়
            className={`absolute ${s.size} ${s.color} opacity-40`}
            style={{
              top: s.top,
              left: s.left,
              right: s.right,
              bottom: s.bottom,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 30 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <s.Icon className="w-full h-full" />
          </motion.div>
        ))}
      </div>

      {/* মূল কন্টেন্ট */}
      <div className="relative z-10 flex h-full grow flex-col">
        <div className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            className="layout-content-container grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* ডান কলাম: প্রোফাইল ইমেজ */}
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                className="relative h-64 w-64 rounded-full bg-secondary/10 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              >
                {/* ইমেজ গ্লো ইফেক্টটিকে আরও হাইলাইট করা হলো */}
                <img
                  className="h-full w-full rounded-full object-cover p-2 shadow-xl shadow-secondary/30 border-2 border-secondary/15"
                  alt="A stylized portrait of Dhananjoy with neon highlights."
                  src="https://i.ibb.co.com/zh5rCvBr/focus-Nest-Owner.jpg"
                />
              </motion.div>
            </div>

            {/* বাম কলাম: টেক্সট এবং বাটন */}
            <div className="flex flex-col items-center justify-center gap-8 text-center lg:items-start lg:text-left">
              <div className="flex flex-col gap-4">
                {/* ✅ ১. Typing Effect (Fixed Center / Left) */}
                <motion.h1
                  className="font-display text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl 
                                               overflow-hidden whitespace-nowrap border-r-4 border-primary 
                                               lg:mx-0 mx-auto" // ✅ mx-auto যোগ করা হলো (small screen এ Center হবে)
                  variants={typingVariants}
                  initial="initial"
                  animate="animate"
                  style={{ animation: "blink-caret 0.75s step-end infinite" }}
                >
                  Hi, I'm Dhananjoy
                </motion.h1>

                {/* ✅ ২. Aesthetic Highlight (Junior MERN Developer...) */}
                <motion.h2
                  className="font-body text-lg font-medium md:text-xl mt-3"
                  variants={itemVariants}
                >
                  <span className="text-secondary/80 text-shadow-neon-secondary inline-block">
                    Junior MERN Developer & Research Enthusiast
                  </span>
                </motion.h2>

                <motion.p
                  className="font-body text-base text-white/60"
                  variants={itemVariants}
                >
                  Crafting modern, responsive, and user-centric web applications
                  with a passion for clean code and innovative solutions.
                </motion.p>
              </div>

              {/* বাটন */}
              <motion.div
                className="flex flex-col gap-4 sm:flex-row"
                variants={itemVariants}
              >
                <Button variant="primary" href="#projects">
                  View Projects
                </Button>
                <Button variant="secondary" href="/Dhananjoy_CV.pdf">
                  Download CV
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
