
import styles from "./login.module.css";
import { useState } from "react";
import Button from "../../Button";
import background from "./background.jpg"
import { Link } from "react-router-dom";


const  Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginForm}>
                <h1>Login</h1>
                <form className={styles.form}>
                    <label>Email</label>
                    <input
                        placeholder='Email'
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e?.target?.value)}
                        pattern = "[/^\S+@\S+$/i]"
                        required
                    />
                    <label>Password</label>
                    <input
                        placeholder="Password" 
                        type="password" 
                        name="password"
                        value={password}
                        onChange={e => setPassword(e?.target?.value)}
                        pattern = "[/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/]"
                        required
                    />
                    <Button type="submit" children="Sign In" variant="main"/>
                    <div className={styles.forget}>
                    <Link to="/reset" >
                    Forgot your password? 
                    </Link>
                    </div>
                    <div className={styles.signup}>
                    <Link to="/signup" >
                    Don't have an account? <span>
                    SignUp</span>
                    </Link>
                    </div>
                </form>
            </div>
            <div className={styles.imgWrapper}>
                <img src={background} alt="login"/>
            </div>
        </div>    
)
}
export default Login









