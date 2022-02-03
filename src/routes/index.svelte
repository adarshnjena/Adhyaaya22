<script context="module">
    export const prerender = true;
</script>

<script lang="ts">
    import { dev } from '$app/env';
    import backgroundImageTwo from '$lib/assets/hero-background-alt.png';
    //import navbarLogo from '$lib/assets/navbar-logo.png';
    import backgroundImageOne from '$lib/assets/hero-background.png';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import { profileDetails } from '$lib/types/profileDetails';
    import roundLogin from '@iconify-icons/ic/round-login.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import { getApp, initializeApp } from 'firebase/app';
    import { onMount } from 'svelte';

    let app;
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

        // We will check if a key exists in the database, This should have been done in initialization.
    });

    // Stuff below is for external refernce to child components.
    let details: profileDetails = {
        username: '@username',
        email: 'username@domain.tld',
        first_name: 'FirstName',
        last_name: 'LastName',
        mobile_number: '+91 5542342345',
        address: 'Some Place, Some City, Some Country',
        locality: 'Some Locality',
        city: 'Some City',
        state: 'Some State',
        country: 'Some Country',
        bio: 'I make a website! He did not. Great Success!',
    };
    let contact = {
        name: 'Contact Name',
        email: '',
        mobile_number: '+91 5542342345',
        picture_url: '',
        bio: '',
    };
</script>

<svelte:head>
    <title>Adhyaaya'22</title>
</svelte:head>

<div
    class="hero min-h-screen custom-background"
    style="--bga: url('{backgroundImageOne}'); --bgb: url('{backgroundImageTwo}');"
>
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-center hero-content text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello There!</h1>
            <p class="mb-5">
                This is a private portal for Adhyaaya '22 Campus Ambassadors. Please proceed to
                login.
            </p>
            <a href="/auth/login" sveltekit:prefetch class="btn btn-primary">
                <Icon class="mr-2" icon="{roundLogin}" />Login
            </a>
        </div>
    </div>
</div>

<style>
    .custom-background {
        background-image: var(--bga), var(--bgb);
        background-position: right, left;
        background-repeat: no-repeat, no-repeat;
        background-size: contain, contain;
    }
</style>
