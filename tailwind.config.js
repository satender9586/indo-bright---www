/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        slab: ['var(--font-roboto-slab)'],
      },
      colors: {
        // // MILITARY THEME
        // primary: "#254B45",
        // secondary: "#E6F0EC",

        // // INDIGO THEME 
        // primary: "rgb(30 58 138)",
        // secondary: "rgb(239 246 255)",

        // INDO BRIGHT THEME
        primary: "#363F99",
        secondary: "rgb(239 246 255)",
      },
    },
  },
  plugins: [],
};
