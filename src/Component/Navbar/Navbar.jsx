import { Link } from "react-router-dom";
import styles from './navbar.module.css'
function Navbar() {
    return ( 
    <div className={styles.navbar}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to='/products' className={styles.navLink}>products</Link>
    </div>
     );
}

export default Navbar;