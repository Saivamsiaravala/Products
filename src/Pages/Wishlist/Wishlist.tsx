import { motion } from "framer-motion";

const Wishlist = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      Wishlist
    </motion.div>
  );
};

export default Wishlist;
