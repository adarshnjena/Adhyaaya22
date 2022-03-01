<script>
    import { onMount } from 'svelte';
    let scrollY = 84;
    onMount(() => {
        scrollY = 84;
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
