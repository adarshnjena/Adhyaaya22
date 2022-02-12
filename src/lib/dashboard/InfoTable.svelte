<script lang="ts">
    import { eventDetails } from '$lib/types/eventDetails';

    import InfoTableItem from './InfoTableItem.svelte';
    interface eventSet {
        [key: string]: eventDetails;
    }
    export let events: eventSet = {};
</script>

<div class="w-full px-4 2xl:w-4/12 ">
    <div
        class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-base-200 bg-opacity-[75%] shadow-lg backdrop-blur"
    >
        <div class="mb-0 rounded-t border-0 px-4 py-3">
            <div class="flex flex-wrap items-center">
                <div class="relative w-full max-w-full flex-1 flex-grow px-4">
                    <h3 class="ml-2 text-base font-semibold text-gray-400">Recent Events</h3>
                </div>
                <div class="relative w-full max-w-full flex-1 flex-grow px-4 text-right ">
                    <button
                        class=" btn btn-secondary btn-sm hidden px-3 py-0 text-xs"
                        type="button"
                    >
                        See all
                    </button>
                </div>
            </div>
        </div>
        <div class="block w-full overflow-x-auto">
            <table class="w-full border-collapse items-center bg-transparent">
                <thead class="thead-light">
                    <tr>
                        <th
                            class="whitespace-nowrap px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
                        >
                            Event
                        </th>
                        <th
                            class="whitespace-nowrap px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
                        >
                            Date
                        </th>
                        <th
                            class="min-w-[140px] whitespace-nowrap px-6 py-3 text-left align-middle text-xs  font-semibold uppercase"
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
