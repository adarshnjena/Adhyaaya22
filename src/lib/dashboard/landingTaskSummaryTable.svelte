<script lang="ts">
    import type { registrationDetails } from '$lib/types/registrationDetails';

    import DashboardTaskItem from '$lib/taskview/landingDashboardTaskItem.svelte';
    export let registrations: { [key: string]: registrationDetails } = {};
    //export let profile_tasks;
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import iconNew from '@iconify-icons/ic/baseline-new-label.js';
</script>

<div class="tw-w-full tw-px-4">
    <div
        class="tw-relative tw-mb-6 tw-flex tw-w-full tw-min-w-0 tw-flex-col tw-break-words tw-rounded tw-bg-base-200 tw-bg-opacity-[75%] tw-shadow-lg tw-backdrop-blur"
    >
        <div class="tw-mb-0 tw-rounded-t tw-border-0 tw-px-4 tw-py-3">
            <div class="tw-flex tw-flex-wrap tw-items-center">
                <div class="tw-relative tw-w-full tw-max-w-full tw-flex-1 tw-flex-grow tw-px-4">
                    <h3 class="tw-ml-2 tw-text-base tw-font-semibold tw-text-gray-400">
                        Recent Events
                    </h3>
                </div>
                <div
                    class="tw-relative tw-w-full tw-max-w-full tw-flex-1 tw-flex-grow tw-px-4 tw-text-right "
                >
                    <a
                        sveltekit:prefetch
                        href="/dashboard/registration/new"
                        class="tw-btn tw-btn-secondary tw-btn-sm tw-px-3 tw-py-0 tw-text-xs"
                        type="button"
                    >
                        <Icon
                            class="tw-text-2xs tw-hidden xl:tw-block xl:tw-text-xs"
                            icon="{iconNew}"
                        />
                        NEW Registration
                    </a>
                </div>
            </div>
        </div>
        <div class="tw-block tw-w-full tw-overflow-x-auto">
            <table class="tw-w-full tw-border-collapse tw-items-center tw-bg-transparent">
                <thead class="tw-thead-light">
                    <tr>
                        <th
                            class="tw-px-6 tw-py-3 tw-text-left tw-align-middle tw-text-xs tw-font-semibold tw-uppercase"
                        >
                            Event
                        </th>
                        <th
                            class="tw-px-6 tw-py-3 tw-text-left tw-align-middle tw-text-xs tw-font-semibold tw-uppercase"
                        >
                            Date
                        </th>
                        <th
                            class="tw-invisible md:tw-visible tw-min-w-[140px] tw-px-6 tw-py-3 tw-text-left tw-align-middle tw-text-xs  tw-font-semibold tw-uppercase"
                        >
                            Type
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {#each Object.entries(registrations) as [event_code, registration]}
                        <DashboardTaskItem registration="{registration}" />
                    {:else}
                        <tr>
                            <th
                                class="tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-p-4 tw-px-6 tw-text-left tw-align-middle tw-text-xs "
                            >
                                Use the below form to fill in the details first. You may then
                                proceed for a new registration using the button above.
                            </th>
                            <td
                                class="tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-p-4 tw-px-6 tw-align-middle tw-text-xs"
                            >
                                You may even register at the event, provided the event has empty slots.
                            </td>
                            <td
                                class="tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-p-4 tw-px-6 tw-align-middle tw-text-xs"
                            >
                                <div class="tw-flex tw-items-center">
                                    <span class="tw-mr-2">
                                        <div class="tw-badge tw-badge-info">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                                aria-hidden="true"
                                                role="img"
                                                class="tw-mr-1"
                                                width="1em"
                                                height="1em"
                                                preserveAspectRatio="xMidYMid meet"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            Information
                                        </div>
                                    </span>
                                </div>
                            </td>
                            <td
                                class="tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-p-4 tw-px-6 tw-align-middle tw-text-xs "
                            >
                                <span class="tw-btn tw-btn-primary tw-btn-sm tw-hidden"></span>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
