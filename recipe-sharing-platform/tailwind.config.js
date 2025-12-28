/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // root index.html
    "./public/index.html", // public HTML file (ALX check requirement)
    "./src/**/*.{js,jsx,ts,tsx}", // all JS/JSX/TSX files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
