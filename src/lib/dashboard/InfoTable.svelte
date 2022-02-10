<script lang="ts">
    import { eventDetails } from '$lib/types/eventDetails';

    import InfoTableItem from './InfoTableItem.svelte';
    interface eventSet {
        [key: string]: eventDetails;
    }
    export let events: eventSet = {};
</script>

<div class="w-full px-4 2xl:w-4/12">
    <div
        class="relative flex flex-col min-w-0 break-words bg-opacity-[75%] bg-base-200 w-full mb-6 shadow-lg rounded"
    >
        <div class="px-4 py-3 mb-0 border-0 rounded-t">
            <div class="flex flex-wrap items-center">
                <div class="relative flex-1 flex-grow w-full max-w-full px-4">
                    <h3 class="ml-2 text-base font-semibold text-gray-400">Recent Events</h3>
                </div>
                <div class="relative flex-1 flex-grow w-full max-w-full px-4 text-right ">
                    <button
                        class=" hidden px-3 py-0 text-xs btn btn-secondary btn-sm"
                        type="button"
                    >
                        See all
                    </button>
                </div>
            </div>
        </div>
        <div class="block w-full overflow-x-auto">
            <table class="items-center w-full bg-transparent border-collapse">
                <thead class="thead-light">
                    <tr>
                        <th
                            class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle whitespace-nowrap"
                        >
                            Event
                        </th>
                        <th
                            class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle whitespace-nowrap"
                        >
                            Date
                        </th>
                        <th
                            class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle  whitespace-nowrap min-w-[140px]"
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
