import NavBar from '../../NavBar';
import Avatar from '../../Avatar';
import SideBar from '../../SideBar';
import Feed from '../../Feed';
import styles from './home.module.css'

const Home = () =>{
    return(
        <div className={styles.home}>
            <NavBar/>
            <Avatar/>
            {/* <SideBar/> */}
            <Feed/>
        </div>

)
}
export default Home;