<script>
    import '../../app.scss';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import outlineLogout from '@iconify-icons/ic/outline-logout.js';
    import roundMenu from '@iconify-icons/ic/round-menu.js';
    import PageTransition from '$lib/PageTransition.svelte';
    import navbarLogo from '$lib/assets/navbar-logo.png';
    import backgroundImage from '$lib/assets/page-background.png';
</script>

<nav
    class="top-0 bg-opacity-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
>
    <div class="w-11/12 px-4 mx-auto flex flex-wrap items-center justify-between">
        <a class="btn btn-ghost mr-8" href="/" aria-label="home-link">
            <figure>
                <img aria-hidden="true" class="h-10" src={navbarLogo} alt="Adhyaaya Logo" />
            </figure>
        </a>
        <div
            class="flex flex-grow items-center bg-opacity-0 shadow-none rounded"
            id="example-navbar-warning"
        >
            <ul class="flex flex-row list-none ml-auto self-end">
                <li class="flex items-center">
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" class="m-1 btn btn-ghost btn-outline">
                            <Icon class="h-10 w-10" icon={roundMenu} />
                        </div>
                        <ul
                            tabindex="0"
                            class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a href="/" class="rounded-xl">Item 1</a>
                            </li>
                            <li>
                                <a href="/faq" class="rounded-xl">Item 2</a>
                            </li>
                            <li>
                                <button class="btn btn-error rounded-xl">
                                    <Icon class="mr-2" icon={outlineLogout} /> LOGOUT
                                </button>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="flex items-center" />
            </ul>
        </div>
    </div>
</nav>

<PageTransition>
    <div
        class="relative bg-base-300 h-full w-full py-32 "
        style="background-image: url({backgroundImage});"
    >
        <slot />
    </div>
</PageTransition>
