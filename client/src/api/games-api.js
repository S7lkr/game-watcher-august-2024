// It uses 'requester.js's functionalities -> get, post, put, del
import { request } from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
    const response = await request.get(`${BASE_URL}/list`);
    return Object.values(response);
}

export const getOne = async (gameId) => {
    const response = await request.get(`${BASE_URL}/details/${gameId}`);
    return response;
}

const gamesAPI = {
    getAll,
    getOne,
}

export default gamesAPI;