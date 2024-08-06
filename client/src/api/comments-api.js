import { request } from "./requester"

const BASE_URL = 'http://localhost:3030/jsonstore/games';
const buildUrl = (gameId) => `${BASE_URL}/details/${gameId}/comments`;

// Functions that works with comments (CRUD)
const create = async (gameId, username, text) => request.post(buildUrl(gameId), { username, text });
const getAll = async (gameId) => {
    const response = request.get(buildUrl(gameId));
    const allComments = Object.values(response);
    return allComments;
}

const commentsAPI = {
    create,
    getAll,
}

export default commentsAPI;