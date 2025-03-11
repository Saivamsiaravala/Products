import { NavLink, Route, Routes } from "react-router-dom";
import { Cart, Login, Products, Wishlist } from "./Pages";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { logIn } from "./Pages/LoginSlice";
import { ToastContainer } from "react-toastify";
// import Footer from "./Components/Footer";

const App = () => {
  const dispatch = useAppDispatch();
  const { totalWishListItems } = useAppSelector((store) => store.wishlist);
  const { totalCartItems } = useAppSelector((store) => store.cart);
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
          <h1>Products</h1>
        </header>
        <div className="links">
          <div className="link">
            {/* className={(isActive) => isActive && "isActive"} */}
            <NavLink to="">
              <FaHome className="home-icon" />
            </NavLink>
          </div>

          <div className="link">
            <NavLink
              title="Wishlist"
              to="wishlist"
              className={(isActive) => isActive && "isActive"}
            >
              <FaHeart />
              <sub style={{ fontSize: "small" }}>{totalWishListItems}</sub>
              <sub>
                <div></div>
              </sub>
            </NavLink>
          </div>
          <div className="link">
            <NavLink
              to="cart"
              title="Cart"
              className={(isActive) => isActive && "isActive"}
            >
              <FaCartArrowDown />
              <sub style={{ fontSize: "small" }}>{totalCartItems}</sub>
            </NavLink>
          </div>
          <div className="link">
            <NavLink
              to="login"
              title="Login"
              className={(isActive) => isActive && "isActive"}
            >
              <RiLoginBoxFill />
            </NavLink>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" index element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="login" element={<Login />} />
      </Routes>
      {/* <footer className="footer">
        <Footer />
      </footer> */}
      <ToastContainer position="top-center" autoClose={1000} />
    </main>
  );
};

export default App;
