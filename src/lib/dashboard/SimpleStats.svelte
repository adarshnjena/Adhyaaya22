<script lang="ts">
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import outlineCircle from '@iconify-icons/ic/outline-circle.js';
    export let title: string = 'PERFORMANCE';
    export let value: string = '49,65%'
    export let subtitle: string = '+12% from last month';
    export let icon = outlineCircle;
    export let positive: boolean = true;
</script>
<div class="w-full lg:w-6/12 xl:w-3/12 px-4">
    <div
        class="relative flex flex-col min-w-0 break-words bg-opacity-[75%] bg-base-100 rounded-lg mb-6 xl:mb-0 shadow-lg"
    >
        <div class="flex-auto p-4">
            <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">{title}</h5>
                    <span class="font-semibold text-xl text-blueGray-700">{value}</span>
                </div>
                <div class="relative w-auto pl-4 flex-initial">
                    <div
                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-emerald-500"
                    >
                        <Icon class="w-12 h-12" icon={icon}/>
                    </div>
                </div>
            </div>
            <p class="text-sm text-blueGray-400 mt-4">
                <span class="{positive ? 'text-success':'text-error'}"> {subtitle} </span>
            </p>
        </div>
    </div>
</div>
