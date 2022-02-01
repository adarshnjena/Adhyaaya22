const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {},
        container: {
            center: true,
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('daisyui'),
        require('tailwind-scrollbar-hide'),
    ],
};

module.exports = config;
