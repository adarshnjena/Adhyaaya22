const client_id = import.meta.env.VITE_CASHFREE_CLIENT_ID.toString();
const client_secret = import.meta.env.VITE_CASHFREE_CLIENT_SECRET.toString();

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ request, params }) {
    // `params.id` comes from [id].js
    const _verification_data = await fetch(`https://api.cashfree.com/pg/orders/${params.id}`, {
        headers: {
            'Content-Type': 'application/json',
            'x-api-version': '2022-01-01',
            'x-client-id': client_id,
            'x-client-secret': client_secret,
        },
    });
    const verification_data = await _verification_data.json();
    if (verification_data?.type) {
        // There is an error in the response
        return { status: 400, body: verification_data };
    }
    return { status: 200, body: verification_data };
}
