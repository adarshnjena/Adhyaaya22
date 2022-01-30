<script>
    import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: -500, duration: 250 }} out:fly={{ y: -500, duration: 250 }}>
    <slot />
</div>
