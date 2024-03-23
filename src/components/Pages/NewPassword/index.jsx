import styles from "./password.module.css";
import {useForm} from "react-hook-form";
import Button from "../../Button";
import { Link } from "react-router-dom";



const NewPassword = () =>{
    const {register,  formState: {errors} } = useForm();
    

    return(
        <div className={styles.setPassword}>
            <h1>Change Password</h1>
            <form  className={styles.passwordForm}>
            <label>New password</label>
            <input placeholder="Password" type="password" {...register("password", 
                {required:true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })}/>
            <label>Confirm password</label>
            <input placeholder="**********" type="password" {...register("cpassword", 
                {required:true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })} />
            {errors?.cpassword && <p>Password must match!</p>}
            <Button children="Update Password" variant="secondary"/>
        </form>
        <Link to="/login" className={styles.link}>
            <>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 448 512" style= {{ fill: '#008000', width:'2rem', height:'-2rem' }} >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 
                0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </>
            Back to Login
        </Link>
    </div>
)
}



export default NewPassword




