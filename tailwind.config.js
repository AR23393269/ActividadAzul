/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00BCD4',
          dark: '#00ACC1',
        },
        secondary: {
          DEFAULT: '#f5f5f5',
          dark: '#e0e0e0',
        }
      }
    },
  },
  plugins: [],
}

