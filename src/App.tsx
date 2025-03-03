import { NavLink, Route, Routes } from "react-router-dom";
import { Cart, Login, Products, Wishlist } from "./Pages";
import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { logIn } from "./Pages/LoginSlice";
import { ToastContainer } from "react-toastify";

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
          <h1>Products</h1>
        </header>
        <div className="links">
          <div className="link">
            <NavLink to="" className={(isActive) => isActive && "isActive"}>
              <FaHome />
            </NavLink>
          </div>

          <div className="link">
            <NavLink
              title="Wishlist"
              to="wishlist"
              className={(isActive) => isActive && "isActive"}
            >
              <FaHeart />
            </NavLink>
          </div>
          <div className="link">
            <NavLink
              to="cart"
              title="Cart"
              className={(isActive) => isActive && "isActive"}
            >
              <FaCartArrowDown />
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
      <footer style={{ color: "black" }}>Terms and conditions</footer>
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
