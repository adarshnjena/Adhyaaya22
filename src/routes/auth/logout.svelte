<script lang="ts">
    import { onMount } from 'svelte';
    import { dev } from '$app/env';
    import { getApp, initializeApp, FirebaseApp } from 'firebase/app';
    import { getAuth, signOut, Auth, onAuthStateChanged } from 'firebase/auth';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import { goto } from '$app/navigation';
    import authStore from '$lib/auth/authStore';
    let app: FirebaseApp;
    let auth: Auth;
    onMount(async () => {
        try {
            app = getApp();
        } catch (error) {
            dev ? console.error(error) : '';
            // This means the app is not yet intialized.
            app = initializeApp(firebaseConfig);
        }

        dev ? console.log(app) : '';

        auth = getAuth();
        let result;
        try {
            result = await signOut(auth);
            dev ? console.log(result) : '';
            goto('/');
        } catch (error) {
            dev ? console.error(error) : '';
        }
        onAuthStateChanged(auth, (user) => {
            dev ? console.log('authState changed', user) : '';
            authStore.set({
                isLoggedIn: !!user,
                user: user,
                firebaseControlled: false,
            });
            !user ? goto('/') : '';
        });
    });
</script>
