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
        class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs "
    >
        {event.name}
    </th>
    <td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
        {printable_date}
    </td>
    <td class="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
        <div class="flex items-center">
            <span class="mr-2">
                <InfoBadge text="{event.is_physical ? 'Physical' : 'Virtual'}" />
            </span>
        </div>
    </td>
</tr>
