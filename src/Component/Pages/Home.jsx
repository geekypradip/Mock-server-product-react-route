import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContextProvider';
import styles from './style/style.module.css'
function Home() {
    const [isLogin]=useContext(AuthContext);
    console.log(isLogin)
    return ( 
     
<div className={styles.home}>
    <img src="https://n7nqziuw1z4b1r6k2adhav10-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/E-Commerce-Home-Page-Wordpress-1440x615.jpg" alt="" />
</div>
       
     );
}

export default Home;