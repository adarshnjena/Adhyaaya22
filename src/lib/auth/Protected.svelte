<script>
    import { goto } from '$app/navigation';
    import authStore from './authStore';

    // Custom Logic to boot unauth users.
    authStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
        if (!isLoggedIn && firebaseControlled) {
            await goto('/auth/login');
        }
    });
</script>
