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
        class="navbar-expand-lg absolute top-0 z-50 flex w-full flex-wrap items-center justify-between bg-opacity-0 px-2 py-3"
    >
        <div class="mx-auto flex w-11/12 flex-wrap items-center justify-between px-4">
            <a class="btn btn-ghost mr-8" href="/" aria-label="home-link">
                <figure>
                    <img aria-hidden="true" class="h-10" src="{navbarLogo}" alt="Adhyaaya Logo" />
                </figure>
            </a>
            <div
                class="flex flex-grow items-center rounded bg-opacity-0 shadow-none"
                id="example-navbar-warning"
            >
                <ul class="ml-auto flex list-none flex-row self-end">
                    <li class="flex items-center">
                        <div class="dropdown-end dropdown">
                            <div tabindex="0" class="btn-outline btn btn-ghost m-1">
                                <Icon class="h-10 w-10" icon="{roundMenu}" />
                            </div>
                            <ul
                                tabindex="0"
                                class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
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
        class="relative h-full w-full bg-base-300 pt-32 xl:pb-32 "
        style="background-image: url({backgroundImage});"
    >
        <slot />
    </div>
</PageTransition>
