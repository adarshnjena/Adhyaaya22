<script>
    import EventNavbar from '../event/EventNavbar.svelte';
    import '../../app.scss';
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import outlineLogout from '@iconify-icons/ic/outline-logout.js';
    import roundMenu from '@iconify-icons/ic/round-menu.js';
    import navbarLogo from '$lib/assets/navbar-logo.png';
    import CaFooter from '$lib/CAFooter.svelte';
    import MainNavbar from '$lib/MainNavbar.svelte';
    import authStore from '$lib/auth/authStore';

    let auth_link = ['Register', '/event/register'];
    $: $authStore.isLoggedIn
        ? (auth_link = ['Dashboard', '/dashboard'])
        : (auth_link = ['Register', '/event/register']);
</script>

<nav
    class="tw-navbar-expand-lg tw-absolute tw-top-0 tw-z-50 tw-flex tw-w-full tw-flex-wrap tw-items-center tw-justify-between tw-bg-opacity-0 tw-px-2 tw-py-3"
>
    <div
        class="tw-mx-auto tw-flex tw-w-11/12 tw-flex-wrap tw-items-center tw-justify-between tw-px-4"
    >
        <a class="tw-btn tw-btn-ghost tw-mr-8" href="/" aria-label="home-link">
            <figure>
                <img aria-hidden="true" class="tw-h-10" src="{navbarLogo}" alt="Adhyaaya Logo" />
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
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/events/events">Events</a>
                            </li>
                            <li>
                                <a href="/event/sponsors">Sponsors</a>
                            </li>
                            <li>
                                <a href="/events/gallery">Gallery</a>
                            </li>
                            <li>
                                <a href="/event/teams">Teams</a>
                            </li>
                            <li>
                                <a href="{auth_link[1]}">{auth_link[0]}</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="tw-flex tw-items-center"></li>
            </ul>
        </div>
    </div>
</nav>
<div class="tw-relative tw-h-full tw-w-full tw-bg-opacity-0" style="">
    <slot />
</div>

<!--<CaFooter />-->
