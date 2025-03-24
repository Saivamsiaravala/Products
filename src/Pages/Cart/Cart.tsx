import { motion } from "framer-motion";
import { empty_cart, loginImage } from "../../assets";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { NavLink } from "react-router-dom";
import { wishListItem } from "../../Types";
import { decreaseCartItemCount, increaseCartItemCount } from "./CartSlice";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Cart = () => {
  const isLoggedIn: boolean = useAppSelector((store) => store.login.isLoggedIn);
  const dispatch = useAppDispatch();
  const cartItems: wishListItem[] = useAppSelector(
    (store) => store.cart.cartItems
  );
  const cartItemHandler = (id: number, method: string) => {
    if (method === "remove") dispatch(decreaseCartItemCount(id));
    else dispatch(increaseCartItemCount(id));
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="cart">
        {!isLoggedIn ? (
          <div className="cart-login">
            <div className="cart-description">
              Please login to add items to cart
            </div>
            <div className="login">
              <NavLink to="/login">
                <div className="login-title">Login</div>
                <img src={loginImage} className="cart-image" />
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="cart-grid">
            {cartItems.length ? (
              <div className="cart-items">
                {cartItems.map((item) => {
                  const { id, title, thumbnail, price } = item.Item;
                  const { Count } = item;
                  return (
                    <li key={id} className="cart-item">
                      <div className="cart-item-title" title={title}>
                        {title.slice(0, 10)}...
                      </div>
                      <div className="cart-image">
                        <img src={thumbnail} />
                      </div>
                      <div className="cart-price">${price}</div>
                      <div className="count-div">
                        <motion.button
                          className="remove-item"
                          whileTap={{ scale: 0.85 }}
                          onClick={() => cartItemHandler(id, "remove")}
                        >
                          <FaMinus
                            className="icon"
                            style={{ fontSize: "small" }}
                          />
                        </motion.button>
                        <span className="item-count">{Count}</span>
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          className="add-item"
                          onClick={() => cartItemHandler(id, "add")}
                        >
                          <FaPlus className="icon" />
                        </motion.button>
                      </div>
                    </li>
                  );
                })}
              </div>
            ) : (
              <div className="cart-empty">
                <div className="cart-title"> Empty Cart</div>
                <div className="add-products">
                  <NavLink to="/" className="link">
                    <div
                      className="products-title"
                      style={{ textDecoration: "none" }}
                    >
                      Go to Products
                    </div>
                    <img
                      src={empty_cart}
                      alt="empty wishlist"
                      className="empty-wishlist"
                    />
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
