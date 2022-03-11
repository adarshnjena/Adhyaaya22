<script>
    const dev = true;

    import { goto } from '$app/navigation';

    import { onMount } from 'svelte';
    let scrollY = 0;
    onMount(() => {
        //scrollY = 84;
        // window.onmessage = (e) => {
        //     dev ? console.log(e.data.toString().split(':')[1]) : '';
        //     goto(e.data.toString().split(':')[1]);
        // };
    });
</script>

<svelte:window bind:scrollY />

<!--This was a retarded attempt at trying to convert this code. I still have no exp with gsap+sveltekit check /event/_gallery to see the conversion. Why do they use zepto ?-->

<iframe
    src="/gallery/index.html"
    class="tw-h-screen tw-w-screen tw-overflow-clip"
    title="Gallery Page, Uses external GSAP"
    frameborder="0"
></iframe>
