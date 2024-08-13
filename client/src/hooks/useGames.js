import { useState, useEffect } from "react";
import gamesAPI from "../api/games-api";
import { useNavigate } from "react-router";


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

// Custom hook: Create game on server
export function useGameCreate() {
    const gameCreateHandler = (gameData) => gamesAPI.create(gameData);
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