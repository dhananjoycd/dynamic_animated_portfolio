/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Button = ({ children, variant = "primary", href = null, ...props }) => {
  const baseClasses =
    "flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-base font-bold leading-normal tracking-wide";

  const primaryClasses = "bg-primary text-background-dark transition-transform";
  const secondaryClasses =
    "border-2 border-primary/50 text-white transition-colors hover:bg-primary/10";

  const buttonClasses = `${baseClasses} ${
    variant === "primary" ? primaryClasses : secondaryClasses
  }`;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        {...motionProps}
        {...props}
      >
        <span className="truncate">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button className={buttonClasses} {...motionProps} {...props}>
      <span className="truncate">{children}</span>
    </motion.button>
  );
};

export default Button;
