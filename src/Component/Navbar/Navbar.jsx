import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";
import { ThemeContext } from "../../Context/ThemeContextProvider";
import styles from './navbar.module.css'
function Navbar() {
    const [isLogin,setLogin]=useContext(AuthContext);
    const [dark,setDark]=useContext(ThemeContext);
    console.log(dark)
    // console.log(isLogin);
    // if(isLogin){
        let forLogout=()=>{
            if(isLogin)
            setLogin(false)
        }
return ( 
    <div className={styles.navbar}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to={isLogin?"/products":"/"} className={styles.navLink}>products</Link>
        <Link to="/" className={styles.navLink} onClick={()=>forLogout()}>
          {isLogin?"Log Out":"Login"} 
     </Link>
     <span onClick={()=>setDark((e)=>!e)}>{dark?"Light Theme":"Dark Theme"}</span>
    </div>
     )
    // }
    // return(
    //     <div className={styles.navbar}>
        
    //     <Link to="/login" className={styles.navLink}>
    //       {isLogin?"Log Out":"Login"} 
    //  </Link>
    // </div>
    // )
    
}

export default Navbar;