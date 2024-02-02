/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unna: ["Unna", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#28036d",
        secondary: "#1a00a9",
        white: "#fff",
        success: "#38a169",
        info: "#3182ce",
        warning: "#f6993f",
        error: "#e53e3e",
        danger: "#dc2626",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        lg: "16px",
        xl: "18px",
        "2xl": "20px",
        "3xl": "22px",
        "4xl": "24px",
        "5xl": "26px",
        "6xl": "28px",
      },
    },
  },
  variants: {},
  plugins: [],
};
