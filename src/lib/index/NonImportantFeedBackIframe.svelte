<script>
    import { onMount } from 'svelte';
    let scrollY = 0;
    onMount(() => {
        // Disabled Scroll thingy
        //scrollY = 100;
    });
</script>

<svelte:window bind:scrollY />

<!--This was a retarded attempt at trying to convert this code. Broken Click-->

<iframe
    src="/index/nip_feedback.html"
    class="tw-h-screen tw-w-screen tw-overflow-clip tw-bg-base-200"
    title="Page was written using jQuery, Bootstrap."
    frameborder="0"
></iframe>
