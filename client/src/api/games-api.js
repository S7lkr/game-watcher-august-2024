// It uses 'requester.js's functionalities -> get, post, put, del
import { request } from "./requester";

// const BASE_URL = 'http://localhost:3030/jsonstore/games';
const BASE_URL = 'http://localhost:3030/data/games';

const getAll = async () => {
    const response = await request.get(`${BASE_URL}/list`);
    return Object.values(response);
}

const getOne = async (gameId) => {
    const response = await request.get(`${BASE_URL}/details/${gameId}`);
    return response;
}

export const create = async (gameData) => request.post(`${BASE_URL}`, gameData);

const gamesAPI = {
    getAll,
    getOne,
    create,
}

export default gamesAPI;