/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "../ui/SkillCard";
import { SKILL_CATEGORIES, SKILLS_DATA } from "../utils/constants";

const containerVariants = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // ফিল্টারিং লজিক
  const filteredSkills = SKILLS_DATA.filter((skill) =>
    activeCategory === "all" ? true : skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background-dark relative z-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="font-display text-4xl font-bold text-center text-white mb-12 after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          My Expertise
        </motion.h2>

        {/* ক্যাটাগরি ফিল্টার বাটন */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SKILL_CATEGORIES.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 
                                ${
                                  activeCategory === category.id
                                    ? "bg-primary text-background-dark shadow-neon-glow/40"
                                    : "bg-white/10 text-white/70 hover:bg-white/20"
                                }`}
              whileHover={{ scale: 1.05 }}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* স্কিল গ্রিড */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // স্ক্রল করার সময় স্ট্যাগার এনিমেশন শুরু
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              level={skill.level}
              // color={skill.color} // এখন color SkillCard এর ভেতরে ব্যবহার করা হয়নি
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
