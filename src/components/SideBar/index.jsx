import styles from './sidebar.module.css';
import dialogue from './dialogue.jpeg'

const SideBar = () =>{
    return(
        <div className={styles.sidebar}>
            <img src={dialogue} alt="active participation" />
            <p>Democratizing Discusion: <span className={styles.animatedSidebar}>Your Topics, Your Votes</span>
            </p>
        </div>
    )
}
export default SideBar