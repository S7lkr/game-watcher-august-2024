import { request } from "./requester"

const BASE_URL = 'http://localhost:3030/jsonstore/games';
const buildUrl = (gameId) => `${BASE_URL}/${gameId}/comments`;

// Function that works with comments (CRUD)
const create = async (gameId, username, text) => {
    const response = request.post(buildUrl(gameId), { username, text });
    const comments = Object.values(response);
    return comments;
}

const commentsAPI = {
    create,
}

export default commentsAPI;