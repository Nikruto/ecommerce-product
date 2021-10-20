module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: "#FF7D1A",
        paleOrange: "#FFEDE0",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "Segoe UI", "Arial"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
