<script>
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import roundClose from '@iconify-icons/ic/round-close.js';
    export let text = 'error';
</script>

<div class="badge badge-error">
    <Icon icon={roundClose} />
    {text}
</div>
