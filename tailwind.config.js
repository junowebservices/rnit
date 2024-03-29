/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      backgroundImage: {
        "values-bg": "url('/images/bg/values-bg.png')",
        "pattern-1": "url('/images/bg/pattern-1.png')",
        "pattern-2": "url('/images/bg/pattern-2.png')",
        "pattern-3": "url('/images/bg/pattern-3.png')",
        "pattern-4": "url('/images/bg/pattern-4.png')",
      },
      colors: {
        black: "#232323",
        main: {
          light: "#217fb8",
          DEFAULT: "#0972b1",
          dark: "#076095",
        },
        secondary: "#fd830d",
        secondaryDark: "#fd660d",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans"],
        Lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
