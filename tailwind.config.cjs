const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    corePlugins: {
        preflight: true,
    },
    theme: {
        extend: {},
        container: {
            center: true,
        },
    },
    prefix: 'tw-',
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('daisyui'),
        require('tailwind-scrollbar-hide'),
    ],
};

module.exports = config;
