<script>
    import { browser } from '$app/env';

    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import authStore from './authStore';

    //$: $authStore.isLoggedIn ? '' : browser ? goto('/auth/login'): '';
    onMount(() => {
        $authStore.isLoggedIn ? '' : goto('/auth/login');
    });
</script>
