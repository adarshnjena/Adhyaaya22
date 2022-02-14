<script>
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import roundMenu from '@iconify-icons/ic/round-menu.js';
</script>

<nav class="sticky top-0 z-10 w-full rounded border-gray-200 bg-transparent px-2 py-2.5 sm:px-4">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" class="flex rounded-2xl border ml-1 btn btn-ghost btn-lg">
            <img src="/favicon.png" class="m-2 w-20" alt="adhyaaya-logo" />
        </a>
        <div class="flex items-center md:order-2">
            <!-- Dropdown menu -->
            <div class="dropdown-end dropdown visible md:invisible">
                <div tabindex="0" class="btn btn-ghost m-1">
                    <Icon class="{`h-8 w-8`}" icon="{roundMenu}" />
                </div>
                <ul
                    tabindex="0"
                    class="dropdown-content menu rounded-box w-52 bg-base-300 p-2 shadow"
                >
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/event/events">Events</a>
                    </li>
                    <li>
                        <a href="/event/sponsors">Sponsors</a>
                    </li>
                    <li>
                        <a href="/event/gallery">Gallery</a>
                    </li>

                    <li>
                        <a href="/event/register">Register</a>
                    </li>
                </ul>
            </div>
        </div>
        <div
            class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="mobile-menu-2"
        >
            <ul
                class="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
            >
                <li>
                    <a
                        href="/"
                        class="block bg-transparent py-2 pr-4 pl-3 text-gray-400 transition-colors duration-150 hover:text-white"
                        aria-current="page"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="/event/events"
                        class="block bg-transparent py-2 pr-4 pl-3 text-gray-400 transition-colors duration-150 hover:text-white"
                    >
                        Events
                    </a>
                </li>
                <li>
                    <a
                        href="/event/sponsors"
                        class="block bg-transparent py-2 pr-4 pl-3 text-gray-400 transition-colors duration-150 hover:text-white"
                    >
                        Sponsors
                    </a>
                </li>
                <li>
                    <a
                        href="/event/gallery"
                        class="block bg-transparent py-2 pr-4 pl-3 text-gray-400 transition-colors duration-150 hover:text-white"
                    >
                        Gallery
                    </a>
                </li>
                <li>
                    <a
                        href="/event/register"
                        class="block bg-transparent py-2 pr-4 pl-3 text-gray-400 transition-colors duration-150 hover:text-white"
                    >
                        Register
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
