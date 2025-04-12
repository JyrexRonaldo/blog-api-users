import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <>
      <div>
        <h1>Register</h1>
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
          <button>Register</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
