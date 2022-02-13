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
    let innerHeight;
    let scrollY;
    let currentTime = 0;
    let duration;
    let src;

    $: {
        if (browser) {
            let bound = document.querySelector('#bound-one');
            //video = document.querySelector("#scroll-bound video");
            //const totalScroll = Number(video?.scrollHeight - innerHeight);
            //time = duration * (scrollY / totalScroll);
            const distanceFromTop = scrollY + bound.getBoundingClientRect().top;
            const rawPercentScrolled =
                (scrollY - distanceFromTop) / (bound.scrollHeight - innerHeight);
            const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
            currentTime = duration * percentScrolled;
            //console.log(time, percentScrolled);
            requestAnimationFrame(() => {});
        }
    }
    async function preloadVideo(src) {
        const res = await fetch(src);
        const blob = await res.blob();
        return URL.createObjectURL(blob);
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
        src = await preloadVideo('/test_1.webm');
        // We will check if a key exists in the database, This should have been done in initialization.
    });

    function on_video_click_handler(event) {
        dev ? console.log(event) : '';
        console.log(currentTime, scrollY);
        // Use this function to accurately redirect the user to the correct page.
    }
</script>

<svelte:head>
    <title>Adhyaaya'22</title>
</svelte:head>

<svelte:window bind:scrollY bind:innerHeight />

<div class="app bg-base-100">
    <div id="bound-one" class="scroll-bound snap-none">
        <div class="content">
            <p class="hidden">This site is best experienced on a 16:9 Monitor.</p>
            <!-- This migt  -->
            <video
                on:click="{on_video_click_handler}"
                bind:currentTime
                bind:duration
                muted
                src="{src}"
                preload="auto"
                class="h-screen object-fill"
            >
                <p>Your user agent does not support the HTML5 Video element.</p>
            </video>
        </div>
    </div>
    <div class="not-scroll-bound flex snap-start snap-always justify-center bg-base-300">
        <span class="text-white">CONTENT 1</span>
    </div>
    <div class="not-scroll-bound flex snap-start snap-always justify-center bg-base-100">
        <span class="text-white">CONTENT 2</span>
    </div>
    <div class="not-scroll-bound flex snap-start snap-always justify-center bg-base-300">
        <span class="text-white">CONTENT 3</span>
    </div>
    <div class="not-scroll-bound flex snap-start snap-always justify-center bg-base-100">
        <span class="text-white">CONTENT 4</span>
    </div>
</div>

<div
    class="custom-background hero min-h-screen"
    style="--bga: url('{backgroundImageOne}'); --bgb: url('{backgroundImageTwo}');"
>
    <div class="hero-overlay bg-opacity-60 backdrop-blur"></div>
    <div class="hero-content text-center text-neutral-content">
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

        video {
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
