import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      Login
    </motion.div>
  );
};

export default Login;
