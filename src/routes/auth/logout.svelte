<script lang="ts">
    import { onMount } from 'svelte';
    import { dev } from '$app/env';
    import { getApp, initializeApp, FirebaseApp } from 'firebase/app';
    import { getAuth, signOut, Auth } from 'firebase/auth';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
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
        // Now we for sure have an app.
        if (dev) {
            console.log(app);
        }

        auth = getAuth();
        let result;
        try {
            result = await signOut(auth);
        } catch (error) {
            dev ? console.error(error) : '';
        }
    });
</script>
