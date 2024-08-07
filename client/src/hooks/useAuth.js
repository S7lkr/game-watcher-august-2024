import { useContext } from "react";

import { login } from "../api/auth-api"
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const loginData = await login(email, password);
        changeAuthState(loginData);

        console.log(loginData);
    }
    return loginHandler;
}