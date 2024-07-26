import { motion } from "framer-motion";
const AnimationWrapper = ({
  children,
  keyValue,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1, layout: true },
}) => {
  return (
    <motion.div
      style={{ willChange: "opacity" }}
      key={keyValue}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
