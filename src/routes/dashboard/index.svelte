<script lang="ts">
    import { dev } from '$app/env';
    import authStore from '$lib/auth/authStore';
    import Protected from '$lib/auth/Protected.svelte';
    import AccountLinking from '$lib/dashboard/AccountLinking.svelte';
    import DashboardContact from '$lib/dashboard/dashboardContact.svelte';
    import DashboardProfile from '$lib/dashboard/dashboardProfileSettings.svelte';
    import InfoTable from '$lib/dashboard/InfoTable.svelte';
    import SimpleStat from '$lib/dashboard/SimpleStats.svelte';
    import TaskSummaryTable from '$lib/dashboard/TaskSummaryTable.svelte';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import Footer from '$lib/Footer.svelte';
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
    let contact: contactDetails = {
        name: 'Contact Name',
        email: 'contact_email@domain.tld',
        mobile_number: '+91 5542342345',
        picture_url: 'https://picsum.photos/200',
        bio: 'Hello! I am Contact Name. I am your point of contact for anything related to adhyaaya. Please feel free to reach out to me in case of any issues. My preffered mode of contact is email.',
        position: 'Technical Lead, Adhyaaya-22 | GCOEN',
    };
    let tasks: { [key: string]: taskDetails };
    let profile_tasks: { [key: string]: boolean } = {};
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
        details = _details['profile'];
        dev ? console.log('details', _details) : '';
        // If the user has no profile details, then set them up.
        if (!_details) {
            await set_initial_user_details(app, $authStore.user, db);
            _details = await get_user_details(app, $authStore.user, db);
            details = _details['profile'];
            dev ? console.log('!details', details) : '';
        }
        // Get the current contact details.
        // TODO: Finish the contact details
        // Get 5 important, future tasks.
        profile_tasks = _details['tasks']
        tasks = await get_n_task_details(app, db, 5);
    });
    async function handle_update_click(event) {
        let _details = await get_user_details(app, $authStore.user, db);
        details = _details['profile'];
        profile_tasks = _details['tasks']
        dev ? console.log('updated_details', details) : '';
    }
</script>

<svelte:head>
    <title>Dashboard</title>
</svelte:head>

<Protected />
<div class="h-full">
    <div class="w-full px-2 mx-auto md:px-16 md:w-5/6 mt-18">
        <div class="w-full">
            <!--Stats Row-->
            <div class="flex flex-wrap mt-4">
                <SimpleStat
                    title="CA Code"
                    value="78729"
                    positive="{true}"
                    subtitle=""
                    icon="{shareIcon}"
                />
                <SimpleStat
                    title="Account Status"
                    value="Verified"
                    positive="{true}"
                    subtitle=""
                    icon="{verifiedIcon}"
                />
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
            </div>
            <!-- Level 0 -->
            <!-- Level 1 -->
            <div class="flex flex-wrap mt-4">
                <TaskSummaryTable tasks="{tasks}" profile_tasks="{profile_tasks}" />
                <InfoTable />
            </div>
            <div class="flex flex-wrap mt-4">
                <DashboardProfile
                    app="{app}"
                    database="{db}"
                    details="{details}"
                    handle_update_click="{handle_update_click}"
                />
                <DashboardContact contact="{contact}" />
            </div>
            <AccountLinking />
        </div>
    </div>
    <Footer />
</div>
