
// Abstract requester-function

import { getAccessToken } from "../utils/authUtils";

/**
 * 
 * @param {string} method 
 * @param {string} url 
 * @param {object} data 
 * @returns 
 */
export default async function requester(method, url, data) {
    const options = {};
    const accessToken = getAccessToken();

    if (accessToken) {
        options.headers = {
            ...options.headers,
            ['X-Authorization']: accessToken,   // create a new key:value (to the existing 'options.headers' object)
        }
    }

    if (method != 'GET') {
        options.method = method;
    }
    if (data) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        };
        options.body = JSON.stringify(data);
    }
    const response = await fetch(url, options);
    if (response.status === 204) {
        return;
    }
    const result = await response.json();     // turn the Promise into .json (object)

    if (!response.ok) {
        throw result;
    }
    return result;  // as Promise
}

export const request = {
    get: requester.bind(null, 'GET'),
    post: requester.bind(null, 'POST'),
    put: requester.bind(null, 'PUT'),
    del: requester.bind(null, 'DELETE'),
}