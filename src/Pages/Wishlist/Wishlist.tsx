import { motion } from "framer-motion";
import { empty_wishlist } from "../../assets";
import { useAppSelector } from "../../hooks";
import { NavLink } from "react-router-dom";
import { loginImage } from "../../assets";
import { FaCartArrowDown } from "react-icons/fa";

import { ProductsType } from "../../Types";

const Wishlist = () => {
  const wishListItems: ProductsType = useAppSelector(
    (store) => store.wishlist.wishListItems
  );
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
          <div className="wishlist-grid">
            {wishListItems.length ? (
              <div className="wishlist-items">
                {wishListItems.map((item) => {
                  return (
                    <li
                      key={item.id}
                      style={{ color: "white" }}
                      className="wishlist-item"
                    >
                      <div className="wishlist-item-title">{item.title}</div>
                      <div className="wishlist-image">
                        <img src={item.thumbnail} />
                      </div>
                      <div className="move-to-cart">
                        <button className="move-to-cart-button">
                          Move to Cart {"  "}
                          <FaCartArrowDown style={{ color: "gray" }} />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </div>
            ) : (
              <>
                <div className="wishlist-title">Add items to the cart</div>
                <img src={empty_wishlist} alt="" className="empty-wishlist" />
              </>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Wishlist;
