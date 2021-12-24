import { createContext, useState } from "react";

export const ThemeContext=createContext();
function ThemeContextProvider(props) {
    const [dark,setDark]=useState(false)
    return ( 
        <ThemeContext.Provider value={[dark,setDark]}>
            {props.children}
        </ThemeContext.Provider>
     );
}

export default ThemeContextProvider;