<script lang="ts">
    import { dev } from '$app/env';
    import type { profileDetails } from '$lib/types/profileDetails';
    import type { FirebaseApp } from 'firebase/app';
    //import type { Auth } from 'firebase/auth';
    import type { Firestore } from 'firebase/firestore/lite';
    import { update_user_details } from '$lib/firebase/userDetails';
    import authStore from '$lib/auth/authStore';

    export let app: FirebaseApp = null;
    //export let auth: Auth = null;
    export let database: Firestore = null;

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
    export let handle_update_click;
    async function on_update_click(event) {
        console.log('on_update_click', event);
        if (!mobile_error) {
            is_updating = true;
            button_text = 'Updating...';
            await update_user_details(app, $authStore.user, database, details);
            is_updating = false;
            button_text = '✓ Info Updated';
            button_status = 'tw-btn-success';
            await handle_update_click(event);
            setTimeout(return_to_init_1, 3000);
        }
    }
    let button_text = 'Update Info';
    let button_status = 'tw-btn-info';
    function return_to_init_1() {
        button_text = 'Update Info';
        button_status = 'tw-btn-info';
    }
</script>

<div class="px-4 tw-w-full">
    <div
        class="tw-relative tw-mb-6 tw-flex tw-w-full tw-min-w-0 tw-flex-col tw-break-words tw-rounded-lg tw-border-0 tw-bg-base-200 tw-bg-opacity-[75%] tw-shadow-lg tw-backdrop-blur"
    >
        <div class="tw-mb-0 tw-rounded-t tw-px-6 tw-py-6">
            <div class="tw-flex tw-justify-between tw-text-center">
                <span class="tw-text-xl tw-font-bold tw-text-gray-400">Your Details</span>
                <button
                    class="tw-btn {button_status} tw-btn-sm {username_error
                        ? 'tw-btn-disabled'
                        : ''}
                    {mobile_error ? 'tw-btn-disabled' : ''} 
                    {is_updating ? 'tw-btn-disabled tw-loading' : ''}"
                    disabled="{!!is_updating || !!mobile_error || !!username_error}"
                    on:click="{on_update_click}"
                    type="button"
                >
                    {button_text}
                </button>
            </div>
        </div>
        <div class="tw-flex-auto tw-px-4 tw-py-10 tw-pt-0 lg:tw-px-10">
            <form>
                <h6
                    class="tw-w-full tw-rounded-t-lg tw-bg-base-300 tw-bg-opacity-[75%] tw-pl-4 tw-pt-3 tw-pb-6 tw-text-sm tw-font-bold tw-uppercase tw-text-gray-400 tw-backdrop-blur"
                >
                    User Information
                </h6>
                <div
                    class="tw-flex tw-flex-wrap tw-rounded-b-lg tw-bg-base-300 tw-bg-opacity-[75%] tw-backdrop-blur"
                >
                    <div class="tw-w-full tw-px-4 lg:tw-w-6/12">
                        <div class="tw-relative tw-mb-3 tw-w-full">
                            <label
                                class="tw-label tw-text-sm {username_error ? 'tw-text-error' : ''}"
                                for="grid-username"
                            >
                                {username_error ? username_error : 'Username'}
                            </label>
                            <input
                                id="grid-username"
                                type="text"
                                class=" tw-input tw-w-full {username_error
                                    ? 'tw-input-error'
                                    : ''}"
                                bind:value="{details.username}"
                                on:keyup="{username_on_keyup}"
                            />
                        </div>
                    </div>
                    <div class="tw-w-full tw-px-4 lg:tw-w-6/12">
                        <div class="tw-relative tw-mb-3 tw-w-full">
                            <label class="tw-label tw-text-sm" for="grid-email">
                                Email address
                            </label>
                            <input
                                id="grid-email"
                                type="email"
                                disabled
                                class=" tw-input-disabled tw-input tw-w-full"
                                bind:value="{details.email}"
                            />
                        </div>
                    </div>
                    <div class="tw-w-full tw-px-4 lg:tw-w-6/12">
                        <div class="tw-relative tw-mb-3 tw-w-full">
                            <label class="tw-label tw-text-sm" for="grid-first-name">
                                First Name
                            </label>
                            <input
                                id="grid-first-name"
                                type="text"
                                class=" tw-input tw-w-full"
                                bind:value="{details.first_name}"
                            />
                        </div>
                    </div>
                    <div class="tw-w-full tw-px-4 lg:tw-w-6/12">
                        <div class="tw-relative tw-mb-3 tw-w-full">
                            <label class="tw-label tw-text-sm" for="grid-last-name">
                                Last Name
                            </label>
                            <input
                                id="grid-last-name"
                                type="text"
                                class=" tw-input tw-w-full"
                                bind:value="{details.last_name}"
                            />
                        </div>
                    </div>
                </div>

                <h6
                    class=" tw-mt-4 tw-rounded-t-lg tw-bg-base-300 tw-bg-opacity-[75%] tw-pl-4 tw-pt-3 tw-pb-6 tw-text-sm tw-font-bold tw-uppercase tw-text-gray-400 tw-backdrop-blur"
                >
                    Contact Information
                </h6>
                <div
                    class="tw-flex tw-flex-wrap tw-rounded-b-lg tw-bg-base-300 tw-bg-opacity-[75%] tw-backdrop-blur"
                >
                    <div class="tw-w-full tw-px-4 lg:tw-w-6/12">
                        <div class="tw-relative tw-mb-3 tw-w-full">
                            <label
                                class="tw-label tw-text-sm {mobile_error ? 'tw-text-error' : ''}"
                                for="grid-mobile-number"
                            >
                                {mobile_error ? mobile_error : 'Mobile Number'}
                            </label>
                            <input
                                id="grid-mobile-number"
                                type="text"
                                class=" tw-input tw-w-full {mobile_error
                                    ? 'tw-input-error'
                                    : ''}"
                                bind:value="{details.mobile_number}"
                                on:blur="{mobile_on_blur}"
                            />
                        </div>
                    </div>
                    <div class="tw-w-full tw-px-4 lg:tw-w-6/12">
                        <div class="tw-relative tw-mb-3 tw-w-full">
                            <label class="tw-label tw-text-sm" for="grid-locality">
                                Area/Locality
                            </label>
                            <input
                                id="grid-locality"
                                type="text"
                                class=" tw-input tw-w-full"
                                bind:value="{details.locality}"
                            />
                        </div>
                    </div>
                    <div class="lg:tw-w-12/12 tw-w-full tw-px-4">
                        <div class="tw-relative tw-mb-3 tw-w-full">
                            <label class="tw-label tw-text-sm" for="grid-address">Address</label>
                            <input
                                id="grid-address"
                                type="text"
                                class=" tw-input tw-w-full"
                                bind:value="{details.address}"
                            />
                        </div>
                    </div>
                    <div class="tw-w-full tw-px-4 lg:tw-w-4/12">
                        <div class="tw-relative tw-mb-3 tw-w-full">
                            <label class="tw-label tw-text-sm" for="grid-city">City</label>
                            <input
                                id="grid-city"
                                type="email"
                                class=" tw-input tw-w-full"
                                bind:value="{details.city}"
                            />
                        </div>
                    </div>
                    <div class="tw-w-full tw-px-4 lg:tw-w-4/12">
                        <div class="tw-relative tw-mb-3 tw-w-full">
                            <label class="tw-label tw-text-sm" for="grid-state">State</label>
                            <input
                                id="grid-state"
                                type="text"
                                class=" tw-input tw-w-full"
                                bind:value="{details.state}"
                            />
                        </div>
                    </div>
                    <div class="tw-w-full tw-px-4 lg:tw-w-4/12">
                        <div class="tw-relative tw-mb-3 tw-w-full">
                            <label class="tw-label tw-text-sm" for="grid-country">Country</label>
                            <input
                                id="grid-country"
                                type="text"
                                class=" tw-input tw-w-full"
                                bind:value="{details.country}"
                            />
                        </div>
                    </div>
                </div>

                <h6
                    class=" tw-mt-4 tw-rounded-t-lg tw-bg-base-300 tw-bg-opacity-[75%] tw-pl-4 tw-pt-3 tw-pb-6 tw-text-sm tw-font-bold tw-uppercase tw-text-gray-400 tw-backdrop-blur"
                >
                    About Me
                </h6>
                <div
                    class="tw-flex tw-flex-wrap tw-rounded-b-lg tw-bg-base-300 tw-bg-opacity-[75%] tw-backdrop-blur"
                >
                    <div class="lg:tw-w-12/12 tw-w-full tw-px-4">
                        <div class="tw-form-control tw-relative tw-mb-3 tw-w-full">
                            <label class="tw-label tw-text-sm" for="grid-about-me">About me</label>
                            <textarea
                                id="grid-about-me"
                                type="text"
                                class="tw-textarea-ghost tw-textarea tw-h-24"
                                rows="4"
                                bind:value="{details.bio}"
                            ></textarea>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
