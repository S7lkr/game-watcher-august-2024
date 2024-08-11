import { login, register, logout } from "../api/auth-api"
import { useAuthContext } from "../contexts/AuthContext";


// This func:
// 1. Receives empty user authState
// 2. Makes a POST request func
// 3. When invoked -> makes request & updates user authState
export const useLogin = () => {
    const { changeAuthState } = useAuthContext();    // get AuthContext data from app

    const loginHandler = async (email, password) => {       // POST request with email & password
        const {password: _, ...authData} = await login(email, password);    // get data without password (isolate it)
        changeAuthState(authData);             // save response into state
        // console.log(authData);
        return authData;
    }
    return loginHandler;        // return POST fetcher
}

export const useRegister = () => {
    const {changeAuthState} = useAuthContext();    // get AuthContext data from app
    const registerHandler = async (email, username, password) => {
        const {password: _, ...authData} = await register(email, username, password);     // get data without password (isolate it)
        changeAuthState(authData);
        return authData;
    }
    return registerHandler;
}

export const useLogout = () => {
    const { logout: localLogout } = useAuthContext();
    const logoutHandler = async () => {
        localLogout();      // clear localStorage
        try {
            await logout();     // logout (server)
        } catch (err) {
            console.log(err.message);
        }
    };
    return logoutHandler;
}