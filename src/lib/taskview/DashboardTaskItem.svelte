<script lang="ts">
    import type { taskDetails } from '$lib/types/taskDetails';
    export let task: taskDetails;
    export let completed = false;
    console.log('completed', completed);
</script>

<tr class="text-xs hover">
    <th class="bg-opacity-[75%]">{task.task_name}</th>
    <td class="bg-opacity-[75%]">{task.end_date}</td>
    {#if completed}
    <td class="bg-opacity-[75%]">{`NOT SUS`}</td>
    <td class="bg-opacity-[75%]">
        <button disabled href="/dashboard/tasks/{task.task_id}/taskview">DONE</button>
    </td>
    {:else}
    <td class="bg-opacity-[75%]">{`SUS`}</td>
    <td class="bg-opacity-[75%]">
        <a class="btn btn-info btn-sm" href="/dashboard/tasks/{task.task_id}/taskview">VIEW</a>
    </td>
    {/if}
</tr>
