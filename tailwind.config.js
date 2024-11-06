/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{html,js,jsx,ts,tsx}', // Adjust this path as needed
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#8BBA87',
        customDarkGreen: '#2E4F13',
      },
    },
  },
}