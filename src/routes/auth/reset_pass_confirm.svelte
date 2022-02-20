<script lang="ts">
    import { dev } from '$app/env';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import backgroundImage from '$lib/assets/page-background.png';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import Eye from '@iconify-icons/ic/outline-remove-red-eye.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import { getApp, initializeApp } from 'firebase/app';
    import { confirmPasswordReset, getAuth } from 'firebase/auth';
    import { onMount } from 'svelte';

    let oob_code = $page.url.searchParams.get('oobCode');
    let app;
    let auth;
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

    let password_input = '';
    let password_error = '';
    let password_typing_timeout = null;
    function password_on_blur(event) {
        dev ? console.log('password_on_blur', event) : '';

        if (password_input.length <= 5) {
            password_error = 'Password must be at least 6 characters long';
        } else {
            password_error = '';
        }
    }

    function password_on_keyup(event) {
        clearTimeout(password_typing_timeout);
        if (event.key === 'Enter' || event.keyCode === 13) {
            return;
        }
        password_typing_timeout = setTimeout(function () {
            password_on_blur(event);
        }, 500);
    }
    async function password_on_enter(event: HTMLElementEventMap['keydown']) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            event.preventDefault();
        }
    }

    let is_password_shown = false;
    function password_toggle(event) {
        dev ? console.log('password_toggle', event) : '';
        is_password_shown = !is_password_shown;
    }
    // password input hack
    function password_on_input(event) {
        password_input = (<HTMLInputElement>event.target).value;
        password_error = '';
    }
    let is_loading = false;
    async function on_submit(event) {
        is_loading = true;
        event.preventDefault();
        if (password_error) {
            is_loading = false;
            return;
        }
        let res = await confirmPasswordReset(auth, oob_code, password_input);
        dev ? console.log('confirmPasswordReset', res) : '';
        goto('/auth/login');
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
                    <h1 class="tw-my-4 tw-text-left tw-text-xl">Recover Password</h1>
                    <span class="tw-my-2 tw-text-left tw-text-sm">Enter a new password</span>
                    <hr class="tw-my-4 tw-border-b tw-border-gray-600" />
                    <div class="form-control hidden">
                        <label for="email" class="label">
                            <span class="label-text">Recovery Code</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="email@domain.tld"
                            class="input-bordered input"
                        />
                    </div>
                    <div class="form-control relative">
                        <input
                            on:blur="{password_on_blur}"
                            on:input="{password_on_input}"
                            on:keyup="{password_on_keyup}"
                            on:keydown="{password_on_enter}"
                            type="{is_password_shown ? 'text' : 'password'}"
                            placeholder="Password"
                            autocomplete="current-password"
                            class="input w-full pr-16 font-mono tracking-widest {password_error
                                ? 'border border-error'
                                : 'Example String'}"
                        />
                        <button
                            on:click|preventDefault="{password_toggle}"
                            class="absolute top-0 right-0 rounded-l-none btn  {is_password_shown
                                ? 'btn-warning'
                                : 'btn-info'} text-xs"
                        >
                            <Icon class="h-6 w-6" icon="{Eye}" />
                        </button>
                        <label for="" class="label {password_error ? '' : 'invisible'}">
                            <span class="label-text-alt text-error">
                                {password_error ? password_error : ''}
                            </span>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <input
                            type="button"
                            value="Reset Password"
                            on:click="{on_submit}"
                            class="btn-primary btn {is_loading ? 'loading btn-disabled' : ''}"
                        />
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
