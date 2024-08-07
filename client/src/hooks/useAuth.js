import { login } from "../api/auth-api"

export const useLogin = () => {
    const loginFetcher = async (email, password) => {
        const loginData = await login(email, password);
        console.log(loginData);
        // TODO: update app state
    }
    return loginFetcher;
}