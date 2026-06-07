import { motion } from "motion/react";

export function SectionDivider() {
  return (
    <div className="relative mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative h-px origin-left bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_18px_4px_var(--color-primary)]" />
      </motion.div>
    </div>
  );
}