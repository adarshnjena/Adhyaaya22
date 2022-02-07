<script lang="ts">
    import { dev } from '$app/env';
    import Protected from '$lib/auth/Protected.svelte';

    import CompactTaskItem from '$lib/taskview/CompactTaskItem.svelte';
    import { taskDetails } from '$lib/types/taskDetails';
    export let tasks: taskDetails[] = [];
</script>

<svelte:head>
    <title>Task View</title>
</svelte:head>

<Protected />
<div class="container text-center mx-auto overflow-x-auto bg-opacity-[75%]">
    <table class="table w-full table-compact">
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
            {#each tasks as task, i}
                <CompactTaskItem counter="{i}" task="{task}" />
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
