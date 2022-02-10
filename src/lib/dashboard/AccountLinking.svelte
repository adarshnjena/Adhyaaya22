<script lang="ts">
    import { dev } from '$app/env';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import { getApp, initializeApp } from 'firebase/app';
    import { fetchSignInMethodsForEmail, getAuth } from 'firebase/auth';
    import { onMount } from 'svelte';
    import GoogleIcon from '@iconify/icons-logos/google-icon.js';
    import GitHubIcon from '@iconify/icons-logos/github-icon.js';
    import TwitterIcon from '@iconify/icons-logos/twitter.js';
    import EmailIcon from '@iconify-icons/ic/email.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import authStore from '$lib/auth/authStore';

    let auth;
    let app;
    let methods: string[] = [];
    let is_google = false;
    let is_github = false;
    let is_twitter = false;
    let is_email = false;
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
        methods = await fetchSignInMethodsForEmail(auth, $authStore.user.email);
        dev ? console.log('login methods', methods) : '';
        is_google = methods.includes('google.com');
        is_github = methods.includes('github.com');
        is_twitter = methods.includes('twitter.com');
        is_email = methods.includes('password');
        dev ? console.log(is_google, is_github, is_twitter, is_email) : '';
    });
</script>

<div class="flex flex-wrap mt-4">
    <div class="w-full px-4 mb-12 2xl:w-8/12 xl:mb-0">
        <div
            class="relative rounded-lg flex flex-col min-w-0 break-words bg-base-200 bg-opacity-[0.75] w-full mb-6 shadow-lg"
        >
            <div class="px-4 py-3 mb-0 bg-transparent rounded-t">
                <div class="flex flex-wrap items-center">
                    <div class="relative flex-1 flex-grow w-full max-w-full">
                        <h6
                            class="mt-4 mb-1 ml-2 text-xl font-semibold uppercase text-blueGray-400"
                        >
                            Link Accounts
                        </h6>
                    </div>
                </div>
            </div>
            <div class="flex-auto p-4">
                <div class="relative flex flex-col h-max">
                    <div
                        class="flex flex-row items-center bg-base-300 w-full h-min py-4 my-2 px-2 rounded-lg bg-opacity-[0.75]"
                    >
                        <Icon class="ml-4 mr-2" icon="{GoogleIcon}" />
                        <span class="flex-grow-[4] text-lg">Google</span>
                        <a
                            sveltekit:prefetch
                            href="/auth/link?provider=google.com"
                            class="btn btn-ghost btn-xs mr-4 {is_google
                                ? 'btn-disabled bg-success text-black'
                                : ''}"
                        >
                            {is_google ? 'Linked' : 'Link'}
                        </a>
                    </div>
                    <div
                        class="flex flex-row items-center bg-base-300 w-full h-max py-4 my-2 px-2 rounded-lg bg-opacity-[0.75]"
                    >
                        <Icon class="ml-4 mr-2 invert" icon="{GitHubIcon}" />
                        <span class="flex-grow-[4] text-lg">GitHub</span>
                        <a
                            href="/auth/link?provider=github.com"
                            class="mr-4 btn btn-ghost btn-xs {is_github
                                ? 'btn-disabled bg-success text-black'
                                : ''}"
                        >
                            {is_github ? 'Linked' : 'Link'}
                        </a>
                    </div>
                    <!-- Removed Twitter, I don't know how to fix it for ze moment. (flex) -->
                    <div
                        class="hidden flex-row items-center bg-base-300 w-full h-max py-4 my-2 px-2 rounded-lg bg-opacity-[0.75]"
                    >
                        <Icon class="ml-4 mr-2" icon="{TwitterIcon}" />
                        <span class="flex-grow-[4] text-lg">Twitter</span>
                        <a
                            href="/auth/link?provider=twitter.com"
                            class="mr-4 btn btn-ghost btn-xs {is_twitter
                                ? 'btn-disabled bg-success text-black'
                                : ''}"
                        >
                            {is_twitter ? 'Linked' : 'Link'}
                        </a>
                    </div>
                    <div
                        class="flex flex-row items-center bg-base-300 w-full h-max py-4 my-2 px-2 rounded-lg bg-opacity-[0.75]"
                    >
                        <Icon class="ml-4 mr-2" icon="{EmailIcon}" />
                        <span class="flex-grow-[4] text-lg">Email / Password</span>
                        <a href="/auth/reset_pass_req" class="mr-4 btn btn-ghost btn-xs">
                            {is_email ? 'Reset Password' : 'Set Password'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
