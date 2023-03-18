/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#60a5fa",

          secondary: "#a6e9ea",

          accent: "#aefca9",

          neutral: "#191919",
          "base-100": "#F5F4F6",

          info: "#338DD1",

          success: "#24C273",

          warning: "#F2D073",

          error: "#E04D61",
        },
      },
      {
        dark: {
          primary: "#86efac",

          secondary: "#8af7e5",

          accent: "#ffc6d1",

          neutral: "#2D2432",

          "base-100": "#293747",

          info: "#89BEF0",

          success: "#60E1D0",

          warning: "#CB9E15",

          error: "#FA6187",
        },
      },
    ],
  },
};
