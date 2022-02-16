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
    //import { profileDetails } from '$lib/types/profileDetails';
    import roundLogin from '@iconify-icons/ic/round-login.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import { getApp, initializeApp } from 'firebase/app';
    import { onMount } from 'svelte';
    import { frame_data } from './index_data';
    import Content_2_BG_PC from '$lib/assets/content-2-bg-pc.jpg';
    import Content_2_BG_MOBILE from '$lib/assets/content-2-bg-mobile.jpg';
    import MainNavbar from '$lib/MainNavbar.svelte';

    let app;
    let innerHeight: number;
    let scrollY: number; // Number of Pixels scrolled
    let container: HTMLDivElement;
    let src;

    let innerWidth: number;
    $: isMobile = innerWidth < 1280;
    // CONFIG OPTIONS
    const numberOfImages = 386; // 1 indexed

    let image_index = 1;
    $: {
        if (browser) {
            const containerHeight =
                container?.getBoundingClientRect().bottom -
                    container?.getBoundingClientRect().top || 0;
            const pixelsPerImage = containerHeight / numberOfImages;
            image_index = Math.min(Math.floor(scrollY / pixelsPerImage), numberOfImages);
            if (image_index <= 0) {
                // Limit the image index to the number of images
                image_index = 1;
            }
            // Change Path here
            src = `/intro_frames/intro/intro${
                image_index.toString().padStart(3, '0') + (isMobile ? '-portrait' : '')
            }.png`;
            // read the data of this frame if it exists into the last_frame variable
            last_frame = frame_data[image_index] || last_frame
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

    const invisible = 'invisible';
    const visible_1 = 'opacity-25 -translate-y-4';
    const visible_2 = 'opacity-50 -translate-y-2';
    const visible_3 = 'opacity-75 -translate-y-1';
    const visible_4 = 'opacity-100 transform-none';
    const visible_5 = 'opacity-75 translate-y-1';
    const visible_6 = 'opacity-50 translate-y-2';
    const visible_7 = 'opacity-25 translate-y-4';
    // const invisible = ...
    const left = ' xl:mr-[50vw] ';
    const right = ' xl:ml-[50vw] ';

    let last_frame = {
        line_1: ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible]
    };
</script>

<svelte:head>
    <title>Adhyaaya'22</title>
    <!--Change Path here-->
    {#each [...Array(numberOfImages).keys()] as img_index}
        <link
            rel="preload"
            as="image"
            href="{`/intro_frames/intro/intro${
                (img_index + 1).toString().padStart(3, '0') + (isMobile ? '-portrait' : '')
            }.png`}"
        />
    {/each}
</svelte:head>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />

<MainNavbar />

<div class="app snap-y snap-mandatory bg-black">
    <!--Adding a bg to this would make it the background for the slideshow thingy-->
    <div id="bound-one" bind:this="{container}" class="scroll-bound snap-none">
        <div class="content">
            <p class="hidden">This site is best experienced on a 16:9 Monitor.</p>
            <img src="{src}" alt="Showcase" class="min-h-[calc(100vh-3.75rem)] w-full" />
            <div class="text-container">
                <div class="subtitle {frame_data[image_index]?.line_1[1] || last_frame.line_1[1] || 'invisible'}">
                    {frame_data[image_index]?.line_1[0] || last_frame.line_1[0] || ''}
                </div>
                <div class="title {frame_data[image_index]?.line_2[1] || last_frame.line_2[1] || 'invisible'}">
                    {frame_data[image_index]?.line_2[0] || last_frame.line_2[0] || ''}
                </div>
                <div class="title {frame_data[image_index]?.line_3[1] || last_frame.line_3[1] || 'invisible'}">
                    {frame_data[image_index]?.line_3[0] || last_frame.line_3[0] || ''}
                </div>
                <div class="subtitle {frame_data[image_index]?.line_4[1] || last_frame.line_4[1] || 'invisible'}">
                    {frame_data[image_index]?.line_4[0] || last_frame.line_4[0] || ''}
                </div>
            </div>
        </div>
    </div>
    <div
        class="sticky top-0 flex min-h-screen snap-start snap-always flex-col items-center justify-center bg-base-300"
    >
        <span class="text-white">CONTENT 1</span>
    </div>
    <div
        style="--bg2: url('{isMobile ? Content_2_BG_MOBILE : Content_2_BG_PC}')"
        class="content-2-bg sticky top-0 flex min-h-screen snap-start snap-always flex-col items-center justify-center bg-base-100 bg-opacity-50 "
    >
        <!-- svelte-ignore a11y-media-has-caption (This video does not require captions)-->
        <video
            src="/city-bg.mp4"
            autoplay
            muted
            loop
            class="h-screen w-screen object-cover"
        ></video>
    </div>
    <div
        class="sticky top-0 flex min-h-screen snap-start snap-always flex-col items-center justify-center bg-base-300"
    >
        <span class="text-white">CONTENT 3</span>
    </div>
    <div
        class="sticky top-0  flex min-h-screen snap-start snap-always flex-col items-center justify-center bg-base-100"
    >
        <span class="text-white">CONTENT 4</span>
    </div>
</div>

<style lang="scss">
    .scroll-bound {
        // Change this height to modify the speed of the scroll.
        // 200vh corresponds to 10 ticks of the scroll wheel
        //TODO Make this work with images.
        height: 600vh;

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

    .text-container {
        width: 100%;
        height: 100%;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 0;
        color: white;
        .subtitle {
            //opacity: 0;
            font-size: 30px;
        }
        .title {
            //opacity: 0;
            font-size: 80px;
            margin: -20px 0;
        }
    }
    .custom-background {
        background-image: var(--bga), var(--bgb);
        background-position: right, left;
        background-attachment: fixed, fixed;
        background-repeat: no-repeat, no-repeat;
        background-size: contain, contain;
    }

    .content-2-bg {
        background-image: var(--bg2);
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
