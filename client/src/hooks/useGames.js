import { useState, useEffect } from "react";
import gamesAPI from "../api/games-api";

// Custom hook: Gets all games from server
export function useGetAllGames() {
    const [games, setGames] = useState([]);
    useEffect(() => {
        gamesAPI.getAll()
            .then(games => setGames(games));
    }, []);
    return [games];
}

// Custom hook: Get a SINGLE game from server
export function useGetOneGames(gameId) {
    const [game, setGame] = useState({});
    useEffect(() => {
        (async () => {
            const response = await gamesAPI.getOne(gameId);
            setGame(response);
        })();
    }, []);
    return [game, setGame];
}

export default {
    useGetAllGames,
    useGetOneGames,
}