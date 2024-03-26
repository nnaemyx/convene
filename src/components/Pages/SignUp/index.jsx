import styles from "./signup.module.css";
import Button from "../../Button";
import background from "./background.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; 

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to backend API
      const response = await axios.post(
        "https://tracking-convene.onrender.com/api/v1/users/signup",
        {
          username,
          email,
          password,
        }
      );

      // Handle successful signup
      console.log("User signed up successfully:", response);
      // You can navigate to another page or show a success message to the user
    } catch (error) {
      // Handle signup error
      console.error("Error signing up user:", error.response);
      // You can display an error message to the user
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupWrapper}>
        <h1>SignUp</h1>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          {" "}
          {/* Attach handleSubmit to form onSubmit event */}
          <label>User Name</label>
          <input
            placeholder="Last Name"
            type="text"
            size="15"
            name="username"
            value={username}
            onChange={(e) => setUserName(e?.target?.value)}
            required
          />
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            name="email"
            pattern="[/^\S+@\S+$/i]"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
            required
          />
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            pattern="[/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/]"
            value={password}
            onChange={(e) => setPassword(e?.target?.value)}
            required
          />
          <Button type="submit" children="Sign Up" variant="main" />
          <footer>
            <Link to="/" className={styles.link}>
              Already have an account? Login
            </Link>
          </footer>
        </form>
      </div>
      <div className={styles.imageWrapper}>
        <img src={background} alt="Signup" />
      </div>
    </div>
  );
};
export default SignUp;
