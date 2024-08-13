import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";


export function PrivateGuard() {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated
        ? <Outlet />                    // if authenticated (logged in) users will have access
        : <Navigate to="/login" />      // else -> login page
}

export function PublicGuard() {
    const { isAuthenticated } = useAuthContext();

    return !isAuthenticated
        ? <Outlet />
        : <Navigate to="/" />
}