<script lang="ts">
    import { dev } from '$app/env';
    import { goto, prefetch } from '$app/navigation';
    import authStore from '$lib/auth/authStore';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte'
    import baselinePerson from '@iconify-icons/ic/baseline-person.js';
    import baselineSchool from '@iconify-icons/ic/baseline-school.js';
    import baselineAltEmail from '@iconify-icons/ic/baseline-alternate-email.js';
    import baselinePhone from '@iconify-icons/ic/baseline-phone.js';
    import baselineCode from '@iconify-icons/ic/baseline-code.js';
    import baselineCalendarViewDay from '@iconify-icons/ic/baseline-calendar-view-day.js';
    import Protected from '$lib/auth/Protected.svelte';
    import CAFooter from '$lib/CAFooter.svelte';
    import firebaseConfig from '$lib/firebase/firebaseConfig';

    // Firebase Imports
    import { getApp, initializeApp } from 'firebase/app';
    import { getAuth } from 'firebase/auth';
    import { onMount } from 'svelte';

    let app;
    let auth;
    // onMount contains the return redirect result function, The rest of the logic is within a on_signin function.
    onMount(async () => {
        try {
            app = getApp();
        } catch (error) {
            dev ? console.log('getApp: error', error) : '';
            // This means the app is not yet intialized.
            app = initializeApp(firebaseConfig);
        }
        // Now we for sure have an app.
        dev ? console.log(app) : '';
        // Redirect Handler, used when the user is authenticated.
        auth = getAuth();
    });

    // modal for errors and stuff;
    let is_modal_shown = false;
    let modal_message = '';
    function modal_show(message) {
        dev ? console.log('modal_show', message) : '';
        modal_message = message;
        is_modal_shown = true;
    }
</script>

<Protected />
<main>
    <section
        class="tw-relative tw-h-full tw-min-h-screen tw-w-full tw-overflow-y-clip tw-pt-0 tw-text-center"
    >
        <div class="main-block tw-pb-40 tw-text-left">
            <div class="form">
                <form action="/">
                    <div class="title">
                        <i class="fas fa-pencil-alt"></i>
                        <h2>Registration Form</h2>
                    </div>
                    <div class="info">
                        <div class="input tw-inline-flex ">
                            <Icon class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]" height="" width="" icon="{baselinePerson}"/>
                            <input class="fname tw-w-full" type="text" name="name" placeholder="Full name" />
                        </div>

                        <div class="input tw-inline-flex ">
                            <Icon class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]" height="" width="" icon="{baselineAltEmail}"/>
                            <input type="email" placeholder="Email" class="tw-w-full" />
                        </div>

                        <div class="input tw-inline-flex ">
                            <Icon class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]" height="" width="" icon="{baselinePhone}"/>
                            <input type="tel" maxlength="10" placeholder="Phone number" class="tw-w-full" />
                        </div>

                        <div class="input tw-inline-flex ">
                            <Icon class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]" height="" width="" icon="{baselineSchool}"/>
                            <input type="text" placeholder="Collage name" class="tw-w-full" />
                        </div>

                        <div class="input tw-inline-flex ">
                            <Icon class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]" height="" width="" icon="{baselineCode}"/>
                            <input type="text" placeholder="Referal Code" class="tw-w-full" />
                        </div>

                        <div class="input tw-inline-flex ">
                            <Icon class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]" height="" width="" icon="{baselineCalendarViewDay}"/>
                            <input type="text" placeholder="Year of Study" class="tw-w-full" />
                        </div>

                        <!-- <i class='bx bxs-component'></i> -->
                        <select>
                            <option value="" class="selected" selected disabled>
                                Competition / Workshop
                            </option>
                            <option class="option_heading" value disabled>
                                Non-technical Event
                            </option>
                            <option value="">Born Psycos</option>
                            <option value="">MUN AIPPM</option>
                            <option value="">MUN UNHRC</option>
                            <option value="">Respawn</option>
                            <option value="">Vad-Vivaad</option>
                            <option value="" disabled></option>

                            <option class="option_heading" value="" disabled>
                                Technical Event
                            </option>
                            <option value="">Codeventure</option>
                            <option value="">Avishkar</option>
                            <option value="">Caddiction</option>
                            <option value="">Virtual Placement</option>
                            <option value="" disabled></option>

                            <option class="option_heading" value="" disabled>Workshop</option>
                            <option value="">Learn.py</option>
                            <option value="">Cad-O-Shop</option>
                            <option value="">Stargaze</option>
                            <option value="">Drone Workshop</option>
                            <option value="">Stock Market Investion</option>
                            <option value="">YouTube Content Creation</option>
                            <option value="" disabled></option>
                        </select>
                    </div>

                    <button class="submit" type="submit" href="/">Submit</button>
                </form>
                <div class="note">
                    <p>* For faster and safer transactions, prefer UPI.</p>

                    <p>* Any issues regarding registration, try to contact Ankur - 7743891722.</p>
                    <p>* In case of paid events you will receive a mail within 24 hours.</p>
                </div>
            </div>
        </div>
        <CAFooter />
    </section>
</main>

<input bind:checked="{is_modal_shown}" type="checkbox" id="my-modal-2" class="tw-modal-toggle" />
<div class="tw-modal">
    <div class="tw-modal-box">
        <p>{modal_message}</p>
        <div class="tw-modal-action">
            <label for="my-modal-2" class="tw-btn">OK</label>
        </div>
    </div>
</div>

<style>
    body,
    div,
    input,
    select,
    p {
        margin: 0;
        outline: none;
        //font-family: 'Poppins', sans-serif;
        font-size: 18px;
        color: #fff;
    }

    h1,
    h2 {
        text-transform: uppercase;
        font-weight: 400;
        text-align: center;
    }
    h2 {
        margin: 0 0 0 8px;
        font-weight: 400;
        color: aqua;
        font-family: revampedregular;

        /* text-shadow: 0 0 3px aqua, 0 0 5px aqua; */
    }
    .main-block {
        //padding: 50px 20px 20px 20px;
        background: url('images/bg.png') no-repeat center;
        background-size: cover;
        background-position: center;
        height: 100%;
    }

    .form {
        margin: auto;
        display: flex;
        flex-direction: column;
        opacity: 0.8;
        width: 38rem;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 20px;
        backdrop-filter: blur(30px);
        /* box-shadow: 10px 10px 10px rgba(40, 55, 68, 0.0.3); */
        box-shadow: inset 0 0 0.1em 0 aqua, 0 0 0.2em 0 aqua;
        border: 2px solid aqua;
        z-index: 2;
    }

    form {
        width: 70%;
    }
    .title {
        display: flex;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
        justify-content: center;
        font-size: 25px;
    }
    .info {
        display: flex;
        flex-direction: column;
    }
    .input {
        border-bottom: 1px solid aqua;
        margin-bottom: 42px;
        box-shadow: 0px 0px 1px -1px aqua;
        -webkit-box-shadow: 0px 0px 1px -1px aqua;
        -moz-box-shadow: 0px 0px 1px -1px aqua;
    }

    input,
    select {
        //padding: 5px;
        color: #fff;
        background: none;
        border: none;
        align-self: center;
    }

    .bx {
        color: aqua;
    }
    select {

        border-bottom: 1px solid aquamarine;
        margin-bottom: 45px;
        //width: 31rem;
        @apply tw-w-full tw-text-left;
    }
    .input input::placeholder {
        color: #fff;
    }
    .selected {
        color: rgb(66, 66, 66);
        /* margin: 40px; */
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }

    option {
        text-align: center;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
        background: #0c0152;
        color: aqua;
        backdrop-filter: blur(30px);
        border: none;
        padding: 450px;
        margin-left: 50px;
    }
    .option_heading {
        font-weight: bolder;
        font-size: 22px;
        color: #ff2592;
        margin-top: 50px;
    }

    .submit {
        align-self: center;
        margin: 30px 30%;
        width: 40%;
        padding: 20px;
        font-size: 22px;
        border-radius: 15px;
        background: none;
        border: 3px solid aqua;
        color: aqua;
        font-family: revampedregular;
        cursor: pointer;
        /* text-shadow:  0 0 0.2em aqua, 0 0 1em aqua; */
    }
    .submit:hover {
        font-weight: 700;
        box-shadow: inset 0 0 0.2em 0 aqua, 0 0 0.4em 0 aqua;
    }
    .note {
        margin: 20px;
        text-align: center;
        font-family: 'Trirong', serif;
    }

    @media (max-width: 1000px) {
        .main-block {
            background: url('images/adhyaya\ bg.png') no-repeat center;
            background-size: cover;
            background-position: center;
            height: 100%;
            margin: 0;
            padding: 25px 0 0 0;
            /* width: 100%; */
        }
        .form {
            width: 70%;
        }
        select {
            width: 25rem;
        }
    }
    @media (max-width: 760px) {
        .form {
            width: 80%;
        }
    }

    @media (max-width: 650px) {
        select {
            width: 20rem;
        }
    }

    @media (max-width: 498px) {
        .title,
        input,
        select,
        button,
        option {
            font-size: 18px;
        }
        h2 {
            margin-bottom: 20px;
        }
        .note {
            font-size: 13px;
        }
        .form {
            width: 80%;
        }
        .submit {
            width: 90%;
            margin: 45px 10px;
        }
    }
    @media (max-width: 450px) {
        .form {
            width: 90%;
        }
        form {
            width: 90%;
        }
    }

    @media (max-width: 375px) {
        select {
            width: 17rem;
        }
    }
</style>
