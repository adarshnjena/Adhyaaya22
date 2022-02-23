<script lang="ts">
    import { page } from '$app/stores';
    import Protected from '$lib/auth/Protected.svelte';
    import CAFooter from '$lib/CAFooter.svelte';
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
    import type { registrationDetails } from '$lib/types/registrationDetails';
import { get_user_registrations } from '$lib/firebase/registrationDetails';
    let registration: registrationDetails;
    const [user_id, event_code, timestamp] = $page.params['registration_id'].split('-');
    let app;
    let auth;
    let db;
    //let is_completed = false;

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
        
        const registration_data = await get_user_registrations(app, auth, db)
        registration = registration_data[event_code]
        dev ? console.log('registration', registration) : '';

        //let _details = await get_user_details(app, $authStore.user, db);
        //task = await get_task_details(app, db, registration_id);
        //is_completed = registration_id in _details['tasks'];
    });

    let files;
    //let is_uploading = false;
    //let button_text = task.requires_proof ? 'Upload' : 'MARK AS DONE';
    //let button_class = 'btn-secondary';
</script>

<svelte:head>
    <title>Registration {$page.params['registration_id']}</title>
</svelte:head>

<Protected />
<div class="tw-flex tw-min-h-screen tw-justify-center">
    <div class="tw-mx-auto tw-mt-[2.5rem] tw-px-2 tw-w-3/4">
        <div class="tw-container tw-w-full">
            <div
                class="tw-container tw-card-bordered tw-card tw-bg-base-100 tw-bg-opacity-[75%] tw-text-center tw-backdrop-blur"
            >
                <div class="tw-card-body">
                    <h2 class="tw-card-title">
                        {registration}
                        <div class="tw-badge tw-badge-secondary tw-mx-2 tw-hidden">NEW</div>
                    </h2>
                    <span class="tw-mx-auto tw-text-justify">
                        {JSON.stringify(registration)}
                    </span>
                </div>
                
                    <button class="tw-btn-disabled tw-btn-xl tw-btn tw-uppercase">
                        YOU HAVE COMPLETED THIS TASK
                    </button>
                
                    <div class="tw-mx-auto tw-mb-16 tw-card-actions">
                        <label
                            for="file-input"
                            class="tw-btn tw-btn-wide"
                        >
                            SELECT A FILE
                            <span
                                id="file-input"
                                accept="image/avif,image/bmp,image/gif,image/jpeg,image/png,application/pdf,image/tiff,image/webp,image/heic,image/heif,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                type="file"
                                class="hidden"
                            />
                        </label>
                        <button
                            class="tw-btn tw-uppercase"
                        >
                        </button>
                    </div>
                
            </div>
        </div>
    </div>
    
</div>

<CAFooter />