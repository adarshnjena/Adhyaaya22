<script lang="ts">
    import { dev } from '$app/env';

    import CompactTaskItem from '$lib/taskview/CompactTaskItem.svelte';
    import { taskDetails } from '$lib/types/taskDetails';
    import taskData from '../../../tasks.json';
    export let tasks: taskDetails[] = dev ? taskData : [];
</script>

<svelte:head>
    <title>Task View</title>
</svelte:head>

<div class="container text-center mx-auto overflow-x-auto bg-opacity-[75%]">
    <table class="table table-compact  w-full">
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
