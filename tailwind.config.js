/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spin: {
          "0%": { rotate: "0 deg"},       
          "100%": { rotate: "360 deg"},             
        },
      },
      animation: {
        spin: "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};
