<script>
    import roundTick from '@iconify-icons/ic/round-check.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    export let text = 'success';
</script>

<div class="tw-badge tw-badge-success">
    <Icon class="tw-mr-1" icon="{roundTick}" />
    {text}
</div>
