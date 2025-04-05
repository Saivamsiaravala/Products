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
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.4 }}
            className="link"
          >
            <NavLink
              to=""
              title="Home"
              className={(isActive) => (isActive ? "home isActive" : "home")}
            >
              <div>
                <span>Home</span> <FaHome className="icon" />
              </div>
            </NavLink>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.4 }}
            className="link"
          >
            <NavLink
              title="Wishlist"
              to="wishlist"
              className={(isActive) =>
                isActive ? "wishlist isActive" : "wishlist"
              }
            >
              <div>
                <span>WishList</span> <FaHeart className="icon" />
              </div>
            </NavLink>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.4 }}
            className="link"
          >
            <NavLink
              to="cart"
              title="Cart"
              className={(isActive) => (isActive ? "cart isActive" : "cart")}
            >
              <div>
                <span>Cart</span>
                <FaCartArrowDown className="icon" />
              </div>
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
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.4 }}
            className="link"
          >
            <NavLink
              to="login"
              title="Login"
              className={(isActive) => (isActive ? "login isActive" : "login")}
            >
              <div>
                <span>Account</span>
                <RiLoginBoxFill className="icon" />
              </div>
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
