<script lang="ts">
    import GithubIcon from '@iconify-icons/simple-icons/github.js'
    import EmailIcon from '@iconify-icons/ic/email.js'
    import LinkedinIcon from '@iconify-icons/simple-icons/linkedin.js'
    import TwitterIcon from '@iconify-icons/simple-icons/twitter.js'
    import InstagramIcon from '@iconify-icons/simple-icons/instagram.js'
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte'
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
        name: 'DEFAULT',
        position: 'VOLUNTEER',
        bio: 'I am Default, Destroyer of Worlds',
        image_url: 'https://dummyimage.com/200x200',
        socials: [
            {
                name: 'github',
                url: 'https://github.com/DevParapalli',
            },
            {
                name: '',
                url: '',
            }
        ]
    }
</script>

<div class="tw-p-4 lg:tw-w-1/2">
    <div
        class="tw-flex tw-h-full tw-flex-col tw-items-center tw-justify-center tw-text-center sm:tw-flex-row sm:tw-justify-start sm:tw-text-left"
    >
        <img
            alt="team"
            class="tw-mb-4 tw-h-48 tw-w-48 tw-flex-shrink-0 tw-rounded-lg tw-object-cover tw-object-center sm:tw-mb-0"
            src="{details.image_url}"
        />
        <div class="tw-flex-grow sm:tw-pl-8">
            <h2 class="tw-title-font tw-text-lg tw-font-medium tw-text-white">{details.name}</h2>
            <h3 class="tw-mb-3 tw-text-gray-500">{details.position}</h3>
            <p class="tw-mb-4">
                {details.bio}
            </p>
            <span class="tw-inline-flex">
                {#each details.socials as social}
                <a href="{social.url}" class="tw-ml-2 tw-h-6 tw-w-6 tw-text-gray-500 hover:tw-text-white tw-transition-colors tw-duration-200">
                    <Icon icon={get_icon(social.name)} />
                </a>
                {/each}
            </span>
        </div>
    </div>
</div>