<script>
    import '../../app.scss';
    import PageTransition from '$lib/PageTransition.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<PageTransition>
    <slot />
</PageTransition>

<Footer />
