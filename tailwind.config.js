/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "base-black": "#1E1E1E",
        "base-brown": "#323232",
        "base-gray": "#CCCCCC",
        "base-orange": "#F39C12",
      },
    },
  },
  plugins: [],
};
