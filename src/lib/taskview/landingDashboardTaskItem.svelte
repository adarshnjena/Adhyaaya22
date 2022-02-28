<script lang="ts">
    import InfoBadge from '$lib/infoBadge.svelte';
    import type { registrationDetails } from '$lib/types/registrationDetails';
    import { get_event_date, event_name_mapping } from '$lib/firebase/registrationDetails';
    import WarningBadge from '$lib/warningBadge.svelte';
    export let registration: registrationDetails;
    //export let completed = false;
    /*
    let date = new Date(0);
    date.setTime(registration?.end_date * 1000);
    let printable_date =
        date.toLocaleDateString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' }) +
        ' ' +
        date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
    console.log('completed', completed);
    */
</script>

<tr>
    <th
        class="tw-whitespace-nowrap tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-p-4 tw-px-6 tw-text-left tw-align-middle tw-text-xs "
    >
        {event_name_mapping[registration.event_code]}
    </th>
    <td
        class="tw-whitespace-nowrap tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-p-4 tw-px-6 tw-align-middle tw-text-xs"
    >
        {get_event_date(registration.event_code)}
    </td>
    <td
        class="tw-whitespace-nowrap tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-p-4 tw-px-6 tw-align-middle tw-text-xs"
    >
        <div class="tw-flex tw-items-center">
            <span class="tw-mr-2">
                {#if registration.transaction_status === 'PAID'}
                    <InfoBadge text="{'Registered'}" />
                {:else}
                    <WarningBadge text="{'Payment Failed'}" />
                {/if}
            </span>
        </div>
    </td>
    <td
        class="tw-whitespace-nowrap tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-p-4 tw-px-6 tw-align-middle tw-text-xs "
    >
        <a
            class="tw-btn tw-btn-primary tw-btn-sm"
            href="/dashboard/registration/{registration.registration_id}/view"
        >
            VIEW
        </a>
    </td>
</tr>
