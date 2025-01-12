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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
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
        "small-mobile": {
          min: "320px",
          max: "526px",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
