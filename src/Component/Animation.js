export const ScrollIn = {
  offscreen: {
    opacity: 0,
    visibility: "hidden",
  },
  onscreen: {
    opacity: 1,
    visibility: "visible",
    transition: {
      type: "spring",
      duration: 2,
      delay: 0.05,
      staggerChildren: 0.08,
    },
  },
};

export const Letter = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
  },
};
