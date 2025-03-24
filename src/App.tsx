import { NavLink, Route, Routes } from "react-router-dom";
import { Cart, Login, Products, Wishlist } from "./Pages";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { logIn } from "./Pages/LoginSlice";
import { ToastContainer } from "react-toastify";
import { headerLogo } from "./assets";
import { motion } from "framer-motion";

const App = () => {
  const dispatch = useAppDispatch();
  // const { totalWishListItems } = useAppSelector((store) => store.wishlist);
  // const { totalCartItems } = useAppSelector((store) => store.cart);
  useEffect(() => {
    const keyWord =
      localStorage.getItem("Vamsi@gmail.com") ||
      localStorage.getItem("vamsi@gmail.com");
    if (keyWord === "Vamsi@123") {
      // console.log(keyWord);
      dispatch(logIn());
    }
  }, []);

  return (
    <main>
      <nav>
        <header>
          <img src={headerLogo} alt="Products" />
        </header>
        <div className="links">
          <motion.div
            whileHover={{ scale: 1.3, rotate: 360 }}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.4 }}
            className="link"
          >
            <NavLink to="" title="Home">
              <FaHome className="icon" />
            </NavLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3, rotate: 360 }}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.4 }}
            className="link"
          >
            <NavLink
              title="Wishlist"
              to="wishlist"
              className={(isActive) => isActive && "isActive"}
            >
              <FaHeart className="icon" />
              <sub>
                <div></div>
              </sub>
            </NavLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3, rotate: 360 }}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.4 }}
            className="link"
          >
            <NavLink
              to="cart"
              title="Cart"
              className={(isActive) => isActive && "isActive"}
            >
              <FaCartArrowDown className="icon" />
              {/* <sup
                style={{
                  fontSize: "small",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "blue",
                }}
              >
                {totalCartItems}
              </sup> */}
            </NavLink>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3, rotate: 360 }}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.4 }}
            className="link"
          >
            <NavLink
              to="login"
              title="Login"
              className={(isActive) => isActive && "isActive"}
            >
              <RiLoginBoxFill className="icon" />
            </NavLink>
          </motion.div>
        </div>
      </nav>
      <Routes>
        <Route path="" index element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={1000} />
    </main>
  );
};

export default App;
