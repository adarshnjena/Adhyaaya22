<script context="module">
    export const prerender = true;
    //TODO: Make this into a landing page.
</script>

<script lang="ts">
    import { browser, dev } from '$app/env';
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
    let innerHeight: number;
    let scrollY: number; // Number of Pixels scrolled
    let container: HTMLDivElement;
    let src;

    // CONFIG OPTIONS
    const numberOfImages = 52 // 1 indexed
    
    let image_index = 1;
    $: {
        if (browser) {
            const containerHeight = (container?.getBoundingClientRect().bottom - container?.getBoundingClientRect().top) || 0;
            const pixelsPerImage = containerHeight / numberOfImages;
            image_index = Math.ceil(scrollY/pixelsPerImage)
            if (image_index >= numberOfImages) {
                // Limit the image index to the number of images
                image_index = numberOfImages
            }
            if (image_index <= 0) {
                // Limit the image index to the number of images
                image_index = 1
            }
            // Change Path here
            src = `/intro_frames/battery_example/battery${((image_index).toString().padStart(3, "0"))}.png`
        }
    }
    onMount(async () => {
        try {
            app = getApp();
        } catch (error) {
            dev ? console.log(error) : '';
            // This means the app is not yet intialized.
            app = initializeApp(firebaseConfig);
        }
        // Now we for sure have an app.
        if (dev) {
            console.log(app);
        }
        // We will check if a key exists in the database, This should have been done in initialization.
    });

</script>

<svelte:head>
    <title>Adhyaaya'22</title>
    <!--Change Path here-->
    {#each [...Array(numberOfImages).keys()] as img_index}
         <link rel="preload" as="image" href="{`/intro_frames/battery_example/battery${((img_index+1).toString().padStart(3, "0"))}.png`}" />
    {/each}
</svelte:head>

<svelte:window bind:scrollY bind:innerHeight />

<div class="app bg-base-100">
    <!--Adding a bg to this would make it the background for the slideshow thingy-->
    <div id="bound-one" bind:this={container} class="scroll-bound snap-none">
        <div class="content">
            <p class="hidden">This site is best experienced on a 16:9 Monitor.</p>
            <img src={src} alt="Showcase" class="min-h-screen w-full" />
        </div>
    </div>
    <div class="not-scroll-bound snap-start snap-always bg-base-300 flex justify-center">
        <span class="text-white">CONTENT 1</span>
    </div>
    <div class="not-scroll-bound snap-start snap-always bg-base-100 flex justify-center">
        <span class="text-white">CONTENT 2</span>
    </div>
    <div class="not-scroll-bound snap-start snap-always bg-base-300 flex justify-center">
        <span class="text-white">CONTENT 3</span>
    </div>
    <div class="not-scroll-bound snap-start snap-always bg-base-100 flex justify-center">
        <span class="text-white">CONTENT 4</span>
    </div>
</div>

<div
    class="min-h-screen hero custom-background"
    style="--bga: url('{backgroundImageOne}'); --bgb: url('{backgroundImageTwo}');"
>
    <div class="hero-overlay backdrop-blur bg-opacity-60"></div>
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

<style lang="scss">
    .scroll-bound {
        // Change this height to modify the speed of the scroll.
        // 200vh corresponds to 10 ticks of the scroll wheel
        //TODO Make this work with images.
        height: 500vh;

        .content {
            height: 100vh;
            width: 100%;
            position: sticky;
            top: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        img {
            width: 100%;
            transform: translate3d(0, 0, 0);
        }
    }

    .not-scroll-bound {
        min-height: 100vh;
        width: 100%;
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .custom-background {
        background-image: var(--bga), var(--bgb);
        background-position: right, left;
        background-attachment: fixed, fixed;
        background-repeat: no-repeat, no-repeat;
        background-size: contain, contain;
    }
</style>
