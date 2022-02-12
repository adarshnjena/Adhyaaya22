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

<div class="text-justify w-full px-4 2xl:w-4/12 2xl:-my-60 ">
    <div
        class="relative flex flex-col min-w-0 break-words backdrop-blur bg-opacity-[75%] bg-base-200 w-full mb-6 shadow-xl rounded-lg mt-16"
    >
        <div class="px-6">
            <div class="flex flex-wrap justify-center">
                <div class="flex justify-center w-full px-4">
                    <div class="mx-auto">
                        <img
                            alt="..."
                            src="{contact.picture_url}"
                            class="-mt-20 mask w-[200px] mask-circle"
                        />
                    </div>
                </div>
                <div class="w-full px-4 mt-20 text-center"></div>
            </div>
            <div class="-m-4 text-center">
                <h3 class="mb-2 text-xl font-semibold leading-normal text-gray-200">
                    {contact.name}
                </h3>
                <div class="mt-0 mb-2 text-sm font-bold leading-normal text-gray-400 uppercase">
                    <i class="mr-2 text-lg text-gray-400 fas fa-map-marker-alt"></i>
                    {contact.position}
                </div>
                <div class="mt-10 mb-2 text-gray-300">
                    <i class="mr-2 text-lg text-gray-400 fas fa-briefcase"></i>
                    Email: {contact.email}
                </div>
                <div class="mb-2 text-gray-300">
                    <i class="mr-2 text-lg text-gray-400 fas fa-university"></i>
                    Mobile/WhatsApp: {contact.mobile_number}
                </div>
            </div>
            <div class="py-10 mt-10 text-center border-t border-gray-200">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full px-4 lg:w-9/12">
                        <p class="mb-4 text-lg text-justify leading-relaxed text-gray-200">
                            {contact.bio}
                        </p>
                        <span class="hidden font-normal text-red-500 link">Contact</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
