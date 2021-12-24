
import Navbar from "./Component/Navbar/Navbar";
import RouteControll from "./Component/Route/Route";
import './app.css';
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContextProvider";
function App() {
  const [dark]=useContext(ThemeContext);
  return (
    <div className={dark?"dark":""}>
      <Navbar/>
   <RouteControll/>
    </div>
    
   
  );
}

export default App;
