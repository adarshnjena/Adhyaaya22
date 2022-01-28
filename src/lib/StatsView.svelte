<script>
import Icon from "@iconify/svelte/dist/OfflineIcon.svelte";
import outlineIosShare from "@iconify-icons/ic/outline-ios-share";
</script>
<div class="min-w-max m-4 shadow stats">
    <div class="stat bg-base-200">
        <div class="stat-figure text-primary">
            <Icon class="inline-block w-8 h-8 stroke-current" icon={outlineIosShare} />
        </div>
        <div class="stat-title">Refferal Code</div>
        <div class="stat-value text-primary mr-4">7787</div>
        <a href="/faq?topic=ca-code" class="link hover:text-primary stat-desc">Know More Here</a>
    </div>
    <div class="stat bg-base-200">
        <div class="stat-figure text-info">
            <Icon class="inline-block w-8 h-8 stroke-current" icon={outlineIosShare} />
        </div>
        <div class="stat-title">Page Views</div>
        <div class="stat-value text-info">2.6M</div>
        <div class="stat-desc">21% more than last month</div>
    </div>
    <div class="stat bg-base-200">
        <div class="stat-figure text-info">
            <div class="avatar online">
                <div class="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                    <img src="/warning.png" class="mask mask-squircle" alt="warning">
                </div>
            </div>
        </div>
        <div class="stat-value">86%</div>
        <div class="stat-title">Tasks done</div>
        <div class="stat-desc text-info">31 tasks remaining</div>
    </div>
</div>
