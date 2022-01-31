<script lang="ts">
    import type {profileDetails} from '$lib/types/profileDetails'
    export let details: profileDetails = {
        username: '@username',
        email: 'username@domain.tld',
        first_name: 'FirstName',
        last_name: 'LastName',
        mobile_number: '+91 5542342345',
        address: 'Some Place, Some City, Some Country',
        locality: 'Some Locality',
        city: 'Some City',
        state: 'Some State',
        country: 'Some Country',
        bio: 'I make a website! He did not. Great Success!',
    };
</script>

<div class="w-full lg:w-8/12 px-4">
    <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-opacity-[75%] bg-base-200 border-0"
    >
        <div class="rounded-t  mb-0 px-6 py-6">
            <div class="text-center flex justify-between">
                <h6 class="text-blueGray-700 text-xl font-bold">Your Details</h6>
                <button class="btn btn-info btn-sm " type="button">Update Info</button>
            </div>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
                <h6 class="text-sm pl-4 pt-3 pb-6 text-gray-400 bg-opacity-[75%] bg-base-300 rounded-t-lg font-bold uppercase">User Information</h6>
                <div class="flex flex-wrap bg-opacity-[75%] bg-base-300 rounded-b-lg">
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="label text-sm"
                                for="grid-username"
                            >
                                Username
                            </label>
                            <input
                                id="grid-username"
                                type="text"
                                class="input input-ghost w-full"
                                bind:value={details.username}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="label text-sm" for="grid-email">
                                Email address
                            </label>
                            <input
                                id="grid-email"
                                type="email"
                                class="input input-ghost w-full"
                                bind:value={details.email}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="label text-sm"
                                for="grid-first-name"
                            >
                                First Name
                            </label>
                            <input
                                id="grid-first-name"
                                type="text"
                                class="input input-ghost w-full"
                                bind:value={details.first_name}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="label text-sm"
                                for="grid-last-name"
                            >
                                Last Name
                            </label>
                            <input
                                id="grid-last-name"
                                type="text"
                                class="input input-ghost w-full"
                                bind:value={details.last_name}
                            />
                        </div>
                    </div>
                </div>


                <h6 class=" text-sm mt-4 pl-4 pt-3 pb-6 text-gray-400 bg-opacity-[75%] bg-base-300 rounded-t-lg font-bold uppercase">Contact Information</h6>
                <div class="flex flex-wrap bg-opacity-[75%] bg-base-300 rounded-b-lg">
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="label text-sm"
                                for="grid-first-name"
                            >
                                Mobile Number
                            </label>
                            <input
                                id="grid-first-name"
                                type="text"
                                class="input input-ghost w-full"
                                bind:value={details.mobile_number}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="label text-sm"
                                for="grid-last-name"
                            >
                                Area/Locality
                            </label>
                            <input
                                id="grid-last-name"
                                type="text"
                                class="input input-ghost w-full"
                                bind:value={details.locality}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="label text-sm"
                                for="grid-address"
                            >
                                Address
                            </label>
                            <input
                                id="grid-address"
                                type="text"
                                class="input input-ghost w-full"
                                bind:value={details.address}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="label text-sm" for="grid-city">
                                City
                            </label>
                            <input
                                id="grid-city"
                                type="email"
                                class="input input-ghost w-full"
                                bind:value={details.city}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="label text-sm"
                                for="grid-state"
                            >
                                State
                            </label>
                            <input
                                id="grid-state"
                                type="text"
                                class="input input-ghost w-full"
                                bind:value={details.state}
                            />
                        </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                        <div class="relative w-full mb-3">
                            <label
                                class="label text-sm"
                                for="grid-country"
                            >
                                Country
                            </label>
                            <input
                                id="grid-country"
                                type="text"
                                class="input input-ghost w-full"
                                bind:value={details.country}
                            />
                        </div>
                    </div>
                </div>


                <h6 class=" text-sm mt-4 pl-4 pt-3 pb-6 text-gray-400 bg-opacity-[75%] bg-base-300 rounded-t-lg font-bold uppercase">About Me</h6>
                <div class="flex flex-wrap bg-opacity-[75%] bg-base-300 rounded-b-lg">
                    <div class="w-full lg:w-12/12 px-4">
                        <div class="form-control relative w-full mb-3">
                            <label class="label text-sm" for="grid-about-me">About me</label>
                            <textarea
                                id="grid-about-me"
                                type="text"
                                class="textarea h-24 textarea-ghost"
                                rows="4"
                                bind:value="{details.bio}"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
