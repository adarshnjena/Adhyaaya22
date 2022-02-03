<script lang="ts">
    import InfoBadge from '$lib/infoBadge.svelte';
    import SuccessBadge from '$lib/successBadge.svelte';
    import { taskDetails } from '$lib/types/taskDetails';
    import WarningBadge from '$lib/warningBadge.svelte';

    export let task: taskDetails = {
        task_id: 'bbaebd10-047e-40bc-a863-1a29057beff5',
        task_name: 'nisl duis ac nibh fusce lacus purus aliquet at feugiat non',
        task_details:
            'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        is_important: true,
        end_date: '2021-03-29T16:52:50Z',
        requires_proof: true,
    };
    export let counter: number = 0;
    let date = Date.parse(task.end_date);
    let now = Date.now();
</script>

<tr class="hover">
    <th>{counter + 1}</th>
    <td>{task.task_name}</td>
    {#if task.is_important}
        <td><WarningBadge text="{`Important`}" /></td>
    {:else}
        <td><InfoBadge text="{`Side Task`}" /></td>
    {/if}
    <td class="{date < now ? 'text-info' : date < now + 84600 ? 'text-warn' : ''}">{date}</td>
    {#if task.requires_proof}
        <td><SuccessBadge text="{`Proof Required`}" /></td>
    {:else}
        <td><InfoBadge text="{`Proof Not Required`}" /></td>
    {/if}
    <td><a href="/dashboard/tasks/{task.task_id}/taskview" class="btn btn-info btn-sm">VIEW</a></td>
</tr>
