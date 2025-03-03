import { motion } from "framer-motion";
import LoginForm from "./Login/LoginForm";
import SignupForm from "./Login/SignupForm";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useState } from "react";
import { logOut } from "./LoginSlice";
// import { div } from "framer-motion/client";
// import { NavLink, Route, Routes } from "react-router-dom";
// import { useContext } from "react";
// import { LoginContext } from "../App";

const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const isLoggedIn = useAppSelector((store) => store.login.isLoggedIn);
  const dispatch = useAppDispatch();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="login-panel">
        {isLoggedIn ? (
          <div>
            hey you are in
            <button
              onClick={() => {
                localStorage.clear();
                dispatch(logOut());
              }}
            >
              logout
            </button>
          </div>
        ) : (
          <div>
            <div className="login-signup">
              <button
                onClick={() => setIsLogin(true)}
                className={isLogin ? "login active" : "login"}
              >
                LogIn
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={isLogin ? "signup" : "signup active"}
              >
                SignUp
              </button>
            </div>
            <div className="main-panel">
              <div>{isLogin ? <LoginForm /> : <SignupForm />}</div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Login;
