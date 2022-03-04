<script>
    import { dev } from '$app/env';

    import { goto } from '$app/navigation';

    import { onMount } from 'svelte';
    let scrollY;
    onMount(() => {
        scrollY = 84;
        window.onmessage = (e) => {
            dev ? console.log(e.data.toString().split(':', 2)[1]) : '';
            if (e.data.toString().includes('%22') || e.data.toString().includes('"')) {
                return;
            }
            goto(e.data.toString().split(':')[1]);
        };
    });
</script>

<svelte:window bind:scrollY />

<iframe
    src="/teams/index.html"
    class="tw-h-screen tw-w-screen tw-overflow-clip"
    title="Events Page, Uses external GSAP"
    frameborder="0"
></iframe>
