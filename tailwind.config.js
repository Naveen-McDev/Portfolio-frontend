/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#F97316",
        tertiary: "#54D6BB",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
     

      xl: { max: "1279px" },
      

      lg: { max: "1023px" },
     

      md: { max: "767px" },
     

      sm: { max: "639px" },
      
    },
  },
  plugins: [],
};
