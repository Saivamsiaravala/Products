import { motion } from "framer-motion";
import { empty_wishlist } from "../../assets";

const Wishlist = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="wishlist">
        <div className="wishlist-title">Add Items to your Wishlist</div>
        <img src={empty_wishlist} className="empty-wishlist" />
      </div>
    </motion.div>
  );
};

export default Wishlist;
