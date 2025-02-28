import { motion } from "framer-motion";
import { empty_wishlist } from "../../assets";
import { useAppSelector } from "../../hooks";
import { NavLink } from "react-router-dom";
import { loginImage } from "../../assets";

const Wishlist = () => {
  const isLoggedIn: boolean = useAppSelector((store) => {
    return store.login.isLoggedIn;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="wishlist">
        {!isLoggedIn ? (
          <div className="wishlist-login">
            <div className="wishlist-description">
              Please Login to add items to wishlist
            </div>
            <div className="login">
              <NavLink to="/login">
                <div className="login-title">Login</div>
                <img src={loginImage} className="wishlist-image" />
              </NavLink>
            </div>
          </div>
        ) : (
          <>
            <div className="wishlist-title">Add Items to your Wishlist</div>
            <img src={empty_wishlist} className="empty-wishlist" />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Wishlist;
