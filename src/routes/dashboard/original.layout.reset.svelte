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
        class="tw-navbar-expand-lg tw-absolute tw-top-0 tw-z-50 tw-flex tw-w-full tw-flex-wrap tw-items-center tw-justify-between tw-bg-opacity-0 tw-px-2 tw-py-3"
    >
        <div
            class="tw-mx-auto tw-flex tw-w-11/12 tw-flex-wrap tw-items-center tw-justify-between tw-px-4"
        >
            <a sveltekit:prefetch class="tw-btn tw-btn-ghost tw-mr-8" href="/" aria-label="home-link">
                <figure>
                    <img
                        aria-hidden="true"
                        class="tw-h-10"
                        src="{navbarLogo}"
                        alt="Adhyaaya Logo"
                    />
                </figure>
            </a>
            <div
                class="tw-flex tw-flex-grow tw-items-center tw-rounded tw-bg-opacity-0 tw-shadow-none"
                id="example-navbar-warning"
            >
                <ul class="tw-ml-auto tw-flex tw-list-none tw-flex-row tw-self-end">
                    <li class="tw-flex tw-items-center">
                        <div class="tw-dropdown-end tw-dropdown">
                            <div tabindex="0" class="tw-btn-outline tw-btn tw-btn-ghost tw-m-1">
                                <Icon class="tw-h-10 tw-w-10" icon="{roundMenu}" />
                            </div>
                            <ul
                                tabindex="0"
                                class="tw-dropdown-content tw-menu tw-rounded-box tw-w-52 tw-bg-base-100 tw-p-2 tw-shadow"
                            >
                                <li>
                                    <a sveltekit:prefetch  href="/dashboard" class="tw-rounded-xl">
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a sveltekit:prefetch href="/dashboard/tasks" class="tw-rounded-xl">
                                        View All Tasks
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/auth/logout"
                                        class="tw-btn tw-btn-error tw-rounded-xl"
                                    >
                                        <Icon class="tw-mr-2" icon="{outlineLogout}" /> LOGOUT
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="tw-flex tw-items-center"></li>
                </ul>
            </div>
        </div>
    </nav>

    <div
        class="tw-relative tw-h-full tw-w-full tw-bg-base-300 tw-pt-32 "
        style="background-image: url({backgroundImage});"
    >
        <slot />
    </div>
</PageTransition>
