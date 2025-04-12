import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <div>
        <h1>Login</h1>
        <form action="">
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password" id="password" />
          </div>
          <button>Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
}

export default LoginForm;
