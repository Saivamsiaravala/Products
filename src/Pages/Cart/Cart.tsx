import { motion } from "framer-motion";

const Cart = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="cart">Carts</div>
    </motion.div>
  );
};

export default Cart;
