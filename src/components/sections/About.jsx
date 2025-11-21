/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Lightbulb, Code, GraduationCap } from "lucide-react"; // Timeline icons
import TimelineItem from "../ui/TimelineItem"; // TimelineItem কম্পোনেন্ট ইমপোর্ট

// About সেকশনের ডেটা (আপনার যাত্রা অনুযায়ী পরিবর্তন করুন)
const aboutData = {
  bio: "Hello, I'm Dhananjoy, a passionate Junior MERN Stack Developer with a strong foundation in both front-end and back-end technologies. Beyond coding, I have a deep interest in research, particularly involving data analysis and model development. I strive to build applications that are not just functional but also feature clean architecture and exceptional user experience.",
  timeline: [
    {
      title: "Started MERN Stack Journey",
      date: "Jan 2024",
      description:
        "Began focusing on MongoDB, Express.js, React, and Node.js to build full-stack applications.",
      icon: Code,
    },
    {
      title: "Completed B.Sc. in Computer Science",
      date: "Jun 2023",
      description:
        "Graduated with honors, focusing on data structures, algorithms, and system design.",
      icon: GraduationCap,
    },
    {
      title: "First Research Project Publication",
      date: "Oct 2022",
      description:
        "Co-authored a paper on predictive climate modeling, integrating machine learning concepts.",
      icon: Lightbulb,
    },
    // আরও ডেটা যোগ করুন...
  ],
  profileImage: "../../../public/assets/dcd2.jpg",
};

const About = () => {
  // এই সেকশনের জন্য এনিমেশন কন্টেইনার
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background-dark relative z-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="font-display text-4xl font-bold text-center text-white mb-12 after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }} // স্ক্রল করার সময় এনিমেশন
          viewport={{ once: true, amount: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* বাম কলাম: বায়ো এবং প্রোফাইল ইমেজ */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-white/80 leading-relaxed"
            >
              <p className="mb-4 text-lg">{aboutData.bio}</p>
              <p className="mb-4 text-white/60">
                My journey is driven by continuous learning and a desire to
                merge complex research ideas with practical, elegant code.
              </p>
            </motion.div>

            {/* প্রোফাইল ইমেজ (অপশনাল) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-64 w-64 rounded-xl overflow-hidden shadow-neon-glow/50 hidden lg:block"
            >
              <img
                src={aboutData.profileImage}
                alt="Dhananjoy Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* ডান কলাম: টাইমলাইন */}
          <motion.div
            className="flex flex-col relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // টাইমলাইন আইটেমগুলোর স্ট্যাগার এনিমেশন শুরু হবে
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              My Journey
            </h3>

            {aboutData.timeline.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                date={item.date}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
