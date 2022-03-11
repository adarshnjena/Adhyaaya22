<script>
    import { onMount } from 'svelte';
    //let scrollY = 0;
    const dev = true;

    import { goto } from '$app/navigation';

    //let scrollY = 84;
    onMount(() => {
        //scrollY = 84;
        // window.onmessage = (e) => {
        //     dev ? console.log(e.data.toString().split(':')[1]) : '';
        //     goto(e.data.toString().split(':')[1]);
        // };
    });
</script>

<!--This was a retarded attempt at trying to convert this code. Broken Click-->

<iframe
    src="{`/feedback/nip.html`}"
    class="tw-min-h-screen tw-w-screen tw-bg-base-200"
    title="Page was written using jQuery, Bootstrap."
    frameborder="0"
></iframe>
