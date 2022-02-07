<script>
    import InfoBadge from "$lib/infoBadge.svelte";
    import WarningBadge from "$lib/warningBadge.svelte";

    export let event = {
        title: 'Event Name @ TIME',
        date: 'MM-DD-YYYY',
        presence: 'Virtual'
    }
</script>

<tr>
    <th
        class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
    >
        {event.title}
    </th>
    <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
        {event.date}
    </td>
    <td class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
        <div class="flex items-center">
            <span class="mr-2">
                <InfoBadge text={event.presence}/>
            </span>
        </div>
    </td>
</tr>
