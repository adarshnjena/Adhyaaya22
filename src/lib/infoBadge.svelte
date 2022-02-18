<script>
    import roundInfo from '@iconify-icons/ic/round-info.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    export let text = 'info';
</script>

<div class="tw-badge tw-badge-info">
    <Icon class="tw-mr-1" icon="{roundInfo}" />
    {text}
</div>
