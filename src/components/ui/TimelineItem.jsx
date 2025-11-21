/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const TimelineItem = ({ title, date, description, icon: Icon }) => {
  // Framer Motion Variants: স্ক্রল করার সময় ডানদিক থেকে স্লাইড হবে
  const itemVariants = {
    hidden: { x: 80, opacity: 0 }, // x-অক্ষ বরাবর আরও বেশি দূরত্ব থেকে শুরু হবে
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 120, // অ্যানিমেশনকে মসৃণ এবং বাউন্সি করবে
        damping: 15,
      },
    },
  };

  return (
    // ✅ ফিক্স ১: motion.div ব্যবহার করা হলো অ্যানিমেশন চালু করার জন্য
    <motion.div
      className="flex relative pb-8"
      variants={itemVariants}
      // whileInView="visible" প্রপটি প্যারেন্ট কম্পোনেন্ট দ্বারা নিয়ন্ত্রিত হচ্ছে।

      // ✅ ফিক্স ২: হোভার অ্যানিমেশন যোগ করা হলো
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 15px rgba(230, 0, 255, 0.3)", // বেগুনি নিয়ন গ্লো
        transition: { type: "tween", duration: 0.1 },
      }}
    >
      {/* ডট এবং উল্লম্ব রেখা (Vertical Line) */}
      <div className="flex flex-col items-center mr-4">
        {/* ডট (Dot) */}
        <div className="z-10 w-4 h-4 rounded-full bg-primary ring-4 ring-background-dark flex items-center justify-center">
          {Icon && <Icon className="w-2 h-2 text-background-dark" />}
        </div>

        {/* লাইন (Line) */}
        <div className="h-full w-0.5 bg-primary/30 my-1"></div>
      </div>

      {/* কন্টেন্ট বক্স (Content Box) */}
      <div className="bg-background-dark/50 p-4 rounded-lg shadow-xl border border-primary/20 transition-all duration-300 w-full hover:border-secondary">
        <p className="text-sm text-primary font-bold mb-1">{date}</p>

        <h3 className="font-display text-xl font-bold text-white mb-2">
          {title}
        </h3>

        <p className="text-sm text-white/70">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
