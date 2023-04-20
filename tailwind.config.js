/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        linear: "rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
