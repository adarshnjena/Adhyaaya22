<script lang="ts">
    import { dev } from '$app/env';
    import { goto } from '$app/navigation';
    import authStore from '$lib/auth/authStore';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import { FirebaseApp, getApp, initializeApp } from 'firebase/app';
    import { Auth, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
    import { onMount } from 'svelte';
    let app: FirebaseApp;
    let auth: Auth;
    onMount(async () => {
        try {
            app = getApp();
        } catch (error) {
            dev ? console.log(error) : '';
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
            dev ? console.log(error) : '';
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
