<script lang="ts">
    import type { contactDetails } from '$lib/types/contactDetails';
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

<div class="w-full px-4 text-justify 2xl:-my-60 2xl:w-4/12 ">
    <div
        class="relative mb-6 mt-16 flex w-full min-w-0 flex-col break-words rounded-lg bg-base-200 bg-opacity-[75%] shadow-xl backdrop-blur"
    >
        <div class="px-6">
            <div class="flex flex-wrap justify-center">
                <div class="flex w-full justify-center px-4">
                    <div class="mx-auto">
                        <img
                            alt="..."
                            src="{contact.picture_url}"
                            class="mask mask-circle -mt-20 w-[200px]"
                        />
                    </div>
                </div>
                <div class="mt-20 w-full px-4 text-center"></div>
            </div>
            <div class="-m-4 text-center">
                <h3 class="mb-2 text-xl font-semibold leading-normal text-gray-200">
                    {contact.name}
                </h3>
                <div class="mt-0 mb-2 text-sm font-bold uppercase leading-normal text-gray-400">
                    <i class="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>
                    {contact.position}
                </div>
                <div class="mt-10 mb-2 text-gray-300">
                    <i class="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
                    Email: {contact.email}
                </div>
                <div class="mb-2 text-gray-300">
                    <i class="fas fa-university mr-2 text-lg text-gray-400"></i>
                    Mobile/WhatsApp: {contact.mobile_number}
                </div>
            </div>
            <div class="mt-10 border-t border-gray-200 py-10 text-center">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full px-4 lg:w-9/12">
                        <p class="mb-4 text-justify text-lg leading-relaxed text-gray-200">
                            {contact.bio}
                        </p>
                        <span class="link hidden font-normal text-red-500">Contact</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
