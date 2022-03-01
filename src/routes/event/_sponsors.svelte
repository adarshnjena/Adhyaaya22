<script>
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    //import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
    import { browser } from '$app/env';

    let scrollY;
    let sponsor_top = 6;
    let b;
    $: {
        if (browser) {
            let a = Math.min(scrollY, 100);
            b = (sponsor_top * (100 - a)) / 100;
        }
    }
    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        // let speed = 100;

        let mascot = gsap.timeline();
        ScrollTrigger.create({
            animation: mascot,
            trigger: '.mascot',
            start: 'top top',
            end: '100% 100%',
            scrub: 1,
            onEnter: function () {
                gsap.to('#mascot-img', { scaleX: 1, rotation: 0 });
            },
            onLeave: function () {
                gsap.to('#mascot-img', { scaleX: -1, rotation: -4 });
            },
        });

        if (window.innerWidth <= 700) {
            mascot.to('#mascot-img', { x: window.innerHeight * 0.35 }, 0);
        } else mascot.to('#mascot-img', { x: window.innerHeight * 1.7 }, 0);

        //reset scrollbar position after refresh
        return function () {
            window.scrollTo(0, 0);
        };
    });
</script>

<svelte:window bind:scrollY />

<svg class="main1" width="100%" height="100%" style="position: fixed; z-index: -1">
    <defs>
        <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="25%" style="stop-color: rgb(0, 238, 255); stop-opacity: 0.1"></stop>
            <stop offset="99%" style="stop-color: rgb(255, 0, 255); stop-opacity: 0.2"></stop>
        </linearGradient>
    </defs>

    <rect class="m1Bg" fill="url(#grad2)" width="100%" height="100%"></rect>
</svg>

<!-- Mascot Scroll animation -->
<div>
    <div class="sideCompartment" style="--mt:{b}rem">
        <h1 class="glowDark">Sponsors</h1>
        <div class="content">
            <p class="txt">
                Over the past years Mood Indigo has had the privilege to have hosted a number of
                sponsors which provided a very entertaining experience to our visitors as well as
                the brand. The crowd engagement, media exposure, sampling and brand building
                opportunities offered at Mood Indigo are unparalleled.
                <br />
                Contact Us
                <br />
                Avishi Agarwal: 99103 11795
                <br />
                Dwij Kabra: 91688 77771
                <br />
                Priyanshu Jain: 94825 10272
            </p>
        </div>
    </div>
</div>

<main>
    <div id="mascot" class="mascot">
        <img id="mascot-img" src="/sponsors/mascot.png" alt="mascot" />
    </div>
    <!-- <h1 class="glow">Sponsors</h1> -->

    <div class="sponsorlist">
        <div class="marSpon padSpon alignSide">
            <!-- <p class="sponsorHead">Associate Sponsor</p>
    <p class="sponsorDetails">
      <i><strong>CODEVENTURE & LEARNPY </strong> is Powered By</i>
    </p>
    <div class="cage3">
      <div class="cage2">
        <div class="cage1 wbg">
          <img
            src="https://adhyaaya2021.netlify.app/images/sponsor/CODE_QUEST_LOGO.png"
            alt=""
            class="image"
          />
        </div>
      </div>
    </div>
  </div> -->

            <div class="marSpon padSpon alignSide">
                <p class="sponsorHead">Advising Partner</p>
                <p class="sponsorDetails"></p>
                <div class="cage3">
                    <div class="cage2">
                        <div class="cage1 wbg">
                            <a
                                href="https://www.time4education.com/landingpage_enquiry/nagpur1.html"
                                target="_blank"
                            >
                                <img src="/sponsors/time.jpg" alt="Time" class="image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="marSpon padSpon alignSide">
                <p class="sponsorHead">IT Partner</p>
                <div class="cage3">
                    <div class="cage2">
                        <div class="cage1 wbg">
                            <img src="/sponsors/Servicenet.jpg" alt="Servicenet" class="image" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="marSpon padSpon alignSide">
                <p class="sponsorHead">Resource Partner</p>
                <p class="sponsorDetails"></p>
                <div class="cage3">
                    <div class="cage2">
                        <div class="cage1 wbg">
                            <a sveltekit:prefetch href="https://www.upgrad.com/" target="_blank">
                                <img src="/sponsors/Upgrad.jpg" alt="Upgrad" class="image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="sponsorHead alignSide">Previous Sponsors</h1>

            <div class="PrevSpon marSpon padSpon alignSide">
                <div class="PrevElement">
                    <div class="cage3">
                        <div class="cage2">
                            <div class="cage1 wbg">
                                <img
                                    src="https://adhyaaya2021.netlify.app/images/sponsor/admireengg.jpg.png"
                                    alt=""
                                    class="image2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="PrevElement">
                    <div class="cage3">
                        <div class="cage2">
                            <div class="cage1 wbg">
                                <img
                                    src="https://adhyaaya2021.netlify.app/images/sponsor/toi.png"
                                    alt=""
                                    class="image2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="PrevElement">
                    <div class="cage3">
                        <div class="cage2">
                            <div class="cage1 wbg">
                                <img
                                    src="https://adhyaaya2021.netlify.app/images/sponsor/my_fm.png"
                                    alt=""
                                    class="image2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="PrevElement">
                    <div class="cage3">
                        <div class="cage2">
                            <div class="cage1 wbg">
                                <img
                                    src="https://adhyaaya2021.netlify.app/images/sponsor/helonagpur.png"
                                    alt=""
                                    class="image2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="PrevElement">
                    <div class="cage3">
                        <div class="cage2">
                            <div class="cage1 wbg">
                                <img
                                    src="https://adhyaaya2021.netlify.app/images/sponsor/cafetemp.png"
                                    alt=""
                                    class="image2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="PrevElement">
                    <div class="cage3">
                        <div class="cage2">
                            <div class="cage1 wbg">
                                <img
                                    src="https://adhyaaya2021.netlify.app/images/sponsor/infigon.png"
                                    alt=""
                                    class="image2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="PrevElement">
                    <div class="cage3">
                        <div class="cage2">
                            <div class="cage1 wbg">
                                <img
                                    src="https://adhyaaya2021.netlify.app/images/sponsor/sponsorbull.png"
                                    alt=""
                                    class="image2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="PrevElement">
                    <div class="cage3">
                        <div class="cage2">
                            <div class="cage1 wbg">
                                <img
                                    src="https://adhyaaya2021.netlify.app/images/sponsor/cb_grey.png"
                                    alt=""
                                    class="image2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="PrevElement">
                    <div class="cage3">
                        <div class="cage2">
                            <div class="cage1 dbg">
                                <img
                                    src="https://adhyaaya2021.netlify.app/images/sponsor/score.png"
                                    alt=""
                                    class="image2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    :global {
        body,
        html {
            margin: 0;
            padding: 0;
            height: 100%;
        }

        html {
            scroll-behavior: smooth;
            cursor: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='24px' height='24px' viewBox='0 0 512 512' style='enable-background:new 0 0 512.011 512.011;' xml:space='preserve'%3E %3Cpath fill='DeepSkyBlue' d='M434.215,344.467L92.881,3.134c-4.16-4.171-10.914-4.179-15.085-0.019  c-2.011,2.006-3.139,4.731-3.134,7.571v490.667c0.003,4.382,2.685,8.316,6.763,9.92c4.081,1.603,8.727,0.545,11.712-2.667  l135.509-145.92h198.016c5.891,0.011,10.675-4.757,10.686-10.648C437.353,349.198,436.226,346.473,434.215,344.467z'/%3E %3C/svg%3E"),
                pointer;
        }

        body {
            /*background: #000;*/
            background-size: cover;
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-position: center;
            overflow-x: hidden;
        }
        /* TODO: Fix this in prod */
        nav .tw-absolute {
            position: sticky;
        }

        /****** Scroll Bar ******/
        ::-webkit-scrollbar-track {
            background-color: #f5f5f5;
        }

        ::-webkit-scrollbar {
            width: 6px;
            background-color: #f5f5f5;
        }

        ::-webkit-scrollbar-thumb {
            background-color: rgb(252, 66, 190);
        }
        /****** Scroll Bar END ******/
    }

    /********* Mascot Movement on Scroll *********/

    .mascot {
        position: absolute;
        height: 9000px;
        width: 100px;
        top: 0;
        z-index: 4;
    }

    .mascot img {
        bottom: 10px;
        width: 200px;
        display: block;
        position: fixed;
        z-index: 4;
    }
    /********* Mascot Movement on Scroll END *********/

    .marSpon {
        /* CHANGES
        margin-top: 2.813rem; */
        margin-bottom: 2.813rem;
    }

    .padSpon {
        padding-top: 2.813rem;
        padding-bottom: 2.813rem;
    }

    /********* Glow on "sponsrors" Title *********/
    .glow {
        font-size: 40px;
        font-family: revampedregular;
        color: #fff;
        text-align: center;
        animation: glow 1s ease-in-out infinite alternate;
        animation: glow 1s ease-in-out infinite alternate;
        animation: glow 1s ease-in-out infinite alternate;
    }

    @keyframes glow {
        from {
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073,
                0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
        }
        to {
            text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6,
                0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
        }
    }
    /********* Glow on "sponsrors" Title  END *********/

    .sponsorlist {
        text-align: center;
        width: 100%;
        padding-right: var(--bs-gutter-x, 12px);
        padding-left: var(--bs-gutter-x, 12px);
        margin-right: auto;
        margin-left: auto;
    }

    .sponsorHead {
        font-size: 3.7rem;
        color: #fff;
        font-family: Nato;
    }

    .sponsorDetails {
        margin-top: 25px;
        color: #fff;
        font-size: 1.7rem;
    }

    .icon {
        align-items: center;
        margin: auto;
        height: 250px;
        width: 350px;
        background-color: white;
        justify-content: center;
        display: flex;
    }

    .image {
        max-width: 100%;
        height: fit-content;
        margin: 2px;
    }

    .image2 {
        max-width: 100%;
        height: fit-content;
        margin: 2px;
    }

    .txt {
        font-size: 1.2rem;
        color: #fff;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        text-align: left;
        padding: 3px;
    }

    .cage3 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .cage2 {
        margin-top: 25px;
        margin-bottom: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 auto;
    }

    .cage1 {
        padding: 16px;
        width: 350px;
        height: auto;
        min-height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }

    .wbg {
        background-color: rgba(255, 255, 255, 0.952);
        min-height: 250px;
        max-height: 400px;
        height: auto;
        transition: all 0.3s;
    }

    .wbg:hover {
        background-color: rgb(255, 255, 255);
        box-shadow: 0 0 50px #402cf8;
    }

    .dbg {
        background-color: rgba(9, 7, 44, 0.945);
        min-height: 250px;
        height: auto;
        transition: all 0.3s;
    }

    .dbg:hover {
        background-color: rgb(5, 4, 27);
        box-shadow: 0 0 50px #402cf8;
    }

    .sideCompartment {
        width: 18.5rem;
        position: fixed;
        top: var(--mt, 6rem);
        //top: 5.299999999999997rem;
        background-image: linear-gradient(rgba(15, 15, 15, 0.795), rgba(48, 23, 56, 0.808));
        width: 33rem;
        height: 100%;
    }

    .content {
        justify-content: center;
        text-align: center;
        font: 2.3rem;
        color: #f5f5f5;
        padding: 0.75rem;
    }

    .alignSide {
        margin-left: 15rem;
    }

    .glowDark {
        font-size: 40px;
        font-family: revampedregular;
        color: #fff;
        text-align: center;
        animation: glowDark 1s ease-in-out infinite alternate;
        animation: glowDark 1s ease-in-out infinite alternate;
        animation: glowDark 1s ease-in-out infinite alternate;
    }

    @keyframes glowDark {
        from {
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0400e6, 0 0 40px #0400e6,
                0 0 50px #0400e6, 0 0 60px #0400e6, 0 0 70px #0400e6;
        }
        to {
            text-shadow: 0 0 20px #fff, 0 0 30px #0051e6, 0 0 40px #0051e6, 0 0 50px #0051e6,
                0 0 60px #0051e6, 0 0 70px #0051e6, 0 0 80px #0051e6;
        }
    }

    @media screen and (max-width: 700px) {
        :global body {
            background: url ('/sponsors/bg3.png');
            background-size: cover;
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-position: center;
            overflow-x: hidden;
        }
        .mascot img {
            bottom: 0.85rem;
            width: 140px;
            display: block;
            position: fixed;
            z-index: 4;
        }

        .centeralign {
            justify-content: center;
            align-items: center;
        }

        .sideCompartment {
            height: fit-content;
            width: 100%;
            position: relative;
            display: block;
            background-color: rgba(13, 9, 58, 0.918);
            justify-content: stretch;
        }

        .alignSide {
            margin-left: 0rem;
        }
    }

    .PrevSpon {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .PrevSpon > * {
        flex: 1 1 23rem;
    }

    .PrevElement {
        padding: 2rem;
    }
</style>
