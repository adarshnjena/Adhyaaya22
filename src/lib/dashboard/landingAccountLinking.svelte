<script lang="ts">
    const dev = true;
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

<div class="tw-mt-4 tw-flex tw-flex-wrap">
    <div class="tw-mb-12 tw-w-full tw-px-4 xl:tw-mb-0">
        <div
            class="tw-relative tw-mb-6 tw-flex tw-w-full tw-min-w-0 tw-flex-col tw-break-words tw-rounded-lg tw-bg-base-200 tw-bg-opacity-[0.75] tw-shadow-lg tw-backdrop-blur"
        >
            <div class="tw-mb-0 tw-rounded-t tw-bg-transparent tw-px-4 tw-py-3">
                <div class="tw-flex tw-flex-wrap tw-items-center">
                    <div class="tw-relative tw-w-full tw-max-w-full tw-flex-1 tw-flex-grow">
                        <h6
                            class="tw-mt-4 tw-mb-1 tw-ml-2 tw-text-xl tw-font-semibold tw-uppercase tw-text-gray-400"
                        >
                            Link Accounts
                        </h6>
                    </div>
                </div>
            </div>
            <div class="tw-flex-auto tw-p-4">
                <div class="tw-relative tw-flex tw-h-max tw-flex-col">
                    <div
                        class="tw-my-2 tw-flex tw-h-min tw-w-full tw-flex-row tw-items-center tw-rounded-lg tw-bg-base-300 tw-bg-opacity-[0.75] tw-py-4 tw-px-2 tw-backdrop-blur"
                    >
                        <Icon class="tw-ml-4 tw-mr-2" icon="{GoogleIcon}" />
                        <span class="tw-flex-grow-[4] tw-text-lg">Google</span>
                        <a
                            sveltekit:prefetch
                            href="/auth/link?provider=google.com"
                            class="tw-btn tw-btn-ghost tw-btn-xs tw-mr-4 {is_google
                                ? 'tw-btn-disabled tw-bg-success tw-text-black'
                                : ''}"
                        >
                            {is_google ? 'Linked' : 'Link'}
                        </a>
                    </div>
                    <div
                        class="tw-my-2 tw-flex tw-h-max tw-w-full tw-flex-row tw-items-center tw-rounded-lg tw-bg-base-300 tw-bg-opacity-[0.75] tw-py-4 tw-px-2 tw-backdrop-blur"
                    >
                        <Icon class="tw-ml-4 tw-mr-2 tw-invert" icon="{GitHubIcon}" />
                        <span class="tw-flex-grow-[4] tw-text-lg">GitHub</span>
                        <a
                            href="/auth/link?provider=github.com"
                            class="tw-btn tw-btn-ghost tw-btn-xs tw-mr-4 {is_github
                                ? 'tw-btn-disabled tw-bg-success tw-text-black'
                                : ''}"
                        >
                            {is_github ? 'Linked' : 'Link'}
                        </a>
                    </div>
                    <!-- Removed Twitter, I don't know how to fix it for ze moment. (flex) -->
                    <div
                        class="tw-my-2 tw-hidden tw-h-max tw-w-full tw-flex-row tw-items-center tw-rounded-lg tw-bg-base-300 tw-bg-opacity-[0.75] tw-py-4 tw-px-2 tw-backdrop-blur"
                    >
                        <Icon class="tw-ml-4 tw-mr-2" icon="{TwitterIcon}" />
                        <span class="tw-flex-grow-[4] tw-text-lg">Twitter</span>
                        <a
                            href="/auth/link?provider=twitter.com"
                            class="tw-btn tw-btn-ghost tw-btn-xs tw-mr-4 {is_twitter
                                ? 'tw-btn-disabled tw-bg-success tw-text-black'
                                : ''}"
                        >
                            {is_twitter ? 'Linked' : 'Link'}
                        </a>
                    </div>
                    <div
                        class="tw-my-2 tw-flex tw-h-max tw-w-full tw-flex-row tw-items-center tw-rounded-lg tw-bg-base-300 tw-bg-opacity-[0.75] tw-py-4 tw-px-2 tw-backdrop-blur"
                    >
                        <Icon class="tw-ml-4 tw-mr-2" icon="{EmailIcon}" />
                        <span class="tw-flex-grow-[4] tw-text-lg">Email / Password</span>
                        <a
                            href="/auth/reset_pass_req"
                            class="tw-btn tw-btn-ghost tw-btn-xs tw-mr-4"
                        >
                            {is_email ? 'Reset Password' : 'Set Password'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
