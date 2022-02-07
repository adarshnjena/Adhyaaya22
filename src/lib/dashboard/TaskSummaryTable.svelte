<script lang="ts">
    import type { taskDetails } from "$lib/types/taskDetails";
    import DashboardTaskItem from "$lib/taskview/DashboardTaskItem.svelte";
    export let tasks:{[key:string]:taskDetails} = {};
    export let profile_tasks;
</script>

<div class="w-full px-4 mb-12 2xl:w-8/12 xl:mb-0">
    <div
        class="relative flex flex-col min-w-0 break-words bg-opacity-[75%] bg-base-200 w-full mb-6 shadow-lg rounded"
    >
        <div class="px-4 py-3 mb-0 border-0 rounded-t">
            <div class="flex flex-wrap items-center">
                <div class="relative flex-1 flex-grow w-full max-w-full px-4">
                    <h3 class="text-base font-semibold text-gray-400">Tasks</h3>
                </div>
                <div class="relative flex-1 flex-grow w-full max-w-full px-4 text-right">
                    <a
                        href="/dashboard/tasks"
                        class="px-3 py-0 text-xs btn btn-secondary btn-sm"
                        type="button"
                    >
                        See all
                    </a>
                </div>
            </div>
        </div>
        <div class="block w-full overflow-x-auto ">
            <table class="items-center table w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th class="bg-opacity-[75%]">Task</th>
                        <th class="bg-opacity-[75%]">Last Date</th>
                        <th class="bg-opacity-[75%]">Completed ?</th>
                        <th class="bg-opacity-[75%] min-w-[140px]">Open</th>
                    </tr>
                </thead>
                <tbody>
                    {#each Object.entries(tasks) as [task_id, task]}
                         <DashboardTaskItem task={task} completed={task_id in profile_tasks} />
                    {/each}
                </tbody>
                <tfoot>
                    <tr>
                        <th class="bg-opacity-[75%]">Task</th>
                        <th class="bg-opacity-[75%]">Last Date</th>
                        <th class="bg-opacity-[75%]">Completed ?</th>
                        <th class="bg-opacity-[75%]">Open</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>
