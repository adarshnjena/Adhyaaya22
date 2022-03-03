<script>
    import { onMount } from 'svelte';

    let is_one = true;
    let is_two = false;
    let is_three = false;
    function on_one_click() {
        is_one = true;
        is_two = false;
        is_three = false;
    }
    function on_two_click() {
        is_one = false;
        is_two = true;
        is_three = false;
    }
    function on_three_click() {
        is_one = false;
        is_two = false;
        is_three = true;
    }
</script>

<svelte:head>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</svelte:head>

<section class="testimonial">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 d-none d-lg-block">
                <ol class="carousel-indicators tabs">
                    <li
                        data-target="#carouselExampleIndicators"
                        on:click="{on_one_click}"
                        data-slide-to="0"
                        class="{is_one ? 'active' : ''}"
                    >
                        <figure>
                            <img src="img1.jpeg" class="img-fluid" alt="" />
                        </figure>
                    </li>
                    <li
                        data-target="#carouselExampleIndicators"
                        on:click="{on_two_click}"
                        data-slide-to="1"
                        class="{is_two ? 'active' : ''}"
                    >
                        <figure>
                            <img src="img2.jpeg" class="img-fluid" alt="" />
                        </figure>
                    </li>
                    <li
                        data-target="#carouselExampleIndicators"
                        on:click="{on_three_click}"
                        data-slide-to="2"
                        class="{is_three ? 'active' : ''}"
                    >
                        <figure>
                            <img src="img3.jpeg" class="img-fluid" alt="" />
                        </figure>
                    </li>
                </ol>
            </div>
            <div
                class="col-lg-6 d-flex justify-content-center
                align-items-center"
            >
                <div
                    id="carouselExampleIndicators"
                    data-interval="false"
                    class="carousel slide"
                    data-ride="carousel"
                >
                    <h3>WHAT PARTICIPANT SAYS</h3>
                    <h1>TESTIMONIALS</h1>
                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <div class="quote-wrapper">
                                <p>
                                    It was indeed a great experience to participate in the Adhyaaya.
                                    Several technicalities and doubtful process just becomes a
                                    cakewalk after participating in the Adhyaaya .
                                </p>
                                <div class="quote-wrapper_img">
                                    <div>
                                        <h3>Vikram Mali</h3>
                                        <p>Government College of engineering karad</p>
                                        <p>2nd Year</p>
                                    </div>
                                    <img style="transform:rotate(25deg);" src="img1.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="quote-wrapper">
                                <p>
                                    I am glad to provide the feedback for adhyaaya .My overall
                                    experience for all the events i had participated was really
                                    amazing.I have learned a lot from maximum events and from much
                                    active peaple I met through.Few events like MUN gave us the real
                                    life experience of being a part of an international
                                    organisation.I truly appreciate the hardwork which was done by
                                    the students of GCOEN.Also i am looking forward to participate
                                    and interact in many more events. Thank you so much.
                                </p>
                                <div class="quote-wrapper_img">
                                    <div>
                                        <h3>Rugweda Khiratkar</h3>
                                        <p>Ramdeobaba college of engineering and management</p>
                                        <p>2nd Year</p>
                                    </div>
                                    <img src="img2.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item active">
                            <div class="quote-wrapper">
                                <p>
                                    I came to know about Adhyaaya through my friend. I was
                                    immediately fascinated about it, that it has been conducted so
                                    efficiently since past 4 years. I was very excited to involve
                                    myself here with a bunch of talented people and gain valuable
                                    knowledge that they share through this platform. I can gladly
                                    say that participation in Adhyaaya has helped in my personal
                                    growth greatly. I would like to congratulate the team for
                                    successfully turning this dream of an event into reality.
                                </p>
                                <div class="quote-wrapper_img">
                                    <div>
                                        <h3>Snehashish Mohanty</h3>
                                        <p>
                                            Bharat institute of engineering and technology,
                                            Hyderabad
                                        </p>
                                        <p>2nd Year</p>
                                    </div>
                                    <img src="img3.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ol class="carousel-indicators indicators">
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            class="{is_one ? 'active' : ''}"
                        ></li>
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                            class="{is_two ? 'active' : ''}"
                        ></li>
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                            class="{is_three ? 'active' : ''}"
                        ></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    :global {
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-size: 16px;
            font-weight: 300;
            line-height: 23px;
            font-family: 'Nunito', sans-serif;
        }
    }
    ul {
        list-style-type: none;
    }

    a,
    a:hover {
        text-decoration: none;
    }

    body {
        font-family: 'Nunito', sans-serif;
    }
    body .testimonial {
        padding: 100px 0;
    }
    body .testimonial .row .tabs {
        all: unset;
        margin-right: 50px;
        display: flex;
        flex-direction: column;
    }
    body .testimonial .row .tabs li {
        all: unset;
        display: block;
        position: relative;
    }
    body .testimonial .row .tabs li.active::before {
        position: absolute;
        content: '';
        width: 50px;
        height: 50px;
        background-color: #71b85f;
        border-radius: 50%;
    }
    body .testimonial .row .tabs li.active::after {
        position: absolute;
        content: '';
        width: 30px;
        height: 30px;
        background-color: #71b85f;
        border-radius: 50%;
    }
    body .testimonial .row .tabs li:nth-child(1) {
        align-self: flex-end;
    }
    body .testimonial .row .tabs li:nth-child(1)::before {
        left: 64%;
        bottom: -50px;
    }
    body .testimonial .row .tabs li:nth-child(1)::after {
        left: 97%;
        bottom: -81px;
    }
    body .testimonial .row .tabs li:nth-child(1) figure img {
        margin-left: auto;
        width: 180px;
        height: 180px;
        object-fit: cover;
        border-radius: 100%;
    }
    body .testimonial .row .tabs li:nth-child(2) {
        align-self: flex-start;
    }
    body .testimonial .row .tabs li:nth-child(2)::before {
        right: -65px;
        top: 50%;
    }
    body .testimonial .row .tabs li:nth-child(2)::after {
        bottom: 101px;
        border-radius: 50%;
        right: -120px;
    }
    body .testimonial .row .tabs li:nth-child(2) figure img {
        margin-right: auto;
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 100%;
        margin-top: -50px;
    }
    body .testimonial .row .tabs li:nth-child(3) {
        align-self: flex-end;
    }
    body .testimonial .row .tabs li:nth-child(3)::before {
        right: -10px;
        top: -66%;
    }
    body .testimonial .row .tabs li:nth-child(3)::after {
        top: -130px;
        border-radius: 50%;
        right: -46px;
    }
    body .testimonial .row .tabs li:nth-child(3) figure img {
        margin-left: auto;
        margin-top: -50px;
        width: 180px;
        height: 180px;
        object-fit: cover;
        border-radius: 100%;
    }
    body .testimonial .row .tabs li:nth-child(3):focus {
        border: 10px solid red;
    }
    body .testimonial .row .tabs li figure {
        position: relative;
    }
    body .testimonial .row .tabs li figure img {
        display: block;
    }
    body .testimonial .row .tabs li figure::after {
        content: '';
        position: absolute;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        border: 4px solid #dff9d9;
        border-radius: 50%;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
    }
    body .testimonial .row .tabs li figure:hover::after {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
    body .testimonial .row .tabs.carousel-indicators li.active figure::after {
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
    body .testimonial .row .carousel > h3 {
        font-size: 20px;
        line-height: 1.45;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 600;
        margin-bottom: 0;
    }
    body .testimonial .row .carousel h1 {
        font-size: 40px;
        line-height: 1.225;
        margin-top: 23px;
        font-weight: 700;
        margin-bottom: 0;
    }
    body .testimonial .row .carousel .carousel-indicators {
        all: unset;
        padding-top: 43px;
        display: flex;
        list-style: none;
    }
    body .testimonial .row .carousel .carousel-indicators li {
        background: #000;
        background-clip: padding-box;
        height: 2px;
    }
    body .testimonial .row .carousel .carousel-inner .carousel-item .quote-wrapper {
        margin-top: 42px;
    }
    body .testimonial .row .carousel .carousel-inner .carousel-item .quote-wrapper p {
        font-size: 18px;
        line-height: 1.72222;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.7);
    }
    body .testimonial .row .carousel .carousel-inner .carousel-item .quote-wrapper h3 {
        color: #000;
        font-weight: 700;
        margin-top: 37px;
        font-size: 20px;
        line-height: 1.45;
        text-transform: uppercase;
    }

    .quote-wrapper_img {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .quote-wrapper_img div h3,
    .quote-wrapper_img div p {
        margin: 0;
        padding: 0;
    }
    .quote-wrapper_img img {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        object-fit: cover;
    }
    @media only screen and (max-width: 1200px) and (min-width: 900px) {
        body .testimonial .row .carousel .carousel-inner .carousel-item .quote-wrapper {
            width: 40vw;
        }
    }
    @media only screen and (max-width: 1200px) {
        body .testimonial .row .tabs {
            margin-right: 25px;
        }
        .quote-wrapper_img {
            width: 90vw;
        }
    }
</style>
