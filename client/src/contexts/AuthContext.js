import { useContext } from "react";

export const AuthContext = useContext({     // default values
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,     // if truthy value :true, if falsy (false, 0, -0, 0n, "", null, undefined, NaN, document.all) :false
    changeAuthState: (authState = {}) => null,
});