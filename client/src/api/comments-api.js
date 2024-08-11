import gamesAPI from "./games-api";
import { request } from "./requester"

// const BASE_URL = 'http://localhost:3030/jsonstore/games';
const BASE_URL = 'http://localhost:3030/data/comments';             // --> migrate from 'jsonstore' to 'data' collection

// Functions that works with comments (CRUD)
const create = (gameId, text) => request.post(BASE_URL, { gameId, text });

const getAll = (gameId) => {
    const urlParams = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `author=_ownerId:users`,
    });
    return request.get(`${BASE_URL}?${urlParams.toString()}`);
};     // get all comments

const commentsAPI = {
    create,
    getAll,
}

export default commentsAPI;