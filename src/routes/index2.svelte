<script>
    import { onMount } from 'svelte';

    let innerHeight;
    let scrollY;
    const registerVideo = (bound, video) => {
        bound = document.querySelector(bound);
        video = document.querySelector(video);
        const scrollVideo = () => {
            if (video.duration) {
                const distanceFromTop = scrollY + bound.getBoundingClientRect().top;
                const rawPercentScrolled =
                    (scrollY - distanceFromTop) / (bound.scrollHeight - innerHeight);
                const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
                // This sets the current time for the video.
                video.currentTime = video.duration * percentScrolled;
            }
            requestAnimationFrame(scrollVideo);
        };
        requestAnimationFrame(scrollVideo);
    };

    onMount(() => {
        registerVideo('#bound-one', '#bound-one video');
    });
</script>

<svelte:window bind:scrollY="{scrollY}" bind:innerHeight="{innerHeight}" />

<div class="app snap-y snap-mandatory scroll-smooth">
    <div id="bound-one" class="scroll-bound snap-none">
        <div class="content">
            <p>WebM Video</p>
            <video muted preload="">
                <source
                    src="/intro_video_2.mp4"
                    type="video/mp4"
                />
                <p>Your user agent does not support the HTML5 Video element.</p>
            </video>
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

<style lang="scss">

    #bound-one {
        background: #d0d8db;
    }
    .scroll-bound {
        // Change this height to modify the speed of the scroll.
        // 200vh corresponds to 10 ticks of the scroll wheel
        height: 700vh;

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
        }
    }
     
    .not-scroll-bound {
        height: 100vh;
        width: 100%;
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
