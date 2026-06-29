"use client";

import { motion } from "motion/react";

const Button = () => {
  return (
    <motion.button
      whileHover={{
        rotateX: 25,
        rotateY: 10,
        y: -5,
      }}
      transition={{
        duration: 0.3,
        ease: "easeIn",
      }}
      style={{
        translateZ: 100,
      }}
      className="relative group text-neutral-500 text-sm font-semibold py-4 px-12 bg-black rounded-lg shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer"
    >
      Subscribe
      <span className="absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent via-amber-300 to-transparent h-px w-3/4 mx-auto"></span>
      <span className="absolute opacity-0 group-hover:opacity-100 inset-x-0 bottom-0 bg-linear-to-r from-transparent via-amber-300 to-transparent h-1 w-full blur-md mx-auto"></span>
    </motion.button>
  );
};

export default Button;
