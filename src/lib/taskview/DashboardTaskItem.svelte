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

<tr class="tw-hover tw-text-xs">
    <th class="tw-bg-opacity-[75%] tw-backdrop-blur">{task.task_name}</th>
    <td class="tw-bg-opacity-[75%] tw-backdrop-blur">{printable_date}</td>
    {#if completed}
        <td class="tw-bg-opacity-[75%] tw-backdrop-blur"><InfoBadge text="{'Completed'}" /></td>
        <td class="tw-bg-opacity-[75%] tw-backdrop-blur">
            <button disabled href="/dashboard/tasks/{task.task_id}/taskview">DONE</button>
        </td>
    {:else}
        <td class="tw-backdrop-blur tw-bg-opacity-[75%]">
            <WarningBadge text="{'Not Completed'}" />
        </td>
        <td class="tw-backdrop-blur tw-bg-opacity-[75%]">
            <a
                sveltekit:prefetch
                class="tw-btn tw-btn-info tw-btn-sm"
                href="/dashboard/tasks/{task.task_id}/taskview"
            >
                VIEW
            </a>
        </td>
    {/if}
</tr>
