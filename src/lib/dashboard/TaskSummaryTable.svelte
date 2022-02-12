<script lang="ts">
    import type { taskDetails } from '$lib/types/taskDetails';
    import DashboardTaskItem from '$lib/taskview/DashboardTaskItem.svelte';
    export let tasks: { [key: string]: taskDetails } = {};
    export let profile_tasks;
</script>

<div class="mb-12 w-full px-4 xl:mb-0 2xl:w-8/12 ">
    <div
        class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-base-200 bg-opacity-[75%] shadow-lg backdrop-blur"
    >
        <div class="mb-0 rounded-t border-0 px-4 py-3">
            <div class="flex flex-wrap items-center">
                <div class="relative w-full max-w-full flex-1 flex-grow px-4">
                    <h3 class="text-base font-semibold text-gray-400">Tasks</h3>
                </div>
                <div class="relative w-full max-w-full flex-1 flex-grow px-4 text-right">
                    <a
                        href="/dashboard/tasks"
                        class="btn btn-secondary btn-sm px-3 py-0 text-xs"
                        type="button"
                    >
                        See all
                    </a>
                </div>
            </div>
        </div>
        <div class="block w-full overflow-x-auto ">
            <table class="table w-full border-collapse items-center bg-transparent">
                <thead>
                    <tr>
                        <th class="bg-opacity-[75%] backdrop-blur">Task</th>
                        <th class="bg-opacity-[75%] backdrop-blur">Last Date</th>
                        <th class="bg-opacity-[75%] backdrop-blur">Completed ?</th>
                        <th class="min-w-[140px] bg-opacity-[75%] backdrop-blur">Open</th>
                    </tr>
                </thead>
                <tbody>
                    {#each Object.entries(tasks) as [task_id, task]}
                        <DashboardTaskItem task="{task}" completed="{task_id in profile_tasks}" />
                    {/each}
                </tbody>
                <tfoot>
                    <tr>
                        <th class="bg-opacity-[75%] backdrop-blur">Task</th>
                        <th class="bg-opacity-[75%] backdrop-blur">Last Date</th>
                        <th class="bg-opacity-[75%] backdrop-blur">Completed ?</th>
                        <th class="bg-opacity-[75%] backdrop-blur">Open</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>
