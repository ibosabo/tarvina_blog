/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      mainColor:'#e27c54',
      headTextColor:'#ffffff',
      black: '#000000'
    },
    extend: {
      // fontFamily: {
      //   jersey: ['Jersey 25', 'sans-serif'], // sans-serif tipinde Roboto fontu ekleniyor
      //   opensans: ['Open Sans', 'sans-serif'] // sans-serif tipinde Open Sans fontu ekleniyor
      // },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
