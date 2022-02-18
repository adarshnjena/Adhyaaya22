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

<div class="tw-hero tw-min-h-screen tw-bg-base-300 " style="background-image: url({backgroundImage});">
    <div
        class="tw-hero-overlay tw-bg-base-300 tw-bg-opacity-75 tw-backdrop-blur motion-safe:tw-animate-pulse"
    ></div>
    <div class="tw-hero-content tw-text-center tw-text-neutral-content">
        <form class="tw-max-w-md">
            <div class="tw-card tw-w-96 tw-flex-shrink-0 tw-bg-base-200 tw-bg-opacity-75 tw-shadow-2xl tw-backdrop-blur">
                <div class="tw-card-body">
                    <h1 class="tw-my-4 tw-text-left tw-text-xl">Link Accounts</h1>
                    <span class="tw-my-2 tw-text-left tw-text-sm">Please wait...</span>
                    <hr class="tw-my-2 tw-border-b tw-border-gray-600" />
                    <button class="tw-btn tw-btn-block">Click here to continue...</button>
                </div>
            </div>
        </form>
    </div>
</div>
