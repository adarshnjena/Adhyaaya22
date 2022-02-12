<script lang="ts">
    import outlineCircle from '@iconify-icons/ic/outline-circle.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    export let title: string = 'PERFORMANCE';
    export let value: string = '49,65%';
    export let subtitle: string = '+12% from last month';
    export let icon = outlineCircle;
    export let positive: boolean = true;
</script>

<div class="mt-4 w-full px-4 2xl:mt-0 2xl:w-4/12 ">
    <div
        class="relative mb-6 flex min-w-0 flex-col break-words rounded-lg bg-base-100 bg-opacity-[75%] shadow-lg backdrop-blur xl:mb-0"
    >
        <div class="flex-auto p-4">
            <div class="flex flex-wrap">
                <div class="relative w-full max-w-full flex-1 flex-grow pr-4">
                    <h5 class="text-xs font-bold uppercase ">{title}</h5>
                    <span class="text-xl font-semibold">{value}</span>
                </div>
                <div class="relative w-auto flex-initial pl-4">
                    <div
                        class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-base-100 p-3 text-center shadow-lg {positive
                            ? 'text-success'
                            : 'text-error'}"
                    >
                        <Icon class="h-12 w-12" icon="{icon}" />
                    </div>
                </div>
            </div>
            <p class="mt-4 text-sm ">
                <span class="{positive ? 'text-success' : 'text-error'}">{subtitle}</span>
            </p>
        </div>
    </div>
</div>
