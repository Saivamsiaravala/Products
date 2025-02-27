import { motion } from "framer-motion";
import { empty_cart } from "../../assets";
import { useAppSelector } from "../../hooks";

const Cart = () => {
  const isLoggedIn: string = useAppSelector((store) => store.login.isLoggedIn);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="cart">
        {!isLoggedIn ? (
          <div style={{ color: "white" }}>Hey add to cart</div>
        ) : (
          <>
            <div className="cart-title">Add items to the cart</div>
            <img src={empty_cart} alt="" className="empty-cart" />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
