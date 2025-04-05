import { motion } from "framer-motion";
import { empty_wishlist } from "../../assets";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { NavLink } from "react-router-dom";
import { loginImage } from "../../assets";
import { removeWishListItem } from "./WishlistSlice";
import { toast } from "react-toastify";
import { addItem } from "../Cart/CartSlice";
// import { FaCartArrowDown } from "react-icons/fa";

const Wishlist = () => {
  const { wishListItems } = useAppSelector((store) => store.wishlist);
  const { cartItemsId } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();
  const isLoggedIn: boolean = useAppSelector((store) => {
    return store.login.isLoggedIn;
  });

  const itemHandler = (id: number) => {
    dispatch(removeWishListItem(id));
  };
  const cartHandler = (id: number) => {
    const itemIndex = wishListItems.findIndex((item) => item.id === id);
    const item = wishListItems[itemIndex];
    // console.log(item);
    // console.log(cartItemsId);
    cartItemsId.includes(id)
      ? toast.success("Item already in the cart")
      : dispatch(addItem({ Item: item, Count: 1, id: id })) &&
        toast.success("Added to Cart");
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
                <img src={loginImage} />
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="wishlist-grid">
            <div className="wishlist">WishList</div>
            {wishListItems.length ? (
              <div className="wishlist-items">
                {wishListItems.map((item) => {
                  const { id, thumbnail, title } = item;
                  return (
                    <li key={id} className="wishlist-item">
                      <div className="wishlist-item-title" title={title}>
                        {title.slice(0, 10)}...
                      </div>
                      <div className="wishlist-image" title={title}>
                        <img src={thumbnail} alt={title} />
                      </div>
                      <div className="move-to-cart">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          className="move-to-cart-button"
                          onClick={() => cartHandler(id)}
                        >
                          Move to Cart {"  "}
                        </motion.button>
                      </div>
                      <div className="remove">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          className="remove-item"
                          onClick={() => itemHandler(id)}
                        >
                          {/* <span className="item-count">Remove</span> */}
                          Remove
                        </motion.button>
                      </div>
                    </li>
                  );
                })}
              </div>
            ) : (
              <div className="wishlist-empty">
                <div className="wishlist-title">Empty WishList</div>

                <NavLink to="/" className="add-products">
                  <div className="link">
                    <div className="products-title">Add Products</div>
                    <img
                      src={empty_wishlist}
                      alt=""
                      className="empty-wishlist"
                    />
                  </div>
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Wishlist;
