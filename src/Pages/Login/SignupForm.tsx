const SignupForm = () => {
  return (
    <div className="signup-form">
      <form className="form">
        <div className="name">
          <label htmlFor="" className="name-label">
            Name
          </label>
          <div className="name">
            <input type="text" className="name-input" />
          </div>
        </div>
        <div className="password">
          <label htmlFor="" className="password-label">
            Password
          </label>

          <div className="password">
            <input type="password" className="password-input" />
          </div>
        </div>
        <button type="submit" className="submit">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
