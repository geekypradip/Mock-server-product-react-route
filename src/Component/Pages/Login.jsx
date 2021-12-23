import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import styles from './style/style.module.css';
import {Link} from "react-router-dom"
function Login() {
    const [isLogin, setLogin]=useContext(AuthContext);
    let handleLogin=()=>{
        setLogin(true);
    
    }
    if(!isLogin){
         return ( 
             <div className={styles.btn}>

        <button onClick={()=>handleLogin()}>
      Login
        </button>
             </div>
     )
    }
    
     
}

export default Login;