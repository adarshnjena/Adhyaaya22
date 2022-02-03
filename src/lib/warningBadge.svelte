<script>
    import roundInfo from '@iconify-icons/ic/round-info.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    export let text = 'info';
</script>

<div class="badge badge-warning">
    <Icon class="mr-1" icon="{roundInfo}" />
    {text}
</div>
