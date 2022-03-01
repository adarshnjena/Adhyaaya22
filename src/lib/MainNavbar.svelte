<script>
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import roundMenu from '@iconify-icons/ic/round-menu.js';
    import authStore from './auth/authStore';
    let auth_link = ['Register', '/event/register'];
    $: $authStore.isLoggedIn
        ? (auth_link = ['Dashboard', '/dashboard'])
        : (auth_link = ['Register', '/event/register']);
</script>

<nav
    class="tw-sticky tw-top-0 tw-z-10 tw-w-full tw-rounded tw-border-gray-200 tw-bg-transparent tw-px-2 tw-py-2.5 sm:tw-px-4"
>
    <div
        class="tw-container tw-mx-auto tw-flex tw-flex-wrap tw-items-center tw-justify-between md:tw-justify-evenly lg:tw-justify-between"
    >
        <a
            href="/"
            class="tw-btn tw-btn-ghost tw-btn-lg tw-ml-1 tw-flex tw-rounded-2xl tw-border md:tw-hidden lg:tw-inline-flex"
        >
            <img src="/favicon.png" class="tw-m-2 tw-w-20" alt="adhyaaya-logo" />
        </a>
        <div class="tw-flex tw-items-center md:tw-order-2 md:tw-hidden">
            <!-- Dropdown menu -->
            <div class="tw-dropdown-end tw-dropdown tw-inline-block md:tw-hidden">
                <div tabindex="0" class="tw-btn tw-btn-ghost tw-m-1">
                    <Icon class="{`tw-h-8 tw-w-8`}" icon="{roundMenu}" />
                </div>
                <ul
                    tabindex="0"
                    class="tw-dropdown-content tw-menu tw-rounded-box tw-w-52 tw-bg-base-300 tw-p-2 tw-shadow"
                >
                    <li>
                        <a sveltekit:prefetch href="/">Home</a>
                    </li>
                    <li>
                        <a sveltekit:prefetch href="/events/events">Events</a>
                    </li>
                    <li>
                        <a sveltekit:prefetch href="/event/sponsors">Sponsors</a>
                    </li>
                    <li>
                        <a sveltekit:prefetch href="/events/gallery">Gallery</a>
                    </li>
                    <li>
                        <a sveltekit:prefetch href="/event/teams">Teams</a>
                    </li>
                    <li>
                        <a sveltekit:prefetch href="{auth_link[1]}">{auth_link[0]}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div
            class="tw-hidden tw-w-full tw-items-center tw-justify-between md:tw-order-1 md:tw-flex md:tw-w-auto"
            id="mobile-menu-2"
        >
            <ul
                class="tw-mt-4 tw-flex tw-flex-col md:tw-mt-0 md:tw-flex-row md:tw-space-x-8 md:tw-text-sm md:tw-font-medium"
            >
                <li>
                    <a
                        href="/"
                        class="tw-block tw-bg-transparent tw-py-2 tw-pr-4 tw-pl-3 tw-text-gray-400 tw-transition-colors tw-duration-150 hover:tw-text-white"
                        aria-current="page"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="/events/events"
                        class="tw-block tw-bg-transparent tw-py-2 tw-pr-4 tw-pl-3 tw-text-gray-400 tw-transition-colors tw-duration-150 hover:tw-text-white"
                    >
                        Events
                    </a>
                </li>
                <li>
                    <a
                        href="/event/sponsors"
                        class="tw-block tw-bg-transparent tw-py-2 tw-pr-4 tw-pl-3 tw-text-gray-400 tw-transition-colors tw-duration-150 hover:tw-text-white"
                    >
                        Sponsors
                    </a>
                </li>
                <li>
                    <a
                        href="/events/gallery"
                        class="tw-block tw-bg-transparent tw-py-2 tw-pr-4 tw-pl-3 tw-text-gray-400 tw-transition-colors tw-duration-150 hover:tw-text-white"
                    >
                        Gallery
                    </a>
                </li>
                <li>
                    <a
                        href="/event/teams"
                        class="tw-block tw-bg-transparent tw-py-2 tw-pr-4 tw-pl-3 tw-text-gray-400 tw-transition-colors tw-duration-150 hover:tw-text-white"
                    >
                        Teams
                    </a>
                </li>
                <li>
                    <a
                        href="{auth_link[1]}"
                        class="tw-block tw-bg-transparent tw-py-2 tw-pr-4 tw-pl-3 tw-text-gray-400 tw-transition-colors tw-duration-150 hover:tw-text-white"
                    >
                        {auth_link[0]}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
