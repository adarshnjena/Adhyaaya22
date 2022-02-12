<script>
    import CAFooter from '$lib/CAFooter.svelte';
    import PageTransition from '$lib/PageTransition.svelte';
    import '../../app.scss';
</script>

<PageTransition>
    <slot />
</PageTransition>

<CAFooter />
