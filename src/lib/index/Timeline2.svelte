<script>
    import { browser } from '$app/env';

    import { onMount } from 'svelte';

    let items;
    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                if (!items[i].classList.contains('in-view')) {
                    items[i].classList.add('in-view');
                }
            } else if (items[i].classList.contains('in-view')) {
                items[i].classList.remove('in-view');
            }
        }
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    onMount(() => {
        items = document.querySelectorAll('.timeline li');
        items.forEach((item) => {
            item.classList.add('in-view');
        });
        //window.addEventListener('load', callbackFunc);
        //window.addEventListener('scroll', callbackFunc);
    });
</script>

<svelte:window />

<div class="wrapper tw-h-screen tw-w-screen tw-bg-base-300">
    <section class="timeline">
        <ul>
            <li>
                <div>
                    <time></time>
                    <div class="discovery">
                        <h1>Day 2</h1>
                        <p></p>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <time></time>
                    <div class="discovery">
                        <h1>Day 3</h1>
                        <p></p>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <time></time>
                    <div class="discovery">
                        <h1>Valedictory</h1>
                        <p></p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</div>

<style style="scss">
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* @apply tw-overflow-y-clip; */
        /* @apply tw-overflow-y-hidden */
    }

    .wrapper {
        font: normal 16px/1.5 'Nunito', sans-serif;
        /* background-color: rgb(40, 24, 93); linear-gradient(54deg, var(--b1), var(--b3)); */
        /* color: #3c3f64; */
        overflow-x: hidden;
        overflow-y: hidden;
        padding-bottom: 50px;
        @apply tw-bg-base-300 tw-text-white;
    }

    .timeline ul li {
        list-style-type: none;
        position: relative;
        width: 6px;
        margin: 0 auto;
        padding-top: 100px;
        background: #fff;
    }
    .timeline ul li::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%) rotate(45deg);
        width: 20px;
        height: 20px;
        z-index: 2;
        /* background: #eee; */
        @apply tw-bg-accent;
    }
    .timeline ul li div {
        position: relative;
        bottom: 0;
        width: 400px;
        padding: 20px;
        /* background: #fff; */
        box-shadow: 4px 13px 30px 1px rgba(12, 98, 109, 0.2);
        border-radius: 5px;
        display: flex;
        align-items: center;
        @apply tw-bg-base-200;
    }
    .timeline ul li div time {
        position: absolute;
        /* background: rgb(83, 192, 243); */
        width: 120px;
        height: 30px;
        top: -15px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 2px;
        @apply tw-bg-primary;
    }
    .timeline ul li div div {
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .timeline ul li div div p {
        text-align: center;
    }
    .timeline ul li div .discovery {
        margin-right: 10px;
        @apply tw-bg-base-100 tw-text-white;
    }
    .timeline ul li:nth-of-type(odd) > div {
        left: 45px;
    }
    .timeline ul li:nth-of-type(even) > div {
        left: -439px;
    }

    .timeline ul li div {
        visibility: hidden;
        opacity: 0;
        transition: all 0.5s ease-in-out;
    }
    .timeline ul li:nth-of-type(odd) div {
        transform: translate3d(100px, -10px, 0) rotate(10deg);
    }
    .timeline ul li:nth-of-type(even) div {
        transform: translate3d(-100px, -10px, 0) rotate(10deg);
    }
    .timeline ul li.in-view div {
        transform: none;
        visibility: visible;
        opacity: 1;
    }

    @media screen and (max-width: 900px) {
        .timeline ul li div {
            width: 250px;
            flex-direction: column;
        }
        .timeline ul li div div {
            width: 80%;
            margin: 10px;
        }
        .timeline ul li:nth-of-type(even) > div {
            left: -289px;
        }
    }
    @media screen and (max-width: 600px) {
        .wrapper {
            /* background: #8bfff4; */
            @apply tw-bg-base-300;
        }

        .timeline ul li {
            margin-left: 20px;
        }
        .timeline ul li div {
            width: calc(100vw - 91px);
        }
        .timeline ul li:nth-of-type(even) > div {
            left: 45px;
        }
    }
</style>
