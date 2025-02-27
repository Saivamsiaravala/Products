import { motion } from "framer-motion";
import { useState } from "react";
import LoginForm from "./Login/LoginForm";
import SignupForm from "./Login/SignupForm";
// import { NavLink, Route, Routes } from "react-router-dom";
// import { useContext } from "react";
// import { LoginContext } from "../App";

const Login = () => {
  // const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="login-panel">
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
          {isLogin ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
