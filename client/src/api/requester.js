

// Abstract requester-function

export default async function requester(method, url, data=null) {
    const options = {};

    if (method != 'GET')  {
        options.method = method;
    }
    if (data) {
        options.headers = {
            'Content-Type': 'application/json',
        };
        options.body = JSON.stringify(data);
    }
    const response = await fetch(url, options);
    const result = response.json();

    return result;  // as Promise
}

export const request = {
    get: requester.bind(null, 'GET'),
    post: requester.bind(null, 'POST'),
    put: requester.bind(null, 'PUT'),
    del: requester.bind(null, 'DELETE'),
}