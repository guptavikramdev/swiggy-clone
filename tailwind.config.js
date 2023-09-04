/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      size: {
        xs: 480,
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-color": "#fc8019",
        "secondary-color": "#60b246",
      },
      shadow: {
        "box-shadow": "0 15px 40px -20px rgba(40,44,63,.15)",
      },
    },
  },
  plugins: [],
};
