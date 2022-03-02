<script lang="ts">
    import { dev } from '$app/env';
    import authStore from '$lib/auth/authStore';
    import Protected from '$lib/auth/Protected.svelte';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    // import { get_all_task_details } from '$lib/firebase/taskDetails';
    import { get_user_details } from '$lib/firebase/userDetails';

    import CompactTaskItem from '$lib/taskview/CompactTaskItem.svelte';
    import { taskDetails } from '$lib/types/taskDetails';
    import { getApp, initializeApp } from 'firebase/app';
    import { getAuth } from 'firebase/auth';
    import { getFirestore } from 'firebase/firestore/lite';
    import { onMount } from 'svelte';
    let tasks: { [key: string]: taskDetails } = {};
    let app;
    let auth;
    let db;
    let details;
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
        let _details = await get_user_details(app, $authStore.user, db);
        details = _details['tasks'];
        // tasks = await get_all_task_details(app, db);
    });
</script>

<svelte:head>
    <title>Task View</title>
</svelte:head>

<Protected />
<div
    class="tw-container tw-mx-auto tw-overflow-x-auto tw-bg-opacity-[75%] tw-text-center tw-backdrop-blur"
>
    <table class="tw-table-compact tw-table tw-w-full">
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Importance ?</th>
                <th>Last Date</th>
                <th>Requires Proof ?</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each Object.entries(tasks) as [id, task], i}
                <CompactTaskItem counter="{i}" task="{task}" is_complete="{id in details}" />
            {/each}
        </tbody>
        <tfoot>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Importance ?</th>
                <th>Last Date</th>
                <th>Requires Proof ?</th>
                <th></th>
            </tr>
        </tfoot>
    </table>
</div>
