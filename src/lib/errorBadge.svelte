<script>
    import roundClose from '@iconify-icons/ic/round-close.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    export let text = 'error';
</script>

<div class="tw-badge tw-badge-error">
    <Icon class="tw-mr-1" icon="{roundClose}" />
    {text}
</div>
