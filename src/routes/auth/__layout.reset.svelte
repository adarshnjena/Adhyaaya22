<script>
    import Footer from '$lib/Footer.svelte';
    import PageTransition from '$lib/PageTransition.svelte';
    import '../../app.scss';
</script>

<PageTransition>
    <slot />
</PageTransition>

<Footer />
