/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        blacky: "rgb(7, 7, 7)",
        blacky1: "rgb(77, 77, 77)",
        blacky2: "rgb(138, 138, 138)",
        blacky3: "rgb(12, 12, 12)",
        blacky4: "rgb(211, 211, 211)",
        blacky5: "rgb(138, 138, 138)",
        blacky6: "rgb(23 23 23)",
        blacky7: "#020817",
        gray1: "#9b9a97",
        bluey1: "rgba(59, 130, 246, .5)",
        bluey2: "rgb(37 99 235)",
        border1:"#e5e7eb",

        yellowish: "#eaf69a",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
