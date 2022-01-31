<div class="flex flex-wrap mt-4">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700"
        >
            <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div class="flex flex-wrap items-center">
                    <div class="relative w-full max-w-full flex-grow flex-1">
                        <h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                            Overview
                        </h6>
                        <h2 class="text-white text-xl font-semibold">Sales value</h2>
                    </div>
                </div>
            </div>
            <div class="p-4 flex-auto">
                <div class="relative h-[350px]">
                    <div class="chartjs-size-monitor">
                        <div class="chartjs-size-monitor-expand"><div class="" /></div>
                        <div class="chartjs-size-monitor-shrink"><div class="" /></div>
                    </div>
                    <canvas
                        id="line-chart"
                        style="display: block; width: 981px; height: 350px;"
                        width="981"
                        height="350"
                        class="chartjs-render-monitor"
                    />
                </div>
            </div>
        </div>
    </div>
    <div class="w-full xl:w-4/12 px-4">
        <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
        >
            <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div class="flex flex-wrap items-center">
                    <div class="relative w-full max-w-full flex-grow flex-1">
                        <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                            Performance
                        </h6>
                        <h2 class="text-blueGray-700 text-xl font-semibold">
                            Total orders
                        </h2>
                    </div>
                </div>
            </div>
            <div class="p-4 flex-auto">
                <div class="relative h-350-px">
                    <div class="chartjs-size-monitor">
                        <div class="chartjs-size-monitor-expand"><div class="" /></div>
                        <div class="chartjs-size-monitor-shrink"><div class="" /></div>
                    </div>
                    <canvas
                        id="bar-chart"
                        style="display: block; width: 458px; height: 350px;"
                        width="458"
                        height="350"
                        class="chartjs-render-monitor"
                    />
                </div>
            </div>
        </div>
    </div>
</div>