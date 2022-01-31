import { writable } from 'svelte/store';

import type { User } from 'firebase/auth';

const authentication_store = writable<{
    isLoggedIn: boolean;
    user?: User;
    firebaseControlled: boolean;
}>({
    isLoggedIn: false,
    firebaseControlled: false,
});

export default {
    subscribe: authentication_store.subscribe,
    set: authentication_store.set,
};
