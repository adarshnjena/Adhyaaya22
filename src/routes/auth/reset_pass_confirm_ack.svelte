<script>
    import backgroundImage from '$lib/assets/page-background.png';
</script>

<div class="hero min-h-screen bg-base-300 " style="background-image: url({backgroundImage});">
    <div class="hero-overlay bg-base-300 bg-opacity-75 motion-safe:animate-pulse"></div>
    <div class="text-center hero-content text-neutral-content">
        <form class="max-w-md">
            <div class="card flex-shrink-0 w-96 shadow-2xl bg-base-200 bg-opacity-75">
                <div class="card-body">
                    <h1 class="text-xl my-4 text-left">Rest Easy...</h1>
                    <span class="text-sm my-2 text-left">We have reset your password</span>
                    <hr class=" hidden my-2 border-b border-gray-600" />
                    <h2 class="text-left">Please try to sign-in again</h2>
                    <div class="flex flex-col items-center justify-center mt-4">
                        <a href="/" class="btn btn-neutral-primary">
                            <span class="btn-inner--text">Back to Home</span>
                        </a>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
