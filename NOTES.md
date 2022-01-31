# NOTES

-   [HyperUI](https://hyperui.dev/)
-   [DaisyUI](https://daisyui.com/)

## Icons

Use as follows

```svelte
<script>
    import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
    import icon_data from '@iconify-icons/ic/round-login';
</script>

<Icon icon={icon_data} />
```

- for cross use ic:round-close
- for tick use ic:round-check
- for info use ic:round-info

## Other Stuff

Investigate `https://www.instagram.com/instagram/?__a=1`
Investigate this

```js
// for CA Code ?
// https://stackoverflow.com/a/35821359
parseInt('A6HJ92B', 36); // 22160072099
(22160072099).toString(36).toUpperCase(); // "A6HJ92B"
```

## Authentication 

- `https://phptuts.github.io/svelte-docs/firebase-recipe-site/login/`