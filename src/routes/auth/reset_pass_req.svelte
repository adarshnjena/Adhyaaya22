<script>
    import { dev } from '$app/env';
    import { goto, prefetch } from '$app/navigation';
    import backgroundImage from '$lib/assets/page-background.png';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import { getApp, initializeApp } from 'firebase/app';
    import { fetchSignInMethodsForEmail, getAuth, sendPasswordResetEmail } from 'firebase/auth';
    import { onMount } from 'svelte';

    let email_input = '';
    let email_error = '';
    let email_typing_timeout = null;

    let app;
    onMount(async () => {
        try {
            app = getApp();
        } catch (error) {
            dev ? console.log(error) : '';

            // This means the app is not yet intialized.
            app = initializeApp(firebaseConfig);
        }
        // Now we for sure have an app.

        dev ? console.log('firebaseapp', app) : '';

        // We will check if a key exists in the database, This should have been done in initialization.
    });

    async function email_on_blur(event) {
        dev ? console.log('email_on_blur', event) : '';

        const emailRegex =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email_input.length < 1) {
            email_error = 'Please enter a email.';
        } else if (!email_input.includes('@')) {
            email_error = 'Please enter a valid email.';
        } else if (!emailRegex.test(email_input)) {
            email_error = 'Please enter a valid email.';
        } else {
            email_error = '';
            const does_account_exist = await fetchSignInMethodsForEmail(getAuth(), email_input);
            dev ? console.log('does_account_exist', does_account_exist) : '';
            does_account_exist.length > 0
                ? (email_error = '')
                : (email_error = 'This account does not exist');
        }
    }
    function email_on_keyup(event) {
        clearTimeout(email_typing_timeout);
        email_typing_timeout = setTimeout(function () {
            email_on_blur(event);
        }, 500);
    }

    let is_loading = false;
    async function on_submit(event) {
        let auth = getAuth();
        if (email_error) {
            is_loading = false;
            return;
        }
        is_loading = true;
        prefetch('/auth/reset_pass_ack');
        let res = await sendPasswordResetEmail(auth, email_input);
        dev ? console.log('sendPasswordResetEmail', res) : '';
        goto('/auth/reset_pass_ack');
    }
</script>

<div
    class="tw-hero tw-min-h-screen tw-bg-base-300 "
    style="background-image: url({backgroundImage});"
>
    <div
        class="tw-hero-overlay tw-bg-base-300 tw-bg-opacity-75 tw-backdrop-blur motion-safe:tw-animate-pulse"
    ></div>
    <div class="tw-hero-content tw-text-center tw-text-neutral-content">
        <form class="tw-max-w-md">
            <div
                class="tw-card tw-w-96 tw-flex-shrink-0 tw-bg-base-200 tw-bg-opacity-75 tw-shadow-2xl tw-backdrop-blur"
            >
                <div class="tw-card-body">
                    <h1 class="tw-my-4 tw-text-left tw-text-xl">Forgot Password ?</h1>
                    <span class="tw-my-2 tw-text-left tw-text-sm">
                        Don't worry, happens to the best of us.
                    </span>
                    <hr class="tw-my-2 tw-border-b tw-border-gray-600" />
                    <div class="tw-form-control">
                        <label for="email" class="tw-label">
                            <span class="tw-label-text">Your Email</span>
                        </label>
                        <input
                            on:blur="{email_on_blur}"
                            on:keyup="{email_on_keyup}"
                            bind:value="{email_input}"
                            type="email"
                            autocomplete="email"
                            placeholder="email@domain.tld"
                            class="tw-input tw-font-mono tw-tracking-widest {email_error
                                ? 'tw-border tw-border-error'
                                : ''}"
                        />
                        <label for="" class="tw-label {email_error ? '' : 'tw-invisible'}">
                            <span class="tw-label-text-alt tw-text-error">
                                {email_error ? email_error : 'Example String'}
                            </span>
                        </label>
                    </div>
                    <div class="tw-form-control tw-mt-6">
                        <input
                            type="button"
                            on:click|preventDefault="{on_submit}"
                            value="Email me a recovery link"
                            class="tw-btn-outline tw-btn tw-btn-primary {is_loading
                                ? 'tw-btn-disabled tw-loading'
                                : ''}"
                        />
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
