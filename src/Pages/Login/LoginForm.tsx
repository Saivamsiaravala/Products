import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { logIn } from "../LoginSlice";

const LoginForm = () => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const dispatch = useAppDispatch();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (
      (email === "Vamsi@gmail.com" || email === "vamsi@gmail.com") &&
      password === "Vamsi@123"
    ) {
      dispatch(logIn());
      localStorage.setItem(email, password);
    }
  };
  return (
    <div className="login-form">
      <form className="form" onSubmit={(event) => submitHandler(event)}>
        <div className="name">
          <input
            name="email"
            type="text"
            placeholder="Email Address"
            className="name-input"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            autoFocus
          />
        </div>
        <div className="password">
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="password-input"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="Off"
          />
        </div>
        <button type="submit" className="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
