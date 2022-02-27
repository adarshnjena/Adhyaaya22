<script>
    import { onMount } from 'svelte';
    let scrollY = 0;
    onMount(() => {
        //scrollY = 100;
    });
</script>

<svelte:window bind:scrollY />

<!--This was a retarded attempt at trying to convert this code. Broken Click-->

<iframe
    src="/events/index.html"
    class="tw-h-screen tw-w-screen tw-overflow-clip"
    title="Events Page, Uses external GSAP"
    frameborder="0"
></iframe>
