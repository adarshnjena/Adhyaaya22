<script>
    import { browser } from '$app/env';

    let time = 0;
    let duration;

    let scrollY = 0;
    let innerHeight;
    $: {
        if (browser) {
            const totalScroll = document.documentElement.scrollHeight - innerHeight;
            time = duration * (scrollY / totalScroll);
        }
    }
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="video-container">
    <video
        bind:currentTime="{time}"
        bind:duration
        preload="metadata"
        muted
        src="https://static01.nyt.com/newsgraphics/2019/10/23/turkey-syria-video-upload/71ab097907156ca46fb7ffd4d21dfbd119fb47e8/syria-turkey-reconstruct-7-800.mp4"
        type="video/mp4"
    ></video>
</div>
<div id="scroll-container">
    <div class="str bg-base-300">
        <div class="scroll-bar-inner">CONTENT</div>
    </div>
</div>

<style>
    .video-container {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }
    .video-container video {
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
    }

    #scroll-container {
        height: 400vh;
    }

    .not-scroll-items {
        height: 100vh;
        width: 100%;
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .str {
        position: absolute;
        display: flex;
        flex-wrap: wrap;
        left: 50%;
        transform: translate(-50%, 0);
        line-height: 1.5;
        opacity: 0.8;
    }
</style>
