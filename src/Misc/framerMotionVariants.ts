export const motionVariantContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
        staggerChildren: 0.1
    }
  }
}

export const motionVariantChild = {
  hidden: {opacity: 0, y:'25vh'},
  show: {opacity: 1, y:0},
}