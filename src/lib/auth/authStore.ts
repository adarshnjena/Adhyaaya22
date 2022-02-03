import type { UserInfo } from 'firebase/auth';
import { writable } from 'svelte/store';

const authentication_store = writable<{
    isLoggedIn: boolean;
    user?: UserInfo;
    firebaseControlled: boolean;
}>({
    isLoggedIn: false,
    firebaseControlled: false,
});

export default {
    subscribe: authentication_store.subscribe,
    set: authentication_store.set,
};
