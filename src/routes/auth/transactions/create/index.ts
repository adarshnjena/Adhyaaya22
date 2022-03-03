const client_id = import.meta.env.VITE_CASHFREE_CLIENT_ID.toString();
const client_secret = import.meta.env.VITE_CASHFREE_CLIENT_SECRET.toString();

export async function post({ request, params }) {
    // we will post data to the server to make this request
    //console.log(await request.json())
    const response = await fetch(`https://api.cashfree.com/pg/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-version': '2022-01-01',
            'x-client-id': client_id,
            'x-client-secret': client_secret,
        },
        body: JSON.stringify(await request.json()),
    });
    return {
        status: response.status,
        body: await response.json(),
    };
}
