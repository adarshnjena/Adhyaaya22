<script lang="ts">
    import type { contactDetails } from '$lib/types/contactDetails';
import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import baselinePlus from '@iconify-icons/ic/baseline-plus.js';
    export let contact: contactDetails = {
        name: 'Adarsh Jena',
        position: 'Tech Lead, Adhyaaya',
        email: 'ca_support@adhyaaya.in',
        picture_url:
            'https://firebasestorage.googleapis.com/v0/b/adhyaaya-staging-dev.appspot.com/o/default_profile.jpg?alt=media&token=349c0982-c15e-4936-b249-e01935bbe4d7',
        mobile_number: '+91 5298188818',
        bio: 'An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.',
    };
</script>

<div class="tw-w-full tw-px-4 tw-text-justify 2xl:-tw-my-60 2xl:tw-w-4/12 ">
    <div
        class="tw-relative tw-mb-6 tw-mt-16 tw-flex tw-w-full tw-min-w-0 tw-flex-col tw-break-words tw-rounded-lg tw-bg-base-200 tw-bg-opacity-[75%] tw-shadow-xl tw-backdrop-blur"
    >
        <div class="tw-px-6">
            <div class="tw-flex tw-flex-wrap tw-justify-center">
                <div class="tw-flex tw-w-full tw-justify-center tw-px-4">
                    <div class="tw-mx-auto">
                        <img
                            alt="..."
                            src="{contact.picture_url}"
                            class="tw-mask tw-mask-circle -tw-mt-20 tw-w-[200px]"
                        />
                    </div>
                </div>
                <div class="tw-mt-20 tw-w-full tw-px-4 tw-text-center"></div>
            </div>
            <div class="-tw-m-4 tw-text-center">
                <h3 class="tw-mb-2 tw-text-xl tw-font-semibold tw-leading-normal tw-text-gray-200">
                    {contact.name}
                </h3>
                <div class="tw-mt-0 tw-mb-2 tw-text-sm tw-font-bold tw-uppercase tw-leading-normal tw-text-gray-400">
                    <Icon class="tw-text-gray-50" icon={baselinePlus} />
                    {contact.position}
                </div>
                <div class="tw-mt-10 tw-mb-2 tw-text-gray-300">
                    <i class="tw-fas fa-briefcase mr-2 text-lg text-gray-400"></i>
                    Email: {contact.email}
                </div>
                <div class="tw-mb-2 tw-text-gray-300">
                    <i class="fas fa-university mr-2 text-lg text-gray-400"></i>
                    Mobile/WhatsApp: {contact.mobile_number}
                </div>
            </div>
            <div class="tw-mt-10 tw-border-t tw-border-gray-200 tw-py-10 tw-text-center">
                <div class="tw-flex tw-flex-wrap tw-justify-center">
                    <div class="tw-w-full tw-px-4 lg:tw-w-9/12">
                        <p class="tw-mb-4 tw-text-justify tw-text-lg tw-leading-relaxed tw-text-gray-200">
                            {contact.bio}
                        </p>
                        <span class="tw-link tw-hidden tw-font-normal tw-text-red-500">Contact</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
