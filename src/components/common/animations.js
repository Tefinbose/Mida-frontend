export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  viewport:{
        once: false,
        amount: 0.2,
      },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
// Service Cards Animation
export const serviceCardVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
