<script lang="ts">
    import { dev } from '$app/env';
    import authStore from '$lib/auth/authStore';
    import Protected from '$lib/auth/Protected.svelte';
    import AccountLinking from '$lib/dashboard/landingAccountLinking.svelte';
    //import DashboardContact from '$lib/dashboard/dashboardContact.svelte';
    import DashboardProfile from '$lib/dashboard/landingDashboardProfileSettings.svelte';
    //import InfoTable from '$lib/dashboard/InfoTable.svelte';
    import SimpleStat from '$lib/dashboard/landingSimpleStats.svelte';
    import TaskSummaryTable from '$lib/dashboard/landingTaskSummaryTable.svelte';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import CAFooter from '$lib/CAFooter.svelte';
    import shareIcon from '@iconify-icons/ic/baseline-share.js';
    import verifiedIcon from '@iconify-icons/ic/baseline-verified-user.js';
    import tasksCompletedIcon from '@iconify-icons/ic/outline-check-box.js';
    import tasksNotCompletedIcon from '@iconify-icons/ic/outline-check-box-outline-blank.js';
    import { getApp, initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore/lite';
    import { onMount } from 'svelte';
    import { getAuth } from 'firebase/auth';
    import type { profileDetails } from '$lib/types/profileDetails';
    import type { contactDetails } from '$lib/types/contactDetails';
    import { get_user_details, set_initial_user_details } from '$lib/firebase/userDetails';
    import type { taskDetails } from '$lib/types/taskDetails';
    import { get_n_task_details } from '$lib/firebase/taskDetails';
    import { eventDetails } from '$lib/types/eventDetails';
    import { get_n_event_details } from '$lib/firebase/eventDetails';
    import _contact from '../../contact.json';
    import { get_random_loading_message } from '$lib/loading';
    import { registrationDetails } from '$lib/types/registrationDetails';
import { get_user_registrations } from '$lib/firebase/registrationDetails';

    let dataPromiseResolve;
    const dataPromise = new Promise((resolve, reject) => {
        dataPromiseResolve = resolve;
    });
    let app;
    let auth;
    let db;
    // Stuff below is for external refernce to child components.
    let details: profileDetails = {
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
    //let contact: contactDetails = _contact;
    //let events: { [key: string]: eventDetails };
    let registrations: { [key: string]: registrationDetails };
    //let profile_tasks: { [key: string]: boolean } = {};
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
        // get and assemble details about the user, Into a details object, then get the contact assigned to them.
        auth = getAuth();
        db = getFirestore();
        // Get the user's profile details.

        let _details = await get_user_details(app, $authStore.user, db);
        if (!_details) {
            await set_initial_user_details(app, $authStore.user, db, auth.currentUser.displayName);
            _details = await get_user_details(app, $authStore.user, db);
            details = _details['profile'];
            dev ? console.log('!details', details) : '';
        } else {
            details = _details['profile'];
            dev ? console.log('details', _details) : '';
        }
        // If the user has no profile details, then set them up.
        // Get the current contact details.
        // TODO: Finish the contact details
        // Get 5 important, future tasks.
        //profile_tasks = _details['tasks'];
        //tasks = await get_n_task_details(app, db, 5);
        //events = await get_n_event_details(app, db, 5);
        registrations = await get_user_registrations(app, auth, db)
        dataPromiseResolve();
    });
    async function handle_update_click(event) {
        let _details = await get_user_details(app, $authStore.user, db);
        details = _details['profile'];
        //profile_tasks = _details['tasks'];
        dev ? console.log('updated_details', details) : '';
    }
</script>

<svelte:head>
    <title>Registration Dashboard</title>
</svelte:head>

<Protected />
<div class="tw-h-full">
    <div class="tw-mt-18 tw-mx-auto tw-w-full tw-px-2 md:tw-w-5/6 md:tw-px-16">
        <div class="tw-w-full">
            <!--Stats Row-->
            <div class="tw-mt-4 tw-flex tw-flex-wrap tw-justify-between">
                <!--
                <SimpleStat
                    title="Tasks Completed"
                    value="345"
                    positive="{true}"
                    subtitle=""
                    icon="{tasksCompletedIcon}"
                />
                <SimpleStat
                    title="Tasks Remaining"
                    value="345"
                    positive="{false}"
                    subtitle=""
                    icon="{tasksNotCompletedIcon}"
                />
                -->
            </div>
            <!-- Level 0 -->
            <!-- Level 1 -->
            {#await dataPromise}
                <div class="tw-mt-4 tw-flex tw-flex-wrap">
                    <SimpleStat
                        title="{get_random_loading_message()}"
                        value="LOADING"
                        positive="{false}"
                        subtitle="Please wait..."
                        icon="{tasksNotCompletedIcon}"
                    />
                </div>
            {:then value}
                <div class="tw-mt-4 tw-flex tw-flex-wrap">
                    <TaskSummaryTable registrations="{registrations}" />
                </div>
                <div class="tw-mt-4 tw-flex tw-flex-wrap">
                    <DashboardProfile
                        app="{app}"
                        database="{db}"
                        details="{details}"
                        handle_update_click="{handle_update_click}"
                    />
                </div>
                <AccountLinking />
            {/await}
        </div>
    </div>
    <CAFooter />
</div>
