<script>
    import roundTick from '@iconify-icons/ic/round-check.js';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    export let text = 'success';
</script>

<div class="badge badge-success">
    <Icon class="mr-1" icon="{roundTick}" />
    {text}
</div>
