import { createContext, useContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";

// This is a CONTEXT (to be shared between all components)
export const AuthContext = createContext({     // default values
    userId: '',
    email: '',
    username: '',
    accessToken: '',
    isAuthenticated: false,     // if truthy value :true, if falsy (false, 0, -0, 0n, "", null, undefined, NaN, document.all) :false
    changeAuthState: (authState = {}) => null,
    logout: () => null,
});

// This is a COMPONENT which will provide the context (only for user authentication)
export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('auth', {});

    const changeAuthState = (state) => {                        // wrapper func -> to protect 'setAuthState' func
        setAuthState(state);
    };

    const logout = () => {
        setAuthState(null);
    }
    const contextData = {
        userId: authState?._id,
        email: authState?.email,
        username: authState?.username,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,     // if falsy -> false, if truty -> true
        changeAuthState,
        logout,
        
    };

    // encapsulate AuthContext within the return
    return (
        //                     Provider will share AuthContext custom hook with 'contextData'
        //                              v
        <AuthContext.Provider value={contextData}>
            {props.children}    {/* == all components inside App */}
        </AuthContext.Provider>
    )
}

// This is a HOOK
export function useAuthContext() {
    const authData = useContext(AuthContext);
    return authData;
}