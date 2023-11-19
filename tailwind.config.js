/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        128: "32rem",
        160: "40rem",
        192: "48rem",
        224: "56rem",
        256: "64rem",
        288: "72rem",
        320: "80rem",
      },
      width: {
        128: "32rem",
        160: "40rem",
        192: "48rem",
        224: "56rem",
        256: "64rem",
        288: "72rem",
        320: "80rem",
      },
    },
  },
  corePlugins: {
    // enable margin utilities for the new layer
    margin: true,
    width: true,
  },
  plugins: [],
};
