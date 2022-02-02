<script>
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import roundTick from '@iconify-icons/ic/round-check.js';
    export let text = 'success';
</script>

<div class="badge badge-success">
    <Icon class="mr-1" icon={roundTick} />
    {text}
</div>
