/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import TimelineItem from "../ui/TimelineItem";
import { EXPERIENCE_DATA, EDUCATION_DATA } from "../utils/constants";

import { Code, Zap, GraduationCap, BookOpen, Briefcase } from "lucide-react";
const iconMap = { Code, Zap, GraduationCap, BookOpen, Briefcase };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const ExperienceEducation = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background-dark relative z-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* ... Heading কোড অপরিবর্তিত ... */}
        <motion.h2
          className="font-display text-4xl font-bold text-center text-white mb-12 after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Journey & Milestones
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* বাম কলাম: অভিজ্ঞতা */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="font-display text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" /> Experience
            </h3>

            <div className="relative">
              {EXPERIENCE_DATA.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.title}
                  date={item.date}
                  description={item.description}
                  icon1={item.icon}
                />
              ))}
            </div>
          </motion.div>

          {/* ডান কলাম: শিক্ষা */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            // ✅ গুরুত্বপূর্ণ সংশোধন: whileInView যোগ করা হলো
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="font-display text-3xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-secondary" /> Education
            </h3>

            <div className="relative">
              {EDUCATION_DATA.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.title}
                  date={item.date} // ✅ ডেটা পাস নিশ্চিত
                  description={item.description + ` (${item.institution})`} // ✅ ডেটা পাস নিশ্চিত
                  icon={iconMap[item.icon]}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
