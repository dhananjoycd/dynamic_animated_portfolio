/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const SkillCard = ({ name, level }) => {
  // SkillCard এর এনিমেশন ভ্যারিয়েন্ট
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="bg-background-dark/50 p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 relative overflow-hidden cursor-pointer shadow-lg"
      variants={cardVariants}
      whileHover={{
        scale: 1.05, // হোভারের সময় সামান্য বড় হবে
        boxShadow: "0 0 20px rgba(0, 245, 212, 0.3)", // নিয়ন গ্লো ইফেক্ট
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-display text-xl font-semibold text-white">
          {name}
        </h3>
        <p className="text-sm text-primary font-bold">{level}%</p>
      </div>

      {/* প্রোগ্রেস বার */}
      <div className="w-full bg-white/10 rounded-full h-2.5">
        <motion.div
          className="h-2.5 rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;
