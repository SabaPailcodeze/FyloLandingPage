/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
        nunito: ['"Nunito Sans"', "sans-serif"],
      },
      backgroundImage: {
        background: "url('/src/assets/background.svg')",
      },
      boxShadow: {
        "custom-shadow": "0px 0px 10px 5px rgba(56, 56, 56, 0.05)",
      },
      dropShadow: {
        customDropShadow: "2px 3px 6px rgba(7, 4, 59, 0.16)",
      },
    },
  },
  plugins: [],
};
