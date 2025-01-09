/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
     boxShadow:{
      "shadow": "1px 1px 2px #3b82f6"
    }
    },
  },
  plugins: [],
}

