/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { PROJECTS_DATA } from "../utils/constants"; // ডেটা ইমপোর্ট

// কন্টেইনার ভ্যারিয়েন্ট: স্ট্যাগার এনিমেশন শুরু করার জন্য
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // প্রতিটি কার্ড 0.15 সেকেন্ড বিরতিতে আসবে
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background-dark relative z-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="font-display text-4xl font-bold text-center text-white mb-12 after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        {/* প্রজেক্ট গ্রিড */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // স্ক্রল করার সময় স্ট্যাগার এনিমেশন শুরু
          viewport={{ once: true, amount: 0.1 }}
        >
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
