<script>
    import { dev } from '$app/env';
    import authStore from '$lib/auth/authStore';
    import Protected from '$lib/auth/Protected.svelte';
    import AccountLinking from '$lib/dashboard/AccountLinking.svelte';
    import DashboardContact from '$lib/dashboard/dashboardContact.svelte';
    import DashboardProfile from '$lib/dashboard/dashboardProfileSettings.svelte';
import { profileStore, tasksStore } from '$lib/dashboard/dashboardStore';
    import InfoTable from '$lib/dashboard/InfoTable.svelte';
    import SimpleStat from '$lib/dashboard/SimpleStats.svelte';
    import TaskSummaryTable from '$lib/dashboard/TaskSummaryTable.svelte';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import Footer from '$lib/Footer.svelte';
    import shareIcon from '@iconify-icons/ic/share.js';
    import { getApp, initializeApp } from 'firebase/app';
    import { getDatabase, onValue, ref } from 'firebase/database';
    import { onMount } from 'svelte';
    let app;
    let auth;
    let db;

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
        // get and assemble details about the user, Into a details object, then get the contact assigned to them.
        db = getDatabase();
        let userProfileRef = ref(db, `users/${$authStore.user.uid}/profile`);
        let userTasksRef = ref(db, `users/${$authStore.user.uid}/tasks`);
        let tasksRef = ref(db, '/tasklist');
        onValue(userProfileRef, (snapshot) => {
            if (!snapshot.exists()) {
                
            }
            $profileStore = snapshot.val();
        });
        onValue(userTasksRef, (snapshot) => {
            $tasksStore = snapshot.val();
        });
        onValue(tasksRef, (snapshot) => {
            $tasksStore = snapshot.val();
        });
    });
</script>

<svelte:head>
    <title>Dashboard</title>
</svelte:head>

<Protected />
<div class="h-full">
    <div class="md:px-16 px-2 mx-auto md:w-5/6 w-full mt-18">
        <div class="w-full">
            <!--Stats Row-->
            <div class="flex flex-wrap  mt-4">
                <SimpleStat
                    title="CA Code"
                    value="78729"
                    positive="{true}"
                    subtitle="Use this code to refer others."
                    icon="{shareIcon}"
                />
                <SimpleStat />
                <SimpleStat />
                <SimpleStat />
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
