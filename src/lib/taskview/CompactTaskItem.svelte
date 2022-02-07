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
        end_date: 1644336165,
        requires_proof: true,
    };
    export let counter: number = 0;
    let date = task.end_date
    let now = Date.now() / 1000;
    let _date = new Date(date * 1000);
    let printable_date = _date.toLocaleDateString('en-IN', {year: 'numeric', month: '2-digit', day: '2-digit'}) + ' ' + _date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
</script>

<tr class="hover">
    <th>{counter + 1}</th>
    <td>{task.task_name}</td>
    {#if task.is_important}
        <td><WarningBadge text="{`Important`}" /></td>
    {:else}
        <td><InfoBadge text="{`Side Task`}" /></td>
    {/if}
    <td class="font-mono {date < now ? 'text-info' : date < now + 2*84600 ? 'text-warn' : ''}">{printable_date}</td>
    {#if task.requires_proof}
        <td><SuccessBadge text="{`Proof Required`}" /></td>
    {:else}
        <td><InfoBadge text="{`Proof Not Required`}" /></td>
    {/if}
    <td><a href="/dashboard/tasks/{task.task_id}/taskview" class="btn btn-info btn-sm">VIEW</a></td>
</tr>
