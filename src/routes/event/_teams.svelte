<script>
    import Footer from '$lib/MainFooter.svelte';
    import Member from '$lib/team/Member.svelte';
    function changeAtiveTab(event, tabID) {
        let element = event.target;
        while (element.nodeName !== 'A') {
            element = element.parentNode;
        }
        let ulElement = element.parentNode.parentNode;
        let aElements = ulElement.querySelectorAll('li > a');
        let tabContents = document.getElementById('tabs-id').querySelectorAll('.tab-content > div');
        for (let i = 0; i < aElements.length; i++) {
            aElements[i].classList.remove('tw-text-white');
            aElements[i].classList.remove('tw-bg-pink-600');
            aElements[i].classList.add('tw-text-pink-600');
            aElements[i].classList.add('tw-bg-white');
            tabContents[i].classList.add('tw-hidden');
            tabContents[i].classList.remove('tw-block');
        }
        element.classList.remove('tw-text-pink-600');
        element.classList.remove('tw-bg-white');
        element.classList.add('tw-text-white');
        element.classList.add('tw-bg-pink-600');
        document.getElementById(tabID).classList.remove('tw-hidden');
        document.getElementById(tabID).classList.add('tw-block');
    }
    function changeAtiveTab2(event, tabID) {
        let element = event.target;
        while (element.nodeName !== 'A') {
            element = element.parentNode;
        }
        let ulElement = element.parentNode.parentNode;
        let aElements = ulElement.querySelectorAll('li > a');
        let tabContents = document
            .getElementById('tabs-id2')
            .querySelectorAll('.tab-content2 > div');
        for (let i = 0; i < aElements.length; i++) {
            aElements[i].classList.remove('tw-text-white');
            aElements[i].classList.remove('tw-bg-pink-600');
            aElements[i].classList.add('tw-text-pink-600');
            aElements[i].classList.add('tw-bg-white');
            tabContents[i].classList.add('tw-hidden');
            tabContents[i].classList.remove('tw-block');
        }
        element.classList.remove('tw-text-pink-600');
        element.classList.remove('tw-bg-white');
        element.classList.add('tw-text-white');
        element.classList.add('tw-bg-pink-600');
        document.getElementById(tabID).classList.remove('tw-hidden');
        document.getElementById(tabID).classList.add('tw-block');
    }
</script>

<div class="team">
    <h1 class="glitch" data-text="Meet our team">Meet our team</h1>
</div>
<div class="scrolldown">
    <p>scroll down</p>
    <div class="chevrons">
        <div class="chevrondown"></div>
        <div class="chevrondown"></div>
    </div>
</div>
<main class="honey_comb">
    <ul>
        <li>
            <img class="cod" src="/teams/image/Laksh_Bahl.png" />
        </li>
        <li>
            <img class="adv" src="/teams/image/Nirant_Wankhede.png" />
        </li>
        <li>
            <img class="adv" src="/teams/image/Nirupam_Khadatkar.png" />
        </li>
        <li>
            <img class="adv" src="/teams/image/Mitali_Potode.png" />
        </li>
        <li>
            <img class="adv" src="/teams/image/Ashutosh_Rokade.png" />
        </li>
        <li>
            <img class="adv" src="/teams/image/Pranay_Tupkar.png" />
        </li>
        <li>
            <img class="tech" src="/teams/image/ansool-removebg-preview.png" />
        </li>
        <li>
            <img class="cod" src="/teams/image/Arya Mahashabde.png" />
        </li>
        <li>
            <img class="tech" src="/teams/image/Siddhant Patil 2.png" />
        </li>
        <li>
            <img <img class="cod" src="/teams/image/Nikhil_Deshpande.png" />
            />
        </li>
        <li>
            <img class="cod" src="/teams/image/Ujjwal Gupta.png" />
        </li>
        <li>
            <img class="cod" src="/teams/image/Reyansh Bhagat.png" />
        </li>
        <li>
            <img class="spons" src="/teams/image/Bhavika Khode.png" />
        </li>
        <li>
            <img class="tech" src="/teams/image/Siddhant Patil 2.png" />
        </li>
        <li>
            <img class="tech" src="/teams/image/Siddhant Patil 2.png" />
        </li>
        <li>
            <img class="asu" src="/teams/image/asu-77.png" />
        </li>
        <li>
            <img class="org" src="/teams/image/Kaushik Maske.png" />
        </li>
        <li>
            <img class="org" src="/teams/image/Ipsha Bhalsagar.....png" />
        </li>
        <li>
            <img class="spons" src="/teams/image/Kiran Anand.png" />
            />
        </li>
        <li>
            <img class="spons" src="/teams/image/Om Yerpude.png" />
        </li>
        <li>
            <img class="pub" src="/teams/image/Ved Nande....png" />
        </li>
        <li>
            <img class="org" src="/teams/image/Purvi Mahalle....png" />
        </li>
        <li>
            <img class="org" src="/teams/image/Ankita Sakharkar.png" />
        </li>
        <li>
            <img class="org" src="/teams/image/Aman Rai.png" />
        </li>
        <li>
            <img class="pub" src="/teams/image/Sumeet Bawankar.png" />
        </li>
        <li>
            <img class="pub" src="/teams/image/Sakshi Mahajan.png" />
        </li>
        <li>
            <img class="pub" src="/teams/image/Anushka Dadwe.png" />
        </li>
        <li>
            <img class="acc" src="/teams/image/Harnoor Tuli.png" />
        </li>
        <li>
            <img class="acc" src="/teams/image/Piyush Dahake.png" />
        </li>
        <li>
            <img class="acc" src="/teams/image/Anshika mendhe.png" />
        </li>
        <li class="pub"></li>
        <li>
            <img class="pub" src="/teams/image/Saurabh Yadav......png" />
        </li>
        <li>
            <img class="hos" src="/teams/image/Dharti Parwe.png" />
        </li>
        <li>
            <img class="hos" src="/teams/image/Nakul Sakore.png" />
        </li>
        <li>
            <img class="hos" src="/teams/image/Tanushree Duragkar.png" />
        </li>
        <li>
            <img class="hos" src="/teams/image/IMG_3915-removebg-preview.png" />
        </li>
    </ul>
</main>
<div>
    <div class="tw-flex tw-flex-wrap" id="tabs-id">
        <div class="md:tw-w-tw-w-4/6 tw-m-auto tw-w-11/12 lg:tw-tw-w-4/6">
            <ul class="tw-flex-wrap tw-tw-mb-0 tw-flex tw-tw-list-none tw-flex-row tw-tw-pt-3 tw-tw-pb-4">
                <li class="-tw-mb-px tw-tw-mr-2 tw-flex-auto tw-text-center last:tw-tw-mr-0">
                    <a
                        class="tw-block tw-rounded tw-bg-pink-600 tw-px-5 tw-py-3 tw-text-xs tw-font-bold tw-uppercase tw-leading-normal tw-text-white tw-shadow-lg"
                        onclick="changeAtiveTab(event,'tab-profile')"
                    >
                        <i class="fas fa-space-shuttle tw-text-base tw-mr-1"></i>
                        Advisors
                    </a>
                </li>
                <li class="-tw-mb-px tw-mr-2 last:tw-mr-0 tw-text-center tw-flex-auto">
                    <a
                        class="tw-text-xs tw-font-bold tw-uppercase tw-text-pink-600 tw-bg-white tw-block tw-rounded tw-px-5 tw-py-3 tw-leading-normal tw-shadow-lg"
                        onclick="changeAtiveTab(event,'tab-settings')"
                    >
                        <i class="fas fa-cog tw-text-base tw-mr-1"></i>
                        Coordinator
                    </a>
                </li>
                <li class="-tw-mb-px tw-mr-2 last:tw-mr-0 tw-text-center tw-flex-auto">
                    <a
                        class="tw-text-xs tw-font-bold tw-uppercase tw-text-pink-600 tw-bg-white tw-block tw-rounded tw-px-5 tw-py-3 tw-leading-normal tw-shadow-lg"
                        onclick="changeAtiveTab(event,'tab-options')"
                    >
                        <i class="fas fa-briefcase tw-text-base tw-mr-1"></i>
                        Technical
                    </a>
                </li>
            </ul>
            <div
                class="tw-relative tw-min-w-0 tw-break-words tw-bg-neutral-900 tw-w-full tw-mb-6 tw-flex tw-flex-col tw-rounded"
            >
                <div class="tw-px-4 tw-flex-auto tw-py-5">
                    <div class="tab-content tab-space">
                        <div class="tw-block" id="tab-profile">
                            <div class="md:tw-justify-between md:tw-flex">
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Ashutosh_Rokade.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href=""><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Pranay_Tupkar.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                            </div>
                            <div class="md:tw-justify-between md:tw-flex">
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Nirant_Wankhede.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Mitali_Potode.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                            </div>
                            <div
                                class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                            >
                                <img
                                    class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                    src="/teams/image/Nirupam_Khadatkar.png"
                                    alt="product designer"
                                />
                                <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-gmail"></i></a>
                                </button>
                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-linkedin"></i></a>
                                </button>
                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-gmail"></i></a>
                                </button>
                            </div>
                        </div>
                        <div class="tw-hidden" id="tab-settings">
                            <div class="md:tw-justify-between md:tw-flex">
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto bg-cover bg-center tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Ujjwal Gupta.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto bg-cover bg-center tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Arya Mahashabde.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                            </div>
                            <div class="md:tw-justify-between md:tw-flex">
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Laksh_Bahl.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Nikhil_Deshpande.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                            </div>
                            <div
                                class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                            >
                                <img
                                    class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                    src="/teams/image/Reyansh Bhagat.png"
                                    alt="product designer"
                                />
                                <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-gmail"></i></a>
                                </button>
                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-linkedin"></i></a>
                                </button>
                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-gmail"></i></a>
                                </button>
                            </div>
                        </div>
                        <div class="tw-hidden" id="tab-options">
                            <div class="md:tw-justify-between md:tw-flex">
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Siddhant Patil 2.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/ansool-removebg-preview.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                            </div>
                            <div class="md:tw-justify-between md:tw-flex">
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div>
    <div class="tw-flex tw-flex-wrap" id="tabs-id2">
        <div class="lg:tw-w-4/6 md:tw-w-4/6 tw-m-auto tw-w-11/12">
            <ul class="tw-mb-0 tw-list-none tw-pt-3 tw-pb-4 tw-flex tw-flex-row tw-flex-wrap">
                <li class="-tw-mb-px tw-mr-2 last:tw-mr-0 tw-text-center tw-flex-auto">
                    <a  
                        href="/"
                        class="tw-text-xs tw-font-bold tw-uppercase tw-block tw-rounded tw-bg-pink-600 tw-px-5 tw-py-3 tw-leading-normal tw-text-white tw-shadow-lg"
                        on:click|preventDefault="{(e) => changeAtiveTab2(e,'tab-profile2')}"
                    >
                        <i class="fas fa-space-shuttle tw-text-base tw-mr-1"></i>
                        Sponsorship
                    </a>
                </li>
                <li class="-tw-mb-px tw-mr-2 last:tw-mr-0 tw-text-center tw-flex-auto">
                    <a
                        class="tw-text-xs tw-font-bold tw-uppercase tw-text-pink-600 tw-bg-white tw-block tw-rounded tw-px-5 tw-py-3 tw-leading-normal tw-shadow-lg"
                        onclick="changeAtiveTab2(event,'tab-settings2')"
                    >
                        <i class="fas fa-cog tw-text-base tw-mr-1"></i>
                        Publicity
                    </a>
                </li>
                <li class="-tw-mb-px tw-mr-2 last:tw-mr-0 tw-text-center tw-flex-auto">
                    <a
                        class="tw-text-xs tw-font-bold tw-uppercase tw-text-pink-600 tw-bg-white tw-block tw-rounded tw-px-5 tw-py-3 tw-leading-normal tw-shadow-lg"
                        onclick="changeAtiveTab2(event,'tab-options2')"
                    >
                        <i class="fas fa-briefcase tw-text-base tw-mr-1"></i>
                        Organization
                    </a>
                </li>
            </ul>
            <div
                class="tw-relative tw-min-w-0 tw-break-words tw-bg-white tw-w-full tw-mb-6 tw-bg-neutral-900 tw-flex tw-flex-col tw-rounded tw-shadow-lg"
            >
                <div class="tw-px-4 tw-flex-auto tw-py-5">
                    <div class="tab-content tab-content2 tab-space">
                        <div class="tw-block" id="tab-profile2">
                            <div class="md:tw-justify-between md:tw-flex">
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Kiran Anand.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Om Yerpude.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                            </div>
                            <div class="md:tw-justify-between md:tw-flex">
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Rohit Gu"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Bhavika Khode.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="tw-hidden" id="tab-settings2">
                            <div class="md:tw-justify-between md:tw-flex">
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Ved Nande....png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Sakshi Mahajan.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                            </div>
                            <div class="md:tw-justify-between md:tw-flex">
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Sumeet Bawankar.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Saurabh Yadav......png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                            </div>
                            <div
                                class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                            >
                                <img
                                    class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                    src="/teams/image/Anshika mendhe.png"
                                    alt="product designer"
                                />
                                <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-gmail"></i></a>
                                </button>
                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-linkedin"></i></a>
                                </button>
                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-gmail"></i></a>
                                </button>
                            </div>
                        </div>
                        <div class="tw-hidden" id="tab-options2">
                            <div class="md:tw-justify-between md:tw-flex">
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Aman Rai.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Ipsha Bhalsagar.....png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                            </div>
                            <div class="md:tw-justify-between md:tw-flex">
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Ankita Sakharkar.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                                <div
                                    class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                                >
                                    <img
                                        class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                        src="/teams/image/Kaushik Maske.png"
                                        alt="product designer"
                                    />
                                    <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                    <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-linkedin"></i></a>
                                    </button>
                                    <button
                                        class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                    >
                                        <a href="#"><i class="bx bxl-gmail"></i></a>
                                    </button>
                                </div>
                            </div>
                            <div
                                class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                            >
                                <img
                                    class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                    src="/teams/image/Purvi Mahalle....png"
                                    alt="product designer"
                                />
                                <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-gmail"></i></a>
                                </button>
                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-linkedin"></i></a>
                                </button>
                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-gmail"></i></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tw-flex tw-flex-wrap" id="tabs-id2">
    <div class="lg:tw-w-4/6 md:w-tw-w-4/6 tw-m-auto tw-w-11/12">
        <ul class="tw-mb-0 tw-list-none tw-pt-3 tw-pb-4 tw-flex tw-flex-row tw-flex-wrap">
            <li class="-tw-mb-px tw-mr-2 last:tw-mr-0 tw-text-center tw-flex-auto">
                <a
                    class="tw-text-xs tw-font-bold tw-uppercase tw-block tw-rounded tw-bg-pink-600 tw-px-5 tw-py-3 tw-leading-normal tw-text-white tw-shadow-lg"
                >
                    <i class="fas fa-space-shuttle tw-text-base tw-mr-1"></i>
                    Accounting
                </a>
            </li>
        </ul>
        <div
            class="tw-relative tw-min-w-0 tw-break-words tw-bg-white tw-w-full tw-mb-6 tw-bg-neutral-900 tw-flex tw-flex-col tw-rounded tw-shadow-lg"
        >
            <div class="tw-px-4 tw-flex-auto tw-py-5">
                <div class="tab-content tab-content2 tab-space">
                    <div class="tw-block" id="tab-profile2">
                        <div class="md:tw-justify-between md:tw-flex">
                            <div
                                class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                            >
                                <img
                                    class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                    src="/teams/image/Harnoor Tuli.png"
                                    alt="product designer"
                                />
                                <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-gmail"></i></a>
                                </button>
                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-linkedin"></i></a>
                                </button>
                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-gmail"></i></a>
                                </button>
                            </div>
                            <div
                                class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                            >
                                <img
                                    class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                    src="/teams/image/Piyush Dahake.png"
                                    alt="product designer"
                                />
                                <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-gmail"></i></a>
                                </button>
                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-linkedin"></i></a>
                                </button>
                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-gmail"></i></a>
                                </button>
                            </div>
                        </div>
                        <div class="md:tw-justify-between md:tw-flex">
                            <div
                                class="tw-bg-white tw-font-semibold tw-text-center tw-border tw-p-10 tw-max-w-xs tw-mt-10 tw-m-auto tw-rounded-3xl tw-shadow-lg"
                            >
                                <img
                                    class="tw-mb-3 tw-w-32 tw-h-32 tw-mx-auto tw-rounded-full tw-shadow-lg"
                                    src="/teams/image/Anshika mendhe.png"
                                    alt="product designer"
                                />
                                <h1 class="tw-text-lg tw-text-gray-700">John Doe</h1>
                                <h3 class="tw-text-sm tw-text-gray-400">Creative Director</h3>

                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-gmail"></i></a>
                                </button>
                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-linkedin"></i></a>
                                </button>
                                <button
                                    class="tw-bg-indigo-600 tw-px-3 tw-py-2 tw-mt-8 tw-text-gray-100 tw-font-semibold tw-uppercase tw-tracking-wide tw-rounded-3xl"
                                >
                                    <a href="#"><i class="bx bxl-gmail"></i></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Barlow+Condensed:300,400,500,600,700,800,900|Barlow:300,400,500,600,700,800,900&display=swap');
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: tw-border-box;
    }

    body {
        font-family: Poppins, sans-serif;
        line-height: 1.6;
        background-color: black;
    }
    .team {
        font-size: 8vh;
        height: 100vh;
        margin-bottom: 20vh;
        color: white;
        text-shadow: 2px 2px 10px rgb(0, 136, 255);
        font-family: revampedregular;
        font-weight: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .head-1 {
        position: absolute;
        text-align: center;
        color: #fff;
        margin: 50px 80px 30px 0px;
        text-shadow: 2px 2px 10px rgb(0, 136, 255);
        font-family: revampedregular;
        font-weight: 100;
        left: calc(100% / 2 - 100px);
        font-size: 2.2rem;
    }

    /* honey comb section */
    .honey_comb ul {
        margin: auto;
        margin-top: 10px;
        width: 95vw;
        list-style: none;
        height: 100%;
    }
    .honey_comb li {
        width: 18vw;
        display: block;
        height: 16vw;
        clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);
        float: left;
        margin-right: 12vw;
        margin-left: 1vw;
        margin-top: 1vw;
        margin-bottom: 2vw;
    }
    .honey_comb ul:after {
        content: '.';
        visibility: tw-hidden;
        display: block;
        height: 0;
        clear: both;
    }

    .honey_comb li:nth-child(2n) {
        margin: -9vw -5vw 0 -15vw;
    }
    .honey_comb img {
        width: 100%;
        object-fit: cover;
        object-position: 50% 50%;
    }
    .honey_comb h1 {
        margin: 7vw 10vw 0;
        font-size: 3vw;
    }
    .honey_comb p {
        font-size: 80%;
        clear: both;
        margin: 0 5vw 0 0;
        text-align: right;
    }
    .honey_comb a {
        color: #888;
    }

    /* Scroll down */
    .scrolldown {
        --color: white;
        --sizeX: 30px;
        --sizeY: 50px;
        position: tw-relative;
        width: var(--sizeX);
        height: var(--sizeY);
        margin-left: calc(var(sizeX) / 2);
        tw-border: calc(var(--sizeX) / 10) solid var(--color);
        tw-border-radius: 50px;
        box-sizing: tw-border-box;
        margin-bottom: 16px;
        left: calc(100% / 2 - 0px);
        bottom: 30vh;
        transform: translate(-50%, -50%);
    }
    .scrolldown p {
        position: absolute;
        width: 100px;
        bottom: 60px;
        transform: translate(-29%, -50%);
        color: #fff;
    }

    .scrolldown::before {
        content: '';
        position: absolute;
        bottom: 30px;
        left: 50%;
        width: 6px;
        height: 6px;
        margin-left: -3px;
        background-color: var(--color);
        tw-border-radius: 100%;
        animation: scrolldown-anim 2s infinite;
        box-sizing: tw-border-box;
        box-shadow: 0px -5px 3px 1px #ffffff66;
    }

    @keyframes scrolldown-anim {
        0% {
            opacity: 0;
            height: 6px;
        }
        40% {
            opacity: 1;
            height: 10px;
        }
        80% {
            transform: translate(0, 20px);
            height: 10px;
            opacity: 0;
        }
        100% {
            height: 3px;
            opacity: 0;
        }
    }
    .chevrons {
        padding: 6px 0 0 0;
        margin-left: -3px;
        margin-top: 48px;
        width: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .chevrondown {
        margin-top: -6px;
        position: tw-relative;
        tw-border: solid var(--color);
        tw-border-width: 0 3px 3px 0;
        display: inline-block;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
    }
    .chevrondown:nth-child(odd) {
        animation: pulse 500ms ease infinite alternate;
    }
    .chevrondown:nth-child(even) {
        animation: pulse 500ms ease infinite alternate 250ms;
    }
    @keyframes pulse {
        from {
            opacity: 0;
        }
        to {
            opacity: 0.5;
        }
    }

    @media screen and (max-width: 480px) {
        .team {
            margin-bottom: 10vh;
        }
        .scrolldown {
            bottom: 15vh;
        }
        .honey_comb ul {
            margin: auto;
            margin-top: 10px;
            width: 98vw;
            list-style: none;
        }
        .honey_comb li {
            width: 28vw;
            height: 24vw;
            margin-right: 12vw;
            margin-left: 1vw;
            margin-top: 1vw;
            margin-bottom: 1vw;
        }
    }
    .adv {
        background-color: #ffbe0b;
    }
    .cod {
        background-color: #118ab2;
    }
    .tech {
        background-color: #29a79a;
    }
    .asu {
        background-color: #000;
    }
    .org {
        background-color: #f26519;
    }
    .spons {
        background-color: #733adf;
    }
    .pub {
        background-color: #ef233c;
    }
    .acc {
        background-color: #4fadc5;
    }
    .hos {
        background-color: #ff7d00;
    }

    /*Glitch Effect*/

    .glitch {
        position: tw-relative;
        margin: 0 auto;
        color: #fff;
        font-size: 80px;
        font-weight: 600;
        text-align: center;
        text-transform: tw-uppercase;
        letter-spacing: 0.01em;
        transform: scale3d(1, 1, 1);
    }
    .glitch::before,
    .glitch::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        overflow: tw-hidden;
        background: rgb(0, 0, 0);
        color: #fff;
        clip: rect(0, 900px, 0, 0);
    }
    .glitch::before {
        left: 7px;
        text-shadow: 1px 0 green;
        animation: glitch-effect 3s infinite linear alternate-reverse;
    }
    .glitch::after {
        left: 3px;
        text-shadow: -1px 0 red;
        animation: glitch-effect 2s infinite linear alternate-reverse;
    }

    @-webkit-keyframes glitch-effect {
        0% {
            clip: rect(65px, 9999px, 48px, 0);
        }
        5% {
            clip: rect(45px, 9999px, 14px, 0);
        }
        10% {
            clip: rect(46px, 9999px, 100px, 0);
        }
        15% {
            clip: rect(91px, 9999px, 97px, 0);
        }
        20% {
            clip: rect(89px, 9999px, 20px, 0);
        }
        25% {
            clip: rect(90px, 9999px, 92px, 0);
        }
        30% {
            clip: rect(7px, 9999px, 32px, 0);
        }
        35% {
            clip: rect(16px, 9999px, 78px, 0);
        }
        40% {
            clip: rect(10px, 9999px, 20px, 0);
        }
        45% {
            clip: rect(44px, 9999px, 24px, 0);
        }
        50% {
            clip: rect(43px, 9999px, 75px, 0);
        }
        55% {
            clip: rect(58px, 9999px, 87px, 0);
        }
        60% {
            clip: rect(67px, 9999px, 88px, 0);
        }
        65% {
            clip: rect(47px, 9999px, 61px, 0);
        }
        70% {
            clip: rect(69px, 9999px, 58px, 0);
        }
        75% {
            clip: rect(22px, 9999px, 20px, 0);
        }
        80% {
            clip: rect(75px, 9999px, 33px, 0);
        }
        85% {
            clip: rect(52px, 9999px, 61px, 0);
        }
        90% {
            clip: rect(12px, 9999px, 89px, 0);
        }
        95% {
            clip: rect(27px, 9999px, 30px, 0);
        }
        100% {
            clip: rect(58px, 9999px, 73px, 0);
        }
    }

    @keyframes glitch-effect {
        0% {
            clip: rect(65px, 9999px, 48px, 0);
        }
        5% {
            clip: rect(45px, 9999px, 14px, 0);
        }
        10% {
            clip: rect(46px, 9999px, 100px, 0);
        }
        15% {
            clip: rect(91px, 9999px, 97px, 0);
        }
        20% {
            clip: rect(89px, 9999px, 20px, 0);
        }
        25% {
            clip: rect(90px, 9999px, 92px, 0);
        }
        30% {
            clip: rect(7px, 9999px, 32px, 0);
        }
        35% {
            clip: rect(16px, 9999px, 78px, 0);
        }
        40% {
            clip: rect(10px, 9999px, 20px, 0);
        }
        45% {
            clip: rect(44px, 9999px, 24px, 0);
        }
        50% {
            clip: rect(43px, 9999px, 75px, 0);
        }
        55% {
            clip: rect(58px, 9999px, 87px, 0);
        }
        60% {
            clip: rect(67px, 9999px, 88px, 0);
        }
        65% {
            clip: rect(47px, 9999px, 61px, 0);
        }
        70% {
            clip: rect(69px, 9999px, 58px, 0);
        }
        75% {
            clip: rect(22px, 9999px, 20px, 0);
        }
        80% {
            clip: rect(75px, 9999px, 33px, 0);
        }
        85% {
            clip: rect(52px, 9999px, 61px, 0);
        }
        90% {
            clip: rect(12px, 9999px, 89px, 0);
        }
        95% {
            clip: rect(27px, 9999px, 30px, 0);
        }
        100% {
            clip: rect(58px, 9999px, 73px, 0);
        }
    }
</style>
