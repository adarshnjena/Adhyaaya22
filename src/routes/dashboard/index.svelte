<script>
    //import CACode from '$lib/CACode.svelte'
    import TasksListContainer from '$lib/TasksListContainer.svelte';
    import StatsView from '$lib/StatsView.svelte';
</script>

<div class="flex flex-wrap m-8 items-start">
    <StatsView />
    <TasksListContainer />
</div>