import { login } from "../api/auth-api";

export const useLogin = () => {
    const loginHandler = async (email, password) => {
            const loginData = await login(email, password);     // use 'login' from 'auth-api.js'
            console.log(loginData);
            
            // TODO: update app state
    }
    return loginHandler;
};