import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchProducts from "../Api/ApiRequests";
import styles from './style/style.module.css'
function Products() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        setProducts([{name:"Loading...",
    id:-1}])
        FetchProducts()
        .then((res)=>{
            console.log(res.data)
            setProducts(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
   
    return (  
        <div className={styles.products_container}>
          {
              products?.map((item)=>
                  <div key={item.id} className={styles.products_card}>
                      <div className={styles.products_image_Holder}>
                          <img src={item.image} alt="" />
                      </div>
                      <div>
                          <div>
                              {item.name}
                             </div>
                             <div>
                                 <Link to={`/products/${item.id}`}>Deatais</Link>
                             </div>
                      </div>
                  </div>
              )
          }
        </div>
    );
}

export default Products;