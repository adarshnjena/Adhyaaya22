<script context="module">
    export const prerender = true;
    //TODO: Make this into a landing page.
</script>

<script lang="ts">
    import { browser, dev } from '$app/env';
    import backgroundImageTwo from '$lib/assets/hero-background-alt.png';
    //import navbarLogo from '$lib/assets/navbar-logo.png';
    import authStore from '$lib/auth/authStore';
    import backgroundImageOne from '$lib/assets/hero-background.png';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    //import { profileDetails } from '$lib/types/profileDetails';
    import roundLogin from '@iconify-icons/ic/round-login.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import { getApp, initializeApp } from 'firebase/app';
    import { onMount } from 'svelte';
    import { landscape_frame_data, portrait_frame_data } from './index_data';
    import Content_2_BG_PC from '$lib/assets/content-2-bg-pc.jpg';
    import Content_2_BG_MOBILE from '$lib/assets/content-2-bg-mobile.jpg';
    import MainNavbar from '$lib/MainNavbar.svelte';
    import MainFooter from '$lib/MainFooter.svelte';
    import { getAuth, onAuthStateChanged, sendEmailVerification } from 'firebase/auth';
    import { goto } from '$app/navigation';
    import ImportantFeedback1 from '$lib/index/ImportantFeedback1.svelte';
    import NonImportantFeedBack from '$lib/index/NonImportantFeedBackIframe.svelte';
    import Benefits from '$lib/index/Benefits.svelte';
    import Timeline from '$lib/index/Timeline.svelte';
    import Timeline2 from '$lib/index/Timeline2.svelte';

    let app;
    let auth;
    let innerHeight: number;
    let scrollY: number; // Number of Pixels scrolled
    let container: HTMLDivElement;
    let src;

    let innerWidth: number;
    $: isMobile = innerWidth < 1280;
    $: frame_data = isMobile ? portrait_frame_data : landscape_frame_data;
    // CONFIG OPTIONS
    const numberOfImages = 550; // 1 indexed

    let image_index = 1;
    $: {
        if (browser) {
            // <!-- New Algorithm, finishes all frames before the container end. -->
            const distanceFromTop = scrollY + container?.getBoundingClientRect().top;
            const rawPercentScrolled =
                (scrollY - distanceFromTop) / (container?.scrollHeight - innerHeight);
            image_index = Math.floor(rawPercentScrolled * numberOfImages);
            image_index = Math.min(image_index, numberOfImages);
            image_index = Math.max(image_index, 1);
            // Change Path here
            src = `/intro_frames/intro/intro${
                image_index.toString().padStart(3, '0') + (isMobile ? '-portrait' : '')
            }.png`;
            // read the data of this frame if it exists into the last_frame variable
            last_frame = frame_data[image_index] || last_frame;
        }
    }
    onMount(async () => {
        //@ts-ignore
        //fullpage_api.destroy('all');
        // Sets up the scroll to the top of the page.
        scrollY = 84;
        try {
            app = getApp();
        } catch (error) {
            dev ? console.log(error) : '';
            // This means the app is not yet intialized.
            app = initializeApp(firebaseConfig);
        }
        // Now we for sure have an app.
        auth = getAuth();
        dev ? console.log(app) : '';
        onAuthStateChanged(auth, (user) => {
            dev ? console.log('authState changed', user) : '';
            authStore.set({
                isLoggedIn: !!user,
                user: user,
                firebaseControlled: true,
            });
            !user?.emailVerified ? sendEmailVerification(user) : '';
            // we wait for the dashboard to check and then init the data.
            //user ? init_profile_data(app, auth, getDatabase(app)) : '';
            //user ? goto('/dashboard') : '';
        });
        return () => {
            scrollY = 84;
        };
    });

    const invisible = 'tw-invisible';

    let last_frame = {
        line_1: ['', invisible],
        line_2: ['', invisible],
        line_3: ['', invisible],
        line_4: ['', invisible],
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
            <img src="{src}" alt="Showcase" class="tw-min-h-screen tw-w-full" />
            <div class="text-container {image_index == numberOfImages ? '!tw-hidden' : ''}">
                <div
                    class="title {frame_data[image_index]?.line_1[1] ||
                        last_frame.line_1[1] ||
                        'invisible'}"
                >
                    {@html frame_data[image_index]?.line_1[0] || last_frame.line_1[0] || ''}
                </div>
                <div
                    class="subtitle {frame_data[image_index]?.line_2[1] ||
                        last_frame.line_2[1] ||
                        'invisible'}"
                >
                    {@html frame_data[image_index]?.line_2[0] || last_frame.line_2[0] || ''}
                </div>
                <div
                    class="subtitle !tw-mt-10 {frame_data[image_index]?.line_3[1] ||
                        last_frame.line_3[1] ||
                        'invisible'}"
                >
                    {@html frame_data[image_index]?.line_3[0] || last_frame.line_3[0] || ''}
                </div>
                <div
                    class="title {frame_data[image_index]?.line_4[1] ||
                        last_frame.line_4[1] ||
                        'invisible'}"
                >
                    {@html frame_data[image_index]?.line_4[0] || last_frame.line_4[0] || ''}
                </div>
            </div>
        </div>
    </div>
    <div
        class="tw-top-0 tw-flex tw-min-h-screen tw-snap-start tw-snap-always tw-flex-col tw-items-center tw-justify-center tw-bg-base-300 xl:tw-sticky"
    >
        <span class="tw-opacity tw-text-white"><Benefits /></span>
    </div>
    <div
        class="tw-top-0 tw-flex tw-min-h-screen tw-snap-start tw-snap-always tw-flex-col tw-items-center tw-justify-center tw-bg-base-300 xl:tw-sticky"
    >
        <Timeline />
    </div>
    <div
        class="tw-top-0 tw-flex tw-min-h-screen tw-snap-start tw-snap-always tw-flex-col tw-items-center tw-justify-center tw-bg-base-300 xl:tw-sticky"
    >
        <Timeline2 />
    </div>
    <!-- Feedback Section Start -->
    <div
        class="tw-top-0 tw-flex tw-min-h-screen tw-snap-start tw-snap-always tw-flex-col tw-items-center tw-justify-center tw-bg-base-300 xl:tw-sticky"
    >
        <span class="tw-mb-8 tw-text-white"><ImportantFeedback1 /></span>
    </div>
    <div
        class="tw-top-0 tw-flex tw-min-h-screen tw-snap-start tw-snap-always tw-flex-col tw-items-center tw-justify-center tw-bg-base-300 xl:tw-sticky"
    >
        <span class="tw-text-white">
            <!-- ADD THE NEW FEED BACK ELEMENT HERE-->
            <NonImportantFeedBack />
        </span>
    </div>
    <!-- Feedback Section End -->
    <MainFooter />
</div>

<style lang="scss">
    .scroll-bound {
        // Change this height to modify the speed of the scroll.
        // 200vh corresponds to 10 ticks of the scroll wheel
        //TODO Make this work with images.
        height: 800vh;

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
            height: 100vh;
            transform: translate3d(0, 0, 0);
        }
    }

    .text-container {
        width: 100%;
        height: 100vh;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 0;
        color: white;

        .subtitle {
            //opacity: 0;
            //font-size: 30px;
            @apply tw-mx-10 tw-text-justify tw-text-lg xl:tw-mx-auto;
        }
        .title {
            //opacity: 0;
            font-size: 60px;
            @apply tw-text-center xl:tw-text-right;
            font-family: revampedregular;
            text-shadow: 2px 2px 10px rgb(0, 136, 255);
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
