<script context="module">
    export async function load({ params, fetch, session, stuff }) {
        return {
            status: 301,
            headers: {
                location: '/events/events/',
            },
        };
    }
</script>
<script>
import { goto } from "$app/navigation";

import { onMount } from "svelte";


    onMount(() => {
        goto('/events/events/', {replaceState: true});
    })
</script>
