import { request } from "./requester";

const BASE_URL = 'http://localhost:3030/users';

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
export const login = async (email, password) => {
    const authData = await request.post(`${BASE_URL}/login`, {email, password});
    return authData;
}

export const register = async (email, username, password) => {
    const authData = await request.post(`${BASE_URL}/register`, {email, username, password});
    return authData;
}