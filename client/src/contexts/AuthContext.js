import { createContext } from "react";


// Here we CREATE a new CONTEXT (to be shared between all components)
export const AuthContext = createContext({     // default values
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,     // if truthy value :true, if falsy (false, 0, -0, 0n, "", null, undefined, NaN, document.all) :false
    changeAuthState: (authState = {}) => null,
});