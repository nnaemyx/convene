import styles from "./navbar.module.css";
import { useState } from "react";
import logo from "./logo.png";
import Button from "../Button";
import { FaBars, FaTimes} from "react-icons/fa";



const NavBar = ( ) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <nav className={styles.nav}>
      <img src={logo} alt="convene logo" className={styles.navImg}/>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>
       <div className={`${styles.navBtn} ${showMenu ? styles.show : ''}`}>
         <Button children="Login" fullwidth="false"/>
         <Button children="Logout" fullwidth="false"/>
         </div>
    
      
     
    </nav>
  )

}
export default NavBar

