/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#131926',
        lilac: '#6C61D0',
        'dark-blue': '#1B1F29',
        'purple-gray': {
          300: '#3E4250',
          400: '#292D3A',
          500: '#242731',
        },
        'light-gray': '#67717C',
        'dark-gray': '#2F323B',
      },
    },
  },
  plugins: [],
}
