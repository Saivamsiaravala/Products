import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { logIn } from "../LoginSlice";
const SignupForm = () => {
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
    }
  };

  return (
    <div className="signup-form">
      <form className="form" onSubmit={(event) => submitHandler(event)}>
        <div className="name">
          <label htmlFor="" className="name-label">
            Email
          </label>
          <div className="name">
            <input
              type="text"
              className="name-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="password">
          <label htmlFor="" className="password-label">
            Password
          </label>

          <div className="password">
            <input
              type="password"
              className="password-input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
