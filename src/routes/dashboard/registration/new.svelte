<script lang="ts">
    import { dev } from '$app/env';
    import { goto, prefetch } from '$app/navigation';
    import authStore from '$lib/auth/authStore';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import baselinePerson from '@iconify-icons/ic/baseline-person.js';
    import baselineSchool from '@iconify-icons/ic/baseline-school.js';
    import baselineAltEmail from '@iconify-icons/ic/baseline-alternate-email.js';
    import baselinePhone from '@iconify-icons/ic/baseline-phone.js';
    import baselineCode from '@iconify-icons/ic/baseline-code.js';
    import baselineCalendarViewDay from '@iconify-icons/ic/baseline-calendar-view-day.js';
    import baselinePeopleAlt from '@iconify-icons/ic/baseline-people-alt.js';
    import Protected from '$lib/auth/Protected.svelte';
    import CAFooter from '$lib/CAFooter.svelte';
    import firebaseConfig from '$lib/firebase/firebaseConfig';

    // Firebase Imports
    import { getApp, initializeApp } from 'firebase/app';
    import { getAuth } from 'firebase/auth';
    import { onMount } from 'svelte';

    // Cashfree Imports
    import { cashfreeSandbox } from 'cashfree-dropjs';
    import { registrationDetails, teamMemberDetail } from '$lib/types/registrationDetails';
    import { sample_make_order } from '$lib/cashfree/sample';
    import { get_user_details } from '$lib/firebase/userDetails';
    import { getFirestore } from 'firebase/firestore/lite';
    import {
        add_new_user_registration,
        event_extra_members_mapping,
        get_event_cost,
        get_user_registrations,
    } from '$lib/firebase/registrationDetails';
    import { get_order_id } from '$lib/cashfree/helpers';
    //use import { cashfreeProd } from 'cashfree-dropjs';

    let testCashfree = new cashfreeSandbox.Cashfree();
    //let prodCashfree = new cashfreeProd.Cashfree();
    $: {
        _team_members = event_extra_members_mapping[input_registration_details.event_code] || 0;
    }
    let app;
    let auth;
    let db;
    let details;
    let regs;
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
        db = getFirestore();
        is_payment_gateway_shown = false;
        details = await get_user_details(app, $authStore.user, db);
        dev ? console.log('Registration: details', details) : '';
        input_registration_details['name'] =
            details['profile']['first_name'] + ' ' + details['profile']['last_name'];
        input_registration_details['email'] = details['profile']['email'];
        input_registration_details['phone'] = details['profile']['mobile_number'];
        input_registration_details['college'] =
            details['profile']['address'] +
            '|' +
            details['profile']['locality'] +
            '|' +
            details['profile']['city'] +
            '|' +
            details['profile']['state'] +
            '|' +
            details['profile']['country'];

        regs = await get_user_registrations(app, auth, db);
        dev ? console.log(regs) : '';
    });

    // Function for getting single string of team members.
    function get_team_members(): teamMemberDetail[] {
        let team_mem_names = [];
        let team_mem_numbers = [];
        let team_mem_emails = [];
        document
            .querySelectorAll('.team-member-name-input')
            .forEach((element: HTMLInputElement) => {
                team_mem_names.push(element.value);
            });
        document
            .querySelectorAll('.team-member-mobile-input')
            .forEach((element: HTMLInputElement) => {
                team_mem_numbers.push(element.value);
            });
        document
            .querySelectorAll('.team-member-email-input')
            .forEach((element: HTMLInputElement) => {
                team_mem_emails.push(element.value);
            });
        dev ? console.log('team_mem_names', team_mem_names) : '';
        dev ? console.log('team_mem_numbers', team_mem_numbers) : '';
        dev ? console.log('team_mem_emails', team_mem_emails) : '';
        let members = [];
        for (let i = 0; i < team_mem_names.length; i++) {
            members.push({
                name: team_mem_names[i],
                phone: team_mem_numbers[i],
                email: team_mem_emails[i],
            });
        }
        return members;
    }

    async function submit_free(event) {
        let order_id = get_order_id($authStore.user.uid, input_registration_details.event_code);
        const transform: registrationDetails = {
            name: input_registration_details['name'],
            email: input_registration_details['email'],
            phone: input_registration_details['phone'],
            college: input_registration_details['college'],
            registration_id: order_id,
            transaction_status: 'PAID',
            event_code: input_registration_details['event_code'],
            course: input_registration_details['year_of_study'],
            team: get_team_members(),
        };
        await add_new_user_registration(
            app,
            auth,
            db,
            input_registration_details.event_code,
            transform,
        );
        goto(`/auth/transactions/${order_id}/check_status_free`);
    }
    let _team_members = 0;

    async function on_submit(event) {
        console.log('Submit Button Clicked');
        if (error) {
            is_payment_gateway_shown = false;
            return;
        }
        if (!confirm('Do you want to confirm the registration for this event ?')) {
            return;
        }
        //console.dir(regs)
        if (Object.keys(regs).includes(input_registration_details.event_code)) {
            modal_show('You have already registered for this event');
            return;
        }

        is_payment_gateway_shown = true;
        const order_amount = get_event_cost(input_registration_details.event_code);
        // we need to generate a order token here
        order_amount === 0 ? await submit_free(event) : '';

        let order_details = {
            order_id: get_order_id($authStore.user.uid, input_registration_details.event_code), // This is of the format userid-eventcode
            order_amount: order_amount, // Needs to confirm prices
            order_currency: 'INR', // const
            customer_details: {
                customer_id: $authStore.user.uid, // Firebase User ID
                customer_email: details['profile']['email'], // Adhyaaya Support Email
                customer_phone: details['profile']['mobile_number'], // Check Phone number inside the dashboard
            },
        };

        dev ? console.log('order_details', order_details) : '';
        //order_amount == 0 ?
        const _order = await fetch('/auth/transactions/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order_details),
        });
        const order = await _order.json();
        // Recommended to store cf_order_id, order_token, order_status
        const order_token = order['order_token'];

        const dropConfig = {
            components: ['order-details', 'card', 'netbanking', 'app', 'upi'],
            orderToken: order_token,
            onSuccess: async function (data) {
                dev ? console.log('PGonSuccess', data) : '';
                if (data.order && data.order.status == 'PAID') {
                    //order is paid
                    // We now generate a firebase db call to actually generate the registration here.
                    const transform: registrationDetails = {
                        name: input_registration_details['name'],
                        email: input_registration_details['email'],
                        phone: input_registration_details['phone'],
                        college: input_registration_details['college'],
                        registration_id: data.order.orderId,
                        transaction_status: order_amount == 0 ? 'PAID' : 'UNVERIFIED',
                        event_code: input_registration_details['event_code'],
                        course: input_registration_details['year_of_study'],
                        team: get_team_members(),
                    };
                    await add_new_user_registration(
                        app,
                        auth,
                        db,
                        input_registration_details.event_code,
                        transform,
                    );
                    //verify order status by making an API call to your server
                    // using data.order.orderId

                    goto(`/auth/transactions/${data.order.orderId}/check_status`);
                } else {
                    //order is still active and payment has failed
                    modal_show(
                        'We can not process your payment at this time, please try again later.',
                    );
                }
            },
            onFailure: function (data) {
                dev ? console.log('PGonFailure', data) : '';
                modal_show(data.order.errorText);
            },
            style: {
                theme: 'dark', //(or light)
            },
        };
        testCashfree.initialiseDropin(document.getElementById('payment-gateway'), dropConfig);
    }

    let error;
    let is_payment_gateway_shown = true;
    // modal for errors and stuff;
    let is_modal_shown = false;
    let modal_message = '';
    function modal_show(message) {
        dev ? console.log('modal_show', message) : '';
        modal_message = message;
        is_modal_shown = true;
    }

    let input_registration_details = {
        name: '',
        email: '',
        phone: '',
        college: '',
        referral_code: '',
        year_of_study: '',
        event_code: '',
        team_members: '',
    };
</script>

<Protected />
<main>
    <section
        class="tw-relative tw-h-full tw-min-h-screen tw-w-full tw-overflow-y-clip tw-pt-0 tw-text-center"
    >
        <div class="main-block tw-pb-40 tw-text-left">
            <div class="form">
                <div
                    id="payment-gateway"
                    class="{is_payment_gateway_shown
                        ? ''
                        : 'tw-hidden'} tw-w-full tw-bg-opacity-100 tw-opacity-100"
                ></div>
                <form action="/" class=" {is_payment_gateway_shown ? 'tw-hidden' : ''}">
                    <div class="title">
                        <i class="fas fa-pencil-alt"></i>
                        <h2>Registration Form</h2>
                    </div>
                    <div class="info">
                        <div class="input tw-inline-flex ">
                            <Icon
                                class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]"
                                height=""
                                width=""
                                icon="{baselinePerson}"
                            />
                            <input
                                class="fname tw-w-full"
                                type="text"
                                name="name"
                                bind:value="{input_registration_details.name}"
                                placeholder="Full name"
                            />
                        </div>

                        <div class="input tw-inline-flex ">
                            <Icon
                                class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]"
                                height=""
                                width=""
                                icon="{baselineAltEmail}"
                            />
                            <input
                                type="email"
                                bind:value="{input_registration_details.email}"
                                placeholder="Email"
                                class="tw-w-full"
                            />
                        </div>

                        <div class="input tw-inline-flex ">
                            <Icon
                                class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]"
                                height=""
                                width=""
                                icon="{baselinePhone}"
                            />
                            <input
                                type="tel"
                                bind:value="{input_registration_details.phone}"
                                placeholder="Phone number"
                                class="tw-w-full"
                            />
                        </div>

                        <div class="input tw-inline-flex ">
                            <Icon
                                class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]"
                                height=""
                                width=""
                                icon="{baselineSchool}"
                            />
                            <input
                                type="text"
                                bind:value="{input_registration_details.college}"
                                placeholder="Collage name"
                                class="tw-w-full"
                            />
                        </div>

                        <div class="input tw-inline-flex ">
                            <Icon
                                class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]"
                                height=""
                                width=""
                                icon="{baselineCode}"
                            />
                            <input
                                type="text"
                                maxlength="7"
                                minlength="7"
                                bind:value="{input_registration_details.referral_code}"
                                placeholder="Referal Code"
                                class="tw-w-full"
                            />
                        </div>

                        <div class="input tw-inline-flex ">
                            <Icon
                                class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]"
                                height=""
                                width=""
                                icon="{baselineCalendarViewDay}"
                            />
                            <input
                                type="text"
                                bind:value="{input_registration_details.year_of_study}"
                                placeholder="Year of Study"
                                class="tw-w-full"
                            />
                        </div>

                        <!-- <i class='bx bxs-component'></i> -->
                        <select bind:value="{input_registration_details.event_code}">
                            <option value="" class="selected" selected disabled>
                                Competition / Workshop
                            </option>
                            <option class="option_heading" value="" disabled>
                                Non-technical Event
                            </option>
                            <option value="BSYD">BORNPSYCOS | Duos</option>
                            <option value="BSYT">BORNPSYCOS | Team [4]</option>
                            <option value="MUNA">MUN AIPPM | Solo</option>
                            <option value="MUNU">MUN UNHRC | Solo</option>
                            <option value="RPNBS">RESPAWN BGMI SQUAD | Team [4]</option>
                            <option value="RPNBT">RESPAWN BGMI TDM | Team [4]</option>
                            <option value="RPNVS">RESPAWN VALORANT SQUAD | Team [5]</option>
                            <option value="RPNCI">RESPAWN CHESS | Solo</option>
                            <option value="VAV">VAAD VIVAD | SOLO</option>
                            <option value="FOH">FOODOHOLICS | Team [4]</option>
                            <option value="CCB">CRICBASH | Team [6]</option>
                            <option value="" disabled></option>

                            <option class="option_heading" value="" disabled>
                                Technical Event
                            </option>
                            <option value="COV">CODEVENTURE | SOLO</option>
                            <option value="AVK">AVISHKAR | Team [upto 5]</option>
                            <option value="CADCS">CADDICTION CIVIL | Solo</option>
                            <option value="CADCD">CADDICTION CIVIL | Duo</option>
                            <option value="CADMS">CADDICTION MECHANICAL | Solo</option>
                            <option value="CADMD">CADDICTION MECHANICAL | Duo</option>
                            <option value="VPM">VIRTUAL PLACEMENT | Solo</option>
                            <option value="" disabled></option>
                            <!--TODO: FINISH THIS-->
                            <option class="option_heading" value="" disabled>Workshop</option>
                            <option value="LPY">Learn.py</option>
                            <option value="">Cad-O-Shop</option>
                            <option value="">Stargaze</option>
                            <option value="">Drone Workshop</option>
                            <option value="">Stock Market Investion</option>
                            <option value="">YouTube Content Creation</option>
                            <option value="" disabled></option>
                        </select>
                        {#each [...Array(_team_members).keys()] as item}
                            <div class="input tw-inline-flex ">
                                <Icon
                                    class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]"
                                    height=""
                                    width=""
                                    icon="{baselinePeopleAlt}"
                                />
                                <input
                                    type="text"
                                    placeholder="Member {item + 1} Name"
                                    class="team-member-name-input tw-w-full"
                                />
                            </div>
                            <div class="input tw-inline-flex ">
                                <Icon
                                    class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]"
                                    height=""
                                    width=""
                                    icon="{baselinePhone}"
                                />
                                <input
                                    type="text"
                                    placeholder="Member {item + 1} Mobile"
                                    class="team-member-mobile-input tw-w-full"
                                />
                            </div>
                            <div class="input tw-inline-flex ">
                                <Icon
                                    class="tw-h-8 tw-w-8 tw-self-center tw-text-[aqua]"
                                    height=""
                                    width=""
                                    icon="{baselineAltEmail}"
                                />
                                <input
                                    type="text"
                                    placeholder="Member {item + 1} Email"
                                    class="team-member-email-input tw-w-full"
                                />
                            </div>
                        {/each}
                    </div>

                    <button
                        class="submit"
                        on:click|preventDefault="{on_submit}"
                        type="submit"
                        href="/"
                    >
                        Submit
                    </button>
                </form>
                <div class="note">
                    <p>* EVENT NAME | TEAM/SOLO | PRICE</p>
                    <p>* For faster and safer transactions, prefer UPI.</p>

                    <p>* Any issues regarding registration, try to contact Ankur - 7743891722.</p>
                    <p>* In case of paid events you will receive a mail within 24 hours.</p>

                    <p>
                        * Some Events are Team-Based. Please ensure you have a complete team before
                        registering.
                    </p>
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
        //background: url('images/bg.png') no-repeat center;
        background-size: cover;
        background-position: center;
        height: 100%;
    }

    .form {
        margin: auto;
        display: flex;
        flex-direction: column;
        /* opacity: 0.8; */
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
        //margin-left: 50px;
        @apply tw-mx-auto;
    }
    .option_heading {
        font-weight: bolder;
        font-size: 22px;
        color: #ff2592;
        margin-top: 50px;
        @apply tw-mx-auto;
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
        font-family: 'Nunito', sans-serif;
        //font-family: 'Trirong', serif;
    }

    @media (max-width: 1000px) {
        .main-block {
            background: url('') no-repeat center;
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
