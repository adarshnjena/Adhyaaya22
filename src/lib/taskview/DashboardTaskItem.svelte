<script lang="ts">
    import InfoBadge from '$lib/infoBadge.svelte';
    import type { taskDetails } from '$lib/types/taskDetails';
    import WarningBadge from '$lib/warningBadge.svelte';
    export let task: taskDetails;
    export let completed = false;
    let date = new Date(0);
    date.setTime(task?.end_date * 1000);
    let printable_date =
        date.toLocaleDateString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' }) +
        ' ' +
        date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
    console.log('completed', completed);
</script>

<tr class="text-xs hover">
    <th class="bg-opacity-[75%]">{task.task_name}</th>
    <td class="bg-opacity-[75%]">{printable_date}</td>
    {#if completed}
        <td class="bg-opacity-[75%]"><InfoBadge text="{'Completed'}" /></td>
        <td class="bg-opacity-[75%]">
            <button disabled href="/dashboard/tasks/{task.task_id}/taskview">DONE</button>
        </td>
    {:else}
        <td class="bg-opacity-[75%]"><WarningBadge text="{'Not Completed'}" /></td>
        <td class="bg-opacity-[75%]">
            <a class="btn btn-info btn-sm" href="/dashboard/tasks/{task.task_id}/taskview">VIEW</a>
        </td>
    {/if}
</tr>
