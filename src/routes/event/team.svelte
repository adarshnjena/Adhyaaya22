<script>
    import Footer from '$lib/MainFooter.svelte';
import Member from '$lib/team/Member.svelte';
</script>

<section class="tw-body-font tw-bg-base-300 tw-text-gray-400">
    <div class="tw-container tw-mx-auto tw-px-5 tw-py-24">
        <div class="tw-mb-20 tw-flex tw-w-full tw-flex-col tw-text-center">
            <h1 class="tw-title-font tw-mb-4 tw-text-4xl tw-font-medium tw-tracking-widest tw-text-white">
                OUR TEAM
            </h1>
            <p class="tw-mx-auto tw-text-base tw-leading-relaxed lg:tw-w-2/3">
                Meet the people that have worked countless hours, to bring you the best Adhyaaya yet.
            </p>
        </div>
        <div class="-tw-m-4 tw-flex tw-flex-wrap">
            <div class="tw-p-4 lg:tw-w-1/2">
                <div
                    class="tw-flex tw-h-full tw-flex-col tw-items-center tw-justify-center tw-text-center sm:tw-flex-row sm:tw-justify-start sm:tw-text-left"
                >
                    <img
                        alt="team"
                        class="tw-mb-4 tw-h-48 tw-w-48 tw-flex-shrink-0 tw-rounded-lg tw-object-cover tw-object-center sm:tw-mb-0"
                        src="https://dummyimage.com/200x200"
                    />
                    <div class="tw-flex-grow sm:tw-pl-8">
                        <h2 class="tw-title-font tw-text-lg tw-font-medium tw-text-white">Holden Caulfield</h2>
                        <h3 class="tw-mb-3 tw-text-gray-500">UI Developer</h3>
                        <p class="tw-mb-4">
                            DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
                            vaporware.
                        </p>
                        <span class="tw-inline-flex">
                            <!-- ADD ICONS A/C to what the user prefers.-->
                        </span>
                    </div>
                </div>
            </div>
            <Member />
        </div>
    </div>
</section>
<Footer />
