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
    import { landscape_frame_data,  portrait_frame_data} from './index_data';
    import Content_2_BG_PC from '$lib/assets/content-2-bg-pc.jpg';
    import Content_2_BG_MOBILE from '$lib/assets/content-2-bg-mobile.jpg';
    import MainNavbar from '$lib/MainNavbar.svelte';
    import MainFooter from '$lib/MainFooter.svelte';

    let app;
    let innerHeight: number;
    let scrollY: number; // Number of Pixels scrolled
    let container: HTMLDivElement;
    let src;

    let innerWidth: number;
    $: isMobile = innerWidth < 1280;
    $: frame_data = isMobile ? portrait_frame_data : landscape_frame_data;
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

    const invisible = 'tw-invisible';

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

<div class="app tw-snap-y tw-snap-mandatory tw-bg-black">
    <!--Adding a bg to this would make it the background for the slideshow thingy-->
    <div id="bound-one" bind:this="{container}" class="scroll-bound tw-snap-none">
        <div class="content">
            <p class="tw-hidden">This site is best experienced on a 16:9 Monitor.</p>
            <img src="{src}" alt="Showcase" class="tw-min-h-[calc(100vh-3.75rem)] tw-w-full" />
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
        class="tw-sticky tw-top-0 tw-flex tw-min-h-screen tw-snap-start tw-snap-always tw-flex-col tw-items-center tw-justify-center tw-bg-base-300"
    >
        <span class="tw-text-white">CONTENT 1</span>
    </div>
    <div
        style="--bg2: url('{isMobile ? Content_2_BG_MOBILE : Content_2_BG_PC}')"
        class="content-2-bg tw-sticky tw-top-0 tw-flex tw-min-h-screen tw-snap-start tw-snap-always tw-flex-col tw-items-center tw-justify-center tw-bg-base-100 tw-bg-opacity-50 "
    >
        <!-- svelte-ignore a11y-media-has-caption (This video does not require captions)-->
        <video
            src="/city-bg.mp4"
            autoplay
            muted
            loop
            class="tw-h-screen tw-w-screen tw-object-cover"
        ></video>
    </div>
    <div
        class="tw-sticky tw-top-0 tw-flex tw-min-h-screen tw-snap-start tw-snap-always tw-flex-col tw-items-center tw-justify-center tw-bg-base-300"
    >
        <span class="tw-text-white">CONTENT 3</span>
    </div>

        <MainFooter />
    
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
