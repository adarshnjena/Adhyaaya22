<script>
    import backgroundImage from '$lib/assets/page-background.png';
</script>

<div class="hero min-h-screen bg-base-300 " style="background-image: url({backgroundImage});">
    <div
        class="hero-overlay bg-base-300 bg-opacity-75 backdrop-blur motion-safe:animate-pulse"
    ></div>
    <div class="hero-content text-center text-neutral-content">
        <form class="max-w-md">
            <div class="card w-96 flex-shrink-0 bg-base-200 bg-opacity-75 shadow-2xl backdrop-blur">
                <div class="card-body">
                    <h1 class="my-4 text-left text-xl">Rest Easy...</h1>
                    <span class="my-2 text-left text-sm">We have reset your password</span>
                    <hr class="my-2 hidden border-b border-gray-600 " />
                    <h2 class="text-left">Please try to sign-in again</h2>
                    <div class="mt-4 flex flex-col items-center justify-center">
                        <a href="/" class="btn-neutral-primary btn">
                            <span class="btn-inner--text">Back to Home</span>
                        </a>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
