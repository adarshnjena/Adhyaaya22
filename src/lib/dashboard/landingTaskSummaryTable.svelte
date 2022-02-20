<script lang="ts">
    import type { taskDetails } from '$lib/types/taskDetails';
    import DashboardTaskItem from '$lib/taskview/landingDashboardTaskItem.svelte';
    export let tasks: { [key: string]: taskDetails } = {};
    export let profile_tasks;
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import iconNew from '@iconify-icons/ic/baseline-new-label.js'
</script>

<div class="tw-mb-12 tw-w-full tw-px-4 ">
    <div
        class="tw-relative tw-mb-6 tw-flex tw-w-full tw-min-w-0 tw-flex-col tw-break-words tw-rounded tw-bg-base-200 tw-bg-opacity-[75%] tw-shadow-lg tw-backdrop-blur"
    >
        <div class="tw-mb-0 tw-rounded-t tw-border-0 tw-px-4 tw-py-3">
            <div class="tw-flex tw-flex-wrap tw-items-center">
                <div class="tw-relative tw-w-full tw-max-w-full tw-flex-1 tw-flex-grow tw-px-4">
                    <h3 class="tw-text-base tw-font-semibold tw-text-gray-400">Registrations</h3>
                </div>
                <div class="tw-relative tw-w-full tw-max-w-full tw-flex-1 tw-flex-grow tw-px-4 tw-text-right">
                    <a  
                    sveltekit:prefetch
                        href="/dashboard/registration/new"
                        class="tw-btn tw-btn-secondary tw-btn-sm tw-px-3 tw-py-0 tw-text-xs"
                        type="button"
                    >   
                    <Icon icon={iconNew} />
                        NEW Registration
                    </a>
                </div>
            </div>
        </div>
        <div class="tw-block tw-w-full tw-overflow-x-auto ">
            <table class="tw-table tw-w-full tw-border-collapse tw-items-center tw-bg-transparent">
                <thead>
                    <tr>
                        <th class="tw-bg-opacity-[75%] tw-backdrop-blur">Registration</th>
                        <th class="tw-bg-opacity-[75%] tw-backdrop-blur">Date of Event</th>
                        <th class="tw-bg-opacity-[75%] tw-backdrop-blur">Presence</th>
                        <th class="tw-min-w-[140px] tw-bg-opacity-[75%] tw-backdrop-blur">View</th>
                    </tr>
                </thead>
                <tbody>
                    {#each Object.entries(tasks) as [task_id, task]}
                        <DashboardTaskItem task="{task}" completed="{task_id in profile_tasks}" />
                    {/each}
                </tbody>
                <tfoot>
                    <tr>
                        <th class="tw-bg-opacity-[75%] tw-backdrop-blur">Registration</th>
                        <th class="tw-bg-opacity-[75%] tw-backdrop-blur">Date of Event</th>
                        <th class="tw-bg-opacity-[75%] tw-backdrop-blur">Presence</th>
                        <th class="tw-bg-opacity-[75%] tw-backdrop-blur">View</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>
