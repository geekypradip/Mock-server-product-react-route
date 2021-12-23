import { createContext, useState } from "react";

export const AuthContext=createContext();
function AuthContextProvider(props) {
    const [isLogin, setLogin]=useState(false);
    return (  

        <AuthContext.Provider value={[isLogin, setLogin]}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;