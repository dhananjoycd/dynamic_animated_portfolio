/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import ResearchCard from "../ui/ResearchCard";
import { RESEARCH_DATA } from "../utils/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const Research = () => {
  return (
    <section
      id="research"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background-dark relative z-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="font-display text-4xl font-bold text-center text-white mb-12 after:content-[''] after:block after:w-16 after:h-1 after:bg-secondary after:mx-auto after:mt-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          My Research & Theoretical Work
        </motion.h2>

        <p className="text-center text-white/70 mb-10 max-w-3xl mx-auto">
          Merging development skills with deep theoretical understanding.
          Explore the core models, algorithms, and equations driving my research
          findings.
        </p>

        {/* গবেষণা কার্ড গ্রিড */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {RESEARCH_DATA.map((research, index) => (
            <ResearchCard key={index} research={research} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
