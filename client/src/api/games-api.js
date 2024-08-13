// It uses 'requester.js's functionalities -> get, post, put, del
import { request } from "./requester";

// const BASE_URL = 'http://localhost:3030/jsonstore/games';
const BASE_URL = 'http://localhost:3030/data/games';

const getAll = async () => {
    const response = await request.get(`${BASE_URL}`);
    return Object.values(response);
}
const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`)
const create = (gameData) => request.post(`${BASE_URL}`, gameData);
const remove = (gameId) => request.del(`${BASE_URL}/${gameId}`);
const update = (gameId, gameData) => request.put(`${BASE_URL}/${gameId}`, gameData);

const gamesAPI = {
    getAll,
    getOne,
    create,
    remove,
    update,
}

export default gamesAPI;