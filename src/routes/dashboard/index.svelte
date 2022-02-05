<script>
    import { dev } from '$app/env';
    import authStore from '$lib/auth/authStore';
    import Protected from '$lib/auth/Protected.svelte';
    import AccountLinking from '$lib/dashboard/AccountLinking.svelte';
    import DashboardContact from '$lib/dashboard/dashboardContact.svelte';
    import DashboardProfile from '$lib/dashboard/dashboardProfileSettings.svelte';
    import { profileStore, tasksStore } from '$lib/dashboard/dashboardStore';
    import InfoTable from '$lib/dashboard/InfoTable.svelte';
    import { init_profile_data } from '$lib/dashboard/init_data_db';
    import SimpleStat from '$lib/dashboard/SimpleStats.svelte';
    import TaskSummaryTable from '$lib/dashboard/TaskSummaryTable.svelte';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import Footer from '$lib/Footer.svelte';
    import shareIcon from '@iconify-icons/ic/baseline-share.js';
    import verifiedIcon from '@iconify-icons/ic/baseline-verified-user.js';
    import tasksCompletedIcon from '@iconify-icons/ic/outline-check-box.js'
    import tasksNotCompletedIcon from '@iconify-icons/ic/outline-check-box-outline-blank.js'
    import { getApp, initializeApp } from 'firebase/app';
    import { getDatabase, onValue, ref } from 'firebase/database';
    import { onMount } from 'svelte';
import { getAuth } from 'firebase/auth';
    let app;
    let auth;
    let db;

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
        db = getDatabase();
        let userProfileRef = ref(db, `users/${$authStore.user.uid}/profile`);
        let userTasksRef = ref(db, `users/${$authStore.user.uid}/tasks`);
        let tasksRef = ref(db, '/tasklist');
        onValue(userProfileRef, async (snapshot) => {
            if (!snapshot.exists()) {
                await init_profile_data(app, auth, db);
            }
            $profileStore = snapshot.val();
        });
        onValue(userTasksRef, async (snapshot) => {
            $tasksStore = snapshot.val();
        });
        onValue(tasksRef, async (snapshot) => {
            $tasksStore = snapshot.val();
        });
    });

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
                <TaskSummaryTable />
                <InfoTable />
            </div>
            <div class="flex flex-wrap mt-4">
                <DashboardProfile />
                <DashboardContact />
            </div>
            <AccountLinking />
        </div>
    </div>
    <Footer />
</div>
