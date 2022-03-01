<script>
    import { onMount } from 'svelte';
    let scrollY = 0;
    onMount(() => {
        //scrollY = 84;
    });
</script>

<svelte:window bind:scrollY />

<iframe
    src="/teams/index.html"
    class="tw-h-screen tw-w-screen tw-overflow-clip"
    title="Events Page, Uses external GSAP"
    frameborder="0"
></iframe>
