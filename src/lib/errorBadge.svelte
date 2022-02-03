<script>
    import roundClose from '@iconify-icons/ic/round-close.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    export let text = 'error';
</script>

<div class="badge badge-error">
    <Icon class="mr-1" icon="{roundClose}" />
    {text}
</div>
