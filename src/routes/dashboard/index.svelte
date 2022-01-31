<script>
    import Footer from '$lib/Footer.svelte';
    import TaskSummaryTable from '$lib/dashboard/TaskSummaryTable.svelte';
    import SimpleStat from '$lib/dashboard/SimpleStats.svelte';
    import InfoTable from '$lib/dashboard/InfoTable.svelte';
    import shareIcon from '@iconify-icons/ic/share.js';
    import DashboardProfile from '$lib/dashboard/dashboardProfileSettings.svelte';
    import DashboardContact from '$lib/dashboard/dashboardContact.svelte';

    // Logic here is to integrate firebase into the project.
</script>

<div class="h-full ">
    <div class="md:px-16 px-2 mx-auto md:w-5/6 w-full mt-18">
        <div class="w-full">
            <!--Stats Row-->
            <div class="flex flex-wrap  mt-4">
                <SimpleStat
                    title="CA Code"
                    value="78729"
                    positive={true}
                    subtitle="Use this code to refer others."
                    icon={shareIcon}
                />
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
            <div class="flex flex-wrap mt-4">
                <DashboardProfile />
                <DashboardContact />
            </div>
        </div>
    </div>
    <Footer />
</div>
