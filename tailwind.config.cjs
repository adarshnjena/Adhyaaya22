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
    ],
};

module.exports = config;
