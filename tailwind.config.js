/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "base-primary": "#953E46",
        "base-yellow": "#F4E3CF",
        "base-yellow-secondary": "#F4E3CF8F",
        "base-black-transparent": "rgb(0 0 0 / 55%)",
        "base-brown": "#323232",
        "base-gray": "#CCCCCC",
        "base-orange": "#F39C12",
      },
    },
  },
  plugins: [],
};
