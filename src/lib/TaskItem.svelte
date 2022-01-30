<script>
    export let task = {
        title: 'Task 9',
        desc: '',
        is_misc: true,
        end_time: '',
    };
</script>

<div class="card lg:card-side card-bordered border-accent m-2">
    <div class="card-body md:flex md:flex-row">
        <div class="card-body p-0">
            <h2 class="card-title text-primary">{task.title}</h2>
            <p class="text-secondary ">
                {task.desc}
            </p>
        </div>
        {#if task.is_misc}
            <button class="mx-auto btn btn-disabled btn-info" />
        {:else}
            <div class="flex flex-row flex-auto m-auto md: mr-8">
                <button class="mx-auto btn btn-ghost">Select File</button>
                <button class="mx-auto btn btn-info">Upload</button>
            </div>
        {/if}
    </div>
</div>
