
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7f1d1d', // red-900
        secondary: '#991b1b', // red-800
        accent: '#166534', // green-800
      },
      backgroundImage: theme => ({
        'smoke-radial': "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.05) 100%)",
        'smoke-top': "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0))",
      })
    },
  },
  plugins: [],
}
