
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

    if (method != 'GET') {
        options.method = method;
    }
    if (data) {
        options.headers = {
            'Content-Type': 'application/json',
        };
        options.body = JSON.stringify(data);
    }
    try {
        const response = await fetch(url, options);
        const result = await response.json();     // turn the Promise into .json (object)

        if (!response.ok) {
            console.log(result);
            throw result;
        }
        return result;  // as Promise
    } catch(err) {
        console.log(err.message);
    };
}

export const request = {
    get: requester.bind(null, 'GET'),
    post: requester.bind(null, 'POST'),
    put: requester.bind(null, 'PUT'),
    del: requester.bind(null, 'DELETE'),
}