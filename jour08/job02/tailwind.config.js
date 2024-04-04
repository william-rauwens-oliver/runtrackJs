/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        purple: {
          '50': '#f5e6ff',
          '100': '#d6b0ff',
          '200': '#b281ff',
          '300': '#9447ff',
          '400': '#8719ff',
          '500': '#7a0fff',
          '600': '#7100e6',
          '700': '#5e00b4',
          '800': '#4c0082',
          '900': '#3e0066',
        },
      },
    },
  },
  plugins: [],
}
