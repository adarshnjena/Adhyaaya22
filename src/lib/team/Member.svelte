<script lang="ts">
    import GithubIcon from '@iconify-icons/simple-icons/github.js'
    import EmailIcon from '@iconify-icons/ic/email.js'
    import LinkedinIcon from '@iconify-icons/simple-icons/linkedin.js'
    import TwitterIcon from '@iconify-icons/simple-icons/twitter.js'
    import InstagramIcon from '@iconify-icons/simple-icons/instagram.js'
    import Icon from '@iconify/svelte/offline/dist/Icon.svelte'
    function get_icon(name: string) {
        switch (name) {
            case 'github':
                return GithubIcon
            case 'email':
                return EmailIcon
            case 'instagram':
                return InstagramIcon
            case 'linkedin':
                return LinkedinIcon
            case 'twitter':
                return TwitterIcon
            default:
                return null
        }
    }
    
    export let details = {
        name: '',
        position: '',
        bio: '',
        image_url: '',
        socials: [
            {
                name: '',
                url: '',
            },
            {
                name: '',
                url: '',
            }
        ]
    }
</script>

<div class="p-4 lg:w-1/2">
    <div
        class="flex h-full flex-col items-center justify-center text-center sm:flex-row sm:justify-start sm:text-left"
    >
        <img
            alt="team"
            class="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
            src="{details.image_url}"
        />
        <div class="flex-grow sm:pl-8">
            <h2 class="title-font text-lg font-medium text-white">{details.name}</h2>
            <h3 class="mb-3 text-gray-500">{details.position}</h3>
            <p class="mb-4">
                {details.bio}
            </p>
            <span class="inline-flex">
                {#each details.socials as social}
                <a href="{social.url}" class="ml-2 text-gray-500">
                    <Icon icon={get_icon(social.name)} />
                </a>
                {/each}
            </span>
        </div>
    </div>
</div>