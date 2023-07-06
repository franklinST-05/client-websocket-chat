/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/partials/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/partials/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#96f",
        "success":"#6f9",
        "danger":"#f66",
        "container":"#42464f",
        "wrapper":"#52565f",
        "app":"#202329",
      },
      zIndex: {
        "view": "1000",
      }
    },
  },
  plugins: [],
};
