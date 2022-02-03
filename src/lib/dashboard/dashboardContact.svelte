<script lang="ts">
    import profileImage from '$lib/assets/profile-image.jpg';
    import type { contactDetails } from '$lib/types/contactDetails';
    export let contact: contactDetails = {
        name: 'Adarsh Jena',
        position: 'Tech Lead, Adhyaaya',
        email: 'ca_support@adhyaaya.in',
        phone: '+91 5298188818',
        bio: 'An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.',
        contact: 'mailto:ca_support@adhyaaya.in',
    };
</script>

<div class="w-full lg:w-4/12 px-4">
    <div
        class="relative flex flex-col min-w-0 break-words bg-opacity-[75%] bg-base-200 w-full mb-6 shadow-xl rounded-lg mt-16"
    >
        <div class="px-6">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 flex justify-center">
                    <div class="mx-auto">
                        <img
                            alt="..."
                            src="{profileImage}"
                            class="-mt-20 mask w-[200px] mask-circle"
                        />
                    </div>
                </div>
                <div class="w-full px-4 text-center mt-20"></div>
            </div>
            <div class="text-center -m-4">
                <h3 class="text-xl font-semibold leading-normal mb-2 text-gray-200">
                    {contact.name}
                </h3>
                <div class="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
                    <i class="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>
                    {contact.position}
                </div>
                <div class="mb-2 text-gray-300 mt-10">
                    <i class="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
                    Email: {contact.email}
                </div>
                <div class="mb-2 text-gray-300">
                    <i class="fas fa-university mr-2 text-lg text-gray-400"></i>
                    Mobile/WhatsApp: {contact.phone}
                </div>
            </div>
            <div class="mt-10 py-10 border-t border-gray-200 text-center">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                        <p class="mb-4 text-lg leading-relaxed text-gray-200">
                            {contact.bio}
                        </p>
                        <a href="{contact.contact}" class="hidden font-normal link text-red-500">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
