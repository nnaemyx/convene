import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import background from "./background.jpg";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://tracking-convene.onrender.com/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      const userData = await response.json();
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/home")
      // Login successful, navigate to dashboard or perform other actions
      console.log("Login successful");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h1>Login</h1>
        {error && <div className={styles.error}>{error}</div>}
        <form className={styles.form} onSubmit={handleLogin}>
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" children="Sign In" variant="main" />
          <div className={styles.forget}>
            <Link to="/reset">Forgot your password?</Link>
          </div>
          <div className={styles.signup}>
            <Link to="/signup">
              Don't have an account? <span>SignUp</span>
            </Link>
          </div>
        </form>
      </div>
      <div className={styles.imgWrapper}>
        <img src={background} alt="login" />
      </div>
    </div>
  );
};

export default Login;
