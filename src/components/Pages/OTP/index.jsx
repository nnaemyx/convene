import { useState } from "react"
import Button from "../../Button"
import styles from "./otp.module.css"


const OTP = () => {
   const [otp, setOTP] = useState(new Array(4).fill(""));

   const handleChange = (element, index) =>{
      if(isNaN(element.value)) return false;
      setOTP([...otp?.map((d, idx) => (idx === index) ? element.value : d)])
      // Focus on next input
      if(element.nextSibling){
         element.nextSibling.focus();
      }
   }
return (
   <div className={styles.otp}>
      <h1>Verification</h1>
      <p>Please enter the OTP sent to you to verify your identity</p>
         {otp.map((data, index) => {
            return (
               <input className={styles.otpField} type="text" name="otp" maxLength="1" key={index} value={data} 
               onChange={e=> handleChange(e?.target, index)}
               onFocus={e=> e?.target.select()}/>
         )})}
         <div className={styles.otpfooter}>
            <p>OTP Entered - {otp.join("")}</p>
            <Button fullwidth="false" children="verify" variant="secondary" />  
         </div>
      
   </div>
   )
}
export default OTP


