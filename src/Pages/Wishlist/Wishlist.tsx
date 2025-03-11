import { motion } from "framer-motion";
import { empty_wishlist } from "../../assets";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { NavLink } from "react-router-dom";
import { loginImage } from "../../assets";
import { addWishListItemCount, removeWishListItemCount } from "./WishlistSlice";
// import { FaCartArrowDown } from "react-icons/fa";

const Wishlist = () => {
  const { wishListItems } = useAppSelector((store) => store.wishlist);
  const dispatch = useAppDispatch();
  const isLoggedIn: boolean = useAppSelector((store) => {
    return store.login.isLoggedIn;
  });

  const itemHandler = (id: number, method: string) => {
    // console.log(id);
    if (method === "remove") dispatch(removeWishListItemCount(id));
    else dispatch(addWishListItemCount(id));
  };

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
                      key={item.Item.id}
                      style={{ color: "white" }}
                      className="wishlist-item"
                    >
                      <div className="wishlist-item-title">
                        {item.Item.title.slice(0, 10)}...
                      </div>
                      <div className="wishlist-image">
                        <img src={item.Item.thumbnail} />
                      </div>
                      <div className="move-to-cart">
                        <button className="move-to-cart-button">
                          Move to Cart {"  "}
                          {/* <FaCartArrowDown style={{ color: "gray" }} /> */}
                        </button>
                        <span>
                          <button
                            className="remove-item"
                            onClick={() => itemHandler(item.Item.id, "remove")}
                          >
                            -
                          </button>
                          <span>{item.Count}</span>
                          <button
                            className="add-item"
                            onClick={() => itemHandler(item.Item.id, "add")}
                          >
                            +
                          </button>
                        </span>
                      </div>
                    </li>
                  );
                })}
              </div>
            ) : (
              <div className="wishlist-empty">
                <div className="wishlist-title">Add items to the Wishlist</div>
                <img src={empty_wishlist} alt="" className="empty-wishlist" />
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Wishlist;
