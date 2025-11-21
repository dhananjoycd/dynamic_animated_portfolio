/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileDown, Code, TrendingUp, ChevronDown } from "lucide-react";
import Button from "./Button";

const ResearchCard = ({ research }) => {
  const { title, category, summary, equation, modelDiagram, downloadLink } =
    research;
  const [isExpanded, setIsExpanded] = useState(false); // সমীকরণ ও ডায়াগ্রাম লুকানোর জন্য

  // Framer Motion Variants
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-background-dark/50 rounded-xl p-6 border border-secondary/20 shadow-lg transition-all duration-300 hover:border-secondary/70"
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 25px rgba(123, 47, 247, 0.4)",
      }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> {category}
        </span>
      </div>

      <p className="text-white/70 text-sm mb-4">{summary}</p>

      {/* বিস্তারিত তথ্য টগল */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-primary text-sm font-semibold mb-3 hover:text-white transition-colors"
      >
        View Model & Equation
        <ChevronDown
          className={`w-4 h-4 ml-1 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* বিস্তারিত কন্টেন্ট (এনিমেটেড) */}
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden pt-3 border-t border-white/10"
        >
          <h4 className="font-display text-lg text-primary mb-2">
            Core Equation:
          </h4>

          {/* গণিত সমীকরণ রেন্ডার */}
          <div className="bg-white/5 p-3 rounded-lg text-center overflow-x-auto text-sm">
            {/* এখানে একটি লাইব্রেরি (যেমন MathJax/Katex) প্রয়োজন, কিন্তু Raw Code-এর জন্য আমরা প্লেনটেক্সট রাখছি */}
            <Code className="w-4 h-4 inline mr-2 text-white/50" />
            {equation}
          </div>

          {/* ডায়াগ্রাম/মডেল ইমেজ */}
          {modelDiagram && (
            <div className="mt-4">
              <h4 className="font-display text-lg text-primary mb-2">
                Model Architecture:
              </h4>
              <img
                src={modelDiagram}
                alt={`Diagram for ${title}`}
                className="w-full rounded-lg border border-white/10"
              />
            </div>
          )}
        </motion.div>
      )}

      {/* ডাউনলোড বাটন */}
      <div className="mt-6">
        <Button
          variant="primary"
          href={downloadLink}
          className="w-full !h-12 flex justify-center items-center bg-fuchsia-500/30"
          download
        >
          <FileDown className="w-5 h-5 mx-1 inline-flex " />
          Download Full Paper (PDF)
        </Button>
      </div>
    </motion.div>
  );
};

export default ResearchCard;
