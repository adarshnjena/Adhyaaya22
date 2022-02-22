const client_id = import.meta.env.VITE_CASHFREE_CLIENT_ID;
const client_secret = import.meta.env.VITE_CASHFREE_CLIENT_SECRET;

export async function post({ fetch, body }) {
    // we will post data to the server to make this request
    const response = await fetch(`${process.env.VITE_API_URL}/pg/orders`, {
        headers: {
            'Content-Type': 'application/json',
            'x-api-version': '2022-01-01',
            'x-client-id': client_id,
            'x-client-secret': client_secret,
        },
        body: JSON.stringify(body),
    });
    return {
        status: response.status,
        body: await response.json(),
    }
}
