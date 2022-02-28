<script lang="ts">
    import { teamMemberDetail } from '$lib/types/registrationDetails';

    export let key;
    export let value: Array<teamMemberDetail> | string;
    let _value: string = '';
    if (typeof value === 'object') {
        for (let i = 0; i < value.length; i++) {
            _value += `${value[i].name} | ${value[i].email} | ${value[i].phone} <br />`;
        }
    }
    function to_title_case(str: string) {
        str = str.replace('_', ' ');
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
</script>

<tr>
    <th
        class="tw-whitespace-nowrap tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-p-4 tw-px-6 tw-text-left tw-align-middle tw-text-xs "
    >
        {to_title_case(key)}
    </th>
    <td
        class="tw-whitespace-nowrap tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-p-4 tw-px-6 tw-text-left tw-align-middle tw-text-xs"
    >
        {#if typeof value === 'object'}
            {@html _value}
        {:else}
            {value}
        {/if}
    </td>
</tr>
