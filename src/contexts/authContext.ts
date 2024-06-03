import React, { Dispatch } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<React.SetStateAction<boolean>>;
}


const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;