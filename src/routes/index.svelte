<script>
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import roundLogin from '@iconify-icons/ic/round-login';
</script>

<div
    class="hero min-h-screen"
    style="background-image: url(&quot;https://picsum.photos/id/1005/1600/1400&quot;);"
>
    <div class="hero-overlay bg-opacity-60" />
    <div class="text-center hero-content text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">
                This is a private portal for Adhyaaya '22 Campus Ambassadors. Please proceed to
                login.
            </p>
            <a href="/auth/login" sveltekit:prefetch class="btn btn-primary"
                ><Icon class="mr-2" icon={roundLogin} />Login</a
            >
        </div>
    </div>
</div>
