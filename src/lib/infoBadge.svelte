<script>
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte'
    import roundInfo from '@iconify-icons/ic/round-info.js'
    export let text = 'info';
</script>

<div class="badge badge-info">
    <Icon icon="{roundInfo}" />
    {text}
</div>
