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
    screens: {
      xxs: "200px",
      // => @media (min-width: 200px) { ... }

      xs: "350px",
      // => @media (min-width: 350px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg_custom: "1120px",
      // => @media (min-width: 1120px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
