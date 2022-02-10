<script>
    import '../../app.scss';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import outlineLogout from '@iconify-icons/ic/outline-logout.js';
    import roundMenu from '@iconify-icons/ic/round-menu.js';
    import PageTransition from '$lib/PageTransition.svelte';
    import navbarLogo from '$lib/assets/navbar-logo.png';
    import backgroundImage from '$lib/assets/page-background.png';
</script>

<PageTransition>
    <nav
        class="absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-opacity-0 navbar-expand-lg"
    >
        <div class="flex flex-wrap items-center justify-between w-11/12 px-4 mx-auto">
            <a class="mr-8 btn btn-ghost" href="/" aria-label="home-link">
                <figure>
                    <img aria-hidden="true" class="h-10" src="{navbarLogo}" alt="Adhyaaya Logo" />
                </figure>
            </a>
            <div
                class="flex items-center flex-grow bg-opacity-0 rounded shadow-none"
                id="example-navbar-warning"
            >
                <ul class="flex flex-row self-end ml-auto list-none">
                    <li class="flex items-center">
                        <div class="dropdown dropdown-end">
                            <div tabindex="0" class="m-1 btn btn-ghost btn-outline">
                                <Icon class="w-10 h-10" icon="{roundMenu}" />
                            </div>
                            <ul
                                tabindex="0"
                                class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a sveltekit:prefetch href="/dashboard" class="rounded-xl">
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="/dashboard/tasks" class="rounded-xl">View All Tasks</a>
                                </li>
                                <li>
                                    <a href="/auth/logout" class="btn btn-error rounded-xl">
                                        <Icon class="mr-2" icon="{outlineLogout}" /> LOGOUT
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="flex items-center"></li>
                </ul>
            </div>
        </div>
    </nav>

    <div
        class="relative w-full h-full pt-32 xl:pb-32 bg-base-300 "
        style="background-image: url({backgroundImage});"
    >
        <slot />
    </div>
</PageTransition>
