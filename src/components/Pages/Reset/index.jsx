import styles from "./reset.module.css"
import Button from "../../Button";
import { useState } from "react";




const Reset = () =>{  
const [email, setEmail] = useState();


    return(
        <div className={styles.reset}>
            <h1>Recover Password</h1>
            <h3>To reset your password, enter the email address linked 
                to your convene account.</h3>
            <input id="email" name="email" placeholder="Email" label="Email"
            value={email} onChange={(e) =>setEmail(e?.target.value)}/>
            <Button children="Reset password" fullwidth="false" variant="secondary"/>
            <div className={styles.link}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 448 512" style= {{ fill: '#008000', width:'2rem', height:'-2rem' }} >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            <>Back to Login</> 
            </div>
     </div>
    )
}


export default Reset


