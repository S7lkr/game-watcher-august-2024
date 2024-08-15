// It uses 'requester.js's functionalities -> get, post, put, del
import { request } from "./requester";

// const BASE_URL = 'http://localhost:3030/jsonstore/games';
const BASE_URL = 'http://localhost:3030/data/games';

const getAll = async () => {
    const response = await request.get(`${BASE_URL}`);
    return Object.values(response);
}
const getLatest = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: '_createdOn desc',
        pageSize: 4,
    });
    const response = await request.get(`${BASE_URL}?${urlSearchParams.toString().replace('+', '%20')}`);
    const latestGames = Object.values(response);
    
    return latestGames;
}
const search = async (title) => {
    const searchPattern = new URLSearchParams({
        where: `title="${title}"`,
    });    
    const response = await request.get(`${BASE_URL}?${searchPattern.toString().replace('+', '%20')}`);    
    const game = response[0];
    
    return game;
}
const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`)
const create = (gameData) => request.post(`${BASE_URL}`, gameData);
const remove = (gameId) => request.del(`${BASE_URL}/${gameId}`);
const update = (gameId, gameData) => request.put(`${BASE_URL}/${gameId}`, gameData);


const gamesAPI = {
    getAll,
    getLatest,
    getOne,
    create,
    remove,
    update,
    search,
}

export default gamesAPI;