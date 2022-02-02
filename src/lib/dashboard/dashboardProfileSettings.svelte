<script lang="ts">
    import { dev } from '$app/env';
    import { goto } from '$app/navigation';
    import authStore from '$lib/auth/authStore';
    import type { profileDetails } from '$lib/types/profileDetails';
    import type { FirebaseApp } from 'firebase/app';
    import type { Auth } from 'firebase/auth';
    import type { Database } from 'firebase/database';
    import { onMount } from 'svelte';
    export let app: FirebaseApp = null;
    export let auth: Auth = null;
    export let database: Database = null;
    export let details: profileDetails = {
        username: '@username',
        email: 'username@domain.tld',
        first_name: 'FirstName',
        last_name: 'LastName',
        mobile_number: '+91 5542342345',
        address: 'Some Place, Some City, Some Country',
        locality: 'Some Locality',
        city: 'Some City',
        state: 'Some State',
        country: 'Some Country',
        bio: 'I make a website! He did not. Great Success!',
    };


    let mobile_error = '';
    function mobile_on_blur(event) {
        const valid_mobile_regex = /^(?!0+$)(\+\d{1,3}[- ]?)?(?!0+$)\d{10}$/;
        if (valid_mobile_regex.test(details.mobile_number)) {
            mobile_error = '';
        } else {
            mobile_error = 'Invalid Mobile Number';
        }
    }

    let username_error = '';
    let username_typing_timeout;
    function username_on_blur(event) {
        dev ? console.log('username_on_blur', event) : '';
        const special_chars = /[ `!#$%^&*()+=[\]{};':"\\|,.<>/?~]/;

        if (details.username.length <= 5) {
            username_error = 'Username must be at least 6 characters long';
        } else if (details.username.length >= 20) {
            username_error = 'Username must be less than 20 characters long';
        } else if (special_chars.test(details.username)) {
            username_error =
                "Username must not contain special characters except '-' or '_' or '@' ";
        } else if (details.username.includes('@') && details.username.indexOf('@') != 0) {
            username_error =
                "If you want to use '@' in your username, please place it at the beginning";
        } else {
            username_error = '';
        }
    }

    function username_on_keyup(event) {
        clearTimeout(username_typing_timeout);
        username_typing_timeout = setTimeout(function () {
            username_on_blur(event);
        }, 500);
    }

    let is_updating = false;
    function on_update_click(event) {
        if (!mobile_error) {
            is_updating = true;
            // TODO: Update profile
        }
    }
</script>

<div class="w-full lg:w-8/12 px-4">
    <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-opacity-[75%] bg-base-200 border-0"
    >
        <div class="rounded-t  mb-0 px-6 py-6">
            <div class="text-center flex justify-between">
                <span class="text-blueGray-700 text-xl font-bold">Your Details</span>
                <button
                    class="btn btn-info btn-sm {username_error ? 'btn-disabled' : ''}
                    {mobile_error ? 'btn-disabled' : ''} 
                    {is_updating ? 'loading btn-disabled' : ''}"
                    disabled={!!is_updating || !!mobile_error || !!username_error}
                    on:click={on_update_click}
                    type="button"
                >
                    Update Info
                </button>
            </div>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
                <h6
                    class="w-full text-sm pl-4 pt-3 pb-6 text-gray-400 bg-opacity-[75%] bg-base-300 rounded-t-lg font-bold uppercase"
                >
                    User Information
                </h6>
                <div class="flex flex-wrap bg-opacity-[75%] bg-base-300 rounded-b-lg">
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="label text-sm {username_error ? 'text-error' : ''}"
                                for="grid-username"
                            >
                                {username_error ? username_error : 'Username'}
                            </label>
                            <input
                                id="grid-username"
                                type="text"
                                class="input input-ghost w-full {username_error
                                    ? 'input-error'
                                    : ''}"
                                bind:value={details.username}
                                on:keyup={username_on_keyup}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="label text-sm" for="grid-email">Email address</label>
                            <input
                                id="grid-email"
                                type="email"
                                disabled
                                class="input-disabled input input-ghost w-full"
                                bind:value={details.email}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="label text-sm" for="grid-first-name">First Name</label>
                            <input
                                id="grid-first-name"
                                type="text"
                                class="input input-ghost w-full"
                                bind:value={details.first_name}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="label text-sm" for="grid-last-name">Last Name</label>
                            <input
                                id="grid-last-name"
                                type="text"
                                class="input input-ghost w-full"
                                bind:value={details.last_name}
                            />
                        </div>
                    </div>
                </div>

                <h6
                    class=" text-sm mt-4 pl-4 pt-3 pb-6 text-gray-400 bg-opacity-[75%] bg-base-300 rounded-t-lg font-bold uppercase"
                >
                    Contact Information
                </h6>
                <div class="flex flex-wrap bg-opacity-[75%] bg-base-300 rounded-b-lg">
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="label text-sm {mobile_error ? 'text-error' : ''}"
                                for="grid-mobile-number"
                            >
                                {mobile_error ? mobile_error : 'Mobile Number'}
                            </label>
                            <input
                                id="grid-mobile-number"
                                type="text"
                                class="input input-ghost w-full {mobile_error ? 'input-error' : ''}"
                                bind:value={details.mobile_number}
                                on:blur={mobile_on_blur}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="label text-sm" for="grid-locality">Area/Locality</label>
                            <input
                                id="grid-locality"
                                type="text"
                                class="input input-ghost w-full"
                                bind:value={details.locality}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="label text-sm" for="grid-address">Address</label>
                            <input
                                id="grid-address"
                                type="text"
                                class="input input-ghost w-full"
                                bind:value={details.address}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="label text-sm" for="grid-city">City</label>
                            <input
                                id="grid-city"
                                type="email"
                                class="input input-ghost w-full"
                                bind:value={details.city}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="label text-sm" for="grid-state">State</label>
                            <input
                                id="grid-state"
                                type="text"
                                class="input input-ghost w-full"
                                bind:value={details.state}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="label text-sm" for="grid-country">Country</label>
                            <input
                                id="grid-country"
                                type="text"
                                class="input input-ghost w-full"
                                bind:value={details.country}
                            />
                        </div>
                    </div>
                </div>

                <h6
                    class=" text-sm mt-4 pl-4 pt-3 pb-6 text-gray-400 bg-opacity-[75%] bg-base-300 rounded-t-lg font-bold uppercase"
                >
                    About Me
                </h6>
                <div class="flex flex-wrap bg-opacity-[75%] bg-base-300 rounded-b-lg">
                    <div class="w-full lg:w-12/12 px-4">
                        <div class="form-control relative w-full mb-3">
                            <label class="label text-sm" for="grid-about-me">About me</label>
                            <textarea
                                id="grid-about-me"
                                type="text"
                                class="textarea h-24 textarea-ghost"
                                rows="4"
                                bind:value={details.bio}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
