import React, { PropsWithChildren, useEffect, useState } from "react";
import { AuthNavigator } from "./AuthNavigator";

/**
 * @component AuthVerifier
 * @param children - elements to be protected with authentication 
 * @returns children if logged in , and login button if not logged in
 */
export const AuthVerifier:React.FC<PropsWithChildren<unknown>> = 
    ({children}) => {
        const [isLoggedIn, setLoggedIn] = useState(false);
        useEffect(() => {
            if(localStorage.getItem('access_token')) {
                setLoggedIn(true);
            }
        },[setLoggedIn]);
        
    return (
        <React.Fragment>
            {isLoggedIn && (
                children
            )}
            {!isLoggedIn && (
                <AuthNavigator/>
            )}
        </React.Fragment>
    );
}

export default AuthVerifier;