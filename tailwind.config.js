/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue-1": "hsl(217, 28%, 15%)",
        "dark-blue-2": "hsl(218, 28%, 13%)",
        "dark-blue-3": "hsl(216, 53%, 9%)",
        "dark-blue-4": "hsl(219, 30%, 18%)",
        "cyan-1": "hsl(176, 68%, 64%)",
        "blue-1": "hsl(198, 60%, 50%)",
        "light-red": "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
