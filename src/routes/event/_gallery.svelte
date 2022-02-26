<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin.js';
    onMount(() => {
        var currentImg = undefined,
            currentImgProps = { x: 0, y: 0 },
            isZooming = false,
            column = -1,
            mouse = { x: 0, y: 0 },
            delayedPlay;

        for (var i = 0; i < 12; i++) {
            if (i % 4 == 0) column++;
            // Adhyaaya'21
            var b = document.createElement('div');
            document.querySelector('.mainBoxes').append(b);

            gsap.set(b, {
                attr: { id: 'b' + i, class: 'photoBox pb-col' + column },
                backgroundImage: 'url(/images/' + i + '.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                x: [60, 280, 500][column],
                width: 400,
                height: 640,
                borderRadius: 20,
                scale: 0.5,
                zIndex: 1,
            });

            b.tl = gsap
                .timeline({ paused: true, repeat: -1 })
                .fromTo(
                    b,
                    { y: [-575, 800, 800][column], rotation: -0.05 },
                    {
                        duration: [40, 35, 26][column],
                        y: [800, -575, -575][column],
                        rotation: 0.05,
                        ease: 'none',
                    },
                )
                .progress((i % 4) / 4);

            // Adhyaaya'20
            var b = document.createElement('div');
            document.querySelector('.mainBoxes2').append(b);

            gsap.set(b, {
                attr: { id: 'b' + i, class: 'photoBox pb-col' + column },
                backgroundImage: 'url(/images/' + i + '.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                x: [60, 280, 500][column],
                width: 400,
                height: 640,
                borderRadius: 20,
                scale: 0.5,
                zIndex: 1,
            });

            b.tl = gsap
                .timeline({ paused: true, repeat: -1 })
                .fromTo(
                    b,
                    { y: [-575, 800, 800][column], rotation: -0.05 },
                    {
                        duration: [40, 35, 26][column],
                        y: [800, -575, -575][column],
                        rotation: 0.05,
                        ease: 'none',
                    },
                )
                .progress((i % 4) / 4);

            // Adhyaaya'19
            var b = document.createElement('div');
            document.querySelector('.mainBoxes3').append(b);

            gsap.set(b, {
                attr: { id: 'b' + i, class: 'photoBox pb-col' + column },
                backgroundImage: 'url(/images/' + i + '.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                x: [60, 280, 500][column],
                width: 400,
                height: 640,
                borderRadius: 20,
                scale: 0.5,
                zIndex: 1,
            });

            b.tl = gsap
                .timeline({ paused: true, repeat: -1 })
                .fromTo(
                    b,
                    { y: [-575, 800, 800][column], rotation: -0.05 },
                    {
                        duration: [40, 35, 26][column],
                        y: [800, -575, -575][column],
                        rotation: 0.05,
                        ease: 'none',
                    },
                )
                .progress((i % 4) / 4);

            // Adhyaaya'18
            var b = document.createElement('div');
            document.querySelector('.mainBoxes4').append(b);

            gsap.set(b, {
                attr: { id: 'b' + i, class: 'photoBox pb-col' + column },
                backgroundImage: 'url(/images/' + i + '.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                x: [60, 280, 500][column],
                width: 400,
                height: 640,
                borderRadius: 20,
                scale: 0.5,
                zIndex: 1,
            });

            b.tl = gsap
                .timeline({ paused: true, repeat: -1 })
                .fromTo(
                    b,
                    { y: [-575, 800, 800][column], rotation: -0.05 },
                    {
                        duration: [40, 35, 26][column],
                        y: [800, -575, -575][column],
                        rotation: 0.05,
                        ease: 'none',
                    },
                )
                .progress((i % 4) / 4);
        }

        function pauseBoxes(b) {
            var classStr = 'pb-col0';
            if (b.classList.contains('pb-col1')) classStr = 'pb-col1';
            if (b.classList.contains('pb-col2')) classStr = 'pb-col2';
            for (var i = 0; i < document.querySelector('.mainBoxes').childNodes.length; i++) {
                var b = document.querySelector('.mainBoxes').childNodes[i];
                if (b.classList.contains(classStr)) gsap.to(b.tl, { timeScale: 0, ease: 'sine' });
            }
            for (var i = 0; i < document.querySelector('.mainBoxes2').childNodes.length; i++) {
                var b = document.querySelector('.mainBoxes2').childNodes[i];
                if (b.classList.contains(classStr)) gsap.to(b.tl, { timeScale: 0, ease: 'sine' });
            }
            for (var i = 0; i < document.querySelector('.mainBoxes3').childNodes.length; i++) {
                var b = document.querySelector('.mainBoxes3').childNodes[i];
                if (b.classList.contains(classStr)) gsap.to(b.tl, { timeScale: 0, ease: 'sine' });
            }
            for (var i = 0; i < document.querySelector('.mainBoxes4').childNodes.length; i++) {
                var b = document.querySelector('.mainBoxes4').childNodes[i];
                if (b.classList.contains(classStr)) gsap.to(b.tl, { timeScale: 0, ease: 'sine' });
            }
        }

        function playBoxes() {
            for (var i = 0; i < document.querySelector('.mainBoxes').childNodes.length; i++) {
                var tl = document.querySelector('.mainBoxes').childNodes[i].tl;
                tl.play();
                gsap.to(tl, {
                    duration: 0.4,
                    timeScale: 1,
                    ease: 'sine.in',
                    overwrite: true,
                });
            }

            for (var i = 0; i < document.querySelector('.mainBoxes2').childNodes.length; i++) {
                var tl = document.querySelector('.mainBoxes2').childNodes[i].tl;
                tl.play();
                gsap.to(tl, {
                    duration: 0.4,
                    timeScale: 1,
                    ease: 'sine.in',
                    overwrite: true,
                });
            }
            for (var i = 0; i < document.querySelector('.mainBoxes3').childNodes.length; i++) {
                var tl = document.querySelector('.mainBoxes3').childNodes[i].tl;
                tl.play();
                gsap.to(tl, {
                    duration: 0.4,
                    timeScale: 1,
                    ease: 'sine.in',
                    overwrite: true,
                });
            }
            for (var i = 0; i < document.querySelector('.mainBoxes4').childNodes.length; i++) {
                var tl = document.querySelector('.mainBoxes4').childNodes[i].tl;
                tl.play();
                gsap.to(tl, {
                    duration: 0.4,
                    timeScale: 1,
                    ease: 'sine.in',
                    overwrite: true,
                });
            }
        }

        const start_anims = function () {
            var _tl = gsap
                .timeline({ onStart: playBoxes })
                .set('.main', { perspective: 800 })
                .set('.main2', { perspective: 800 })
                .set('.main3', { perspective: 800 })
                .set('.main4', { perspective: 800 })

                .set('.photoBox', { opacity: 1, cursor: 'pointer' })
                .set('.mainBoxes', {
                    left: '75%',
                    xPercent: -50,
                    width: 1200,
                    rotationX: 14,
                    rotationY: -15,
                    rotationZ: 10,
                })
                .set('.mainBoxes2', {
                    left: '40%',
                    xPercent: -50,
                    width: 1200,
                    rotationX: 14,
                    rotationY: 15,
                    rotationZ: -10,
                })
                .set('.mainBoxes3', {
                    left: '75%',
                    xPercent: -50,
                    width: 1200,
                    rotationX: 14,
                    rotationY: -15,
                    rotationZ: 10,
                })
                .set('.mainBoxes4', {
                    left: '40%',
                    xPercent: -50,
                    width: 1200,
                    rotationX: 14,
                    rotationY: 15,
                    rotationZ: -10,
                })
                .set('.mainClose', {
                    autoAlpha: 0,
                    width: 60,
                    height: 60,
                    left: -30,
                    top: -31,
                    pointerEvents: 'none',
                })
                .fromTo(
                    '.main',
                    { autoAlpha: 0 },
                    { duration: 0.6, ease: 'power2.inOut', autoAlpha: 1 },
                    0.2,
                )
                .fromTo(
                    '.main2',
                    { autoAlpha: 0 },
                    { duration: 0.6, ease: 'power2.inOut', autoAlpha: 1 },
                    0.2,
                )
                .fromTo(
                    '.main3',
                    { autoAlpha: 0 },
                    { duration: 0.6, ease: 'power2.inOut', autoAlpha: 1 },
                    0.2,
                )
                .fromTo(
                    '.main4',
                    { autoAlpha: 0 },
                    { duration: 0.6, ease: 'power2.inOut', autoAlpha: 1 },
                    0.2,
                );

            document.querySelector('.photoBox').addEventListener('mouseenter', function (e) {
                console.log(e.target.classList.contains('pb-col0'));
                if (currentImg) return;
                if (delayedPlay) delayedPlay.kill();
                pauseBoxes(e.currentTarget);
                var _t = e.currentTarget;
                gsap.to('.photoBox', {
                    duration: 0.2,
                    overwrite: 'auto',
                    opacity: function (i, t) {
                        return t == _t ? 1 : 0.33;
                    },
                });
                gsap.fromTo(
                    _t,
                    { zIndex: 100 },
                    { duration: 0.2, scale: 0.62, overwrite: 'auto', ease: 'power3' },
                );
            });

            document.querySelector('.photoBox').addEventListener('mouseleave', function (e) {
                if (currentImg) return;
                var _t = e.currentTarget;

                if (gsap.getProperty(_t, 'scale') > 0.62)
                    delayedPlay = gsap.delayedCall(0.3, playBoxes);
                // to avoid jump, add delay when mouseout occurs as big image scales back down (not 100% reliable because the scale value sometimes evaluates too late)
                else playBoxes();

                gsap.timeline()
                    .set(_t, { zIndex: 1 })
                    .to(_t, { duration: 0.3, scale: 0.5, overwrite: 'auto', ease: 'expo' }, 0)
                    .to('.photoBox', { duration: 0.5, opacity: 1, ease: 'power2.inOut' }, 0);
            });

            document.querySelector('.photoBox').addEventListener('click', function (e) {
                if (window.innerWidth <= 700) {
                    if (!isZooming) {
                        //only tween if photoBox isn't currently zooming

                        isZooming = true;
                        gsap.delayedCall(0.8, function () {
                            isZooming = false;
                        });

                        if (currentImg) {
                            gsap.timeline({ defaults: { ease: 'expo.inOut' } })
                                .to(
                                    '.mainClose',
                                    { duration: 0.1, autoAlpha: 0, overwrite: true },
                                    0,
                                )
                                .to(
                                    '.mainBoxes',
                                    {
                                        duration: 0.5,
                                        scale: 1,
                                        left: '75%',
                                        width: 1200,
                                        rotationX: 14,
                                        rotationY: -15,
                                        rotationZ: 10,
                                        overwrite: true,
                                    },
                                    0,
                                )
                                .to(
                                    '.mainBoxes2',
                                    {
                                        duration: 0.5,
                                        scale: 1,
                                        left: '40%',
                                        width: 1200,
                                        rotationX: 14,
                                        rotationY: 15,
                                        rotationZ: -10,
                                        overwrite: true,
                                    },
                                    0,
                                )
                                .to(
                                    '.mainBoxes3',
                                    {
                                        duration: 0.5,
                                        scale: 1,
                                        left: '75%',
                                        width: 1200,
                                        rotationX: 14,
                                        rotationY: -15,
                                        rotationZ: 10,
                                        overwrite: true,
                                    },
                                    0,
                                )
                                .to(
                                    '.mainBoxes4',
                                    {
                                        duration: 0.5,
                                        scale: 1,
                                        left: '40%',
                                        width: 1200,
                                        rotationX: 14,
                                        rotationY: 15,
                                        rotationZ: -10,
                                        overwrite: true,
                                    },
                                    0,
                                )
                                .to(
                                    '.photoBox',
                                    { duration: 0.6, opacity: 1, ease: 'power4.inOut' },
                                    0,
                                )
                                .to(
                                    currentImg,
                                    {
                                        duration: 0.6,
                                        width: 400,
                                        height: 640,
                                        borderRadius: 20,
                                        x: currentImgProps.x,
                                        y: currentImgProps.y,
                                        scale: 0.5,
                                        rotation: 0,
                                        zIndex: 1,
                                    },
                                    0,
                                );
                            // .add(playBoxes, 0.8)
                            currentImg = undefined;
                        } else {
                            pauseBoxes(e.currentTarget);

                            currentImg = e.currentTarget;
                            currentImgProps.x = gsap.getProperty(currentImg, 'x');
                            currentImgProps.y = gsap.getProperty(currentImg, 'y');

                            gsap.timeline({ defaults: { duration: 0.6, ease: 'expo.inOut' } })
                                .set(currentImg, { zIndex: 100 })
                                .fromTo(
                                    '.mainClose',
                                    { x: mouse.x, y: mouse.y, background: 'rgba(0,0,0,0)' },
                                    { autoAlpha: 1, duration: 0.3, ease: 'power3.inOut' },
                                    0,
                                )
                                .to('.photoBox', { opacity: 0 }, 0)
                                .to(
                                    currentImg,
                                    {
                                        width: '100%',
                                        height: '300px',
                                        borderRadius: 0,
                                        x: 0,
                                        top: 0,
                                        y: 0,
                                        scale: 1,
                                        opacity: 1,
                                    },
                                    0,
                                )
                                .to(
                                    '.mainBoxes',
                                    {
                                        duration: 0.5,
                                        left: '50%',
                                        width: '100%',
                                        rotationX: 0,
                                        rotationY: 0,
                                        rotationZ: 0,
                                    },
                                    0.15,
                                )
                                .to(
                                    '.mainBoxes2',
                                    {
                                        duration: 0.5,
                                        left: '50%',
                                        width: '100%',
                                        rotationX: 0,
                                        rotationY: 0,
                                        rotationZ: 0,
                                    },
                                    0.15,
                                )
                                .to(
                                    '.mainBoxes3',
                                    {
                                        duration: 0.5,
                                        left: '50%',
                                        width: '100%',
                                        rotationX: 0,
                                        rotationY: 0,
                                        rotationZ: 0,
                                    },
                                    0.15,
                                )
                                .to(
                                    '.mainBoxes4',
                                    {
                                        duration: 0.5,
                                        left: '50%',
                                        width: '100%',
                                        rotationX: 0,
                                        rotationY: 0,
                                        rotationZ: 0,
                                    },
                                    0.15,
                                )
                                .to(
                                    '.mainBoxes',
                                    { duration: 5, scale: 1.06, rotation: 0.05, ease: 'none' },
                                    0.65,
                                )
                                .to(
                                    '.mainBoxes2',
                                    { duration: 5, scale: 1.06, rotation: 0.05, ease: 'none' },
                                    0.65,
                                )
                                .to(
                                    '.mainBoxes3',
                                    { duration: 5, scale: 1.06, rotation: 0.05, ease: 'none' },
                                    0.65,
                                )
                                .to(
                                    '.mainBoxes4',
                                    { duration: 5, scale: 1.06, rotation: 0.05, ease: 'none' },
                                    0.65,
                                );
                        }
                    }
                } else {
                    if (!isZooming) {
                        //only tween if photoBox isn't currently zooming

                        isZooming = true;
                        gsap.delayedCall(0.8, function () {
                            isZooming = false;
                        });

                        if (currentImg) {
                            gsap.timeline({ defaults: { ease: 'expo.inOut' } })
                                .to(
                                    '.mainClose',
                                    { duration: 0.1, autoAlpha: 0, overwrite: true },
                                    0,
                                )
                                .to(
                                    '.mainBoxes',
                                    {
                                        duration: 0.5,
                                        scale: 1,
                                        left: '75%',
                                        width: 1200,
                                        rotationX: 14,
                                        rotationY: -15,
                                        rotationZ: 10,
                                        overwrite: true,
                                    },
                                    0,
                                )
                                .to(
                                    '.mainBoxes2',
                                    {
                                        duration: 0.5,
                                        scale: 1,
                                        left: '40%',
                                        width: 1200,
                                        rotationX: 14,
                                        rotationY: 15,
                                        rotationZ: -10,
                                        overwrite: true,
                                    },
                                    0,
                                )
                                .to(
                                    '.mainBoxes3',
                                    {
                                        duration: 0.5,
                                        scale: 1,
                                        left: '75%',
                                        width: 1200,
                                        rotationX: 14,
                                        rotationY: -15,
                                        rotationZ: 10,
                                        overwrite: true,
                                    },
                                    0,
                                )
                                .to(
                                    '.mainBoxes4',
                                    {
                                        duration: 0.5,
                                        scale: 1,
                                        left: '40%',
                                        width: 1200,
                                        rotationX: 14,
                                        rotationY: 15,
                                        rotationZ: -10,
                                        overwrite: true,
                                    },
                                    0,
                                )
                                .to(
                                    '.photoBox',
                                    { duration: 0.6, opacity: 1, ease: 'power4.inOut' },
                                    0,
                                )
                                .to(
                                    currentImg,
                                    {
                                        duration: 0.6,
                                        width: 400,
                                        height: 640,
                                        borderRadius: 20,
                                        x: currentImgProps.x,
                                        y: currentImgProps.y,
                                        scale: 0.5,
                                        rotation: 0,
                                        zIndex: 1,
                                    },
                                    0,
                                );
                            // .add(playBoxes, 0.8)
                            currentImg = undefined;
                        } else {
                            pauseBoxes(e.currentTarget);

                            currentImg = e.currentTarget;
                            currentImgProps.x = gsap.getProperty(currentImg, 'x');
                            currentImgProps.y = gsap.getProperty(currentImg, 'y');

                            gsap.timeline({ defaults: { duration: 0.6, ease: 'expo.inOut' } })
                                .set(currentImg, { zIndex: 100 })
                                .fromTo(
                                    '.mainClose',
                                    { x: mouse.x, y: mouse.y, background: 'rgba(0,0,0,0)' },
                                    { autoAlpha: 1, duration: 0.3, ease: 'power3.inOut' },
                                    0,
                                )
                                .to('.photoBox', { opacity: 0 }, 0)
                                .to(
                                    currentImg,
                                    {
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 0,
                                        x: 0,
                                        top: 0,
                                        y: 0,
                                        scale: 1,
                                        opacity: 1,
                                    },
                                    0,
                                )
                                .to(
                                    '.mainBoxes',
                                    {
                                        duration: 0.5,
                                        left: '50%',
                                        width: '100%',
                                        rotationX: 0,
                                        rotationY: 0,
                                        rotationZ: 0,
                                    },
                                    0.15,
                                )
                                .to(
                                    '.mainBoxes2',
                                    {
                                        duration: 0.5,
                                        left: '50%',
                                        width: '100%',
                                        rotationX: 0,
                                        rotationY: 0,
                                        rotationZ: 0,
                                    },
                                    0.15,
                                )
                                .to(
                                    '.mainBoxes3',
                                    {
                                        duration: 0.5,
                                        left: '50%',
                                        width: '100%',
                                        rotationX: 0,
                                        rotationY: 0,
                                        rotationZ: 0,
                                    },
                                    0.15,
                                )
                                .to(
                                    '.mainBoxes4',
                                    {
                                        duration: 0.5,
                                        left: '50%',
                                        width: '100%',
                                        rotationX: 0,
                                        rotationY: 0,
                                        rotationZ: 0,
                                    },
                                    0.15,
                                )
                                .to(
                                    '.mainBoxes',
                                    { duration: 5, scale: 1.06, rotation: 0.05, ease: 'none' },
                                    0.65,
                                )
                                .to(
                                    '.mainBoxes2',
                                    { duration: 5, scale: 1.06, rotation: 0.05, ease: 'none' },
                                    0.65,
                                )
                                .to(
                                    '.mainBoxes3',
                                    { duration: 5, scale: 1.06, rotation: 0.05, ease: 'none' },
                                    0.65,
                                )
                                .to(
                                    '.mainBoxes4',
                                    { duration: 5, scale: 1.06, rotation: 0.05, ease: 'none' },
                                    0.65,
                                );
                        }
                    }
                }
            });

            if (!!('ontouchstart' in window)) {
                console.log('touch device!');
                mouse.x = window.innerWidth - 50;
                mouse.y = 60;
            } else {
                document.querySelector('.main').addEventListener('mousemove', function (e) {
                    mouse.x = e.x;
                    mouse.y = e.layerY;
                    if (currentImg)
                        gsap.to('.mainClose', {
                            duration: 0.1,
                            x: mouse.x,
                            y: mouse.y,
                            overwrite: 'auto',
                        });
                });
                document.querySelector('.main2').addEventListener('mousemove', function (e) {
                    mouse.x = e.x;
                    mouse.y = e.layerY;
                    if (currentImg)
                        gsap.to('.mainClose', {
                            duration: 0.1,
                            x: mouse.x,
                            y: mouse.y,
                            overwrite: 'auto',
                        });
                });
                document.querySelector('.main3').addEventListener('mousemove', function (e) {
                    mouse.x = e.x;
                    mouse.y = e.layerY;
                    if (currentImg)
                        gsap.to('.mainClose', {
                            duration: 0.1,
                            x: mouse.x,
                            y: mouse.y,
                            overwrite: 'auto',
                        });
                });
                document.querySelector('.main4').addEventListener('mousemove', function (e) {
                    mouse.x = e.x;
                    mouse.y = e.layerY;
                    if (currentImg)
                        gsap.to('.mainClose', {
                            duration: 0.1,
                            x: mouse.x,
                            y: mouse.y,
                            overwrite: 'auto',
                        });
                });
            }
        };
        start_anims();
    });
</script>

<section class="page">
    <h1 class="head-1">Memories</h1>
    <p class="head-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis accusamus
        corporis est. Recusandae blanditiis sit sunt earum porro ad? Mollitia aspernatur
        necessitatibus ut ea natus velit dolor temporibus quaerat. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ex fugit laborum perspiciatis fuga, architecto alias placeat
        maiores, saepe tempore exercitationem cumque debitis quod? Explicabo iure veniam maiores
        quae, ad eius.
    </p>
    <div class="card-container">
        <a href="#main4">
            <div
                class="card"
                style="
            --image: url('/images/2018-cover.jfif');
            --angle: -5deg;
            --x: 5%;
            --y: 15%;
            --caption: 'Adhyaaya, 2018';
          "
            ></div>
        </a>

        <a href="#main3">
            <div
                class="card"
                style="
            --image: url('/images/2019-cover.jpg');
            --angle: -1deg;
            --x: -10%;
            --y: -20%;
            --caption: 'Adhyaaya, 2019';
          "
            ></div>
        </a>

        <a href="#main2">
            <div
                class="card"
                style="
            --image: url('/images/2020-cover.jfif');
            --angle: -4deg;
            --x: -20%;
            --y: 5%;
            --caption: 'Adhyaaya, 2020';
          "
            ></div>
        </a>

        <a href="#main">
            <div
                class="card"
                style="
            --image: url('/images/2021-cover.jpeg');
            --angle: 7deg;
            --x: 10%;
            --y: -7%;
            --caption: 'Adhyaaya, 2021';
          "
            ></div>
        </a>
    </div>
    <div class="all-buttons">
        <a href="#main">
            <button class="cybr-btn">
                2021
                <span aria-hidden>_</span>
                <span aria-hidden class="cybr-btn__glitch">2021_</span>
                <span aria-hidden class="cybr-btn__tag">R25</span>
            </button>
        </a>
        <a href="#main2">
            <button class="cybr-btn">
                2020
                <span aria-hidden>_</span>
                <span aria-hidden class="cybr-btn__glitch">2020_</span>
                <span aria-hidden class="cybr-btn__tag">R25</span>
            </button>
        </a>
        <a href="#main3">
            <button class="cybr-btn">
                2019
                <span aria-hidden>_</span>
                <span aria-hidden class="cybr-btn__glitch">2019_</span>
                <span aria-hidden class="cybr-btn__tag">R25</span>
            </button>
        </a>
        <a href="#main4">
            <button class="cybr-btn">
                2018
                <span aria-hidden>_</span>
                <span aria-hidden class="cybr-btn__glitch">2018_</span>
                <span aria-hidden class="cybr-btn__tag">R25</span>
            </button>
        </a>
    </div>
    <!-- SVG CODE for background -->
    <svg class="main1" width="100%" height="100%">
        <defs>
            <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="25%" style="stop-color: rgb(0, 238, 255); stop-opacity: 0.1"></stop>
                <stop offset="99%" style="stop-color: rgb(255, 0, 255); stop-opacity: 0.2"></stop>
            </linearGradient>
        </defs>

        <rect class="m1Bg" fill="url(#grad2)" width="100%" height="100%"></rect>
    </svg>

    <div class="scrolldown">
        <div class="chevrons">
            <div class="chevrondown"></div>
            <div class="chevrondown"></div>
        </div>
    </div>
</section>

<!-- Adhyaaya'21 -->
<section class="page" id="sec1">
    <div class="main" id="main">
        <h1>Adhyaaya'21</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis accusamus
            corporis est. Recusandae blanditiis sit sunt earum porro ad? Mollitia aspernatur
            necessitatibus ut ea natus velit dolor temporibus quaerat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ex fugit laborum perspiciatis fuga, architecto alias
            placeat maiores, saepe tempore exercitationem cumque debitis quod? Explicabo iure veniam
            maiores quae, ad eius.
        </p>
        <img src="/images/mascot3.png" alt="mascot-ASU" />
        <div class="mainBoxes fs"></div>
        <div class="mainClose">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                fill="none"
            >
                <circle cx="30" cy="30" r="30" fill="#000" opacity="0.4"></circle>
                <path
                    d="M15,16L45,46 M45,16L15,46"
                    stroke="#000"
                    stroke-width="3.5"
                    opacity="0.5"
                ></path>
                <path d="M15,15L45,45 M45,15L15,45" stroke="#fff" stroke-width="2"></path>
            </svg>
        </div>
        <!-- SVG CODE for background -->
        <svg class="main1" width="100%" height="100%">
            <defs>
                <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop
                        offset="25%"
                        style="stop-color: rgb(0, 238, 255); stop-opacity: 0.1"
                    ></stop>
                    <stop
                        offset="99%"
                        style="stop-color: rgb(255, 0, 255); stop-opacity: 0.2"
                    ></stop>
                </linearGradient>
            </defs>

            <rect class="m1Bg" fill="url(#grad2)" width="100%" height="100%"></rect>
        </svg>
    </div>
</section>

<!-- Adhyaaya'20 -->
<section class="page" id="sec2">
    <div class="main2" id="main2">
        <h1>Adhyaaya'20</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis accusamus
            corporis est. Recusandae blanditiis sit sunt earum porro ad? Mollitia aspernatur
            necessitatibus ut ea natus velit dolor temporibus quaerat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ex fugit laborum perspiciatis fuga, architecto alias
            placeat maiores, saepe tempore exercitationem cumque debitis quod? Explicabo iure veniam
            maiores quae, ad eius.
        </p>
        <img src="/images/mascot3.png" alt="mascot-ASU" />
        <div class="mainBoxes2 fs"></div>
        <div class="mainClose">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                fill="none"
            >
                <circle cx="30" cy="30" r="30" fill="#000" opacity="0.4"></circle>
                <path
                    d="M15,16L45,46 M45,16L15,46"
                    stroke="#000"
                    stroke-width="3.5"
                    opacity="0.5"
                ></path>
                <path d="M15,15L45,45 M45,15L15,45" stroke="#fff" stroke-width="2"></path>
            </svg>
        </div>
        <!-- SVG CODE for background -->
        <svg width="100%" height="100%">
            <defs>
                <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop
                        offset="25%"
                        style="stop-color: rgb(0, 238, 255); stop-opacity: 0.1"
                    ></stop>
                    <stop
                        offset="99%"
                        style="stop-color: rgb(255, 0, 255); stop-opacity: 0.2"
                    ></stop>
                </linearGradient>
            </defs>

            <rect class="m1Bg" fill="url(#grad2)" width="100%" height="100%"></rect>
        </svg>
    </div>
</section>

<!-- Adhyaaya'19 -->
<section class="page" id="sec3">
    <div class="main3" id="main3">
        <h1>Adhyaaya'19</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis accusamus
            corporis est. Recusandae blanditiis sit sunt earum porro ad? Mollitia aspernatur
            necessitatibus ut ea natus velit dolor temporibus quaerat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ex fugit laborum perspiciatis fuga, architecto alias
            placeat maiores, saepe tempore exercitationem cumque debitis quod? Explicabo iure veniam
            maiores quae, ad eius.
        </p>
        <img src="/images/mascot3.png" alt="mascot-ASU" />
        <div class="mainBoxes3 fs"></div>
        <div class="mainClose">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                fill="none"
            >
                <circle cx="30" cy="30" r="30" fill="#000" opacity="0.4"></circle>
                <path
                    d="M15,16L45,46 M45,16L15,46"
                    stroke="#000"
                    stroke-width="3.5"
                    opacity="0.5"
                ></path>
                <path d="M15,15L45,45 M45,15L15,45" stroke="#fff" stroke-width="2"></path>
            </svg>
        </div>
        <!-- SVG CODE for background -->
        <svg width="100%" height="100%">
            <defs>
                <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop
                        offset="25%"
                        style="stop-color: rgb(0, 238, 255); stop-opacity: 0.1"
                    ></stop>
                    <stop
                        offset="99%"
                        style="stop-color: rgb(255, 0, 255); stop-opacity: 0.2"
                    ></stop>
                </linearGradient>
            </defs>

            <rect class="m1Bg" fill="url(#grad2)" width="100%" height="100%"></rect>
        </svg>
    </div>
</section>

<!-- Adhyaaya'18 -->
<section class="page" id="sec4 ">
    <div class="main4" id="main4">
        <h1>Adhyaaya'18</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis accusamus
            corporis est. Recusandae blanditiis sit sunt earum porro ad? Mollitia aspernatur
            necessitatibus ut ea natus velit dolor temporibus quaerat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ex fugit laborum perspiciatis fuga, architecto alias
            placeat maiores, saepe tempore exercitationem cumque debitis quod? Explicabo iure veniam
            maiores quae, ad eius.
        </p>
        <img src="/images/mascot3.png" alt="mascot-ASU" />
        <div class="mainBoxes4 fs"></div>
        <div class="mainClose">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                fill="none"
            >
                <circle cx="30" cy="30" r="30" fill="#000" opacity="0.4"></circle>
                <path
                    d="M15,16L45,46 M45,16L15,46"
                    stroke="#000"
                    stroke-width="3.5"
                    opacity="0.5"
                ></path>
                <path d="M15,15L45,45 M45,15L15,45" stroke="#fff" stroke-width="2"></path>
            </svg>
        </div>
        <!-- SVG CODE for background -->
        <svg width="100%" height="100%">
            <defs>
                <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop
                        offset="25%"
                        style="stop-color: rgb(0, 238, 255); stop-opacity: 0.1"
                    ></stop>
                    <stop
                        offset="99%"
                        style="stop-color: rgb(255, 0, 255); stop-opacity: 0.2"
                    ></stop>
                </linearGradient>
            </defs>

            <rect class="m1Bg" fill="url(#grad2)" width="100%" height="100%"></rect>
        </svg>
    </div>
</section>

<style>
    :global {
        * {
            box-sizing: border-box;
            margin: 0px;
            padding: 0;
            margin: 0;
        }
        body {
            background: #000;
            background-size: cover;
            overflow-x: hidden;
            width: 100%;
            height: 100vh;
        }
        html {
            scroll-behavior: smooth;
            cursor: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='24px' height='24px' viewBox='0 0 512 512' style='enable-background:new 0 0 512.011 512.011;' xml:space='preserve'%3E %3Cpath fill='DeepSkyBlue' d='M434.215,344.467L92.881,3.134c-4.16-4.171-10.914-4.179-15.085-0.019  c-2.011,2.006-3.139,4.731-3.134,7.571v490.667c0.003,4.382,2.685,8.316,6.763,9.92c4.081,1.603,8.727,0.545,11.712-2.667  l135.509-145.92h198.016c5.891,0.011,10.675-4.757,10.686-10.648C437.353,349.198,436.226,346.473,434.215,344.467z'/%3E %3C/svg%3E"),
                pointer;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
            display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        html {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
        }
    }

    a {
        width: fit-content;
    }

    

    div {
        width: 100%;
        height: 100vh;
        /* max-height: 880px; */
        overflow: hidden;
        position: absolute;
    }

    /* Snap Scroll */
    .snap-main {
        width: 100%;
        height: 100vh;
        position: relative;
        color: #fff;
    }

    .page {
        width: 100%;
        height: 100vh;
    }

    /* 1st Page */

    .head-1 {
        position: absolute;
        text-align: center;
        color: #fff;
        margin: 50px 80px 30px 0px;
        text-shadow: 2px 2px 10px rgb(0, 136, 255);
        font-family: revampedregular;
        font-weight: 100;
        left: calc(100% / 2 - 100px);
        font-size: 2.2rem;
    }
    .head-para {
        position: absolute;
        color: #fff;
        top: calc(100% / 2 - 160px);
        left: calc(100% / 2 - 400px);
        text-shadow: 2px 2px 10px rgb(0, 136, 255);
        font-family: Monda;
        font-weight: 500;
        width: 35vw;
        text-align: center;
        font-size: 1.4rem;
    }

    .card-container {
        position: absolute;
        width: 65vmin;
        height: 80vmin;
        /* left: calc(100% / 2 - 250px); */
        right: 20px;
        margin-top: 100px;
        z-index: 1;
    }

    .card {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fafafa;
        border-radius: 2px;
        box-shadow: 2px 2px 5px rgba(17, 17, 17, 0.35);
        transition: transform 0.35s ease-out;
        transform: translate(var(--x), var(--y)) scale(0.35) rotate(var(--angle));
        will-change: transform;
    }
    .card:hover {
        transform: scale(1) rotate(0deg);
        z-index: 1;
        cursor: pointer;
    }
    .card:hover:before {
        opacity: 1;
    }

    .card:before {
        content: '';
        display: block;
        width: 90%;
        height: 80%;
        margin: 5%;
        background: var(--image) center center no-repeat;
        background-size: cover;
        box-shadow: inset 0 0 5px rgba(34, 34, 34, 0.35);
        border-radius: 2px;
        filter: sepia(0.2) brightness(0.9) contrast(1.2);
        transition: opacity 0.35s ease-out;
        opacity: 1;
        will-change: opacity;
    }

    .card:after {
        display: block;
        content: var(--caption);
        font-weight: 100;
        color: #000;
        font-family: revampedregular;
        font-size: 3vmin;
        opacity: 0.75;
        text-align: center;
        /* text-shadow: 2px 2px 10px rgb(0, 136, 255); */
    }

    /*buttons*/

    .all-buttons {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 70px;
        bottom: -20vh;
        width: 250px;
        /* margin-right: 200px; */
    }

    .cybr-btn {
        --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%));
        --shadow-primary: hsl(var(--shadow-primary-hue), 90%, 50%);
        --primary-hue: 10;
        --primary-lightness: 50;
        --color: hsl(0, 0%, 100%);
        --font-size: 26px;
        --shadow-primary-hue: 180;
        --label-size: 9px;
        --shadow-secondary-hue: 60;
        --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);
        --clip: polygon(
            0 0,
            100% 0,
            100% 100%,
            95% 100%,
            95% 90%,
            85% 90%,
            85% 100%,
            8% 100%,
            0 70%
        );
        --border: 4px;
        --shimmy-distance: 5;
        --clip-one: polygon(
            0 2%,
            100% 2%,
            100% 95%,
            95% 95%,
            95% 90%,
            85% 90%,
            85% 95%,
            8% 95%,
            0 70%
        );
        --clip-two: polygon(
            0 78%,
            100% 78%,
            100% 100%,
            95% 100%,
            95% 90%,
            85% 90%,
            85% 100%,
            8% 100%,
            0 78%
        );
        --clip-three: polygon(
            0 44%,
            100% 44%,
            100% 54%,
            95% 54%,
            95% 54%,
            85% 54%,
            85% 54%,
            8% 54%,
            0 54%
        );
        --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
        --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
        --clip-six: polygon(
            0 40%,
            100% 40%,
            100% 85%,
            95% 85%,
            95% 85%,
            85% 85%,
            85% 85%,
            8% 85%,
            0 70%
        );
        --clip-seven: polygon(
            0 63%,
            100% 63%,
            100% 80%,
            95% 80%,
            95% 80%,
            85% 80%,
            85% 80%,
            8% 80%,
            0 70%
        );
        font-family: Monda;
        font-weight: 700;
        color: var(--color);
        cursor: pointer;
        background: transparent;
        text-transform: uppercase;
        font-size: var(--font-size);
        outline: transparent;
        letter-spacing: 2px;
        position: relative;
        font-weight: 700;
        border: 0;
        min-width: 130px;
        height: 55px;
        line-height: 55px;
        transition: background 0.2s;
        margin: 40px;
    }

    .cybr-btn:hover {
        --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.8%));
    }
    .cybr-btn:active {
        --primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 0.6%));
    }

    .cybr-btn:after,
    .cybr-btn:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        clip-path: var(--clip);
        z-index: -1;
    }

    .cybr-btn:before {
        background: var(--shadow-primary);
        transform: translate(var(--border), 0);
    }

    .cybr-btn:after {
        background: var(--primary);
    }

    .cybr-btn__tag {
        position: absolute;
        padding: 1px 4px;
        letter-spacing: 1px;
        line-height: 1;
        bottom: -5%;
        right: 5%;
        font-weight: normal;
        color: #000;
        font-size: var(--label-size);
        display: none;
    }

    .cybr-btn__glitch {
        position: absolute;
        top: calc(var(--border) * -1);
        left: calc(var(--border) * -1);
        right: calc(var(--border) * -1);
        bottom: calc(var(--border) * -1);
        background: var(--shadow-primary);
        text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);
        clip-path: var(--clip);
        animation: glitch 2s infinite;
        display: none;
    }

    .cybr-btn:hover .cybr-btn__glitch {
        display: block;
    }

    .cybr-btn__glitch:before {
        content: '';
        position: absolute;
        top: calc(var(--border) * 1);
        right: calc(var(--border) * 1);
        bottom: calc(var(--border) * 1);
        left: calc(var(--border) * 1);
        clip-path: var(--clip);
        background: var(--primary);
        z-index: -1;
    }

    @keyframes glitch {
        0% {
            clip-path: var(--clip-one);
        }
        2%,
        8% {
            clip-path: var(--clip-two);
            transform: translate(calc(var(--shimmy-distance) * -1%), 0);
        }
        6% {
            clip-path: var(--clip-two);
            transform: translate(calc(var(--shimmy-distance) * 1%), 0);
        }
        9% {
            clip-path: var(--clip-two);
            transform: translate(0, 0);
        }
        10% {
            clip-path: var(--clip-three);
            transform: translate(calc(var(--shimmy-distance) * 1%), 0);
        }
        13% {
            clip-path: var(--clip-three);
            transform: translate(0, 0);
        }
        14%,
        21% {
            clip-path: var(--clip-four);
            transform: translate(calc(var(--shimmy-distance) * 1%), 0);
        }
        25% {
            clip-path: var(--clip-five);
            transform: translate(calc(var(--shimmy-distance) * 1%), 0);
        }
        30% {
            clip-path: var(--clip-five);
            transform: translate(calc(var(--shimmy-distance) * -1%), 0);
        }
        35%,
        45% {
            clip-path: var(--clip-six);
            transform: translate(calc(var(--shimmy-distance) * -1%));
        }
        40% {
            clip-path: var(--clip-six);
            transform: translate(calc(var(--shimmy-distance) * 1%));
        }
        50% {
            clip-path: var(--clip-six);
            transform: translate(0, 0);
        }
        55% {
            clip-path: var(--clip-seven);
            transform: translate(calc(var(--shimmy-distance) * 1%), 0);
        }
        60% {
            clip-path: var(--clip-seven);
            transform: translate(0, 0);
        }
        31%,
        61%,
        100% {
            clip-path: var(--clip-four);
        }
    }

    .cybr-btn:nth-of-type(2) {
        --primary-hue: 260;
    }
    .cybr-btn:nth-of-type(3) {
        --primary-hue: 330;
    }
    .cybr-btn:nth-of-type(4) {
        --primary-hue: 400;
    }

    /* Scroll down */
    .scrolldown {
        --color: white;
        --sizeX: 30px;
        --sizeY: 50px;
        position: relative;
        width: var(--sizeX);
        height: var(--sizeY);
        margin-left: calc(var(sizeX) / 2);
        border: calc(var(--sizeX) / 10) solid var(--color);
        border-radius: 50px;
        box-sizing: border-box;
        margin-bottom: 16px;
        left: calc(100% / 2 - 0px);
        bottom: 100px;
    }

    .scrolldown::before {
        content: '';
        position: absolute;
        bottom: 30px;
        left: 50%;
        width: 6px;
        height: 6px;
        margin-left: -3px;
        background-color: var(--color);
        border-radius: 100%;
        animation: scrolldown-anim 2s infinite;
        box-sizing: border-box;
        box-shadow: 0px -5px 3px 1px #ffffff66;
    }

    @keyframes scrolldown-anim {
        0% {
            opacity: 0;
            height: 6px;
        }
        40% {
            opacity: 1;
            height: 10px;
        }
        80% {
            transform: translate(0, 20px);
            height: 10px;
            opacity: 0;
        }
        100% {
            height: 3px;
            opacity: 0;
        }
    }
    .chevrons {
        padding: 6px 0 0 0;
        margin-left: -3px;
        margin-top: 48px;
        width: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .chevrondown {
        margin-top: -6px;
        position: relative;
        border: solid var(--color);
        border-width: 0 3px 3px 0;
        display: inline-block;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
    }
    .chevrondown:nth-child(odd) {
        animation: pulse 500ms ease infinite alternate;
    }
    .chevrondown:nth-child(even) {
        animation: pulse 500ms ease infinite alternate 250ms;
    }
    @keyframes pulse {
        from {
            opacity: 0;
        }
        to {
            opacity: 0.5;
        }
    }

    /* Gallery */
    .main,
    .main2,
    .main3,
    .main4 {
        position: relative;
    }

    /* Adhyaaya'21 - Adhyaaya'19 */
    .main h1,
    .main3 h1 {
        position: absolute;
        text-align: left;
        color: #fff;
        margin: 70px 0px 30px 80px;
        text-shadow: 2px 2px 10px rgb(0, 136, 255);
        font-family: revampedregular;
        font-weight: 100;
    }

    .main p,
    .main3 p {
        position: absolute;
        text-align: left;
        color: #fff;
        margin: 130px 0px 30px 80px;
        text-shadow: 2px 2px 10px rgb(0, 136, 255);
        font-family: Monda;
        font-weight: 500;
        width: 25vw;
        text-align: justify;
    }

    .main img,
    .main3 img {
        position: absolute;
        bottom: 60px;
        width: 100px;
        left: 150px;
    }

    /* Adhyaaya'20 - Adhyaaya'18 */
    .main2 h1,
    .main4 h1 {
        position: absolute;
        text-align: right;
        color: #fff;
        margin: 70px 80px 30px 0px;
        text-shadow: 2px 2px 10px rgb(0, 136, 255);
        font-family: revampedregular;
        font-weight: 100;
        right: 0%;
    }

    .main2 p,
    .main4 p {
        position: absolute;
        text-align: right;
        color: #fff;
        margin: 130px 80px 30px 0px;
        text-shadow: 2px 2px 10px rgb(0, 136, 255);
        font-family: Monda;
        font-weight: 500;
        width: 25vw;
        text-align: justify;
        right: 0%;
    }

    .main2 img,
    .main4 img {
        position: absolute;
        bottom: 60px;
        width: 100px;
        right: 150px;
    }

    @media screen and (max-width: 700px) {
        h1 {
            position: relative;
        }
    }
</style>
