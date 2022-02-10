<script lang="ts">
    import outlineCircle from '@iconify-icons/ic/outline-circle.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    export let title: string = 'PERFORMANCE';
    export let value: string = '49,65%';
    export let subtitle: string = '+12% from last month';
    export let icon = outlineCircle;
    export let positive: boolean = true;
</script>

<div class="w-full px-4 mt-4 2xl:mt-0 2xl:w-4/12">
    <div
        class="relative flex flex-col min-w-0 break-words bg-opacity-[75%] bg-base-100 rounded-lg mb-6 xl:mb-0 shadow-lg"
    >
        <div class="flex-auto p-4">
            <div class="flex flex-wrap">
                <div class="relative flex-1 flex-grow w-full max-w-full pr-4">
                    <h5 class="text-xs font-bold uppercase ">{title}</h5>
                    <span class="text-xl font-semibold">{value}</span>
                </div>
                <div class="relative flex-initial w-auto pl-4">
                    <div
                        class="inline-flex items-center justify-center w-12 h-12 p-3 text-center rounded-full shadow-lg bg-base-100 {positive
                            ? 'text-success'
                            : 'text-error'}"
                    >
                        <Icon class="w-12 h-12" icon="{icon}" />
                    </div>
                </div>
            </div>
            <p class="mt-4 text-sm ">
                <span class="{positive ? 'text-success' : 'text-error'}">{subtitle}</span>
            </p>
        </div>
    </div>
</div>
