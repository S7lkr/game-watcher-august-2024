// Here we'll implement 'requester.js's functionalities:
import { request } from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/games/list';

export const getAll = async () => {
    const response = await request.get(BASE_URL);
    return response;
}