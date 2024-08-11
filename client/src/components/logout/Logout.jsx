import { Navigate } from "react-router";
import { useLogout } from "../../hooks/useAuth";
import { useEffect } from "react";

export default function Logout() {
    const logout = useLogout();
    useEffect(() => {           // logout hook will be invoked ONLY on component mount!
        logout();
    }, []);
    
    return (
        <Navigate to={'/'} />
    );
}