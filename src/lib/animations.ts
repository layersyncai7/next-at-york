export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
};

export const parallaxStyle = (speed = 0.3) => ({
  transform: "translate3d(0,0,0)",
  willChange: "transform",
  // consumer can animate using framer-motion with y: [-offset, offset*speed]
});
