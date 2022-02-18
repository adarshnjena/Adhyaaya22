<script lang="ts">
    import { dev } from '$app/env';
    import { goto, prefetch } from '$app/navigation';
    import backgroundImage from '$lib/assets/page-background.png';
    import authStore from '$lib/auth/authStore';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import Eye from '@iconify-icons/ic/outline-remove-red-eye.js';
    import GitHubIcon from '@iconify-icons/simple-icons/github.js';
    import GoogleIcon from '@iconify-icons/simple-icons/google.js';
    import TwitterIcon from '@iconify-icons/simple-icons/twitter.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    // Firebase Imports
    import { getApp, initializeApp } from 'firebase/app';
    import {
        createUserWithEmailAndPassword,
        fetchSignInMethodsForEmail,
        getAuth,
        getRedirectResult,
        GithubAuthProvider,
        GoogleAuthProvider,
        onAuthStateChanged,
        sendEmailVerification,
        signInWithEmailAndPassword,
        signInWithRedirect,
        TwitterAuthProvider,
        updateProfile,
        useDeviceLanguage,
        UserCredential,
    } from 'firebase/auth';
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
        let result: UserCredential;
        try {
            prefetch('/dashboard');
            dev ? console.log('Prefetching /dashboard') : '';
            result = await getRedirectResult(auth);
        } catch (error) {
            dev ? console.log(error.code) : '';
            if (error.code == 'auth/account-exists-with-different-credential') {
                // Ask user to signin using original method, then provide the linking functionality.
                modal_show(
                    'Please signin using the original method, you can link further accounts in the dashboard.',
                );
            }
            is_firebase_auth_in_progress = false;
        }

        // This callback runs when the AuthState has change, aka a user is signed in, out etc.
        onAuthStateChanged(auth, (user) => {
            dev ? console.log('authState changed', user) : '';
            authStore.set({
                isLoggedIn: !!user,
                user: user,
                firebaseControlled: true,
            });
            !user.emailVerified ? sendEmailVerification(user) : '';
            // we wait for the dashboard to check and then init the data.
            //user ? init_profile_data(app, auth, getDatabase(app)) : '';
            user ? goto('/dashboard') : '';
        });
        if (result && result.user) {
            // User is signed in.
            dev ? console.log(result.user) : '';
            // removed this goto, the navigation should be handled by the onAuthStateChanged callback.
            //goto('/dashboard');
        } else {
            // No user is signed in.
            dev ? console.log('User is not signed-in') : '';
            is_firebase_auth_in_progress = false;
        }
    });

    // function for password show/hide
    let is_password_shown = false;
    function password_toggle(event) {
        dev ? console.log('password_toggle', event) : '';
        is_password_shown = !is_password_shown;
    }

    // function for email validation
    let email_input = '';
    let email_error = '';
    let email_typing_timeout = null;
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
            const does_account_exist = await fetchSignInMethodsForEmail(auth, email_input);
            dev ? console.log('does_account_exist', does_account_exist) : '';
            if (does_account_exist.length <= 0) {
                // Account does not exist in our firebase instance
                is_username_required = true;
            } else {
                is_username_required = false;
            }
        }
    }
    function email_on_keyup(event) {
        clearTimeout(email_typing_timeout);
        email_typing_timeout = setTimeout(function () {
            email_on_blur(event);
        }, 500);
    }

    /* Le Username Stuff */
    let username_input;
    let username_error = '';
    let is_username_required = false;
    let username_typing_timeout = null;
    function username_on_blur(event) {
        dev ? console.log('username_on_blur', event) : '';
        if (!is_username_required) {
            return;
        }
        const special_chars = /[ `!#$%^&*()+=[\]{};':"\\|,.<>/?~]/;

        if (username_input.length <= 5) {
            username_error = 'Username must be at least 6 characters long';
        } else if (username_input.length >= 20) {
            username_error = 'Username must be less than 20 characters long';
        } else if (special_chars.test(username_input)) {
            username_error =
                "Username must not contain special characters except '-' or '_' or '@' ";
        } else if (username_input.includes('@') && username_input.indexOf('@') != 0) {
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
    /* Fin Username Stuff */
    /* Le Password Stuff */
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
    function password_on_enter(event: HTMLElementEventMap['keydown']) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            event.preventDefault();
            on_signin(event);
        }
    }

    // password input hack
    function password_on_input(event) {
        password_input = (<HTMLInputElement>event.target).value;
        password_error = '';
    }
    /* Fin Password Stuff */

    let is_signin_loading = false;
    async function on_signin(event) {
        dev ? console.log('on_signin', event) : '';
        is_signin_loading = true;
        if (is_firebase_auth_in_progress || username_error || password_error || email_error) {
            is_signin_loading = false;
            return;
        }
        auth = getAuth();
        if (is_username_required) {
            try {
                const credential = await createUserWithEmailAndPassword(
                    auth,
                    email_input,
                    password_input,
                );
                //credential.user.displayName
                updateProfile(credential.user, { displayName: username_input });
                dev ? console.log('credential', credential) : '';
            } catch (error) {
                dev ? console.log('error', error) : '';
            }
        } else {
            try {
                const credential = await signInWithEmailAndPassword(
                    auth,
                    email_input,
                    password_input,
                );
                dev ? console.log('credential', credential) : '';
            } catch (error) {
                switch (error.code) {
                    case 'auth/wrong-password':
                        password_error =
                            'Incorrect Password or Password is not set. Please use any other method to login.';
                        is_signin_loading = false;
                        break;
                    case 'auth/user-disabled':
                        email_error = 'Account Disabled. Please contact your handler.';
                        //password_error = 'User is disabled'
                        is_signin_loading = false;
                        break;
                    default:
                        dev ? console.log('signInWithEmailAndPassword: error', error) : '';
                        is_signin_loading = false;
                        break;
                }
            }
        }
    }

    // firebase auth login
    let is_firebase_auth_in_progress = true;
    function on_google_auth(event) {
        dev ? console.log('on_firebase_auth', event) : '';
        is_firebase_auth_in_progress = true;
        const provider = new GoogleAuthProvider();
        useDeviceLanguage(auth);
        signInWithRedirect(auth, provider);
    }
    function on_github_auth(event) {
        dev ? console.log('on_github_auth', event) : '';
        is_firebase_auth_in_progress = true;
        const provider = new GithubAuthProvider();
        useDeviceLanguage(auth);
        signInWithRedirect(auth, provider);
    }
    function on_twitter_auth(event) {
        dev ? console.log('on_twitter_auth', event) : '';
        is_firebase_auth_in_progress = true;
        const provider = new TwitterAuthProvider();
        useDeviceLanguage(auth);
        signInWithRedirect(auth, provider);
    }

    // modal for errors and stuff;
    let is_modal_shown = false;
    let modal_message = '';
    function modal_show(message) {
        dev ? console.log('modal_show', message) : '';
        modal_message = message;
        is_modal_shown = true;
    }
</script>

<main>
    <section class="tw-relative tw-h-full tw-min-h-screen tw-w-full tw-overflow-y-clip tw-pb-40 tw-pt-28">
        <div
            class="tw-absolute tw-top-0 tw-h-full tw-w-full tw-bg-base-300 tw-bg-no-repeat motion-safe:tw-animate-pulse"
            style="background-image: url({backgroundImage});"
        ></div>
        <div class="tw-container tw-mx-auto tw-h-full tw-px-4">
            <div class="tw-flex tw-h-full tw-content-center tw-items-center tw-justify-center">
                <div class="tw-w-full tw-px-4 lg:tw-max-w-md">
                    <div
                        class="tw-relative tw-mb-6 tw-flex tw-w-full tw-min-w-0 tw-flex-col tw-break-words tw-rounded-lg tw-border-0 tw-bg-base-200 tw-shadow-lg"
                    >
                        <div class="tw-mb-0 tw-rounded-t tw-px-6 tw-py-6">
                            <div class="tw-mb-3 tw-text-center">
                                <span class="tw-font-bold tw-text-blue-100">Sign In / Register</span>
                            </div>
                            <div class="tw-text-center">
                                <button
                                    class="tw-btn tw-btn-block tw-bg-base-300 {is_firebase_auth_in_progress
                                        ? 'tw-btn-disabled tw-loading'
                                        : ''}"
                                    on:click="{on_github_auth}"
                                    type="button"
                                >
                                    <Icon
                                        class="tw-mr-2 tw-inline-block tw-w-5 tw-stroke-current"
                                        icon="{GitHubIcon}"
                                    />
                                    Github
                                </button>
                                <button
                                    class="tw-btn tw-btn-block tw-mt-2 tw-bg-base-300 {is_firebase_auth_in_progress
                                        ? 'tw-btn-disabled tw-loading'
                                        : ''}"
                                    on:click="{on_google_auth}"
                                    type="button"
                                >
                                    <Icon
                                        class="tw-mr-2 tw-inline-block tw-w-5 tw-stroke-current"
                                        icon="{GoogleIcon}"
                                    />
                                    Google
                                </button>
                                <button
                                    class="tw-btn tw-btn-block tw-mt-2 tw-hidden tw-bg-base-300 {is_firebase_auth_in_progress
                                        ? 'tw-btn-disabled tw-loading'
                                        : ''}"
                                    on:click="{on_twitter_auth}"
                                    disabled
                                    type="button"
                                >
                                    <Icon
                                        class="tw-mr-2 tw-inline-block tw-w-5 tw-stroke-current"
                                        icon="{TwitterIcon}"
                                    />
                                    Twitter
                                </button>
                            </div>
                            <hr class="tw-border-b-1 tw-mt-6 tw-border-primary" />
                        </div>
                        <div class="tw-flex-auto tw-px-4 tw-py-10 tw-pt-0 lg:tw-px-10">
                            <div class="tw-mb-3 tw-hidden tw-text-center tw-text-xs tw-font-bold tw-text-blue-200">
                                <small>
                                    Don't have an account ? Enter your email anyway, we'll handle it
                                </small>
                            </div>
                            <form>
                                <div class="tw-my-4 tw-bg-base-200">
                                    <div class="tw-form-control">
                                        <label for="" class="tw-label">
                                            <span class="tw-label-text">Email</span>
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
                                        <label
                                            for=""
                                            class="tw-label {email_error ? '' : 'tw-invisible'}"
                                        >
                                            <span class="tw-label-text-alt tw-text-error">
                                                {email_error ? email_error : 'Example String'}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div
                                    class="tw-my-4 tw-bg-base-200 {is_username_required ? '' : 'tw-hidden'}"
                                >
                                    <div class="tw-form-control">
                                        <label for="" class="tw-label">
                                            <span class="tw-label-text">
                                                Please enter a username below.
                                            </span>
                                        </label>
                                        <input
                                            on:blur="{username_on_blur}"
                                            on:keyup="{username_on_keyup}"
                                            bind:value="{username_input}"
                                            type="text"
                                            placeholder="Username"
                                            class="tw-input tw-font-mono tw-tracking-widest {username_error
                                                ? 'tw-border tw-border-error'
                                                : ''}"
                                        />
                                        <label
                                            for=""
                                            class="tw-label {username_error ? '' : 'tw-invisible'}"
                                        >
                                            <span class="tw-label-text-alt tw-text-error">
                                                {username_error ? username_error : 'Example String'}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="tw-relative tw-mb-1 tw-w-full">
                                    <div class="tw-form-control">
                                        <label for="" class="tw-label">
                                            <span class="tw-label-text">Password</span>
                                            <a
                                                href="/auth/reset_pass_req"
                                                class="tw-label-text-alt tw-text-xs tw-text-gray-400"
                                                sveltekit:prefetch
                                            >
                                                Forgot Password ?
                                            </a>
                                        </label>
                                        <div class="tw-relative">
                                            <!--Custom Hack to get reactive input type and the correct value in on_blur -->

                                            <input
                                                on:blur="{password_on_blur}"
                                                on:input="{password_on_input}"
                                                on:keyup="{password_on_keyup}"
                                                on:keydown="{password_on_enter}"
                                                type="{is_password_shown ? 'text' : 'password'}"
                                                placeholder="Password"
                                                autocomplete="current-password"
                                                class="tw-input tw-w-full tw-pr-16 tw-font-mono tw-tracking-widest {password_error
                                                    ? 'tw-border tw-border-error'
                                                    : 'Example String'}"
                                            />
                                            <button
                                                on:click|preventDefault="{password_toggle}"
                                                class="tw-btn tw-absolute tw-top-0 tw-right-0 tw-rounded-l-none  {is_password_shown
                                                    ? 'tw-btn-warning'
                                                    : 'tw-btn-info'} tw-text-xs"
                                            >
                                                <Icon class="tw-h-6 tw-w-6" icon="{Eye}" />
                                            </button>
                                            <label
                                                for=""
                                                class="tw-label {password_error ? '' : 'tw-invisible'}"
                                            >
                                                <span class="tw-label-text-alt tw-text-error">
                                                    {password_error
                                                        ? password_error
                                                        : 'Example String'}
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <!-- Hidden Remember Me. We need people to login again and again. (inline-flex) -->
                                    <span class="tw-hidden tw-cursor-pointer tw-items-center">
                                        <span class="tw-my-2 tw-ml-2 tw-text-xs tw-font-normal tw-text-gray-400">
                                            Forgot Password ?
                                        </span>
                                    </span>
                                </div>

                                <div class="text-center">
                                    <button
                                        on:click="{on_signin}"
                                        class="tw-btn tw-btn-lg tw-w-full tw-bg-base-300 tw-text-base 
                                        {email_input ? '' : '1 tw-btn-disabled '} 
                                        {password_input ? '' : '2 tw-btn-disabled '}
                                        {email_error ? '4 tw-btn-disabled ' : ''} 
                                        {password_error ? '5 tw-btn-disabled ' : ''} 
                                        {username_error ? '6 tw-btn-disabled ' : ''} 
                                        {is_firebase_auth_in_progress ? '7 tw-btn-disabled ' : ''} 
                                        {is_signin_loading ? '8 tw-btn-disabled tw-loading ' : ''}"
                                        type="button"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="tw-relative tw-mt-6 tw-flex tw-flex-wrap">
                        <!-- Registration is closed except for special links. -->
                        <div class="tw-hidden tw-w-1/2 tw-text-right">
                            <a href="/auth/register" class="tw-text-blue-200">
                                <small>Create new account</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
