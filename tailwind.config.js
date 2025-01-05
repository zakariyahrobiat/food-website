/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
     boxShadow:{
      "shadow": "2px 2px 4px #3b82f6"
    }
    },
  },
  plugins: [],
}

