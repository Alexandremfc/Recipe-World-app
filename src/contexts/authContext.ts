import React from "react";

interface AuthContextType {
    storeToken: (token:string) => void;
}


const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;