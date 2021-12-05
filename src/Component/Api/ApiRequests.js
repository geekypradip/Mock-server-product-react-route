import axios from "axios";
function FetchProducts() {
    return ( 
    axios.get(`http://localhost:8000/products`)
     );
}

export default FetchProducts;
  
export function FetchProduct(id){
    return (
        axios.get(`http://localhost:8000/products/${id}`)
    )
}