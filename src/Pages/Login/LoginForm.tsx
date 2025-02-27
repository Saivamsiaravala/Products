const LoginForm = () => {
  return (
    <div className="login-form">
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
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
