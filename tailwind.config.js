/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      screens: {
        xs: "320px",
        ss: "375px",
        bp: "425px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      fontSize: {
        100: ["0.65rem", {
          lineHeight: "0.8rem",
          fontWeight: "100",
        }],
        200: ["0.75rem", {
          lineHeight: "1rem",
          fontWeight: "200",
        }],
        300: ["0.8125rem", {
          lineHeight: "1.25rem",
          fontWeight: "300",
        }],
        400: ["0.9375rem", {
          lineHeight: "1.25rem",
          fontWeight: "400",
        }],
        500: ["1rem", {
          lineHeight: "1.275rem",
          fontWeight: "500",
        }],
        600: ["1.125rem", {
          lineHeight: "1.5rem",
          fontWeight: "600",
        }],
        700:["1.25rem", {
          lineHeight: "1.625rem",
          fontWeight: "700",
        }],
        800:["1.375rem", {
          lineHeight: "1.75rem",
          fontWeight: "800",
        }],
        900:["1.5rem", {
          lineHeight: "2rem",
          fontWeight: "900",
        }],
      },
    },
  },
  plugins: [],
}

