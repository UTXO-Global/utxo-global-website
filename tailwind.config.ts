import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          100: "#FF7201",
        },
        dark: {
          100: "#0D0D0D",
          200: "#141414",
          300: "#2C2C2C"
        },
        light: {
          100: "#FFFFFF",
        },
        grey: {
          100: "#F4F4F4",
          200: "#787575",
          300: "#ABA8A1",
          400: "#BDBDBD",
        },
        success: {
          100: "#09C148",
        },
        info: {
          100: "#004CE8",
        },
        warning: {
          100: "#F2B137",
        },
        error: {
          100: "#FF3333",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
