import styles from "./navbar.module.css";
import { useState } from "react";
import logo from "./logo.png";
import Button from "../Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate()

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("userData"); // Remove user data from local storage
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className={styles.nav}>
      <img src={logo} alt="convene logo" className={styles.navImg} />
      {/* <div className={styles.menuIcon} onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div> */}
      <div className={`${styles.navBtn} ${showMenu ? styles.show : ""}`}>
        {userData ? (
          <>
            <p className={styles.userName}>Welcome, {userData.user.username}</p>
            <Button
              children="Logout"
              fullwidth="false"
              onClick={handleLogout}
            />
          </>
        ) : (
          <>
            <Button children="Login" fullwidth="false" />
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
