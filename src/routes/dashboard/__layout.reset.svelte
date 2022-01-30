<script>
    import '../../app.scss';
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import outlineLogout from '@iconify-icons/ic/outline-logout.js';
    import roundMenu from '@iconify-icons/ic/round-menu.js';
    import PageTransition from '$lib/PageTransition.svelte';
</script>

<nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
>
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <a class="btn btn-ghost mr-8" href="/">
            <figure>
                <img class="h-10" src="/navbar-logo.png" alt="" />
            </figure>
        </a>
        <div
            class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none rounded shadow-lg hidden"
            id="example-navbar-warning"
        >
            <ul class="flex flex-col lg:flex-row list-none mr-auto">
                <li class="flex items-center">
                    <a
                        class="btn btn-ghost"
                        href="/"
                        ><i
                            class="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
                        />
                        FAQs</a
                    >
                </li>
            </ul>
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li class="flex items-center">
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" class="m-1 btn">
                            <Icon class="h-10 w-10" icon={roundMenu} />
                        </div>
                        <ul
                            tabindex="0"
                            class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <span>Item 1</span>
                            </li>
                            <li>
                                <span>Item 2</span>
                            </li>
                            <li>
                                <button class="bg-error rounded-xl"
                                    ><Icon class="mr-2" icon={outlineLogout} /> LOGOUT
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
    <slot />
</PageTransition>
