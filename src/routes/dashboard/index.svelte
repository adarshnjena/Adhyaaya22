<script>
    import Footer from '$lib/Footer.svelte';
    import TaskSummaryTable from '$lib/TaskSummaryTable.svelte';
    import SimpleStat from '$lib/SimpleStats.svelte';
    import InfoTable from '$lib/InfoTable.svelte';
</script>

<div class="h-full">
    <div class="md:px-16 px-2 mx-auto md:w-5/6 w-full mt-18">
        <div class="w-full">
            <!--Stats Row-->
            <div class="flex flex-wrap  mt-4">
                <SimpleStat />
                <SimpleStat />
                <SimpleStat />
                <SimpleStat />
            </div>
            <!-- Level 0 -->
            <!-- Level 1 -->
            <div class="flex flex-wrap mt-4">
                <TaskSummaryTable />
                <InfoTable />
            </div>
        </div>
    </div>
    <Footer />
</div>
