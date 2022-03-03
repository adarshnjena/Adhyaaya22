<script>
    import { dev } from '$app/env';

    import { goto } from '$app/navigation';

    import { onMount, tick } from 'svelte';
    let scrollY;
    onMount(() => {
        // await tick();
        console.log('onMount');
        scrollY = 84;
        //document.getElementsByTagName('iframe')[0].scrollIntoView();
        console.log(scrollY);
        // window.onmessage = (e) => {
        //     dev ? console.log(e.data.toString().split(':')[1]) : '';
        //     goto(e.data.toString().split(':')[1]);
        // };
        tick().then(() => {
            window.scrollY = 84;
        });
    });
</script>

<svelte:window bind:scrollY />

<!--This was a retarded attempt at trying to convert this code. I still have no exp with gsap+sveltekit check /event/_gallery to see the conversion. Why do they use zepto ?-->

<iframe
    src="/sponsors/sponsor.html"
    class="tw-h-screen tw-w-screen tw-overflow-clip"
    title="Sponsors Page"
    frameborder="0"
></iframe>
