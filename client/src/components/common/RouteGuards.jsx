import { Navigate, Outlet, useParams } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";
import { useGetOneGames } from "../../hooks/useGames";
import { useEffect, useMemo, useState } from "react";


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

export function AuthorizedGuard() {
    const { userId } = useAuthContext();
    const { gameId } = useParams();
    const [game] = useGetOneGames(gameId);
    const reDirectUrl = `/game-list/${gameId}/details`;
    if (game._ownerId) {
        return userId === game._ownerId
            ? <Outlet />
            : <Navigate to={reDirectUrl} />;
    }
    
}