import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import gamesAPI from "../api/games-api";
import useIsFetching from "./useIsFetching";


// Custom hook: Gets all games from server
export function useGetAllGames() {
    const [games, setGames] = useState([]);
    const [isFetching, toggleFetch] = useIsFetching();
    useEffect(() => {
        try {
            (async () => {
                toggleFetch();
                const allGames = await gamesAPI.getAll();
                setGames(allGames);
                toggleFetch();
            })();
            // gamesAPI.getAll()
            //     .then(games => setGames(games));
        } catch (err) {
            console.log(err.message);
        }
    }, []);
    return [games, isFetching];
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
    const [isFetching, toggleFetch] = useIsFetching();
    useEffect(() => {
        (async () => {
            toggleFetch();
            try {
                const latestGames = await gamesAPI.getLatest(count);                     // show only the LAST (newest) 'count' games
                // const latestGames = Object.values(response).reverse().slice(0, 4);    // po selskiq na4in            
                setGames(latestGames);
            } catch (err) {
                console.log(err);
            }
            toggleFetch();
        })();
    }, []);
    return [games, isFetching];
}

// Custom hook: Create game on server
export function useGameCreate() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const gameCreateHandler = async (values) => {
        // Game data validator
        if (
            values.title == '' ||
            values.category == '' ||
            values.type == '' ||
            values.maxLevel == '' ||
            values.releaseYear == '' ||
            values.summary == ''
        ) {
            setError('Empty fields left!')
            return setTimeout(() => setError(''), 5000);
        }
        if (values.imageUrl == '') {
            values.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
        console.log(values);
        
        try {
            // const { _id: gameId } = await gamesAPI.create(values);
            // navigate(`/game-list/${gameId}/details`);
            await gamesAPI.create(values);
            navigate('/game-list');
        } catch (err) {
            // Set error state and display error (like in Login or Register)
            console.log(err.message);
        }
    }
    return [gameCreateHandler, error];
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