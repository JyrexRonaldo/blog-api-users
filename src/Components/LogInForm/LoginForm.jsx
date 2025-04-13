import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {

  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
  
    const handleUsernameInput = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordInput = (e) => {
      setPassword(e.target.value);
    };

    const handleLoginButton = async () => {
    
      try {
        const response = await fetch("http://localhost:3000/auth/log-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({username,password}),
        });
  
        const data = await response.json();
        console.log(data);
        localStorage.setItem("userToken", `${data.token}`)
        console.log(`Local storage variable : ${localStorage.getItem("userToken")}`)
        navigate("/")
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" name="username" id="username" value={username} onChange={handleUsernameInput} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password" id="password" value={password} onChange={handlePasswordInput} />
          </div>
          <button type="button" onClick={handleLoginButton}>Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
}

export default LoginForm;
