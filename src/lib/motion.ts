import type { Variants } from "framer-motion";

export const ease = [0.16, 1, 0.3, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const staggerChildren = (stagger = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
});

// Positive margin expands the trigger zone outward, so content finishes
// fading in before it's actually scrolled into view -- avoids a fast
// scroll (or a screenshot) catching a section mid-fade and looking blank.
export const viewportOnce = { once: true, margin: "200px" };
