<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import Footer from '$lib/Footer.svelte';
    onMount(() => {
        console.log($page.params);
    });

    let files;
    let is_uploading = false;
    function on_upload_click() {
        is_uploading = true;
    }
</script>

<svelte:head>
    <title>Task {$page.params['task_id']}</title>
</svelte:head>

<div class="h-full">
    <div class="md:px-16 px-2 mx-auto md:w-5/6 w-full mt-[2.5rem]">
        <div class="w-full container">
            <div
                class="container card text-center card-bordered bg-base-100 bg-opacity-[75%] min-h-[calc(100vh-18.5rem)]"
            >
                <div class="card-body">
                    <h2 class="card-title">
                        Task Name
                        <div class="badge mx-2 badge-secondary">NEW</div>
                    </h2>
                    <span class="text-justify mx-auto auto-format">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </span>
                </div>
                <div class="mx-auto mb-16 card-actions">
                    <label
                        for="file-input"
                        class="btn btn-wide {files && files[0] ? 'btn-ghost' : ''}"
                    >
                        {files && files[0] ? files[0].name : 'SELECT A FILE'}
                        <input
                            id="file-input"
                            accept="image/avif,image/bmp,image/gif,image/jpeg,image/png,application/pdf,image/tiff,image/webp,image/heic,image/heif,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            on:change={() => {
                                is_uploading = false;
                            }}
                            bind:files
                            type="file"
                            class="hidden"
                        />
                    </label>
                    <button
                        disabled={is_uploading}
                        on:click={on_upload_click}
                        class="btn btn-secondary {files && files[0] ? '' : 'hidden'} {is_uploading
                            ? 'loading btn-disabled'
                            : ''}"
                    >
                        UPLOAD
                    </button>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
