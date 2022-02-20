<script>
    import InfoBadge from '$lib/infoBadge.svelte';

    export let event = {
        name: 'Event Name @ GCOEN',
        date: 1644611483,
        is_physical: true,
    };

    let date = new Date(0);
    date.setTime(event?.date * 1000);
    let printable_date =
        date.toLocaleDateString('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' }) +
        ' ' +
        date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
</script>

<tr>
    <th
        class="tw-whitespace-nowrap tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-p-4 tw-px-6 tw-text-left tw-align-middle tw-text-xs "
    >
        {event.name}
    </th>
    <td
        class="tw-whitespace-nowrap tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-p-4 tw-px-6 tw-align-middle tw-text-xs"
    >
        {printable_date}
    </td>
    <td
        class="tw-whitespace-nowrap tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-p-4 tw-px-6 tw-align-middle tw-text-xs"
    >
        <div class="tw-flex tw-items-center">
            <span class="tw-mr-2">
                <InfoBadge text="{event.is_physical ? 'Physical' : 'Virtual'}" />
            </span>
        </div>
    </td>
</tr>
