<script>
    import TaskItem from './TaskItem.svelte';
    import tasks from '../tasks.json';
</script>

<div class="flex flex-col flex-wrap justify-evenly rounded-xl bg-base-200 m-4">
    {#each Object.entries(tasks) as [id, task]}
        {#if !task.is_misc}
            <TaskItem {task} />
        {/if}
    {/each}
    <a href="/tasks" class="btn btn-primary btn-sm mx-2 my-1">View More Tasks</a>
</div>
