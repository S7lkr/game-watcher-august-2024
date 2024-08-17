import { useState, useEffect } from "react";
import gamesAPI from "../api/games-api";
import { useNavigate } from "react-router";


// Custom hook: Gets all games from server
export function useGetAllGames() {
    const [games, setGames] = useState([]);
    const [isFetch, setIsFetch] = useState(false);
    useEffect(() => {
        try {
            (async () => {
                setIsFetch(true);
                const allGames = await gamesAPI.getAll();
                setGames(allGames);
                setIsFetch(false);
            })();
            // gamesAPI.getAll()
            //     .then(games => setGames(games));
        } catch (err) {
            console.log(err.message);
        }
    }, []);
    return [games, isFetch];
}

// Custom hook: Get a SINGLE game from server
export function useGetOneGames(gameId) {
    const [game, setGame] = useState({
        title: '',
        imageUrl: '',
        category: '',
        type: '',
        maxLevel: '',
        releaseYear: '',
        summary: '',
    });
    useEffect(() => {
        (async () => {
            try {
                const response = await gamesAPI.getOne(gameId);
                setGame(response);
            } catch (err) {
                console.log(err.message);
            }
        })();
    }, []);
    return [game, setGame];
}

export function useGetLastGames(count) {
    const [games, setGames] = useState([]);
    const [isFetch, setIsFetch] = useState(false);
    useEffect(() => {
        (async () => {
            setIsFetch(true);
            try {
                const latestGames = await gamesAPI.getLatest(count);                     // show only the LAST (newest) 'count' games
                // const latestGames = Object.values(response).reverse().slice(0, 4);    // po selskiq na4in            
                setGames(latestGames);
            } catch (err) {
                console.log(err);
            }
            setIsFetch(false);
        })();
    }, []);
    return [games, isFetch];
}

// Custom hook: Create game on server
export function useGameCreate() {
    const gameCreateHandler = (gameData) => {
        try {
            gamesAPI.create(gameData);
        } catch (err) {
            console.log(err.message);
        }
    }
    return gameCreateHandler;
}

// Custome hook: Delete a game from server
export function useDeleteGame() {
    const navigate = useNavigate();
    const gameDeleteHandler = async (gameId, title) => {
        const isConfirmed = confirm(`Delete ${title} game? Are you sure?`);
        if (isConfirmed) {
            try {
                await gamesAPI.remove(gameId);
                navigate('/game-list');
            } catch (err) {
                console.log(err.message);
            }
        }
    }
    return gameDeleteHandler;
}