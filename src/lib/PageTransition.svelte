<script>
    import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: -800, duration: 250 }} out:fly={{ y: 800, duration: 250 }}>
    <slot />
</div>
