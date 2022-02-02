<script lang="ts">
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import GitHubIcon from '@iconify-icons/simple-icons/github.js';
    import GoogleIcon from '@iconify-icons/simple-icons/google.js';
    import TwitterIcon from '@iconify-icons/simple-icons/twitter.js';
    import Eye from '@iconify-icons/ic/outline-remove-red-eye.js';
    import backgroundImage from '$lib/assets/page-background.png';
    import { dev } from '$app/env';
    //const dev = true;
    import { onMount } from 'svelte';
    import { goto, prefetch } from '$app/navigation';

    // Firebase Imports
    import { getApp, initializeApp } from 'firebase/app';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import {
        getRedirectResult,
        GoogleAuthProvider,
        getAuth,
        UserCredential,
        useDeviceLanguage,
        signInWithRedirect,
        onAuthStateChanged,
        fetchSignInMethodsForEmail,
        GithubAuthProvider,
        TwitterAuthProvider,
        EmailAuthProvider,
        signInWithPopup,
        linkWithCredential,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        updateCurrentUser,
        updateProfile,
    } from 'firebase/auth';
    import authStore from '$lib/auth/authStore';

    let app;
    let auth;
    // onMount contains the return redirect result function, The rest of the logic is within a on_signin function.
    onMount(async () => {
        try {
            app = getApp();
        } catch (error) {
            dev ? console.error('getApp: error', error) : '';
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

        onAuthStateChanged(auth, (user) => {
            dev ? console.log('authState changed', user) : '';
            authStore.set({
                isLoggedIn: !!user,
                user: user,
                firebaseControlled: true,
            });
            user ? goto('/dashboard') : '';
        });
        if (result && result.user) {
            // User is signed in.
            dev ? console.log(result.user) : '';
            goto('/dashboard');
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

    // function for username validation
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

    // function for password validation
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
    <section class="relative w-full h-full pt-28 pb-40 min-h-screen overflow-y-clip">
        <div
            class="absolute top-0 w-full h-full bg-base-300 bg-no-repeat motion-safe:animate-pulse"
            style="background-image: url({backgroundImage});"
        />
        <div class="container mx-auto px-4 h-full">
            <div class="flex content-center items-center justify-center h-full">
                <div class="w-full lg:max-w-md px-4">
                    <div
                        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-base-200 border-0"
                    >
                        <div class="rounded-t mb-0 px-6 py-6">
                            <div class="text-center mb-3">
                                <span class="text-blue-100 font-bold">Sign In</span>
                            </div>
                            <div class="text-center">
                                <button
                                    class="btn btn-block bg-base-300 {is_firebase_auth_in_progress
                                        ? 'loading btn-disabled'
                                        : ''}"
                                    on:click={on_github_auth}
                                    type="button"
                                >
                                    <Icon
                                        class="inline-block w-5 mr-2 stroke-current"
                                        icon={GitHubIcon}
                                    />
                                    Github
                                </button>
                                <button
                                    class="btn btn-block mt-2 bg-base-300 {is_firebase_auth_in_progress
                                        ? 'loading btn-disabled'
                                        : ''}"
                                    on:click={on_google_auth}
                                    type="button"
                                >
                                    <Icon
                                        class="inline-block w-5 mr-2 stroke-current"
                                        icon={GoogleIcon}
                                    />
                                    Google
                                </button>
                                <button
                                    class="btn btn-block mt-2 bg-base-300 {is_firebase_auth_in_progress
                                        ? 'loading btn-disabled'
                                        : ''}"
                                    on:click={on_twitter_auth}
                                    type="button"
                                >
                                    <Icon
                                        class="inline-block w-5 mr-2 stroke-current"
                                        icon={TwitterIcon}
                                    />
                                    Twitter
                                </button>
                            </div>
                            <hr class="mt-6 border-b-1 border-primary" />
                        </div>
                        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <div class="hidden text-blue-200 text-center mb-3 font-bold">
                                <small>Or Sign In With</small>
                            </div>
                            <form>
                                <div class="my-4 bg-base-200">
                                    <div class="form-control">
                                        <label for="" class="label">
                                            <span class="label-text">Email</span>
                                        </label>
                                        <input
                                            on:blur={email_on_blur}
                                            on:keyup={email_on_keyup}
                                            bind:value={email_input}
                                            type="email"
                                            autocomplete="email"
                                            placeholder="email@domain.tld"
                                            class="input tracking-widest font-mono {email_error
                                                ? 'border border-error'
                                                : ''}"
                                        />
                                        <label
                                            for=""
                                            class="label {email_error ? '' : 'invisible'}"
                                        >
                                            <span class="label-text-alt text-error">
                                                {email_error ? email_error : 'Example String'}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div
                                    class="my-4 bg-base-200 {is_username_required ? '' : 'hidden'}"
                                >
                                    <div class="form-control">
                                        <label for="" class="label">
                                            <span class="label-text">
                                                Please enter a username below.
                                            </span>
                                        </label>
                                        <input
                                            on:blur={username_on_blur}
                                            on:keyup={username_on_keyup}
                                            bind:value={username_input}
                                            type="text"
                                            placeholder="Username"
                                            class="input tracking-widest font-mono {username_error
                                                ? 'border border-error'
                                                : ''}"
                                        />
                                        <label
                                            for=""
                                            class="label {username_error ? '' : 'invisible'}"
                                        >
                                            <span class="label-text-alt text-error">
                                                {username_error ? username_error : 'Example String'}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="relative w-full mb-1">
                                    <div class="form-control">
                                        <label for="" class="label">
                                            <span class="label-text">Password</span>
                                            <a
                                                href="/"
                                                class="label-text-alt text-xs text-gray-400"
                                            >
                                                Need help ?
                                            </a>
                                        </label>
                                        <div class="relative">
                                            <!--Custom Hack to get reactive input type and the correct value in on_blur -->

                                            <input
                                                on:blur={password_on_blur}
                                                on:input={password_on_input}
                                                on:keyup={password_on_keyup}
                                                on:keydown="{password_on_enter}"
                                                type={is_password_shown ? 'text' : 'password'}
                                                placeholder="Password"
                                                autocomplete="current-password"
                                                class="tracking-widest font-mono w-full pr-16 input {password_error
                                                    ? 'border border-error'
                                                    : 'Example String'}"
                                            />
                                            <button
                                                on:click|preventDefault={password_toggle}
                                                class="absolute top-0 right-0 rounded-l-none btn  {is_password_shown
                                                    ? 'btn-info'
                                                    : 'btn-ghost'} text-xs"
                                            >
                                                <Icon class="w-6 h-6" icon={Eye} />
                                            </button>
                                            <label
                                                for=""
                                                class="label {password_error ? '' : 'invisible'}"
                                            >
                                                <span class="label-text-alt text-error">
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
                                    <span class="hidden items-center cursor-pointer">
                                        <span class="ml-2 my-2 text-xs font-normal text-gray-400">
                                            Forgot Password ?
                                        </span>
                                    </span>
                                </div>

                                <div class="text-center">
                                    <button
                                        on:click={on_signin}
                                        class="btn btn-lg text-base bg-base-300 w-full 
                                        {email_input ? '' : ' btn-disabled '} 
                                        {password_input ? '' : ' btn-disabled '} 
                                        {is_username_required && username_input
                                            ? ' btn-disabled '
                                            : ''}
                                        {email_error ? ' btn-disabled ' : ''} 
                                        {password_error ? ' btn-disabled ' : ''} 
                                        {username_error ? ' btn-disabled ' : ''} 
                                        {is_firebase_auth_in_progress ? ' btn-disabled ' : ''} 
                                        {is_signin_loading ? ' btn-disabled loading ' : ''}"
                                        type="button"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="flex flex-wrap mt-6 relative">
                        <!-- Registration is closed except for special links. -->
                        <div class="w-1/2 text-right hidden">
                            <a href="/auth/register" class="text-blue-200">
                                <small>Create new account</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<input bind:checked={is_modal_shown} type="checkbox" id="my-modal-2" class="modal-toggle" />
<div class="modal">
    <div class="modal-box">
        <p>{modal_message}</p>
        <div class="modal-action">
            <label for="my-modal-2" class="btn">OK</label>
        </div>
    </div>
</div>
