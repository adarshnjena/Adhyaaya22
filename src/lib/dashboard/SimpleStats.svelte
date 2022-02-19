<script lang="ts">
    import outlineCircle from '@iconify-icons/ic/outline-circle.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    export let title: string = 'PERFORMANCE';
    export let value: string = '49,65%';
    export let subtitle: string = '+12% from last month';
    export let icon = outlineCircle;
    export let positive: boolean = true;
</script>

<div class="tw-mt-4 tw-w-full tw-px-4 2xl:tw-mt-0 2xl:tw-w-4/12 ">
    <div
        class="tw-relative tw-mb-6 tw-flex tw-min-w-0 tw-flex-col tw-break-words tw-rounded-lg tw-bg-base-100 tw-bg-opacity-[75%] tw-shadow-lg tw-backdrop-blur xl:tw-mb-0"
    >
        <div class="tw-flex-auto tw-p-4">
            <div class="tw-flex tw-flex-wrap">
                <div class="tw-relative tw-w-full tw-max-w-full tw-flex-1 tw-flex-grow tw-pr-4">
                    <h5 class="tw-text-xs tw-font-bold tw-uppercase ">{title}</h5>
                    <span class="tw-text-xl tw-font-semibold">{value}</span>
                </div>
                <div class="tw-relative tw-w-auto tw-flex-initial tw-pl-4">
                    <div
                        class="tw-inline-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-full tw-bg-base-100 tw-p-3 tw-text-center tw-shadow-lg {positive
                            ? 'tw-text-success'
                            : 'tw-text-error'}"
                    >
                        <Icon class="tw-h-12 tw-w-12" icon="{icon}" />
                    </div>
                </div>
            </div>
            <p class="tw-mt-4 tw-text-sm ">
                <span class="{positive ? 'tw-text-success' : 'tw-text-error'}">{subtitle}</span>
            </p>
        </div>
    </div>
</div>
