import { useContext } from "react";

import { login, register } from "../api/auth-api"
import { AuthContext } from "../contexts/AuthContext";


// This func performs:
// 1.Take empty user authState
// 2.Declares a POST request func
// 3. When invoked -> makes request & updates user authState
export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);    // get AuthContext data from app

    const loginHandler = async (email, password) => {       // POST request with email & password
        const {password: _, ...authData} = await login(email, password);    // get data without password (isolate it)
        changeAuthState(authData);             // save response into state
        console.log(authData);
        
        return authData;
    }
    return loginHandler;        // return POST fetcher
}

export const useRegister = () => {
    const {changeAuthState} = useContext(AuthContext);    // get AuthContext data from app
    const registerHandler = async (email, password) => {
        const {password: _, ...authData} = await register(email, password);     // get data without password (isolate it)
        changeAuthState(authData);
        return authData;
    }
    return registerHandler;
}