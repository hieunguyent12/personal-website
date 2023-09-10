/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "730px",
        lg: "730px",
        xl: "730px",
      },
    },
    extend: {},
  },
  plugins: [],
};
