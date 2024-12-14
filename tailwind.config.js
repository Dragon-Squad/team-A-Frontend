/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#FF7400",
        "primary-midnight-blue": "#384959",
        "primary-sky-blue": "#88BDF2",
        "primary-pale-blue": "#BDDDFC",
        "primary-steel-blue": "#6A89A7",
        "secondary-soft-green": "#BADBA2",
        "secondary-coral-pink": "#E39A7B",
        "secondary-peach": "#FFD3AC",
        "secondary-golden-sand": "#DBB06B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        "small-mobile": { min: "320px", max: "526px" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
