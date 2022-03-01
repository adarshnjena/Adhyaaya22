<script>
    import EventNavbar from './EventNavbar.svelte';
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

<MainNavbar />
<div class="tw-relative tw-h-full tw-w-full tw-bg-opacity-0" style="">
    <slot />
</div>

<CaFooter />
