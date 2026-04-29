/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            50: "#eef4f8",
            100: "#d6e4ee",
            200: "#adc9dd",
            300: "#85aecd",
            400: "#5c93bc",
            500: "#174674", // main
            600: "#133c63",
            700: "#0f3252",
            800: "#0b2841",
            900: "#071e30",
          },
          accent: {
            50: "#faf6ed",
            100: "#f2e6c8",
            200: "#e6d199",
            300: "#dcbc6b",
            400: "#d1a63d",
            500: "#C99B49", // main
            600: "#a67f3a",
            700: "#83632c",
            800: "#60471f",
            900: "#3d2c12",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
