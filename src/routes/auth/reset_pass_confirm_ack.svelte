<script>
    import backgroundImage from '$lib/assets/page-background.png';
</script>

<div class="min-h-screen hero bg-base-300 " style="background-image: url({backgroundImage});">
    <div class="backdrop-blur bg-opacity-75 hero-overlay bg-base-300 motion-safe:animate-pulse"></div>
    <div class="text-center hero-content text-neutral-content">
        <form class="max-w-md">
            <div class="flex-shrink-0 backdrop-blur bg-opacity-75 shadow-2xl card w-96 bg-base-200">
                <div class="card-body">
                    <h1 class="my-4 text-xl text-left">Rest Easy...</h1>
                    <span class="my-2 text-sm text-left">We have reset your password</span>
                    <hr class="hidden my-2 border-b border-gray-600 " />
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
