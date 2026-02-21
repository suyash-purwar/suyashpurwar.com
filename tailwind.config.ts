/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--primary-font)', 'sans-serif'],
                serif: ['var(--secondary-font)', 'serif'],
            },
        }
    }
}