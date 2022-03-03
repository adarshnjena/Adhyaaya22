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
