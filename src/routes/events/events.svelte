<script>
    import { dev } from '$app/env';

    import { goto } from '$app/navigation';

    import { onMount } from 'svelte';
    let scrollY = 84;
    onMount(() => {
        scrollY = 84;
        window.onmessage = (e) => {
            dev ? console.log(e.data.toString().split(':')[1]) : '';
            goto(e.data.toString().split(':')[1]);
        };
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
