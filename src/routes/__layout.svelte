<script>
    import '../app.scss';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import roundHome from '@iconify-icons/ic/outline-space-dashboard';
    import outlineLogout from '@iconify-icons/ic/outline-logout';
    import roundMenu from '@iconify-icons/ic/round-menu';
</script>

<nav class="navbar w-screen mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
    <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold">
            <img src="/navbar-logo.png" class="w-[6.3rem]" alt="adhyaaya-22-logo" />
        </span>
    </div>
    <div class="flex-none px-2 mx-2 lg:flex">
        <div class="flex items-stretch">
            <a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/dashboard">
                <Icon class="inline-block w-5 mr-2 stroke-current" icon={roundHome} />
                Dashboard
            </a>
        </div>
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-end">
            <div tabindex="0" class="m-1 btn">
                <Icon class="inline-block w-6 h-6 stroke-current" icon={roundMenu} />
            </div>
            <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                <li>
                    <a>Item 1</a>
                </li>
                <li>
                    <a>Item 2</a>
                </li>
                <li>
                    <!--Do NOT PRELOAD THIS LINK-->
                    <a href="/auth/logout"><Icon class="mx-2" icon={outlineLogout} />Logout</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="container mt-0 pt-0">
    <slot />
</div>
