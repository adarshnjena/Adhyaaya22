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
<a href="/dashboard/registration/{registration.registration_id}/view">
<tr class="tw-hover tw-text-xs">
    <th class="tw-bg-opacity-[75%] tw-backdrop-blur">{event_name_mapping[registration.event_code]}</th>
    <td class="tw-bg-opacity-[75%] tw-backdrop-blur">{get_event_date(registration.event_code)}</td>
    <td class="tw-bg-opacity-[75%] tw-backdrop-blur">
        {#if registration.transaction_status === 'PAID'}
            <InfoBadge text="{'Registered'}" />
        {:else}
            <WarningBadge text="{'Payment Failed'}" />
        {/if}
    </td>
    <td class="tw-bg-opacity-[75%] tw-backdrop-blur">
        <span class="tw-btn tw-btn-info tw-btn-sm" >
            VIEW
        </span>
    </td>
</tr>
</a>