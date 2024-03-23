import styles from "./signup.module.css"
import Button from "../../Button";
import background from "./background.jpg";
import { Link } from "react-router-dom";
import { useState } from "react"; 



const SignUp = () =>{
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div className={styles.signupContainer}>
            <div className={styles.signupWrapper}>
                <h1>SignUp</h1>
                <form className={styles.signupForm}>
                <label>First Name</label>
                <input
                    placeholder='First Name'
                    type="text"
                    name="name"
                    size="15"
                    value={fname}
                    onChange={e=> setFName(e?.target?.value)}
                    required
                    />
                <label>Last Name</label>
                <input
                    placeholder='Last Name'
                    type="text"
                    size="15"
                    name="lname"
                    value={lname}
                    onChange={e=> setLName(e?.target?.value)}
                    required
                />
                <label>Email</label>
                <input
                    placeholder='Email'
                    type="email"
                    name="email"
                    pattern = "[/^\S+@\S+$/i]"
                    value={email}
                    onChange={e=> setEmail(e?.target?.value)}
                    required
                />
                <label>Password</label>
                <input
                    placeholder="Password" 
                    type="password" 
                    name="password"
                    pattern = "[/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/]"
                    value={password}
                    onChange={e=> setPassword(e?.target?.value)}
                    required
                />  
                <Button type="submit" children="Sign Up" variant="main"/>
                <footer>
                <Link to="/" className={styles.link}>
                Already have an account? Login
                </Link> 
                </footer>   
            </form>   
            </div>
            <div className={styles.imageWrapper}>
            <img src={background} alt="Signup"/>
            </div>
        </div>       
    )
}
export default SignUp








