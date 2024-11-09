/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-midnight-blue": "#384959",
        "primary-sky-blue": "#88BDF2",
        "primary-pale-blue": "#BDDDFC",
        "primary-steel-blue": "#6A89A7",
        "secondary-soft-green": "#BADBA2",
        "secondary-coral-pink": "#E39A7B",
        "secondary-peach": "#FFD3AC",
        "secondary-golden-sand": "#DBB06B",
      },
    },
  },
  plugins: [],
};
