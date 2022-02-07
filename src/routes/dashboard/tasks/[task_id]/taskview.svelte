<script lang="ts">
    import { page } from '$app/stores';
    import Protected from '$lib/auth/Protected.svelte';
    import Footer from '$lib/Footer.svelte';
    import type { taskDetails } from '$lib/types/taskDetails';
    import { get_task_details } from '$lib/firebase/taskDetails';
    import { get_user_details, update_user_task_details } from '$lib/firebase/userDetails';
    import { onMount } from 'svelte';
    import { getApp, initializeApp } from 'firebase/app';
    import firebaseConfig from '$lib/firebase/firebaseConfig';
    import { dev } from '$app/env';
    import { getAuth } from 'firebase/auth';
    import { getFirestore } from 'firebase/firestore/lite';
    import authStore from '$lib/auth/authStore';
    import { goto, prefetch } from '$app/navigation';
    let task: taskDetails = {
        task_id: '',
        task_name: '',
        task_details: '',
        is_important: false,
        end_date: 0,
        requires_proof: false,

    };
    let task_id = $page.params['task_id'];
    let app;
    let auth;
    let db;
    let is_completed = false;

    // SUS function to fake the uploads
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    onMount(async () => {
        try {
            app = getApp();
        } catch (error) {
            dev ? console.log('getApp: error', error) : '';
            // This means the app is not yet intialized.
            app = initializeApp(firebaseConfig);
        }
        // Now we for sure have an app.
        dev ? console.log(app) : '';
        auth = getAuth();
        db = getFirestore();
        let _details = await get_user_details(app, $authStore.user, db);
        task = await get_task_details(app, db, task_id);
        is_completed = task_id in _details['tasks'];
    });

    let files;
    let is_uploading = false;
    let button_text = task.requires_proof ? 'Upload': 'MARK AS DONE';
    let button_class = 'btn-secondary';
    async function on_upload_click() {
        is_uploading = true;
        button_text = 'Uploading...';
        button_class = '';
        await update_user_task_details(app, $authStore.user, db, task_id);
        await sleep(2000);
        is_uploading = false;
        button_text = '✓ Uploaded';
        button_class = 'btn-success';
        prefetch('/dashboard');
        setTimeout(return_to_init_1, 3000);
    }
    async function return_to_init_1() {
        is_uploading = false;
        button_text = 'Upload';
        button_class = 'btn-secondary';
        await sleep(500);
        await goto('/dashboard');
    }
</script>

<svelte:head>
    <title>Task {$page.params['task_id']}</title>
</svelte:head>

<Protected />
<div class="hero">
    <div class="md:px-16 px-2 mx-auto lg:w-3/6 md:w-4/6 w-full mt-[2.5rem]">
        <div class="container w-full">
            <div
                class="container card text-center card-bordered bg-base-100 bg-opacity-[75%]"
            >
                <div class="card-body">
                    <h2 class="card-title">
                        {task.task_name}
                        <div class="mx-2 badge badge-secondary">NEW</div>
                    </h2>
                    <span class="mx-auto text-justify">
                        {task.task_details}
                    </span>
                </div>
                {#if is_completed}
                    <button class="btn btn-disabled uppercase btn-xl">
                        YOU HAVE COMPLETED THIS TASK
                    </button>
                {:else}
                    <div class="mx-auto mb-16 card-actions">
                        <label
                            for="file-input"
                            class="btn btn-wide {task.requires_proof ? '': 'hidden'} {files && files[0] ? 'btn-ghost' : ''}"
                        >
                            {files && files[0] ? files[0].name : 'SELECT A FILE'}
                            <input
                                id="file-input"
                                accept="image/avif,image/bmp,image/gif,image/jpeg,image/png,application/pdf,image/tiff,image/webp,image/heic,image/heif,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                on:change="{() => {
                                    is_uploading = false;
                                }}"
                                bind:files
                                type="file"
                                class="hidden"
                            />
                        </label>
                        <button
                            disabled="{is_uploading}"
                            on:click="{on_upload_click}"
                            class="btn uppercase { task.requires_proof ? files && files[0] ? '': 'hidden' : ''} {is_uploading
                                ? 'loading btn-disabled'
                                : ''} {button_class}"
                        >
                            {button_text}
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    </div>
    
</div>
<Footer />