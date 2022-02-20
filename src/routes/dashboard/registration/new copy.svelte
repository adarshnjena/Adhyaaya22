<script lang="ts">
    import { dev } from '$app/env';
    import { goto, prefetch } from '$app/navigation';
    import authStore from '$lib/auth/authStore';
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
    <section class="tw-relative tw-h-full tw-min-h-screen tw-w-full tw-overflow-y-clip tw-pt-28">
        <div class="tw-container tw-mx-auto tw-h-full tw-min-h-screen tw-px-4">
            <div class="tw-flex tw-h-full tw-content-center tw-items-center tw-justify-center">
                <div class="tw-w-full tw-px-4 lg:tw-max-w-md">
                    <div
                        class="tw-relative tw-mb-6 tw-flex tw-w-full tw-min-w-0 tw-flex-col tw-break-words tw-rounded-lg tw-border-0 tw-bg-base-200 tw-shadow-lg"
                    >
                        <!--Insert Registration Form here.-->
                    </div>
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
