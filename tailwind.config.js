/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
     boxShadow:{
"shadow": "4px 4px 10px rgba(59, 130, 246, 0.3)"

    }
    },
  },
  plugins: [],
}

