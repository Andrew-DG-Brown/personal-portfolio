/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: "440px",

      sm: "540px",

      md: "720px",

      lg: "960px",

      xl: "1140px",

      "2xl": "1320px",
      "3xl": "1500px",
      "4xl": "1680px",
      "5xl": "1920px",

    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: "#090E34",
        dark: "#1D2144",
        primary: "#4A6CF7",
        yellow: "#FBB040",
        "body-color": "#959CB1",
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        image: "0px 3px 30px rgba(9, 14, 52, 0.1)",
        pricing: "0px 34px 68px rgba(0, 0, 0, 0.06)",
        testimonial: "0px 8px 40px -10px rgba(9, 14, 52, 0.1)",
        service: "0px 11px 41px -11px rgba(9, 14, 52, 0.1)",
        blog: "0px 40px 150px -35px rgba(0, 0, 0, 0.05)",
        carousel: 'inset 30px 0 15px -10px #ffffff, inset -30px 0 15px -10px #ffffff'
      },
      zIndex: {
        "-1": -1,
      },
    },
  },
  plugins: [],
}

