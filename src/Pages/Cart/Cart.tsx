import { motion } from "framer-motion";
import { empty_cart, loginImage } from "../../assets";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { NavLink } from "react-router-dom";
import { wishListItem } from "../../Types";
import { decreaseCartItemCount, increaseCartItemCount } from "./CartSlice";

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
          <div>
            <div className="cart-login">
              <div
                className="cart-login-description"
                style={{ color: "white" }}
              >
                Please login to add items to cart
              </div>
              <div className="login">
                <NavLink to="/login">
                  <div className="login-title">Login</div>
                  <img src={loginImage} className="cart-image" />
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-grid">
            {cartItems.length ? (
              <div className="cart-items">
                {cartItems.map((item) => {
                  return (
                    <li
                      key={item.Item.id}
                      style={{ color: "white" }}
                      className="cart-item"
                    >
                      <div className="cart-item-title">{item.Item.title}</div>
                      <div className="cart-image">
                        <img src={item.Item.thumbnail} />
                      </div>
                      <div className="item-price-div">${item.Item.price}</div>
                      <div className="item-count-div">
                        <button
                          className="remove-item"
                          onClick={() =>
                            cartItemHandler(item.Item.id, "remove")
                          }
                        >
                          -
                        </button>
                        <span className="item-count">{item.Count}</span>
                        <button
                          className="add-item"
                          onClick={() => cartItemHandler(item.Item.id, "add")}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  );
                })}
              </div>
            ) : (
              <div className="cart-empty">
                <div className="cart-title">Add items to the cart</div>
                <img src={empty_cart} alt="" className="empty-cart" />
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
