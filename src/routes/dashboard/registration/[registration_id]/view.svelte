<script lang="ts">
    import { page } from '$app/stores';
    import Protected from '$lib/auth/Protected.svelte';
    import CAFooter from '$lib/CAFooter.svelte';
    import type { taskDetails } from '$lib/types/taskDetails';
    import { get_task_details } from '$lib/firebase/taskDetails';
    import { get_user_details, update_user_task_details } from '$lib/firebase/userDetails';
    import { onMount } from 'svelte';
    import { getApp, initializeApp } from 'firebase/app';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import { dev } from '$app/env';
    import { getAuth } from 'firebase/auth';
    import { getFirestore } from 'firebase/firestore/lite';
    import authStore from '$lib/auth/authStore';
    import { goto, prefetch } from '$app/navigation';
    import type { registrationDetails } from '$lib/types/registrationDetails';
    import { event_name_mapping, get_user_registrations } from '$lib/firebase/registrationDetails';
    import RegistrationViewItem from '$lib/dashboard/RegistrationViewItem.svelte';
    let registration: registrationDetails;
    const [user_id, event_code, timestamp] = $page.params['registration_id'].split('-');
    let app;
    let auth;
    let db;

    const display_fields = [
        'registration_id',
        'event_code',
        "name",
        "email",
        "phone",
        "team", 
        "transaction_status",
    ]

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
        auth = getAuth();
        db = getFirestore();
        
        const registration_data = await get_user_registrations(app, auth, db);
        registration = registration_data[event_code];
        // @ts-ignore
        registration = Object.keys(registration)
            .sort()
            .reduce((obj, key) => {
                if (display_fields.includes(key)) {
                    obj[key] = registration[key];
                }
                // obj[key] = registration[key] ;
                return obj;
            }, {});
        dev ? console.log('registration', registration) : '';
    });
</script>

<svelte:head>
    <title>Registration {$page.params['registration_id']}</title>
</svelte:head>

<Protected />
<div class="tw-flex tw-min-h-screen tw-justify-center">
    <div class="tw-mx-auto tw-mt-[2.5rem] tw-w-full tw-px-2 md:tw-w-3/4">
        <div class="tw-container tw-w-full">
            <div
                class="tw-container tw-card-bordered tw-card tw-bg-base-100 tw-bg-opacity-[75%] tw-text-center tw-backdrop-blur"
            >
                <div class="tw-card-body">
                    <h2 class="tw-card-title">
                        Thank You for registering for {event_name_mapping[registration?.event_code]}
                        !
                    </h2>
                    <span class="tw-mx-auto tw-mb-10">
                        You may show this page as proof of registration.
                    </span>
                    <table class="tw-w-full tw-border-collapse tw-items-center tw-bg-transparent">
                        <thead class="tw-thead-light">
                            <tr>
                                <th
                                    class="tw-whitespace-nowrap tw-px-6 tw-py-3 tw-text-left tw-align-middle tw-text-xs tw-font-semibold tw-uppercase"
                                >
                                    Data Point
                                </th>
                                <th
                                    class="tw-whitespace-nowrap tw-px-6 tw-py-3 tw-text-left tw-align-middle tw-text-xs tw-font-semibold tw-uppercase"
                                >
                                    Registered Value
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {#if registration}
                                {#each Object.entries(registration) as [key, value]}
                                    <RegistrationViewItem key="{key}" value="{value}" />
                                {/each}
                            {/if}
                        </tbody>
                    </table>
                    {#if registration?.transaction_status != 'PAID'}
                        <a
                            href="mailto:parapallidev@gmail.com"
                            class="tw-btn tw-btn-primary tw-btn-block tw-mt-10"
                        >
                            CONTACT SUPPORT
                        </a>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>

<CAFooter />
