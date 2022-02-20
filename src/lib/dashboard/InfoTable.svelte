<script lang="ts">
    import { eventDetails } from '$lib/types/eventDetails';

    import InfoTableItem from './InfoTableItem.svelte';
    interface eventSet {
        [key: string]: eventDetails;
    }
    export let events: eventSet = {};
</script>

<div class="tw-w-full tw-px-4 2xl:tw-w-4/12 ">
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
                    <button
                        class=" tw-btn tw-btn-secondary tw-btn-sm tw-hidden tw-px-3 tw-py-0 tw-text-xs"
                        type="button"
                    >
                        See all
                    </button>
                </div>
            </div>
        </div>
        <div class="tw-block tw-w-full tw-overflow-x-auto">
            <table class="tw-w-full tw-border-collapse tw-items-center tw-bg-transparent">
                <thead class="tw-thead-light">
                    <tr>
                        <th
                            class="tw-whitespace-nowrap tw-px-6 tw-py-3 tw-text-left tw-align-middle tw-text-xs tw-font-semibold tw-uppercase"
                        >
                            Event
                        </th>
                        <th
                            class="tw-whitespace-nowrap tw-px-6 tw-py-3 tw-text-left tw-align-middle tw-text-xs tw-font-semibold tw-uppercase"
                        >
                            Date
                        </th>
                        <th
                            class="tw-min-w-[140px] tw-whitespace-nowrap tw-px-6 tw-py-3 tw-text-left tw-align-middle tw-text-xs  tw-font-semibold tw-uppercase"
                        >
                            Type
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {#each Object.entries(events) as [key, value]}
                        <InfoTableItem event="{value}" />
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</div>
