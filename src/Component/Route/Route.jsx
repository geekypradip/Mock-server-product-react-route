import { Route, Switch} from "react-router-dom";
import Home from "../Pages/Home";
import Nomatch from "../Pages/Nomatch";
import Product from "../Pages/Product";
import Products from "../Pages/Products";
import Login from "../Pages/Login";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";

function RouteControll() {
    // const {id}=useParams()
    // console.log(id)
    const [isLogin]=useContext(AuthContext)
   if(isLogin) {
        return (  
        <div>
           <Switch>
               <Route exact path="/">
                    <Home/>
               </Route>
               {/* <Route exact path="/login">
                    <Login/>
               </Route> */}
               <Route exact path="/products">
                   <Products/>
               </Route>
               <Route exact path="/products/:id">
                  <Product/>
               </Route>
               <Route>
                   <Nomatch/>
               </Route>
           </Switch>
        </div>
    );
   }
   return(
       <Login/>
   )

   
}

export default RouteControll;