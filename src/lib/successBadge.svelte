<script>
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import roundTick from '@iconify-icons/ic/round-check.js';
    export let text = 'success';
</script>

<div class="badge badge-success">
    <Icon icon={roundTick} />
    {text}
</div>
