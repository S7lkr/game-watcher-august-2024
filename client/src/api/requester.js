
// Abstract requester-function

/**
 * 
 * @param {string} method 
 * @param {string} url 
 * @param {object} data 
 * @returns 
 */
export default async function requester(method, url, data) {
    const options = {};
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        options.headers = {
            ...options.headers,
            ['X-Authorization']: accessToken,   // just create a new key:value
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