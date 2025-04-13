"use client";

import { AnimatePresence, motion } from "motion/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div>{children}</motion.div>
    </AnimatePresence>
  );
}
