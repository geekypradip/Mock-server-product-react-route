import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchProduct } from "../Api/ApiRequests";
import styles from './style/style.module.css';
function Product() {
    const {id}=useParams();
    const [product,setProduct]=useState([])
    useEffect(()=>{
        setProduct({image:"https://www.elegantthemes.com/blog/wp-content/uploads/2019/10/loading-screen-featured-image.jpg"})
        FetchProduct(id)
        .then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        }).catch((err)=>setProduct({image:"https://image.shutterstock.com/image-vector/nerdy-guy-disconnected-cable-his-600w-1142825516.jpg"}))
    },[])
    return (  
        <div className={styles.product_holder}>
            <div className={styles.image_con}>
                <img src={product.image} alt="Loading..." />
            </div>
            <div className={styles.detais_con}>
                <div>{product.name}</div>
                <div>RS {product.price}/</div>
            </div>
        </div>
    );
}

export default Product;