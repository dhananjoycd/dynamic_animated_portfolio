/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";
import Button from "./Button"; // আপনার পূর্বে তৈরি করা Button কম্পোনেন্ট

const ProjectCard = ({ project }) => {
  const { title, description, tags, imageUrl, liveUrl, githubUrl } = project;

  // Framer Motion Variants: স্ট্যাগার এনিমেশনের জন্য
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring" },
    },
  };

  return (
    <motion.div
      className="bg-background-dark/50 rounded-xl overflow-hidden border border-white/10 shadow-xl relative group transition-all duration-300"
      variants={cardVariants}
      whileHover={{
        scale: 1.03, // সামান্য জুম
        boxShadow: "0 0 30px rgba(123, 47, 247, 0.5)", // সেকেন্ডারি কালারে গ্লো
      }}
    >
      {/* প্রজেক্ট ইমেজ */}
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* কন্টেন্ট */}
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-white/70 text-sm mb-4">{description}</p>

        {/* ট্যাগস */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* অ্যাকশন বাটন */}
        <div className="flex gap-4">
          <Button
            variant="primary"
            href={liveUrl}
            className="flex-1 !h-10 !px-4 flex items-center justify-center gap-2"
          >
            <Link className="w-4 h-4 inline-flex mx-2" />
            <span>Live Demo</span>
          </Button>

          <Button
            variant="secondary"
            href={githubUrl}
            className="flex-1 !h-10 !px-4 flex items-center justify-center gap-2"
          >
            <Github className="w-4 h-4 inline-flex mx-2" />
            <span>GitHub</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
