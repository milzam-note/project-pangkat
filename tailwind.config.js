import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        // colors: {
        //     'custom-beige' :'#EBEBD3',
        //     'custom-body' :'#F1F4F5',
        //     'custom-yale-blue' : '#083D77',
        //     'custom-naples-yellow' : '#3F37C9',
        //     'custom-sandy-brown' : '#EE964B',
        //     'custom-tomato' : '#F95738',
        //   },
    },
    plugins: [],
};
