import { useContext } from "react";

import { login } from "../api/auth-api";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {     // custom hook -> between Login(comp) and auth-api(service)
    const { changeAuthState } = useContext(AuthContext);
    const loginFetcher = async (email, password) => {
        const loginData = await login(email, password);     // use 'login' from 'auth-api.js'
        changeAuthState(loginData);

        // TODO: update app state
    }
    return loginFetcher;
};