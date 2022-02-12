<script lang="ts">
    import backgroundImage from '$lib/assets/page-background.png';
    import { page } from '$app/stores';
    import {
        getAuth,
        getRedirectResult,
        GithubAuthProvider,
        GoogleAuthProvider,
        linkWithRedirect,
        TwitterAuthProvider,
        UserCredential,
    } from 'firebase/auth';
    import { onMount } from 'svelte';
    import { getApp, initializeApp } from 'firebase/app';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import { dev } from '$app/env';
    import { goto, prefetch } from '$app/navigation';
    let providerid = $page.url.searchParams.get('provider');

    function getProvider(id) {
        const google = new GoogleAuthProvider();
        const github = new GithubAuthProvider();
        const twitter = new TwitterAuthProvider();
        switch (id) {
            case 'google.com':
                return google;
            case 'github.com':
                return github;
            case 'twitter.com':
                return twitter;
            default:
                return google;
        }
    }

    let app;
    let auth;

    onMount(async () => {
        try {
            app = getApp();
        } catch (error) {
            dev ? console.log('getApp: error', error) : '';
            // This means the app is not yet intialized.
            app = initializeApp(firebaseConfig);
        }
        // Now we for sure have an app.
        dev ? console.log(app) : '';
        // Redirect Handler, used when the user is authenticated.
        auth = getAuth();
        let result: UserCredential;
        try {
            prefetch('/dashboard');
            dev ? console.log('Prefetching /dashboard') : '';
            result = await getRedirectResult(auth);
            goto('/dashboard');
        } catch (error) {
            dev ? console.log(error.code) : '';
        }
        if (result === null) {
            // We need to redirect the user.
            const provider = getProvider(providerid);
            linkWithRedirect(auth.currentUser, provider);
        }
    });
</script>

<div class="hero min-h-screen bg-base-300 " style="background-image: url({backgroundImage});">
    <div
        class="hero-overlay bg-base-300 bg-opacity-75 backdrop-blur motion-safe:animate-pulse"
    ></div>
    <div class="hero-content text-center text-neutral-content">
        <form class="max-w-md">
            <div class="card w-96 flex-shrink-0 bg-base-200 bg-opacity-75 shadow-2xl backdrop-blur">
                <div class="card-body">
                    <h1 class="my-4 text-left text-xl">Link Accounts</h1>
                    <span class="my-2 text-left text-sm">Please wait...</span>
                    <hr class="my-2 border-b border-gray-600" />
                    <button class="btn btn-block">Click here to continue...</button>
                </div>
            </div>
        </form>
    </div>
</div>
